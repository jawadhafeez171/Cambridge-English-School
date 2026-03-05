"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { submitToGoogleSheets } from "@/app/actions/submitForm";

export default function ContactForm() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("submitting");

        const formElement = e.currentTarget;
        const formData = new FormData();

        // Map form fields to FormData
        formData.append("name", (formElement.elements.namedItem("name") as HTMLInputElement).value);
        formData.append("phone", (formElement.elements.namedItem("phone") as HTMLInputElement).value);
        formData.append("email", (formElement.elements.namedItem("email") as HTMLInputElement).value);
        formData.append("subject", (formElement.elements.namedItem("subject") as HTMLSelectElement).value);
        formData.append("message", (formElement.elements.namedItem("message") as HTMLTextAreaElement).value);

        const result = await submitToGoogleSheets("Contact", formData);

        if (result.success) {
            setStatus("success");
            setMessage(result.message);
            formElement.reset();
        } else {
            setStatus("error");
            setMessage(result.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5">Your Name <span className="text-red-500">*</span></label>
                    <input type="text" id="name" name="name" required className="w-full px-4 py-3 border border-border-light rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-gray-50 focus:bg-white text-sm" placeholder="Full Name" disabled={status === "submitting"} />
                </div>
                <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number <span className="text-red-500">*</span></label>
                    <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 border border-border-light rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-gray-50 focus:bg-white text-sm" placeholder="+91 00000 00000" disabled={status === "submitting"} />
                </div>
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
                <input type="email" id="email" name="email" className="w-full px-4 py-3 border border-border-light rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-gray-50 focus:bg-white text-sm" placeholder="you@example.com" disabled={status === "submitting"} />
            </div>
            <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-1.5">Subject <span className="text-red-500">*</span></label>
                <select id="subject" name="subject" required className="w-full px-4 py-3 border border-border-light rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none bg-gray-50 focus:bg-white text-gray-700 text-sm" disabled={status === "submitting"}>
                    <option value="">Select a subject...</option>
                    <option value="admission">Admission Enquiry</option>
                    <option value="fees">Fee Structure Inquiry</option>
                    <option value="visit">Schedule Campus Visit</option>
                    <option value="career">Career / Teaching Opportunity</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1.5">Message <span className="text-red-500">*</span></label>
                <textarea id="message" name="message" required rows={4} className="w-full px-4 py-3 border border-border-light rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-gray-50 focus:bg-white resize-none text-sm" placeholder="How can we help you?" disabled={status === "submitting"} />
            </div>
            <button type="submit" disabled={status === "submitting"} className="w-full bg-primary hover:bg-primary-light text-white font-bold py-4 px-6 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed">
                {status === "submitting" ? "Sending..." : "Send Message"}
                {!status && <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
            </button>
        </form>
    );
}
