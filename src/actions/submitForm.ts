"use server";

export async function submitToGoogleSheets(
    formType: "Contact" | "AdmissionsEnquiry",
    formData: FormData
) {
    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

    if (!webhookUrl) {
        console.error("GOOGLE_SHEETS_WEBHOOK_URL is not configured.");
        return { success: false, message: "Server configuration error. Please try again later." };
    }

    try {
        const payload: Record<string, string> = {
            formType,
        };

        // Convert FormData to a regular object
        formData.forEach((value, key) => {
            payload[key] = value.toString();
        });

        const response = await fetch(webhookUrl, {
            method: "POST",
            headers: {
                "Content-Type": "text/plain;charset=utf-8",
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            throw new Error(`Google Apps Script responded with status: ${response.status}`);
        }

        const data = await response.json();

        if (data.status === "success") {
            return { success: true, message: "Your message has been sent successfully!" };
        } else {
            console.error("Google Apps Script Error:", data.message);
            return { success: false, message: "We encountered an issue submitting your form. Please try again." };
        }

    } catch (error) {
        console.error("Error submitting form data:", error);
        return { success: false, message: "An unexpected error occurred. Please try again." };
    }
}
