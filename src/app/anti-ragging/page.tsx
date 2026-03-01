import { ShieldCheck, Phone, Mail, AlertOctagon, Heart, BookOpen } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Anti-Ragging Policy | Cambridge English School Doddaballapur",
    description: "Cambridge English School's strict anti-ragging and anti-bullying policy to ensure a safe and respectful campus for all students.",
};

export default function AntiRagging() {
    return (
        <div className="flex flex-col min-h-screen">

            {/* Page Header */}
            <section className="relative bg-primary text-white py-20 md:py-28 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary-light/80" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <p className="text-secondary-light font-semibold text-xs tracking-[0.2em] uppercase mb-4">Student Safety</p>
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Anti-Ragging Policy</h1>
                    <div className="h-[2px] w-16 bg-secondary mx-auto mb-6" />
                    <p className="text-blue-100/80 max-w-xl mx-auto text-lg">
                        Cambridge English School is committed to maintaining a safe, respectful, and inclusive campus environment for every student.
                    </p>
                </div>
            </section>

            {/* Commitment Banner */}
            <section className="py-10 bg-emerald-50 border-b border-emerald-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex items-start gap-4">
                    <ShieldCheck className="text-emerald-600 shrink-0 mt-1" size={24} />
                    <p className="text-emerald-800 text-sm leading-relaxed">
                        <strong>Zero Tolerance Declaration:</strong> Cambridge English School adopts a strict zero-tolerance policy against ragging, bullying, and any form of harassment. Any act that harms a student's dignity — physically, verbally, or emotionally — will be treated as a serious offence and dealt with firmly in accordance with school disciplinary procedures.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

                    {/* What is ragging */}
                    <div className="bg-accent-bg rounded-2xl p-8 border border-border-light">
                        <div className="flex items-center gap-4 mb-5">
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-red-600 bg-red-50">
                                <AlertOctagon size={22} />
                            </div>
                            <h2 className="font-serif text-xl font-bold text-primary">What Constitutes Ragging & Bullying</h2>
                        </div>
                        <ul className="space-y-3">
                            {[
                                "Any act of physical violence, hitting, pushing, or harming another student.",
                                "Verbal abuse, teasing, name-calling, making fun of a student's appearance, caste, religion, or economic background.",
                                "Threats, intimidation, or coercion of any kind — in person or through messaging platforms.",
                                "Exclusion, social isolation, or deliberate humiliation of a student.",
                                "Forcing a student to do something against their will.",
                                "Cyberbullying — sending hurtful messages, spreading rumours, or sharing photos without consent.",
                                "Extortion of money, stationery, food, or any belongings from another student.",
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                                    <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Responsibilities */}
                    <div className="bg-accent-bg rounded-2xl p-8 border border-border-light">
                        <div className="flex items-center gap-4 mb-5">
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-blue-600 bg-blue-50">
                                <BookOpen size={22} />
                            </div>
                            <h2 className="font-serif text-xl font-bold text-primary">Responsibilities</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                                <h3 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide">Students</h3>
                                <ul className="space-y-2">
                                    {[
                                        "Treat every classmate with dignity and respect.",
                                        "Report any incident of bullying to a teacher immediately.",
                                        "Support and stand up for victims whenever safe to do so.",
                                        "Refuse to participate in or encourage ragging.",
                                    ].map((r, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />{r}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide">Teachers & Staff</h3>
                                <ul className="space-y-2">
                                    {[
                                        "Actively monitor student interactions in classrooms and common areas.",
                                        "Act immediately upon receiving any complaint.",
                                        "Maintain confidentiality of the complainant.",
                                        "Ensure the victim feels safe and supported.",
                                    ].map((r, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />{r}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide">Parents</h3>
                                <ul className="space-y-2">
                                    {[
                                        "Teach children to be respectful and empathetic.",
                                        "Report any concerns to the school management promptly.",
                                        "Cooperate fully with the school's investigation process.",
                                        "Monitor your child's social media and online behaviour.",
                                    ].map((r, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />{r}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Consequences */}
                    <div className="bg-accent-bg rounded-2xl p-8 border border-border-light">
                        <div className="flex items-center gap-4 mb-5">
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-amber-600 bg-amber-50">
                                <AlertOctagon size={22} />
                            </div>
                            <h2 className="font-serif text-xl font-bold text-primary">Consequences of Ragging</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { step: "1st Offence", action: "Verbal warning and parental notification." },
                                { step: "2nd Offence", action: "Written warning, parental meeting, and suspension from activities." },
                                { step: "3rd Offence", action: "Suspension from school for up to 5 days." },
                                { step: "Severe / Repeat", action: "Permanent expulsion from school." },
                            ].map(({ step, action }) => (
                                <div key={step} className="bg-white rounded-xl p-5 border border-border-light text-center">
                                    <div className="font-serif font-bold text-primary text-lg mb-2">{step}</div>
                                    <p className="text-gray-500 text-xs leading-relaxed">{action}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Our Commitment */}
                    <div className="bg-primary rounded-2xl p-8 text-white">
                        <div className="flex items-center gap-4 mb-5">
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-secondary-light bg-white/10">
                                <Heart size={22} />
                            </div>
                            <h2 className="font-serif text-xl font-bold text-white">Our Commitment to You</h2>
                        </div>
                        <p className="text-blue-200/80 text-sm leading-relaxed max-w-3xl">
                            Every child deserves to come to school feeling safe, valued, and respected. Cambridge English School pledges to investigate all complaints fairly and promptly, protect the confidentiality of the complainant, and take firm action against anyone found to be engaging in bullying or ragging. We are committed to nurturing an environment where every student thrives — not just academically, but as a person of character.
                        </p>
                    </div>
                </div>
            </section>

            {/* Report Section */}
            <section className="py-14 bg-red-50 border-t border-red-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <AlertOctagon className="text-red-600 mx-auto mb-4" size={32} />
                    <h2 className="font-serif text-2xl font-bold text-primary mb-3">Report an Incident</h2>
                    <p className="text-gray-600 text-sm mb-8 max-w-lg mx-auto">
                        If you or someone you know is experiencing bullying or harassment, please report it immediately. All reports are treated with complete confidentiality.
                    </p>
                    <div className="flex justify-center">
                        <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-7 py-3 rounded-full hover:bg-primary-light transition-colors text-sm">
                            <Mail size={16} /> Contact School Office
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}
