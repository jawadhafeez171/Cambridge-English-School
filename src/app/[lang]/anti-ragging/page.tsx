import { ShieldCheck, Phone, Mail, AlertOctagon, Heart, BookOpen } from "lucide-react";
import Link from "next/link";
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/i18n.config";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const locale = lang as Locale;
    const dict = await getDictionary(locale);
    return {
        title: dict.antiRaggingPage.heroTitle,
        description: dict.antiRaggingPage.heroDesc,
        alternates: { canonical: `/${locale}/anti-ragging` },
        openGraph: { title: dict.antiRaggingPage.heroTitle, url: `/${locale}/anti-ragging` },
    };
}

export default async function AntiRagging({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const locale = lang as Locale;
    const dict = await getDictionary(locale);
    const t = dict.antiRaggingPage;

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

            {/* Commitment Banner */}
            <section className="py-10 bg-emerald-50 border-b border-emerald-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex items-start gap-4">
                    <ShieldCheck className="text-emerald-600 shrink-0 mt-1" size={24} />
                    <p className="text-emerald-800 text-sm leading-relaxed">
                        <strong>{t.declaration}:</strong> {t.declarationNote}
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
                            <h2 className="font-serif text-xl font-bold text-primary">{t.whatConstitutesTitle}</h2>
                        </div>
                        <ul className="space-y-3">
                            {[
                                t.ragging1,
                                t.ragging2,
                                t.ragging3,
                                t.ragging4,
                                t.ragging5,
                                t.ragging6,
                                t.ragging7,
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
                            <h2 className="font-serif text-xl font-bold text-primary">{t.respTitle}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                                <h3 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide">{t.respStudent}</h3>
                                <ul className="space-y-2">
                                    {[
                                        t.respStudent1,
                                        t.respStudent2,
                                        t.respStudent3,
                                        t.respStudent4,
                                    ].map((r, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />{r}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide">{t.respTeacher}</h3>
                                <ul className="space-y-2">
                                    {[
                                        t.respTeacher1,
                                        t.respTeacher2,
                                        t.respTeacher3,
                                        t.respTeacher4,
                                    ].map((r, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />{r}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide">{t.respParent}</h3>
                                <ul className="space-y-2">
                                    {[
                                        t.respParent1,
                                        t.respParent2,
                                        t.respParent3,
                                        t.respParent4,
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
                            <h2 className="font-serif text-xl font-bold text-primary">{t.consequencesTitle}</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { step: t.cStep1, action: t.cStep1Desc },
                                { step: t.cStep2, action: t.cStep2Desc },
                                { step: t.cStep3, action: t.cStep3Desc },
                                { step: t.cStep4, action: t.cStep4Desc },
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
                            <h2 className="font-serif text-xl font-bold text-white">{t.commitmentTitle}</h2>
                        </div>
                        <p className="text-blue-200/80 text-sm leading-relaxed max-w-3xl">
                            {t.commitmentDesc}
                        </p>
                    </div>
                </div>
            </section>

            {/* Report Section */}
            <section className="py-14 bg-red-50 border-t border-red-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <AlertOctagon className="text-red-600 mx-auto mb-4" size={32} />
                    <h2 className="font-serif text-2xl font-bold text-primary mb-3">{t.reportTitle}</h2>
                    <p className="text-gray-600 text-sm mb-8 max-w-lg mx-auto">
                        {t.reportDesc}
                    </p>
                    <div className="flex justify-center">
                        <Link href={`/${locale}/contact`} className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-7 py-3 rounded-full hover:bg-primary-light transition-colors text-sm">
                            <Mail size={16} /> {t.reportBtn}
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}
