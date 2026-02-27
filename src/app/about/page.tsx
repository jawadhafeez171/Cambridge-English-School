import Image from "next/image";
import { Target, Compass, BookOpen, Shield, HeartHandshake, Award } from "lucide-react";

export const metadata = {
    title: "About Us | Cambridge English School Doddaballapur",
    description: "Learn about Cambridge English School's history, vision, mission, and the core values that drive our commitment to excellence.",
};

export default function About() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Page Header */}
            <section className="bg-primary text-white py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
                    <p className="text-blue-100 max-w-2xl mx-auto text-lg">
                        Dedicated to academic excellence and moral integrity since 2005.
                    </p>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-blue-50 p-10 rounded-xl border border-blue-100 flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center text-primary mb-6">
                                <Compass size={32} />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h2>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                To be the leading educational institution in Doddaballapur that empowers students from all backgrounds with high-quality English-medium education, instilling strong moral values and preparing them for a successful future.
                            </p>
                        </div>

                        <div className="bg-amber-50 p-10 rounded-xl border border-amber-100 flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center text-secondary mb-6">
                                <Target size={32} />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                To provide a structured, disciplined, and safe learning environment where students master the Karnataka State Board curriculum, achieve outstanding SSLC results, and develop into responsible, capable citizens.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 bg-gray-50 border-y border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-primary mb-4">Our Core Values</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">These four pillars guide our daily actions and our approach to education.</p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center">
                            <Shield size={40} className="mx-auto text-secondary mb-4" />
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Discipline</h3>
                            <p className="text-gray-600 text-sm">We believe routine, respect, and structure are the foundations of all learning.</p>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center">
                            <Target size={40} className="mx-auto text-primary mb-4" />
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Integrity</h3>
                            <p className="text-gray-600 text-sm">Honesty and strong moral principles guide our students in every interaction.</p>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center">
                            <HeartHandshake size={40} className="mx-auto text-secondary mb-4" />
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Respect</h3>
                            <p className="text-gray-600 text-sm">Treating peers, teachers, and parents with utmost respect is mandatory.</p>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center">
                            <BookOpen size={40} className="mx-auto text-primary mb-4" />
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Academic Excellence</h3>
                            <p className="text-gray-600 text-sm">We demand rigorous focus and hard work to achieve top SSLC results.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Principal's Message */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="md:w-1/3">
                            <div className="border border-gray-200 p-4 rounded-xl bg-gray-50 max-w-sm mx-auto shadow-md">
                                <div className="relative aspect-[3/4] w-full bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center text-gray-400">
                                    <span className="flex flex-col items-center">
                                        <Award size={48} className="text-primary mb-2 opacity-30" />
                                        <span>Principal's Portrait</span>
                                    </span>
                                    {/* Note: User did not provide explicit principal picture, placeholder used */}
                                </div>
                                <div className="text-center mt-4">
                                    <h3 className="font-bold text-lg text-gray-800">Miss Seema Yasmeen</h3>
                                    <p className="text-sm text-primary font-medium">Principal</p>
                                </div>
                            </div>
                        </div>

                        <div className="md:w-2/3">
                            <h2 className="text-3xl font-bold text-primary mb-6 flex items-center">
                                <span className="w-8 h-1 bg-secondary inline-block mr-3"></span>
                                Principal's Message
                            </h2>
                            <div className="prose prose-lg text-gray-600">
                                <p className="mb-4">
                                    Welcome to Cambridge English School. For over 15 years, we have been committed to providing a sanctuary of learning where every child from Doddaballapur and surrounding areas can receive a top-tier English-medium education.
                                </p>
                                <p className="mb-4">
                                    We are distinctly structured and disciplined. We firmly believe that academic success, particularly in the critical SSLC examinations, requires a rigorous and supportive environment. Our teachers do not just teach; they mentor, guide, and push our students to exceed their own expectations.
                                </p>
                                <p className="mb-4">
                                    Our focus is not on flashy infrastructure, but on core substance: excellent teaching, a safe environment, and strong moral values. We strive to graduate students who are not only academically proficient but also individuals of high character and integrity.
                                </p>
                                <p className="italic font-medium text-gray-800 mt-6">
                                    "Education is the most powerful weapon which you can use to change the world." Let us build that future together.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Milestones / Journey */}
            <section className="py-20 bg-primary text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4 text-white">Our Journey</h2>
                        <p className="text-blue-200">Milestones of Cambridge English School</p>
                    </div>

                    <div className="relative border-l-2 border-blue-400 ml-3 md:ml-0 md:border-none space-y-12">
                        {[
                            { year: "2005", title: "Inception", desc: "Started with just 30 students in Nursery to Grade 3, aiming to provide quality English education to Doddaballapur." },
                            { year: "2010", title: "State Board Affiliation", desc: "Officially recognized by the Department of Public Instruction for Grades 1 to 10." },
                            { year: "2012", title: "First SSLC Batch", desc: "Our very first 10th-grade batch achieved a 100% pass result, setting a benchmark for years to come." },
                            { year: "2020", title: "Digital Infrastructure", desc: "Upgraded computer labs and introduced smart classes to keep education uninterrupted." },
                            { year: "2025", title: "Excellence Continued", desc: "Over 800+ students and consistently producing district toppers every single year." }
                        ].map((item, index) => (
                            <div key={index} className="relative flex flex-col md:flex-row items-start md:items-center">
                                <div className="hidden md:flex w-1/2 justify-end pr-8">
                                    {index % 2 === 0 ? (
                                        <div className="text-right">
                                            <h3 className="text-xl font-bold text-secondary-light">{item.title}</h3>
                                            <p className="text-blue-100 text-sm mt-1">{item.desc}</p>
                                        </div>
                                    ) : (
                                        <div className="text-4xl font-bold text-blue-300 opacity-50">{item.year}</div>
                                    )}
                                </div>

                                <div className="absolute left-[-29px] md:relative md:left-0 w-14 h-14 bg-blue-800 rounded-full border-4 border-primary flex items-center justify-center font-bold text-white shrink-0 z-10 shadow-lg">
                                    <div className="w-4 h-4 rounded-full bg-secondary-light"></div>
                                </div>

                                <div className="pl-8 md:pl-0 md:pr-0 md:w-1/2 md:pl-8 flex flex-col">
                                    {index % 2 !== 0 ? (
                                        <div className="text-left mt-1 md:mt-0">
                                            <h3 className="text-xl font-bold text-secondary-light">{item.title}</h3>
                                            <p className="text-blue-100 text-sm mt-1">{item.desc}</p>
                                        </div>
                                    ) : (
                                        <div className="text-2xl font-bold text-blue-300 opacity-80 mt-1 md:mt-0">{item.year}</div>
                                    )}
                                    {/* Mobile content (shown only on small screens) */}
                                    <div className="md:hidden mt-2">
                                        <h3 className="text-lg font-bold text-secondary-light">{item.title}</h3>
                                        <p className="text-blue-100 text-sm mt-1">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Center Line for Desktop */}
                        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-blue-700 -translate-x-1/2 -z-10"></div>
                    </div>
                </div>
            </section>
        </div>
    );
}
