"use client";

import { Mail, MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";

export default function Contact() {
    return (
        <div className="flex flex-col min-h-screen bg-accent-bg">
            {/* Header */}
            <section className="relative bg-primary text-white py-20 md:py-28 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary-light/80" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <p className="text-secondary-light font-semibold text-xs tracking-[0.2em] uppercase mb-4">Get In Touch</p>
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Contact Us</h1>
                    <div className="h-[2px] w-16 bg-secondary mx-auto mb-6" />
                    <p className="text-blue-100/80 max-w-xl mx-auto text-lg">
                        We are here to answer any questions you may have about Cambridge English School.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex flex-col lg:flex-row gap-10">

                    {/* Left: Contact Info */}
                    <div className="lg:w-5/12 space-y-6">
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-border-light">
                            <h2 className="font-serif text-2xl font-bold text-primary mb-8">Contact Information</h2>
                            <div className="space-y-7">
                                {[
                                    {
                                        Icon: MapPin,
                                        title: "Campus Address",
                                        content: (
                                            <div className="space-y-3">
                                                <div>
                                                    <span className="text-[10px] font-bold uppercase tracking-wider text-secondary block mb-0.5">Main Campus</span>
                                                    7GVM+8VV, NH-48, Doddaballapura Main Road,<br />
                                                    Dargajogihalli, Doddaballapura, Karnataka 561203
                                                </div>
                                                <div>
                                                    <span className="text-[10px] font-bold uppercase tracking-wider text-secondary block mb-0.5">Admin Block</span>
                                                    32, near telephone exchange,<br />
                                                    Thyagarajanagar, Doddaballapura, Karnataka 561203
                                                </div>
                                            </div>
                                        ),
                                    },
                                    {
                                        Icon: Phone,
                                        title: "Phone Number",
                                        content: <a href="tel:+919845332367" className="hover:text-primary transition-colors">+91 98453 32367</a>,
                                    },
                                    {
                                        Icon: Mail,
                                        title: "Email Address",
                                        content: <a href="mailto:principalcehs@gmail.com" className="hover:text-primary transition-colors">principalcehs@gmail.com</a>,
                                    },
                                    {
                                        Icon: Clock,
                                        title: "Office Hours",
                                        content: <>Monday – Saturday &bull; 9:00 AM – 4:00 PM<br /><span className="text-xs text-secondary font-semibold uppercase tracking-wide">Closed on Sundays &amp; Public Holidays</span></>,
                                    },
                                ].map(({ Icon, title, content }) => (
                                    <div key={title} className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-accent-bg border border-border-light rounded-xl flex items-center justify-center text-primary shrink-0">
                                            <Icon size={18} />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 text-sm mb-0.5">{title}</h3>
                                            <p className="text-gray-500 text-sm leading-relaxed">{content}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* WhatsApp */}
                        <div className="bg-gradient-to-br from-[#1DA462] to-[#0d8c4f] p-8 rounded-2xl shadow-md text-white">
                            <div className="flex items-center gap-3 mb-3">
                                <MessageCircle size={28} />
                                <h3 className="text-xl font-bold">Chat on WhatsApp</h3>
                            </div>
                            <p className="opacity-85 mb-6 text-sm">Get instant responses to your admission queries directly on WhatsApp.</p>
                            <a
                                href="https://wa.me/919845332367?text=Hello!%20I%20have%20an%20inquiry%20about%20Cambridge%20English%20School."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-[#0d8c4f] hover:bg-gray-50 font-bold py-3 px-6 rounded-full transition-colors inline-block w-full text-center shadow-sm"
                            >
                                Send Message
                            </a>
                        </div>
                    </div>

                    {/* Right: Form + Map */}
                    <div className="lg:w-7/12 space-y-7">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-border-light">
                            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                            <ContactForm />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
