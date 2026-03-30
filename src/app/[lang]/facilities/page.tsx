import Image from "next/image";
import Link from "next/link";
import { Monitor, FlaskConical, BookOpen, Trophy } from "lucide-react";
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/i18n.config";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const locale = lang as Locale;
    const t = await getDictionary(locale);
    return {
        title: t.facilitiesPage.metaTitle,
        description: t.facilitiesPage.metaDesc,
        alternates: { canonical: `/${locale}/facilities` },
        openGraph: { title: t.facilitiesPage.metaTitle, url: `/${locale}/facilities` },
    };
}

export default async function Facilities({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const locale = lang as Locale;
    const t = await getDictionary(locale);
    const f = t.facilitiesPage;

    const facilities = [
        { title: f.f1Title, description: f.f1Desc, icon: Monitor, image: "/images/classroom-1.webp", accent: "text-indigo-600 bg-indigo-50" },
        { title: f.f2Title, description: f.f2Desc, icon: Monitor, image: "/images/classroom-2.webp", accent: "text-violet-600 bg-violet-50" },
        { title: f.f3Title, description: f.f3Desc, icon: FlaskConical, image: "/images/gallery/gallery-24.webp", accent: "text-amber-600 bg-amber-50" },
        { title: f.f4Title, description: f.f4Desc, icon: Monitor, image: "/images/gallery/gallery-12.webp", accent: "text-blue-600 bg-blue-50" },
        { title: f.f5Title, description: f.f5Desc, icon: BookOpen, image: "/images/gallery/gallery-9.webp", accent: "text-emerald-700 bg-emerald-50" },
        { title: f.f6Title, description: f.f6Desc, icon: Trophy, image: "/images/gallery/gallery-11.webp", accent: "text-orange-600 bg-orange-50" },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <section className="relative bg-primary text-white py-20 md:py-28 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary-light/80" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <p className="text-secondary-light font-semibold text-xs tracking-[0.2em] uppercase mb-4">{f.heroEyebrow}</p>
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">{f.heroTitle}</h1>
                    <div className="h-[2px] w-16 bg-secondary mx-auto mb-6" />
                    <p className="text-blue-100/80 max-w-xl mx-auto text-lg">
                        {f.heroDesc}
                    </p>
                </div>
            </section>

            {/* Intro */}
            <section className="py-16 bg-white border-b border-border-light">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-4">{f.introTitle}</h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        {f.introDesc}
                    </p>
                </div>
            </section>

            {/* Facilities Grid */}
            <section className="py-20 bg-accent-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
                        {facilities.map(({ title, description, icon: Icon, image, accent }, index) => (
                            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border-light hover:shadow-lg transition-all hover:-translate-y-1 group flex flex-col">
                                <div className="relative h-52 w-full overflow-hidden">
                                    <Image src={image} alt={title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                </div>
                                <div className="p-6 flex-grow flex flex-col">
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${accent}`}>
                                        <Icon size={20} />
                                    </div>
                                    <h3 className="font-serif font-bold text-gray-900 text-lg mb-2">{title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed flex-grow">{description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-white">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <div className="bg-accent-bg border border-border-light rounded-2xl p-12">
                        <h2 className="font-serif text-3xl font-bold text-primary mb-4">{f.ctaTitle}</h2>
                        <p className="text-gray-600 mb-8">
                            {f.ctaDesc}
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href={`/${locale}/contact`} className="bg-primary hover:bg-primary-light text-white font-bold py-3 px-8 rounded-full transition-all shadow-sm hover:shadow-md inline-block">
                                {f.ctaBtn1}
                            </Link>
                            <a href="tel:+919845332367" className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-3 px-8 rounded-full transition-all inline-block">
                                {f.ctaBtn2}
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
