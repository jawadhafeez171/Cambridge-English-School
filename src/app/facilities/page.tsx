import Image from "next/image";
import { Monitor, FlaskConical, BookOpen, Users, Bus, Trophy } from "lucide-react";

export const metadata = {
    title: "School Facilities | Cambridge English School Doddaballapur",
    description: "Explore the facilities at Cambridge English School, including AI digital classrooms, science lab, library, and sports infrastructure.",
};

export default function Facilities() {
    const facilities = [
        { title: "AI Digital Classrooms", description: "AI-model digital classrooms equipped with Smart TVs and Tabs for an engaging, modern learning experience that makes lessons come alive.", icon: Monitor, image: "/images/gallery/gallery-3.webp", accent: "text-indigo-600 bg-indigo-50" },
        { title: "Science Laboratory", description: "Fully equipped with modern apparatus to ensure students practically understand Physics, Chemistry, and Biology through hands-on experiments.", icon: FlaskConical, image: "/images/gallery/gallery-24.webp", accent: "text-amber-600 bg-amber-50" },
        { title: "Computer Lab", description: "Modern systems with internet access, teaching essential digital literacy, coding basics, and research skills under strict supervision.", icon: Monitor, image: "/images/gallery/gallery-12.webp", accent: "text-blue-600 bg-blue-50" },
        { title: "School Library", description: "A quiet sanctuary housing thousands of books — from academic references to classic literature — fostering a genuine love for reading.", icon: BookOpen, image: "/images/gallery/gallery-9.webp", accent: "text-emerald-700 bg-emerald-50" },
        { title: "Playground & Sports", description: "A large, safe playground for daily physical training, annual sports meets, and team games like Volleyball, Kho-kho, and Kabaddi.", icon: Trophy, image: "/images/gallery/gallery-11.webp", accent: "text-orange-600 bg-orange-50" },
        { title: "Transportation", description: "Safe and reliable bus facility covering all major routes in Doddaballapur and surrounding areas for secure student transit.", icon: Bus, image: "/images/gallery/gallery-13.webp", accent: "text-slate-600 bg-slate-50" },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <section className="relative bg-primary text-white py-20 md:py-28 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary-light/80" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <p className="text-secondary-light font-semibold text-xs tracking-[0.2em] uppercase mb-4">Infrastructure</p>
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Campus Facilities</h1>
                    <div className="h-[2px] w-16 bg-secondary mx-auto mb-6" />
                    <p className="text-blue-100/80 max-w-xl mx-auto text-lg">
                        A safe, structured, and resourceful environment for comprehensive student development.
                    </p>
                </div>
            </section>

            {/* Intro */}
            <section className="py-16 bg-white border-b border-border-light">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-4">Infrastructure Built for Focus</h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        At Cambridge English School, we believe a disciplined mind requires a clean, functional, and well-maintained environment. Our infrastructure serves one primary purpose: <strong>uninterrupted learning</strong>.
                    </p>
                </div>
            </section>

            {/* Facilities Grid */}
            <section className="py-20 bg-accent-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
                        {facilities.map(({ title, description, icon: Icon, image, accent }, index) => (
                            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border-light hover:shadow-lg transition-all hover:-translate-y-1 group flex flex-col">
                                <div className="relative h-52 w-full overflow-hidden">
                                    <Image src={image} alt={title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                </div>
                                <div className="p-6 flex-grow flex flex-col">
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${accent}`}>
                                        <Icon size={20} />
                                    </div>
                                    <h3 className="font-serif font-bold text-gray-900 text-lg mb-2">{title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed flex-grow">{description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-white">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <div className="bg-accent-bg border border-border-light rounded-2xl p-12">
                        <h2 className="font-serif text-3xl font-bold text-primary mb-4">See It For Yourself</h2>
                        <p className="text-gray-600 mb-8">
                            We warmly invite parents and prospective students to tour our campus during office hours and experience our disciplinary approach firsthand.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a href="/contact" className="bg-primary hover:bg-primary-light text-white font-bold py-3 px-8 rounded-full transition-all shadow-sm hover:shadow-md inline-block">
                                Schedule a Campus Visit
                            </a>
                            <a href="tel:+919845332367" className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-3 px-8 rounded-full transition-all inline-block">
                                Call Admissions Office
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
