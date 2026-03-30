import Image from "next/image";
import Link from "next/link";
import { Quote } from "lucide-react";
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/i18n.config";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const locale = lang as Locale;
    const dict = await getDictionary(locale);
    return {
        title: dict.principalPage.heroTitle,
        description: dict.principalPage.heroDesc,
        alternates: { canonical: `/${locale}/principal` },
        openGraph: { title: dict.principalPage.heroTitle, url: `/${locale}/principal` },
    };
}

export default async function PrincipalMessage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const locale = lang as Locale;
    const dict = await getDictionary(locale);
    const t = dict.principalPage;

    return (
        <div className="flex flex-col min-h-screen bg-white">
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

            {/* Content */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-3xl shadow-sm border border-border-light overflow-hidden">
                        <div className="flex flex-col lg:flex-row">
                            {/* Photo */}
                            <div className="lg:w-2/5 relative h-[400px] lg:h-auto bg-gray-100">
                                <Image
                                    src="/images/principal-message.webp"
                                    alt={t.name}
                                    fill
                                    className="object-cover object-top"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent lg:bg-none" />
                            </div>

                            {/* Message */}
                            <div className="lg:w-3/5 p-8 md:p-12 relative">
                                <Quote size={60} className="absolute top-8 left-8 text-primary/5 z-0" />
                                <div className="relative z-10">
                                    {/* Name block */}
                                    <div className="inline-block bg-accent-bg border border-border-light rounded-xl px-5 py-3 mb-8">
                                        <h2 className="font-serif text-xl font-bold text-primary">{t.name}</h2>
                                        <p className="text-secondary text-xs font-semibold uppercase tracking-widest mt-0.5">{t.role}</p>
                                    </div>

                                    <div className="space-y-5 text-gray-600 leading-relaxed">
                                        <p><strong className="text-gray-900">{t.greeting}</strong></p>
                                        <p>{t.p1}</p>
                                        <p>{t.p2}</p>
                                        <p>{t.p3}</p>
                                        <p>{t.p4}</p>
                                        <p className="italic text-gray-500 border-l-2 border-secondary pl-4 mt-6">
                                            {t.quote}
                                        </p>
                                    </div>

                                    {/* Signature */}
                                    <div className="mt-10 pt-8 border-t border-border-light flex items-center gap-4">
                                        <div className="relative w-14 h-14">
                                            <Image src="/images/logo.webp" alt="School Logo" fill className="object-contain opacity-15" />
                                        </div>
                                        <div>
                                            <p className="font-serif font-bold text-gray-900 text-lg">{t.name}</p>
                                            <p className="text-sm text-gray-400 font-medium">{t.role.split(',')[0]}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 text-center">
                        <Link href={`/${locale}/about`} className="inline-flex items-center text-primary hover:text-primary-light font-semibold transition-colors">
                            {t.backBtn}
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
