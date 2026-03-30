import Image from "next/image";
import Link from "next/link";
import { Target, Compass, BookOpen, Shield, HeartHandshake, Award } from "lucide-react";
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/i18n.config";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const locale = lang as Locale;
    const t = await getDictionary(locale);
    return {
        title: t.aboutPage.metaTitle,
        description: t.aboutPage.metaDesc,
        alternates: { canonical: `/${locale}/about` },
        openGraph: { title: t.aboutPage.metaTitle, url: `/${locale}/about` },
    };
}

export default async function About({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const locale = lang as Locale;
    const t = await getDictionary(locale);
    return (
        <div className="flex flex-col min-h-screen">
            {/* Page Header */}
            <section className="relative bg-primary text-white py-20 md:py-28 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/gallery/gallery-5.webp')] bg-cover bg-center opacity-10" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary-light/80" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <p className="text-secondary-light font-semibold text-xs tracking-[0.2em] uppercase mb-4">{t.aboutPage.heroEyebrow}</p>
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">{t.aboutPage.heroTitle}</h1>
                    <div className="h-[2px] w-16 bg-secondary mx-auto mb-6" />
                    <p className="text-blue-100/80 max-w-xl mx-auto text-lg">
                        {t.aboutPage.heroSubtitle}
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
                            <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">{t.aboutPage.visionTitle}</h2>
                            <p className="text-gray-600 leading-relaxed flex-1">
                                {t.aboutPage.visionDesc}
                            </p>
                        </div>
                        <div className="bg-[#fffbf0] border border-amber-100 rounded-2xl p-10 flex flex-col">
                            <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary mb-6">
                                <Target size={28} />
                            </div>
                            <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">{t.aboutPage.missionTitle}</h2>
                            <p className="text-gray-600 leading-relaxed flex-1">
                                {t.aboutPage.missionDesc}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 bg-accent-bg border-y border-border-light">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <p className="text-secondary font-semibold text-xs tracking-[0.18em] uppercase mb-3">{t.aboutPage.valuesEyebrow}</p>
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">{t.aboutPage.valuesTitle}</h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { Icon: Shield, title: t.aboutPage.val1Title, body: t.aboutPage.val1Desc, color: "text-blue-600 bg-blue-50" },
                            { Icon: Target, title: t.aboutPage.val2Title, body: t.aboutPage.val2Desc, color: "text-primary bg-indigo-50" },
                            { Icon: HeartHandshake, title: t.aboutPage.val3Title, body: t.aboutPage.val3Desc, color: "text-amber-700 bg-amber-50" },
                            { Icon: BookOpen, title: t.aboutPage.val4Title, body: t.aboutPage.val4Desc, color: "text-emerald-700 bg-emerald-50" },
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
                                    <Image src="/images/principal-message.webp" alt={`${t.aboutPage.prinName} - ${t.aboutPage.prinRole}`} fill className="object-cover object-top" />
                                </div>
                                <div className="text-center mt-4 pb-1">
                                    <h3 className="font-serif font-bold text-lg text-gray-900">{t.aboutPage.prinName}</h3>
                                    <p className="text-secondary text-xs font-semibold uppercase tracking-wider mt-0.5">{t.aboutPage.prinRole}</p>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-3/5">
                            <p className="text-secondary font-semibold text-xs tracking-[0.18em] uppercase mb-4">{t.aboutPage.prinEyebrow}</p>
                            <h2 className="font-serif text-3xl font-bold text-primary mb-6">{t.aboutPage.prinTitle}</h2>
                            <p className="text-gray-600 mb-4 leading-relaxed text-lg">
                                {t.aboutPage.prinDesc1}
                            </p>
                            <p className="text-gray-500 mb-8 leading-relaxed">
                                {t.aboutPage.prinDesc2}
                            </p>
                            <Link href={`/${locale}/principal`} className="inline-flex items-center justify-center bg-primary hover:bg-primary-light text-white font-semibold py-3 px-7 rounded-full transition-all shadow-sm hover:shadow-md">
                                {t.aboutPage.readFull}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>


            {/* Journey / Milestones */}
            <section className="py-24 bg-[#0a1847] text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <p className="text-secondary-light font-semibold text-xs tracking-[0.2em] uppercase mb-4">{t.aboutPage.histEyebrow}</p>
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">{t.aboutPage.histTitle}</h2>
                        <div className="h-[2px] w-16 bg-secondary mx-auto mt-6" />
                    </div>

                    <div className="relative pl-8 border-l-2 border-white/10 space-y-12">
                        {[
                            { year: "2002–03", title: t.aboutPage.hist1Title, desc: t.aboutPage.hist1Desc },
                            { year: t.aboutPage.earlyYears || "Early Years", title: t.aboutPage.hist2Title, desc: t.aboutPage.hist2Desc },
                            { year: "2014", title: t.aboutPage.hist3Title, desc: t.aboutPage.hist3Desc },
                            { year: "2015", title: t.aboutPage.hist4Title, desc: t.aboutPage.hist4Desc },
                            { year: "2025–26", title: t.aboutPage.hist5Title, desc: t.aboutPage.hist5Desc },
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
