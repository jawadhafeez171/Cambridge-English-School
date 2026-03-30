import { BookOpen, GraduationCap, Users, PenTool, LayoutTemplate, Activity, Award, Monitor, Globe } from "lucide-react";
import Image from "next/image";
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/i18n.config";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const locale = lang as Locale;
    const dict = await getDictionary(locale);
    return {
        title: dict.academicsPage.heroTitle,
        description: dict.academicsPage.heroDescription,
        alternates: { canonical: `/${locale}/academics` },
        openGraph: { title: dict.academicsPage.heroTitle, url: `/${locale}/academics` },
    };
}

export default async function Academics({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const locale = lang as Locale;
    const dict = await getDictionary(locale);
    const t = dict.academicsPage;

    return (
        <div className="flex flex-col min-h-screen">
            {/* Page Header */}
            <section className="relative bg-primary text-white py-20 md:py-28 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/gallery/gallery-29.webp')] bg-cover bg-center opacity-10" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary-light/80" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <p className="text-secondary-light font-semibold text-xs tracking-[0.2em] uppercase mb-4">{t.heroEyebrow}</p>
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">{t.heroTitle}</h1>
                    <div className="h-[2px] w-16 bg-secondary mx-auto mb-6" />
                    <p className="text-blue-100/80 max-w-xl mx-auto text-lg">
                        {t.heroDescription}
                    </p>
                </div>
            </section>

            {/* Curriculum Overview */}
            <section className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-14 items-center">
                        <div>
                            <p className="text-secondary font-semibold text-xs tracking-[0.18em] uppercase mb-4">{t.curriculumEyebrow}</p>
                            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6 leading-snug">
                                {t.curriculumTitle}
                            </h2>
                            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                                {t.curriculumDescription}
                            </p>

                            <div className="space-y-6">
                                {[
                                    {
                                        Icon: LayoutTemplate,
                                        step: "01",
                                        title: t.step1Title,
                                        body: t.step1Body
                                    },
                                    {
                                        Icon: Users,
                                        step: "02",
                                        title: t.step2Title,
                                        body: t.step2Body
                                    },
                                    {
                                        Icon: BookOpen,
                                        step: "03",
                                        title: t.step3Title,
                                        body: t.step3Body
                                    },
                                    {
                                        Icon: Globe,
                                        step: "04",
                                        title: t.step4Title,
                                        body: t.step4Body
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
                                        <span className="text-secondary-light text-xs font-semibold uppercase tracking-wider">{t.digiLearning}</span>
                                    </div>
                                    <h3 className="font-serif text-2xl font-bold mb-1">{t.digiTitle}</h3>
                                    <p className="text-gray-200/80 text-sm">{t.digiDesc}</p>
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
                            <p className="text-secondary-light font-semibold text-xs tracking-[0.2em] uppercase mb-4">{t.approachEyebrow}</p>
                            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">{t.approachTitle}</h2>
                            <p className="text-blue-200/80 mb-8 leading-relaxed text-lg">
                                {t.approachDesc}
                            </p>
                            <ul className="space-y-4">
                                {[
                                    t.approachListItem1,
                                    t.approachListItem2,
                                    t.approachListItem3,
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
                        <p className="text-secondary font-semibold text-xs tracking-[0.18em] uppercase mb-3">{t.sslcEyebrow}</p>
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">{t.sslcTitle}</h2>
                        <p className="text-gray-500 max-w-xl mx-auto mt-4">
                            {t.sslcDesc}
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-7">
                        {[
                            { Icon: PenTool, title: t.sslcBox1Title, body: t.sslcBox1Body, accent: "bg-amber-50 text-amber-600" },
                            { Icon: GraduationCap, title: t.sslcBox2Title, body: t.sslcBox2Body, accent: "bg-blue-50 text-blue-600" },
                            { Icon: BookOpen, title: t.sslcBox3Title, body: t.sslcBox3Body, accent: "bg-emerald-50 text-emerald-700" },
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
                            <p className="text-secondary font-semibold text-xs tracking-[0.18em] uppercase mb-4">{t.beyondEyebrow}</p>
                            <h2 className="font-serif text-3xl font-bold text-primary mb-6">{t.beyondTitle}</h2>
                            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                                {t.beyondDesc}
                            </p>
                            <ul className="space-y-6">
                                {[
                                    { Icon: Activity, title: t.beyondBox1Title, body: t.beyondBox1Body },
                                    { Icon: BookOpen, title: t.beyondBox2Title, body: t.beyondBox2Body },
                                    { Icon: Award, title: t.beyondBox3Title, body: t.beyondBox3Body },
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
