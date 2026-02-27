import { FileText, ClipboardList, CheckCircle, Download, HelpCircle, FileCheck, IndianRupee } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Admissions & Fees | Cambridge English School Doddaballapur",
    description: "Learn about the admission process, eligibility criteria, required documents, and our affordable fee structure.",
};

export default function Admissions() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            {/* Page Header */}
            <section className="relative bg-gradient-to-r from-primary via-blue-900 to-primary-light text-white py-16 md:py-24 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/gallery/gallery-24.webp')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Admissions</h1>
                    <p className="text-blue-100 max-w-2xl mx-auto text-lg">
                        Join the Cambridge English School family. Simple, transparent, and merit-based admission process.
                    </p>
                </div>
            </section>

            {/* Main Content Area */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Left Column: Process, Eligibility, Documents */}
                    <div className="lg:w-2/3 space-y-12">

                        {/* Step-by-Step Process */}
                        <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-bold text-primary mb-8 flex items-center">
                                <ClipboardList className="mr-3 text-secondary" />
                                Admission Process
                            </h2>

                            <div className="relative border-l-2 border-blue-100 ml-4 space-y-10 pb-4">
                                <div className="relative pl-8">
                                    <div className="absolute left-[-25px] w-12 h-12 bg-white rounded-full border-4 border-blue-100 flex items-center justify-center font-bold text-primary">1</div>
                                    <h3 className="text-xl font-bold text-gray-800">Enquiry & Counseling</h3>
                                    <p className="text-gray-600 mt-2">Parents can visit the school office or submit an online enquiry form. Our counseling team will guide you through the school's philosophy, facilities, and fee structure.</p>
                                </div>

                                <div className="relative pl-8">
                                    <div className="absolute left-[-25px] w-12 h-12 bg-white rounded-full border-4 border-blue-100 flex items-center justify-center font-bold text-primary">2</div>
                                    <h3 className="text-xl font-bold text-gray-800">Application Submission</h3>
                                    <p className="text-gray-600 mt-2">Duly filled application forms must be submitted to the school office along with completely verified relevant documents.</p>
                                </div>

                                <div className="relative pl-8">
                                    <div className="absolute left-[-25px] w-12 h-12 bg-white rounded-full border-4 border-blue-100 flex items-center justify-center font-bold text-primary">3</div>
                                    <h3 className="text-xl font-bold text-gray-800">Interaction / Assessment</h3>
                                    <p className="text-gray-600 mt-2">A brief interaction with the Principal/Coordinator to understand the child's readiness. For higher grades, a basic written assessment in English and Math may be conducted.</p>
                                </div>

                                <div className="relative pl-8">
                                    <div className="absolute left-[-25px] w-12 h-12 bg-primary rounded-full border-4 border-blue-100 flex items-center justify-center font-bold text-white">4</div>
                                    <h3 className="text-xl font-bold text-gray-800">Admission Confirmation</h3>
                                    <p className="text-gray-600 mt-2">Upon successful interaction/assessment, admission is confirmed subject to the payment of the admission fee.</p>
                                </div>
                            </div>
                        </section>

                        {/* Affordable Fee Structure */}
                        <section className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-sm border border-blue-100">
                            <h2 className="text-2xl font-bold text-primary mb-4 flex items-center">
                                <IndianRupee className="mr-3 text-secondary" />
                                Affordable Fee Structure
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                At Cambridge English School, we believe that quality English-medium education should be accessible to everyone. We pride ourselves on maintaining an <strong>highly affordable and transparent fee structure</strong> with absolutely no hidden charges or mid-year surprise fees.
                            </p>
                            <div className="bg-white p-4 rounded-xl border border-gray-100 flex items-start gap-4">
                                <CheckCircle className="text-secondary shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-gray-800">Value for Education</h4>
                                    <p className="text-gray-600 text-sm mt-1">Our fees cover tuition, essential co-curricular activities, and library access. Fees can be paid in convenient installments.</p>
                                </div>
                            </div>
                        </section>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Eligibility Criteria */}
                            <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                <h2 className="text-xl font-bold text-primary mb-6 flex items-center">
                                    <HelpCircle className="mr-3 text-secondary" size={24} />
                                    Eligibility Criteria
                                </h2>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <div className="bg-blue-50 p-1.5 rounded-full text-primary mt-0.5 mr-3 shrink-0"><CheckCircle size={16} /></div>
                                        <span className="text-gray-700"><strong>Nursery:</strong> 3 years complete as on May 31st.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-blue-50 p-1.5 rounded-full text-primary mt-0.5 mr-3 shrink-0"><CheckCircle size={16} /></div>
                                        <span className="text-gray-700"><strong>LKG:</strong> 4 years complete as on May 31st.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-blue-50 p-1.5 rounded-full text-primary mt-0.5 mr-3 shrink-0"><CheckCircle size={16} /></div>
                                        <span className="text-gray-700"><strong>Grade 1:</strong> 6 years complete as on May 31st.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-blue-50 p-1.5 rounded-full text-primary mt-0.5 mr-3 shrink-0"><CheckCircle size={16} /></div>
                                        <span className="text-gray-700"><strong>Other Grades:</strong> Based on the Transfer Certificate from the previous recognized school.</span>
                                    </li>
                                </ul>
                            </section>

                            {/* Required Documents */}
                            <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                <h2 className="text-xl font-bold text-primary mb-6 flex items-center">
                                    <FileCheck className="mr-3 text-secondary" size={24} />
                                    Required Documents
                                </h2>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <div className="bg-gray-50 p-1.5 rounded-full text-gray-500 mt-0.5 mr-3 shrink-0"><FileText size={16} /></div>
                                        <span className="text-gray-700 text-sm">Original Birth Certificate (for Pre-Primary & Grade 1)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-gray-50 p-1.5 rounded-full text-gray-500 mt-0.5 mr-3 shrink-0"><FileText size={16} /></div>
                                        <span className="text-gray-700 text-sm">Original Transfer Certificate (for Grade 2 & above)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-gray-50 p-1.5 rounded-full text-gray-500 mt-0.5 mr-3 shrink-0"><FileText size={16} /></div>
                                        <span className="text-gray-700 text-sm">Copy of Student's Aadhaar Card</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-gray-50 p-1.5 rounded-full text-gray-500 mt-0.5 mr-3 shrink-0"><FileText size={16} /></div>
                                        <span className="text-gray-700 text-sm">4 Passport size photographs</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-gray-50 p-1.5 rounded-full text-gray-500 mt-0.5 mr-3 shrink-0"><FileText size={16} /></div>
                                        <span className="text-gray-700 text-sm">Previous year's Marks Card/Report Card</span>
                                    </li>
                                </ul>
                            </section>
                        </div>
                    </div>

                    {/* Right Column: Forms & Downloads */}
                    <div className="lg:w-1/3 space-y-8">

                        {/* Download Prospectus */}
                        <div className="bg-primary text-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
                            {/* Decorative circle */}
                            <div className="absolute -top-12 -right-12 w-32 h-32 bg-white opacity-10 rounded-full"></div>

                            <h3 className="text-2xl font-bold mb-4">School Prospectus</h3>
                            <p className="text-blue-100 mb-8 text-sm">Download our complete school prospectus to learn more about our curriculum, faculty, and facilities.</p>

                            <a href="/prospectus.pdf" download="Cambridge_English_School_Prospectus.pdf" className="w-full bg-secondary hover:bg-secondary-light text-white font-bold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2 group">
                                <Download size={20} className="group-hover:animate-bounce" />
                                Download PDF
                            </a>
                        </div>

                        {/* Online Enquiry Form */}
                        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 relative">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Online Enquiry</h3>

                            <form className="space-y-5">
                                <div>
                                    <label htmlFor="parentName" className="block text-sm font-medium text-gray-700 mb-1">Parent's Name <span className="text-red-500">*</span></label>
                                    <input type="text" id="parentName" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-shadow" placeholder="Full Name" />
                                </div>

                                <div>
                                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">Mobile Number <span className="text-red-500">*</span></label>
                                    <input type="tel" id="phoneNumber" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-shadow" placeholder="+91 00000 00000" />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="studentName" className="block text-sm font-medium text-gray-700 mb-1">Student's Name</label>
                                        <input type="text" id="studentName" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-shadow" placeholder="Full Name" />
                                    </div>
                                    <div>
                                        <label htmlFor="grade" className="block text-sm font-medium text-gray-700 mb-1">Grade Seeking <span className="text-red-500">*</span></label>
                                        <select id="grade" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none bg-white">
                                            <option value="">Select Grade</option>
                                            <option value="nursery">Nursery</option>
                                            <option value="lkg">LKG</option>
                                            <option value="ukg">UKG</option>
                                            <option value="1">Grade 1</option>
                                            <option value="2">Grade 2</option>
                                            <option value="3">Grade 3</option>
                                            <option value="4">Grade 4</option>
                                            <option value="5">Grade 5</option>
                                            <option value="6">Grade 6</option>
                                            <option value="7">Grade 7</option>
                                            <option value="8">Grade 8</option>
                                            <option value="9">Grade 9</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Additional Queries</label>
                                    <textarea id="message" rows={3} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-shadow resize-none" placeholder="How can we help you?"></textarea>
                                </div>

                                <button type="button" className="w-full bg-primary hover:bg-primary-light text-white font-bold py-3 px-4 rounded-xl transition-colors shadow-md hover:shadow-lg">
                                    Submit Enquiry
                                </button>
                                <p className="text-xs text-gray-500 text-center mt-4">
                                    Our admissions office will contact you within 24 working hours.
                                </p>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
