import Image from "next/image";
import { Monitor, FlaskConical, BookOpen, Users, Bus, Trophy } from "lucide-react";

export const metadata = {
    title: "School Facilities | Cambridge English School Doddaballapur",
    description: "Explore the state-of-the-art facilities at Cambridge English School, including spacious classrooms, science and computer labs, library, and sports infrastructure.",
};

export default function Facilities() {
    const facilities = [
        {
            title: "Spacious Classrooms",
            description: "Well-ventilated, well-lit spaces designed for maximum focus. Equipped with comfortable seating and essential teaching aids to facilitate effective learning interactions.",
            icon: Users,
            image: "/images/gallery/gallery-3.webp",
            color: "bg-blue-50 text-blue-600 border-blue-100"
        },
        {
            title: "Science Laboratory",
            description: "Fully equipped with modern apparatus to ensure students can practically understand theoretical concepts in Physics, Chemistry, and Biology.",
            icon: FlaskConical,
            image: "/images/gallery/gallery-24.webp",
            color: "bg-amber-50 text-amber-600 border-amber-100"
        },
        {
            title: "Computer Lab",
            description: "Modern computer systems with internet access, teaching students essential digital literacy, coding basics, and research skills under strict supervision.",
            icon: Monitor,
            image: "/images/gallery/gallery-12.webp",
            color: "bg-indigo-50 text-indigo-600 border-indigo-100"
        },
        {
            title: "School Library",
            description: "A quiet sanctuary housing thousands of books ranging from academic references to classic literature and modern fiction to foster a love for reading.",
            icon: BookOpen,
            image: "/images/gallery/gallery-9.webp",
            color: "bg-emerald-50 text-emerald-600 border-emerald-100"
        },
        {
            title: "Playground & Sports",
            description: "A large, safe playground where students participate in daily physical training, annual sports meets, and team games like Volleyball and Kho-kho.",
            icon: Trophy,
            image: "/images/gallery/gallery-11.webp",
            color: "bg-orange-50 text-orange-600 border-orange-100"
        },
        {
            title: "Transportation",
            description: "Safe and reliable bus facility covering all major routes in and around Doddaballapur, ensuring secure transit for every child.",
            icon: Bus,
            image: "/images/gallery/gallery-13.webp",
            color: "bg-slate-50 text-slate-600 border-slate-100"
        }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Page Header */}
            <section className="bg-primary text-white py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Campus Facilities</h1>
                    <p className="text-blue-100 max-w-2xl mx-auto text-lg">
                        Providing a safe, structured, and resourceful environment for comprehensive student development.
                    </p>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-16 bg-white border-b border-gray-200">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-primary mb-6">Infrastructure Built for Focus</h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        At Cambridge English School, we believe that a disciplined mind requires a functional and well-maintained environment. We avoid flashy international-school aesthetics in favor of a clean, academic, and highly functional infrastructure that serves one primary purpose: <strong>uninterrupted learning</strong>.
                    </p>
                </div>
            </section>

            {/* Facilities Grid */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {facilities.map((facility, index) => (
                            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group flex flex-col">
                                <div className="relative h-60 w-full overflow-hidden">
                                    <Image
                                        src={facility.image}
                                        alt={facility.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                                        <div className="p-6 w-full flex items-center gap-3">
                                            <div className={`p-2 rounded-lg ${facility.color} bg-opacity-90 border`}>
                                                <facility.icon size={24} />
                                            </div>
                                            <h3 className="text-xl font-bold text-white">{facility.title}</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 flex-grow">
                                    <p className="text-gray-600 leading-relaxed text-sm">
                                        {facility.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action: Campus Visit */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-blue-50 border border-blue-100 rounded-2xl p-10 md:p-16">
                        <h2 className="text-3xl font-bold text-primary mb-4">See It For Yourself</h2>
                        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                            We warmly invite parents and prospective students to tour our campus during office hours and experience our disciplinary approach firsthand.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a href="/contact" className="bg-secondary hover:bg-secondary-light text-white font-bold py-3 px-8 rounded-lg transition-colors inline-block">
                                Schedule a Campus Visit
                            </a>
                            <a href="tel:+919845332367" className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-bold py-3 px-8 rounded-lg transition-colors inline-block">
                                Call Admissions Office
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
