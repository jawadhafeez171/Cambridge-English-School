import Image from "next/image";
import Link from "next/link";
import { Target, Compass, BookOpen, Shield, HeartHandshake, Award } from "lucide-react";

export const metadata = {
    title: "About Us | Cambridge English School Doddaballapur",
    description: "Learn about Cambridge English School's history, vision, mission, and the core values that drive our commitment to excellence.",
};

export default function About() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Page Header */}
            <section className="relative bg-primary text-white py-20 md:py-28 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/gallery/gallery-5.webp')] bg-cover bg-center opacity-10" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary-light/80" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <p className="text-secondary-light font-semibold text-xs tracking-[0.2em] uppercase mb-4">Our Story</p>
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">About Us</h1>
                    <div className="h-[2px] w-16 bg-secondary mx-auto mb-6" />
                    <p className="text-blue-100/80 max-w-xl mx-auto text-lg">
                        Dedicated to academic excellence and moral integrity since 2005.
                    </p>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-accent-bg border border-border-light rounded-2xl p-10 flex flex-col">
                            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                                <Compass size={28} />
                            </div>
                            <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
                            <p className="text-gray-600 leading-relaxed flex-1">
                                To be the leading educational institution in Doddaballapur that empowers students from all backgrounds with high-quality English-medium education, instilling strong moral values and preparing them for a successful future.
                            </p>
                        </div>
                        <div className="bg-[#fffbf0] border border-amber-100 rounded-2xl p-10 flex flex-col">
                            <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary mb-6">
                                <Target size={28} />
                            </div>
                            <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                            <p className="text-gray-600 leading-relaxed flex-1">
                                To provide a structured, disciplined, and safe learning environment where students master the Karnataka State Board curriculum, achieve outstanding results, and develop into responsible, capable citizens.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 bg-accent-bg border-y border-border-light">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <p className="text-secondary font-semibold text-xs tracking-[0.18em] uppercase mb-3">Guiding Principles</p>
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">Our Core Values</h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { Icon: Shield, title: "Discipline", body: "Routine, respect, and structure are the foundations of all learning.", color: "text-blue-600 bg-blue-50" },
                            { Icon: Target, title: "Integrity", body: "Honesty and strong moral principles guide our students in every interaction.", color: "text-primary bg-indigo-50" },
                            { Icon: HeartHandshake, title: "Respect", body: "Treating peers, teachers, and community with utmost respect is mandatory.", color: "text-amber-700 bg-amber-50" },
                            { Icon: BookOpen, title: "Excellence", body: "We demand rigorous focus and hard work to achieve top academic results.", color: "text-emerald-700 bg-emerald-50" },
                        ].map(({ Icon, title, body, color }) => (
                            <div key={title} className="bg-white rounded-2xl p-7 shadow-sm border border-border-light text-center hover:shadow-md transition-all hover:-translate-y-1">
                                <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                                    <Icon size={22} />
                                </div>
                                <h3 className="font-serif font-bold text-gray-900 text-lg mb-2">{title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Principal Snapshot */}
            <section className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="md:w-2/5">
                            <div className="relative bg-gray-50 border border-border-light p-4 rounded-2xl max-w-xs mx-auto shadow-lg">
                                <div className="relative aspect-[3/4] w-full bg-gray-200 rounded-xl overflow-hidden">
                                    <Image src="/images/principal-message.webp" alt="Mrs. Seema Yasmin - Principal" fill className="object-cover object-top" />
                                </div>
                                <div className="text-center mt-4 pb-1">
                                    <h3 className="font-serif font-bold text-lg text-gray-900">Mrs. Seema Yasmin</h3>
                                    <p className="text-secondary text-xs font-semibold uppercase tracking-wider mt-0.5">Principal</p>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-3/5">
                            <p className="text-secondary font-semibold text-xs tracking-[0.18em] uppercase mb-4">Principal&apos;s Message</p>
                            <h2 className="font-serif text-3xl font-bold text-primary mb-6">A Word from Our Leadership</h2>
                            <p className="text-gray-600 mb-4 leading-relaxed text-lg">
                                Welcome to Cambridge English School. For over 15 years, we have been committed to providing a sanctuary of learning where every child from Doddaballapur and surrounding areas can receive a top-tier English-medium education.
                            </p>
                            <p className="text-gray-500 mb-8 leading-relaxed">
                                We are distinctly structured and disciplined. We firmly believe that academic success requires a rigorous and supportive environment. Our teachers mentor, guide, and push our students to exceed their own expectations.
                            </p>
                            <Link href="/principal" className="inline-flex items-center justify-center bg-primary hover:bg-primary-light text-white font-semibold py-3 px-7 rounded-full transition-all shadow-sm hover:shadow-md">
                                Read Full Message →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Journey / Milestones */}
            <section className="py-24 bg-[#0a1847] text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <p className="text-secondary-light font-semibold text-xs tracking-[0.2em] uppercase mb-4">Our History</p>
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">Milestones of Excellence</h2>
                        <div className="h-[2px] w-16 bg-secondary mx-auto mt-6" />
                    </div>

                    <div className="relative pl-8 border-l-2 border-white/10 space-y-12">
                        {[
                            { year: "2005", title: "Inception", desc: "Started with 30 students in Nursery to Grade 3, aiming to provide quality English education to Doddaballapur." },
                            { year: "2010", title: "State Board Affiliation", desc: "Officially recognized by the Department of Public Instruction for Grades 1 to 10." },
                            { year: "2012", title: "First SSLC Batch", desc: "Our first 10th-grade batch achieved a 100% pass result, setting a benchmark for years to come." },
                            { year: "2020", title: "Digital Infrastructure", desc: "Upgraded with AI-model digital classrooms equipped with smart TVs and Tabs." },
                            { year: "2025", title: "Excellence Continued", desc: "Over 800+ students and consistently producing district toppers every single year." },
                        ].map(({ year, title, desc }) => (
                            <div key={year} className="relative">
                                <div className="absolute -left-[2.35rem] w-4 h-4 rounded-full bg-secondary border-4 border-[#0a1847]" />
                                <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/8 transition-colors">
                                    <div className="flex items-baseline gap-4 mb-2">
                                        <span className="font-serif text-secondary-light text-2xl font-bold">{year}</span>
                                        <h3 className="font-semibold text-white text-lg">{title}</h3>
                                    </div>
                                    <p className="text-blue-200/60 text-sm">{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
