"use client";

import { useState } from "react";
import { submitToGoogleSheets } from "@/actions/submitForm";

export default function AdmissionsForm() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("submitting");

        const formElement = e.currentTarget;
        const formData = new FormData();

        // Map form fields to FormData
        formData.append("name", (formElement.elements.namedItem("parentName") as HTMLInputElement).value);
        formData.append("phone", (formElement.elements.namedItem("phoneNumber") as HTMLInputElement).value);
        formData.append("studentName", (formElement.elements.namedItem("studentName") as HTMLInputElement).value);
        formData.append("grade", (formElement.elements.namedItem("grade") as HTMLSelectElement).value);
        formData.append("message", (formElement.elements.namedItem("message") as HTMLTextAreaElement).value);

        // Add subject for consistency with Contact form in spreadsheet
        formData.append("subject", "Admission Enquiry");

        const result = await submitToGoogleSheets("AdmissionsEnquiry", formData);

        if (result.success) {
            setStatus("success");
            setMessage("Thank you! Your enquiry has been received. Our admissions office will contact you within 24 working hours.");
            formElement.reset();
        } else {
            setStatus("error");
            setMessage(result.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {status === "success" && (
                <div className="bg-emerald-50 text-emerald-700 p-4 rounded-xl text-sm font-semibold border border-emerald-100">
                    {message}
                </div>
            )}
            {status === "error" && (
                <div className="bg-red-50 text-red-700 p-4 rounded-xl text-sm font-semibold border border-red-100">
                    {message}
                </div>
            )}
            <div>
                <label htmlFor="parentName" className="block text-xs font-semibold text-gray-700 mb-1">Parent&apos;s Name *</label>
                <input type="text" id="parentName" name="parentName" required className="w-full px-4 py-2.5 border border-border-light rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm bg-gray-50 focus:bg-white" placeholder="Full Name" disabled={status === "submitting"} />
            </div>
            <div>
                <label htmlFor="phoneNumber" className="block text-xs font-semibold text-gray-700 mb-1">Mobile Number *</label>
                <input type="tel" id="phoneNumber" name="phoneNumber" required className="w-full px-4 py-2.5 border border-border-light rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm bg-gray-50 focus:bg-white" placeholder="+91 00000 00000" disabled={status === "submitting"} />
            </div>
            <div className="grid grid-cols-2 gap-3">
                <div>
                    <label htmlFor="studentName" className="block text-xs font-semibold text-gray-700 mb-1">Student&apos;s Name</label>
                    <input type="text" id="studentName" name="studentName" className="w-full px-4 py-2.5 border border-border-light rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm bg-gray-50 focus:bg-white" placeholder="Full Name" disabled={status === "submitting"} />
                </div>
                <div>
                    <label htmlFor="grade" className="block text-xs font-semibold text-gray-700 mb-1">Grade Seeking *</label>
                    <select id="grade" name="grade" required className="w-full px-4 py-2.5 border border-border-light rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none bg-gray-50 focus:bg-white text-sm" disabled={status === "submitting"}>
                        <option value="">Select</option>
                        <option value="pre-nursery">Pre-Nursery</option>
                        <option value="nursery">Nursery</option>
                        <option value="lkg">LKG</option>
                        <option value="ukg">UKG</option>
                        <option value="1">1st STD</option>
                        <option value="2">2nd STD</option>
                        <option value="3">3rd STD</option>
                        <option value="4">4th STD</option>
                        <option value="5">5th STD</option>
                        <option value="6">6th STD</option>
                        <option value="7">7th STD</option>
                        <option value="8">8th STD</option>
                        <option value="9">9th STD</option>
                        <option value="10">10th STD</option>
                    </select>
                </div>
            </div>
            <div>
                <label htmlFor="message" className="block text-xs font-semibold text-gray-700 mb-1">Additional Queries</label>
                <textarea id="message" name="message" rows={3} className="w-full px-4 py-2.5 border border-border-light rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none text-sm bg-gray-50 focus:bg-white" placeholder="How can we help you?" disabled={status === "submitting"} />
            </div>
            <button type="submit" disabled={status === "submitting"} className="w-full bg-primary hover:bg-primary-light text-white font-bold py-3 px-4 rounded-xl transition-all shadow-sm hover:shadow-md disabled:opacity-70 disabled:cursor-not-allowed">
                {status === "submitting" ? "Submitting..." : "Submit Enquiry"}
            </button>
            <p className="text-xs text-gray-400 text-center">Our admissions office will contact you within 24 working hours.</p>
        </form>
    );
}
