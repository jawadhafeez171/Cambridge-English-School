import { ShieldCheck, Clock, BookOpen, Users, Star, AlertTriangle } from "lucide-react";
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/i18n.config";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const locale = lang as Locale;
    const dict = await getDictionary(locale);
    return {
        title: dict.schoolRulesPage.heroTitle,
        description: dict.schoolRulesPage.heroDesc,
        alternates: { canonical: `/${locale}/school-rules` },
        openGraph: { title: dict.schoolRulesPage.heroTitle, url: `/${locale}/school-rules` },
    };
}

export default async function SchoolRules({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const locale = lang as Locale;
    const dict = await getDictionary(locale);
    const t = dict.schoolRulesPage;

    const sections = [
        {
            icon: Clock,
            color: "text-blue-600 bg-blue-50",
            title: t.sec1Title,
            rules: [t.sec1R1, t.sec1R2, t.sec1R3, t.sec1R4],
        },
        {
            icon: BookOpen,
            color: "text-indigo-600 bg-indigo-50",
            title: t.sec2Title,
            rules: [t.sec2R1, t.sec2R2, t.sec2R3, t.sec2R4, t.sec2R5],
        },
        {
            icon: Users,
            color: "text-emerald-600 bg-emerald-50",
            title: t.sec3Title,
            rules: [t.sec3R1, t.sec3R2, t.sec3R3, t.sec3R4, t.sec3R5],
        },
        {
            icon: Star,
            color: "text-amber-600 bg-amber-50",
            title: t.sec4Title,
            rules: [t.sec4R1, t.sec4R2, t.sec4R3, t.sec4R4],
        },
        {
            icon: ShieldCheck,
            color: "text-purple-600 bg-purple-50",
            title: t.sec5Title,
            rules: [t.sec5R1, t.sec5R2, t.sec5R3, t.sec5R4],
        },
        {
            icon: AlertTriangle,
            color: "text-red-600 bg-red-50",
            title: t.sec6Title,
            rules: [t.sec6R1, t.sec6R2, t.sec6R3, t.sec6R4],
        },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Page Header */}
            <section className="relative bg-primary text-white py-20 md:py-28 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary-light/80" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <p className="text-secondary-light font-semibold text-xs tracking-[0.2em] uppercase mb-4">{t.heroEyebrow}</p>
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">{t.heroTitle}</h1>
                    <div className="h-[2px] w-16 bg-secondary mx-auto mb-6" />
                    <p className="text-blue-100/80 max-w-xl mx-auto text-lg">
                        {t.heroDesc}
                    </p>
                </div>
            </section>

            {/* Intro note */}
            <section className="py-10 bg-amber-50 border-b border-amber-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex items-start gap-4">
                    <AlertTriangle className="text-amber-600 shrink-0 mt-1" size={22} />
                    <p className="text-amber-800 text-sm leading-relaxed">
                        {t.introNote}
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
                    {t.footerNote}
                </p>
            </section>

        </div>
    );
}
