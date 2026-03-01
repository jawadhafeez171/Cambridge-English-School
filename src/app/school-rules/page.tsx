import { ShieldCheck, Clock, BookOpen, Users, Star, AlertTriangle } from "lucide-react";

export const metadata = {
    title: "School Rules | Cambridge English School Doddaballapur",
    description: "School rules and code of conduct at Cambridge English School Doddaballapur.",
};

const sections = [
    {
        icon: Clock,
        color: "text-blue-600 bg-blue-50",
        title: "Attendance & Punctuality",
        rules: [
            "Students must arrive before 8:45 AM. School assembly begins at 8:50 AM sharp.",
            "A minimum of 85% attendance is required to appear for examinations.",
            "All absences must be communicated in advance via the student diary or a written letter from parents.",
            "Habitual late-coming will be recorded and parents will be informed.",
        ],
    },
    {
        icon: BookOpen,
        color: "text-indigo-600 bg-indigo-50",
        title: "Academic Conduct",
        rules: [
            "Students must complete all homework and assignments on time.",
            "School diary must be maintained neatly and brought to school every day.",
            "Textbooks and notebooks must be covered and labelled properly.",
            "Any form of cheating or plagiarism during examinations will result in disciplinary action.",
            "Students must participate actively and respectfully in class.",
        ],
    },
    {
        icon: Users,
        color: "text-emerald-600 bg-emerald-50",
        title: "Behaviour & Discipline",
        rules: [
            "Students must treat all teachers, staff, and fellow students with respect.",
            "Bullying, name-calling, or any form of harassment is strictly prohibited.",
            "Use of mobile phones within school premises is not permitted.",
            "Students must not damage or deface school property.",
            "Loud or disruptive behaviour in corridors, classrooms, and the library is not allowed.",
        ],
    },
    {
        icon: Star,
        color: "text-amber-600 bg-amber-50",
        title: "Uniform & Appearance",
        rules: [
            "Proper school uniform must be worn on all school days.",
            "Uniform must be clean, neat, and worn as prescribed by the school.",
            "Neat haircut and no jewellery (except small studs for girls) is expected.",
            "Sports uniform is mandatory on physical education days.",
        ],
    },
    {
        icon: ShieldCheck,
        color: "text-purple-600 bg-purple-50",
        title: "Campus & Safety",
        rules: [
            "Students must not leave the school premises during school hours without written permission.",
            "Students are responsible for the safety of their own belongings.",
            "Any damage to school property must be reported immediately.",
            "Students must follow all safety instructions given by teachers and staff.",
        ],
    },
    {
        icon: AlertTriangle,
        color: "text-red-600 bg-red-50",
        title: "Serious Offences",
        rules: [
            "Possession or use of tobacco, alcohol, or any substances is strictly forbidden.",
            "Any act of violence or physical aggression will lead to immediate suspension.",
            "Theft of any kind will be dealt with severely and parents will be called.",
            "Vandalism of school property will result in disciplinary action and cost recovery.",
        ],
    },
];

export default function SchoolRules() {
    return (
        <div className="flex flex-col min-h-screen">

            {/* Page Header */}
            <section className="relative bg-primary text-white py-20 md:py-28 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary-light/80" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <p className="text-secondary-light font-semibold text-xs tracking-[0.2em] uppercase mb-4">Code of Conduct</p>
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">School Rules</h1>
                    <div className="h-[2px] w-16 bg-secondary mx-auto mb-6" />
                    <p className="text-blue-100/80 max-w-xl mx-auto text-lg">
                        Our rules exist to create a safe, disciplined, and respectful learning environment for every student.
                    </p>
                </div>
            </section>

            {/* Intro note */}
            <section className="py-10 bg-amber-50 border-b border-amber-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex items-start gap-4">
                    <AlertTriangle className="text-amber-600 shrink-0 mt-1" size={22} />
                    <p className="text-amber-800 text-sm leading-relaxed">
                        All students and parents are expected to read, understand, and adhere to these rules. Violations will be addressed progressively — from a verbal warning to parental meetings, suspension, or in severe cases, expulsion. The school reserves the right to amend these rules at any time.
                    </p>
                </div>
            </section>

            {/* Rules Grid */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {sections.map(({ icon: Icon, color, title, rules }) => (
                            <div key={title} className="bg-accent-bg rounded-2xl p-8 border border-border-light">
                                <div className="flex items-center gap-4 mb-5">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${color}`}>
                                        <Icon size={22} />
                                    </div>
                                    <h2 className="font-serif text-xl font-bold text-primary">{title}</h2>
                                </div>
                                <ul className="space-y-3">
                                    {rules.map((rule, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                                            <span className="text-gray-600 text-sm leading-relaxed">{rule}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer note */}
            <section className="py-10 bg-primary text-center">
                <p className="text-blue-200/80 text-sm max-w-2xl mx-auto px-4">
                    These rules apply to all students of Cambridge English School, Thyagarajanagar, Doddaballapur — from Pre-Nursery to 10th Grade. For queries, contact the school office.
                </p>
            </section>

        </div>
    );
}
