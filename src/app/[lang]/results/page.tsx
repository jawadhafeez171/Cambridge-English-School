import { Trophy, Star, TrendingUp, Award, Medal } from "lucide-react";
import Image from "next/image";
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/i18n.config";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const locale = lang as Locale;
    const dict = await getDictionary(locale);
    return {
        title: dict.resultsPage.heroTitle,
        description: dict.resultsPage.heroDesc,
        alternates: { canonical: `/${locale}/results` },
        openGraph: { title: dict.resultsPage.heroTitle, url: `/${locale}/results` },
    };
}

export default async function Results({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const locale = lang as Locale;
    const dict = await getDictionary(locale);
    const t = dict.resultsPage;

    // Hardcoded numeric data/names inside arrays as they don't really change, 
    // but the specific descriptions are mapped if needed.
    const toppers = [
        { name: "Ananya S.", score: "620/625", percentile: "99.2%", subject: "State Topper (Rank 5)" },
        { name: "Karthik R.", score: "615/625", percentile: "98.4%", subject: "District Topper" },
        { name: "Meghana V.", score: "612/625", percentile: "97.9%", subject: "School Topper (Science: 100)" },
        { name: "Srinivas K.", score: "608/625", percentile: "97.2%", subject: "School Topper (Math: 100)" },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
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

            {/* Main SSLC Results Highlight */}
            <section className="py-20 bg-white border-b border-border-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-14 items-center">
                        <div className="lg:w-1/2">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 text-secondary border border-amber-100 text-sm font-bold mb-6">
                                <Medal size={16} /> {t.latestResultBadge}
                            </div>
                            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6 leading-snug">
                                {t.mainTitle}
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                {t.mainDesc}
                            </p>
                            <div className="grid grid-cols-2 gap-5">
                                <div className="bg-accent-bg border border-border-light p-6 rounded-2xl text-center">
                                    <div className="font-serif text-4xl font-bold text-primary mb-1">95+</div>
                                    <div className="text-gray-500 font-medium text-sm">{t.distinctions}</div>
                                </div>
                                <div className="bg-[#fffbf0] border border-amber-100 p-6 rounded-2xl text-center">
                                    <div className="font-serif text-4xl font-bold text-secondary mb-1">45+</div>
                                    <div className="text-gray-500 font-medium text-sm">{t.centums}</div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-5/12">
                            <div className="bg-white p-8 rounded-2xl shadow-md border border-border-light">
                                <h3 className="font-serif text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                    <Trophy className="text-secondary" size={24} /> {t.topPerformersTitle}
                                </h3>
                                <div className="space-y-3">
                                    {toppers.map((topper, i) => (
                                        <div key={i} className="flex justify-between items-center p-4 hover:bg-accent-bg rounded-xl transition-colors border border-transparent hover:border-border-light">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold font-serif shrink-0">
                                                    {i + 1}
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-gray-900 text-sm">{topper.name}</p>
                                                    <p className="text-xs text-secondary font-medium">{topper.subject}</p>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <p className="font-bold text-primary">{topper.score}</p>
                                                <p className="text-xs text-gray-400">{topper.percentile}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Awards */}
            <section className="py-20 bg-accent-bg border-b border-border-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <p className="text-secondary font-semibold text-xs tracking-[0.18em] uppercase mb-3">{t.recognitionEyebrow}</p>
                        <h2 className="font-serif text-3xl font-bold text-primary">{t.recognitionTitle}</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
                        {[
                            { Icon: Award, title: t.award1Title, body: t.award1Body, color: "text-amber-600 bg-amber-50" },
                            { Icon: Star, title: t.award2Title, body: t.award2Body, color: "text-blue-600 bg-blue-50" },
                            { Icon: TrendingUp, title: t.award3Title, body: t.award3Body, color: "text-emerald-700 bg-emerald-50" },
                        ].map(({ Icon, title, body, color }) => (
                            <div key={title} className="bg-white rounded-2xl p-8 shadow-sm border border-border-light flex gap-5 hover:shadow-md transition-shadow">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${color}`}>
                                    <Icon size={22} />
                                </div>
                                <div>
                                    <h3 className="font-serif font-bold text-gray-900 text-lg mb-2">{title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Extracurricular */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <p className="text-secondary font-semibold text-xs tracking-[0.18em] uppercase mb-3">{t.beyondEyebrow}</p>
                        <h2 className="font-serif text-3xl font-bold text-primary">{t.beyondTitle}</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-14 items-center">
                        <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg border border-border-light">
                            <Image src="/images/gallery/gallery-1.webp" alt="Sports Achievements" fill className="object-cover" />
                        </div>
                        <div className="space-y-8">
                            {[
                                { title: t.beyond1Title, body: t.beyond1Body, accent: "border-primary" },
                                { title: t.beyond2Title, body: t.beyond2Body, accent: "border-secondary" },
                                { title: t.beyond3Title, body: t.beyond3Body, accent: "border-blue-300" },
                            ].map(({ title, body, accent }) => (
                                <div key={title} className={`border-l-4 ${accent} pl-6`}>
                                    <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">{title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
