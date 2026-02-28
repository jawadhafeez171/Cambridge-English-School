import { BookOpen, GraduationCap, Users, PenTool, LayoutTemplate, Activity, Award, Monitor, Globe } from "lucide-react";
import Image from "next/image";

export const metadata = {
    title: "Academics | Cambridge English School Doddaballapur",
    description: "Explore our rigorous Karnataka State Board curriculum, pre-primary to 5th STD programs, AI digital classrooms, and language subjects.",
};

export default function Academics() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Page Header */}
            <section className="relative bg-primary text-white py-20 md:py-28 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/gallery/gallery-29.webp')] bg-cover bg-center opacity-10" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary-light/80" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <p className="text-secondary-light font-semibold text-xs tracking-[0.2em] uppercase mb-4">Learning at Cambridge</p>
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Academics</h1>
                    <div className="h-[2px] w-16 bg-secondary mx-auto mb-6" />
                    <p className="text-blue-100/80 max-w-xl mx-auto text-lg">
                        A structured, disciplined approach to the Karnataka State Board Curriculum, building strong foundations from Pre-Nursery to 5th STD.
                    </p>
                </div>
            </section>

            {/* Curriculum Overview */}
            <section className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-14 items-center">
                        <div>
                            <p className="text-secondary font-semibold text-xs tracking-[0.18em] uppercase mb-4">Our Curriculum</p>
                            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6 leading-snug">
                                State Board Curriculum
                            </h2>
                            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                                We adhere strictly to the guidelines set by the Department of Public Instruction, Karnataka. Our curriculum is comprehensive, logical, and highly structured.
                            </p>

                            <div className="space-y-6">
                                {[
                                    {
                                        Icon: LayoutTemplate,
                                        step: "01",
                                        title: "Pre-Primary (Pre-Nursery, LKG, UKG)",
                                        body: "Play-way method combined with structured early learning. Focus on basic numeracy, alphabet recognition, and motor skills."
                                    },
                                    {
                                        Icon: Users,
                                        step: "02",
                                        title: "Primary (1st to 5th STD)",
                                        body: "Building strong foundations in English, Mathematics, Environmental Science, and language subjects."
                                    },
                                    {
                                        Icon: Globe,
                                        step: "03",
                                        title: "Languages Offered",
                                        body: "First language Kannada, Second language English, Third language Hindi. Hindi subject is included from U.K.G."
                                    },
                                ].map(({ Icon, step, title, body }) => (
                                    <div key={step} className="flex items-start gap-5">
                                        <div className="shrink-0 w-12 h-12 bg-accent-bg border border-border-light rounded-xl flex items-center justify-center relative">
                                            <Icon size={20} className="text-primary" />
                                            <span className="absolute -top-2 -right-2 w-5 h-5 bg-secondary text-white text-[10px] font-bold rounded-full flex items-center justify-center">{step}</span>
                                        </div>
                                        <div>
                                            <h3 className="font-serif font-bold text-gray-900 mb-1">{title}</h3>
                                            <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative h-[520px] w-full rounded-2xl overflow-hidden shadow-2xl">
                            <Image src="/images/gallery/gallery-8.webp" alt="Students studying in classroom" fill className="object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                                <div className="text-white">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Monitor size={18} className="text-secondary-light" />
                                        <span className="text-secondary-light text-xs font-semibold uppercase tracking-wider">Digital Learning</span>
                                    </div>
                                    <h3 className="font-serif text-2xl font-bold mb-1">AI Model Digital Classrooms</h3>
                                    <p className="text-gray-200/80 text-sm">Equipped with Smart TVs and Tabs for an interactive learning experience.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* English Communication Focus */}
            <section className="py-24 bg-[#0a1847]">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="text-secondary-light font-semibold text-xs tracking-[0.2em] uppercase mb-4">Our Approach</p>
                            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">English Communication Focus</h2>
                            <p className="text-blue-200/80 mb-8 leading-relaxed text-lg">
                                We recognize that fluent English communication is critical in today&apos;s world. Our medium of instruction is strictly upheld across all classes.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Mandatory English communication on campus",
                                    "Dedicated grammar and phonetics classes",
                                    "Regular public speaking and reading exercises",
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-blue-100">
                                        <span className="w-2 h-2 rounded-full bg-secondary shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
                            <Image src="/images/gallery/gallery-28.webp" alt="English reading activity" fill className="object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            {/* SSLC Preparation */}
            <section className="py-24 bg-white border-b border-border-light">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <p className="text-secondary font-semibold text-xs tracking-[0.18em] uppercase mb-3">Academic Excellence</p>
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">SSLC Preparation Strategy</h2>
                        <p className="text-gray-500 max-w-xl mx-auto mt-4">
                            Our rigorous approach ensures students consistently achieve top ranks and 100% pass results.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-7">
                        {[
                            { Icon: PenTool, title: "Continuous Assessment", body: "Frequent unit tests, mid-term examinations, and monthly evaluations ensure students are constantly revising and identifying weak areas.", accent: "bg-amber-50 text-amber-600" },
                            { Icon: GraduationCap, title: "Preparatory Exams", body: "Grade 10 students undergo a minimum of 3 full-syllabus preparatory examinations evaluated by experienced board examiners before the main exam.", accent: "bg-blue-50 text-blue-600" },
                            { Icon: BookOpen, title: "Remedial Classes", body: "Dedicated after-school sessions for students needing extra attention in Mathematics and Science. No student is left behind.", accent: "bg-emerald-50 text-emerald-700" },
                        ].map(({ Icon, title, body, accent }) => (
                            <div key={title} className="rounded-2xl border border-border-light p-8 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${accent}`}>
                                    <Icon size={28} />
                                </div>
                                <h3 className="font-serif font-bold text-gray-900 text-xl mb-3">{title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Co-curricular */}
            <section className="py-24 bg-accent-bg">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-14 items-center">
                        <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                            <div className="relative h-[240px] rounded-2xl overflow-hidden shadow-lg">
                                <Image src="/images/gallery/gallery-10.webp" alt="Sports Activity" fill className="object-cover" />
                            </div>
                            <div className="relative h-[240px] rounded-2xl overflow-hidden shadow-lg mt-8">
                                <Image src="/images/gallery/gallery-12.webp" alt="Library" fill className="object-cover" />
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <p className="text-secondary font-semibold text-xs tracking-[0.18em] uppercase mb-4">Beyond Academics</p>
                            <h2 className="font-serif text-3xl font-bold text-primary mb-6">Co-curricular Activities</h2>
                            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                                While academics form our core, we believe in balanced development. Our activities are structured and disciplined.
                            </p>
                            <ul className="space-y-6">
                                {[
                                    { Icon: Activity, title: "Physical Education", body: "Scheduled PT classes, sports meets, and team games like Kho-kho, Kabaddi, and Volleyball to instil teamwork." },
                                    { Icon: BookOpen, title: "Library Program", body: "Mandatory reading hours to cultivate a reading habit and improve general knowledge and vocabulary." },
                                    { Icon: Award, title: "Cultural Events", body: "Celebration of national festivals and Annual Day to provide a platform for our students' talents." },
                                ].map(({ Icon, title, body }) => (
                                    <li key={title} className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-white border border-border-light rounded-xl flex items-center justify-center text-primary shrink-0 shadow-sm">
                                            <Icon size={18} />
                                        </div>
                                        <div>
                                            <h4 className="font-serif font-bold text-gray-900 mb-0.5">{title}</h4>
                                            <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
