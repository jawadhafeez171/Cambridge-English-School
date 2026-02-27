"use client";

import { Mail, MapPin, Phone, Clock, Send, MessageCircle } from "lucide-react";

export default function Contact() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, this would submit the form data to an API
        alert("Thank you for your message. We will get back to you shortly.");
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            {/* Page Header */}
            <section className="bg-primary text-white py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
                    <p className="text-blue-100 max-w-2xl mx-auto text-lg">
                        We are here to answer any questions you may have about Cambridge English School.
                    </p>
                </div>
            </section>

            {/* Main Content Area */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Left Column: Contact Details & Map */}
                    <div className="lg:w-5/12 space-y-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-bold text-primary mb-8">Get In Touch</h2>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="bg-blue-50 p-3 rounded-full text-primary mt-1 mr-4 shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-800 mb-1">Campus Address</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            NH-48, Doddaballapura Main Rd,<br />
                                            Dargajogihalli, Doddaballapura,<br />
                                            Karnataka 561203
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-blue-50 p-3 rounded-full text-primary mt-1 mr-4 shrink-0">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-800 mb-1">Phone Number</h3>
                                        <p className="text-gray-600">+91 98453 32367</p>
                                        <p className="text-gray-600">+91 80 1234 5678</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-blue-50 p-3 rounded-full text-primary mt-1 mr-4 shrink-0">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-800 mb-1">Email Address</h3>
                                        <p className="text-gray-600">principalcehs@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-amber-50 p-3 rounded-full text-secondary mt-1 mr-4 shrink-0">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-800 mb-1">Office Hours</h3>
                                        <p className="text-gray-600">Monday - Saturday</p>
                                        <p className="text-gray-600 font-medium">9:00 AM - 4:00 PM</p>
                                        <p className="text-xs text-secondary mt-1 tracking-wide uppercase font-bold">Closed on Sundays & Public Holidays</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Direct WhatsApp Box */}
                        <div className="bg-gradient-to-r from-[#25D366] to-[#128C7E] p-8 rounded-2xl shadow-md text-white">
                            <div className="flex items-center gap-4 mb-4">
                                <MessageCircle size={36} className="text-white" />
                                <h3 className="text-2xl font-bold">Chat with us!</h3>
                            </div>
                            <p className="mb-6 opacity-90">Get instant responses to your admission queries directly on WhatsApp.</p>
                            <a
                                href="https://wa.me/919845332367?text=Hello!%20I%20have%20an%20inquiry%20about%20Cambridge%20English%20School."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-[#128C7E] hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition-colors inline-block w-full text-center"
                            >
                                Send Message
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Contact Form & Map */}
                    <div className="lg:w-7/12 space-y-8">
                        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 relative">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                Send us a Message
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name <span className="text-red-500">*</span></label>
                                        <input type="text" id="name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-shadow bg-gray-50 focus:bg-white" placeholder="John Doe" />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number <span className="text-red-500">*</span></label>
                                        <input type="tel" id="phone" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-shadow bg-gray-50 focus:bg-white" placeholder="+91 00000 00000" />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                    <input type="email" id="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-shadow bg-gray-50 focus:bg-white" placeholder="john@example.com" />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject <span className="text-red-500">*</span></label>
                                    <select id="subject" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none bg-gray-50 focus:bg-white text-gray-700">
                                        <option value="">Select a subject...</option>
                                        <option value="admission">Admission Enquiry</option>
                                        <option value="fees">Fee Structure Inquiry</option>
                                        <option value="visit">Schedule Campus Visit</option>
                                        <option value="career">Career/Teaching Opportunity</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message <span className="text-red-500">*</span></label>
                                    <textarea id="message" required rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-shadow bg-gray-50 focus:bg-white resize-none" placeholder="How can we help you?"></textarea>
                                </div>

                                <button type="submit" className="w-full bg-primary hover:bg-primary-light text-white font-bold py-4 px-6 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group">
                                    Send Message
                                    <Send size={18} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </form>
                        </div>

                        {/* Google Map Embed */}
                        <div className="bg-white p-2 rounded-2xl shadow-sm border border-gray-100 overflow-hidden h-[300px] relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.201201948842!2d77.5305!3d13.2952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDE3JzQyLjciTiA3N8KwMzEnNDkuOCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0, borderRadius: '1rem' }}
                                allowFullScreen={false}
                                loading="lazy">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
