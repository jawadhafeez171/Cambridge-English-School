import { FileText, ClipboardList, CheckCircle, Download, HelpCircle, FileCheck, IndianRupee } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Admissions & Fees | Cambridge English School Doddaballapur",
    description: "Learn about the admission process, eligibility criteria, required documents, and our affordable fee structure.",
};

export default function Admissions() {
    return (
        <div className="flex flex-col min-h-screen bg-accent-bg">
            {/* Header */}
            <section className="relative bg-primary text-white py-20 md:py-28 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary-light/80" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <p className="text-secondary-light font-semibold text-xs tracking-[0.2em] uppercase mb-4">Join Our School</p>
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Admissions</h1>
                    <div className="h-[2px] w-16 bg-secondary mx-auto mb-6" />
                    <p className="text-blue-100/80 max-w-xl mx-auto text-lg">
                        Simple, transparent, and merit-based admission process for Pre-Nursery to 5th STD.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex flex-col lg:flex-row gap-10">

                    {/* Left Column */}
                    <div className="lg:w-2/3 space-y-8">

                        {/* Step-by-Step Process */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-border-light">
                            <h2 className="font-serif text-2xl font-bold text-primary mb-8 flex items-center gap-3">
                                <ClipboardList className="text-secondary" size={22} />
                                Admission Process
                            </h2>
                            <div className="relative border-l-2 border-accent-bg ml-4 space-y-8 pb-2">
                                {[
                                    { step: "1", title: "Enquiry & Counseling", body: "Visit the school office or submit an online enquiry. Our team will guide you through the school's philosophy, facilities, and fee structure." },
                                    { step: "2", title: "Application Submission", body: "Submit the filled application form to the school office along with verified relevant documents." },
                                    { step: "3", title: "Interaction / Assessment", body: "A brief interaction with the Principal to understand the child's readiness. For higher grades, a basic written assessment may be conducted." },
                                    { step: "4", title: "Admission Confirmation", body: "Upon successful interaction, admission is confirmed subject to the payment of the admission fee.", primary: true },
                                ].map(({ step, title, body, primary }) => (
                                    <div key={step} className="relative pl-8">
                                        <div className={`absolute left-[-29px] w-12 h-12 rounded-full border-4 border-accent-bg flex items-center justify-center font-bold ${primary ? "bg-primary text-white" : "bg-white text-primary border-border-light shadow-sm"}`}>
                                            {step}
                                        </div>
                                        <h3 className="font-serif font-bold text-gray-900 text-lg">{title}</h3>
                                        <p className="text-gray-500 text-sm mt-1 leading-relaxed">{body}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Fee Structure */}
                        <div className="bg-[#fffbf0] border border-amber-100 p-8 rounded-2xl">
                            <h2 className="font-serif text-2xl font-bold text-primary mb-3 flex items-center gap-3">
                                <IndianRupee className="text-secondary" size={22} />
                                Affordable Fee Structure
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-5">
                                At Cambridge English School, we believe quality education should be accessible to everyone. We maintain a <strong>highly affordable and transparent fee structure</strong> with absolutely no hidden charges.
                            </p>
                            <div className="bg-white p-4 rounded-xl border border-amber-100 flex items-start gap-4">
                                <CheckCircle className="text-secondary shrink-0 mt-0.5" size={18} />
                                <div>
                                    <h4 className="font-semibold text-gray-900 text-sm">Value for Education</h4>
                                    <p className="text-gray-500 text-sm mt-0.5">Our fees cover tuition, co-curricular activities, and library access. Fees can be paid in convenient installments.</p>
                                </div>
                            </div>
                        </div>

                        {/* Eligibility & Documents */}
                        <div className="grid md:grid-cols-2 gap-7">
                            <div className="bg-white p-7 rounded-2xl shadow-sm border border-border-light">
                                <h2 className="font-serif font-bold text-xl text-primary mb-5 flex items-center gap-2">
                                    <HelpCircle className="text-secondary" size={20} /> Eligibility
                                </h2>
                                <ul className="space-y-3.5">
                                    {[
                                        { label: "Pre-Nursery", val: "2.5 years complete as on May 31st." },
                                        { label: "Nursery", val: "3 years complete as on May 31st." },
                                        { label: "LKG", val: "4 years complete as on May 31st." },
                                        { label: "UKG", val: "5 years complete as on May 31st." },
                                        { label: "1st STD", val: "6 years complete as on May 31st." },
                                        { label: "Other Grades up to 5th STD", val: "Transfer Certificate from previous school." },
                                    ].map(({ label, val }) => (
                                        <li key={label} className="flex items-start gap-3">
                                            <CheckCircle className="text-secondary shrink-0 mt-0.5" size={15} />
                                            <span className="text-gray-600 text-sm"><strong>{label}:</strong> {val}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-white p-7 rounded-2xl shadow-sm border border-border-light">
                                <h2 className="font-serif font-bold text-xl text-primary mb-5 flex items-center gap-2">
                                    <FileCheck className="text-secondary" size={20} /> Required Documents
                                </h2>
                                <ul className="space-y-3.5">
                                    {[
                                        "Original Birth Certificate (for Pre-Primary & Grade 1)",
                                        "Original Transfer Certificate (for Grade 2 & above)",
                                        "Copy of Student's Aadhaar Card",
                                        "4 Passport size photographs",
                                        "Previous year's Marks Card / Report Card",
                                    ].map((doc) => (
                                        <li key={doc} className="flex items-start gap-3">
                                            <FileText className="text-gray-400 shrink-0 mt-0.5" size={15} />
                                            <span className="text-gray-600 text-sm">{doc}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="lg:w-1/3 space-y-7">
                        {/* Prospectus */}
                        <div className="bg-primary text-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full" />
                            <h3 className="font-serif text-xl font-bold mb-3">School Prospectus</h3>
                            <p className="text-blue-200/80 mb-7 text-sm">Download our complete school prospectus to learn more about our curriculum, faculty, and facilities.</p>
                            <a href="/prospectus.pdf" download className="w-full bg-secondary hover:bg-secondary-light text-white font-bold py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 group">
                                <Download size={18} className="group-hover:animate-bounce" /> Download PDF
                            </a>
                        </div>

                        {/* Enquiry Form */}
                        <div className="bg-white p-7 rounded-2xl shadow-sm border border-border-light">
                            <h3 className="font-serif text-xl font-bold text-gray-900 mb-6">Online Enquiry</h3>
                            <form className="space-y-4">
                                <div>
                                    <label htmlFor="parentName" className="block text-xs font-semibold text-gray-700 mb-1">Parent&apos;s Name *</label>
                                    <input type="text" id="parentName" required className="w-full px-4 py-2.5 border border-border-light rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm bg-gray-50 focus:bg-white" placeholder="Full Name" />
                                </div>
                                <div>
                                    <label htmlFor="phoneNumber" className="block text-xs font-semibold text-gray-700 mb-1">Mobile Number *</label>
                                    <input type="tel" id="phoneNumber" required className="w-full px-4 py-2.5 border border-border-light rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm bg-gray-50 focus:bg-white" placeholder="+91 00000 00000" />
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <label htmlFor="studentName" className="block text-xs font-semibold text-gray-700 mb-1">Student&apos;s Name</label>
                                        <input type="text" id="studentName" className="w-full px-4 py-2.5 border border-border-light rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm bg-gray-50 focus:bg-white" placeholder="Full Name" />
                                    </div>
                                    <div>
                                        <label htmlFor="grade" className="block text-xs font-semibold text-gray-700 mb-1">Grade Seeking *</label>
                                        <select id="grade" required className="w-full px-4 py-2.5 border border-border-light rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none bg-gray-50 focus:bg-white text-sm">
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
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-xs font-semibold text-gray-700 mb-1">Additional Queries</label>
                                    <textarea id="message" rows={3} className="w-full px-4 py-2.5 border border-border-light rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none text-sm bg-gray-50 focus:bg-white" placeholder="How can we help you?" />
                                </div>
                                <button type="button" className="w-full bg-primary hover:bg-primary-light text-white font-bold py-3 px-4 rounded-xl transition-all shadow-sm hover:shadow-md">
                                    Submit Enquiry
                                </button>
                                <p className="text-xs text-gray-400 text-center">Our admissions office will contact you within 24 working hours.</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
