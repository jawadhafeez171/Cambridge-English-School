import Image from "next/image";
import Link from "next/link";
import { Heart, Music, Trophy, Palette, BookOpen, Users } from "lucide-react";
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/i18n.config";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const locale = lang as Locale;
    const dict = await getDictionary(locale);
    return {
        title: dict.studentLifePage.heroTitle,
        description: dict.studentLifePage.heroDesc,
        alternates: { canonical: `/${locale}/student-life` },
        openGraph: { title: dict.studentLifePage.heroTitle, url: `/${locale}/student-life` },
    };
}

// A curated selection of lively student photos from the gallery
const collagePhotos = [
    { src: "/images/gallery/gallery-32.webp", span: "col-span-2 row-span-2" },
    { src: "/images/gallery/gallery-40.webp", span: "col-span-1 row-span-1" },
    { src: "/images/gallery/gallery-55.webp", span: "col-span-1 row-span-1" },
    { src: "/images/gallery/gallery-63.webp", span: "col-span-1 row-span-1" },
    { src: "/images/gallery/gallery-78.webp", span: "col-span-1 row-span-1" },
    { src: "/images/gallery/gallery-67.webp", span: "col-span-2 row-span-1" },
    { src: "/images/gallery/gallery-90.webp", span: "col-span-1 row-span-1" },
    { src: "/images/gallery/gallery-98.webp", span: "col-span-1 row-span-1" },
];

export default async function StudentLife({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const locale = lang as Locale;
    const dict = await getDictionary(locale);
    const t = dict.studentLifePage;

    const activities = [
        { icon: Trophy, title: t.act1Title, desc: t.act1Body, color: "text-orange-600 bg-orange-50" },
        { icon: Music, title: t.act2Title, desc: t.act2Body, color: "text-purple-600 bg-purple-50" },
        { icon: Palette, title: t.act3Title, desc: t.act3Body, color: "text-pink-600 bg-pink-50" },
        { icon: BookOpen, title: t.act4Title, desc: t.act4Body, color: "text-blue-600 bg-blue-50" },
        { icon: Heart, title: t.act5Title, desc: t.act5Body, color: "text-red-600 bg-red-50" },
        { icon: Users, title: t.act6Title, desc: t.act6Body, color: "text-emerald-600 bg-emerald-50" },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Page Header */}
            <section className="relative bg-primary text-white py-20 md:py-28 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/gallery/gallery-32.webp')] bg-cover bg-center opacity-15" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-primary-light/80" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <p className="text-secondary-light font-semibold text-xs tracking-[0.2em] uppercase mb-4">{t.heroEyebrow}</p>
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">{t.heroTitle}</h1>
                    <div className="h-[2px] w-16 bg-secondary mx-auto mb-6" />
                    <p className="text-blue-100/80 max-w-xl mx-auto text-lg">
                        {t.heroDesc}
                    </p>
                </div>
            </section>

            {/* Photo Collage */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <p className="text-secondary font-semibold text-xs tracking-[0.18em] uppercase mb-2">{t.momentsEyebrow}</p>
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">{t.momentsTitle}</h2>
                    </div>

                    {/* Mobile: 2-col grid */}
                    <div className="md:hidden grid grid-cols-2 gap-3">
                        {collagePhotos.slice(0, 6).map((p, i) => (
                            <div key={i} className="relative rounded-xl overflow-hidden aspect-square">
                                <Image src={p.src} alt={`Student life ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-500" />
                            </div>
                        ))}
                    </div>

                    {/* Desktop: mosaic */}
                    <div className="hidden md:grid grid-cols-4 grid-rows-3 gap-3 h-[580px]">
                        {collagePhotos.map((p, i) => (
                            <div key={i} className={`${p.span} relative rounded-2xl overflow-hidden group`}>
                                <Image src={p.src} alt={`Student life ${i + 1}`} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <Link href={`/${locale}/gallery`} className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-7 py-3 rounded-full hover:bg-primary-light transition-colors text-sm">
                            {t.viewGalleryBtn}
                        </Link>
                    </div>
                </div>
            </section>

            {/* Activities Grid */}
            <section className="py-16 bg-accent-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <p className="text-secondary font-semibold text-xs tracking-[0.18em] uppercase mb-2">{t.offerEyebrow}</p>
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">{t.offerTitle}</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {activities.map(({ icon: Icon, title, desc, color }) => (
                            <div key={title} className="bg-white rounded-2xl p-7 shadow-sm border border-border-light hover:shadow-md hover:-translate-y-1 transition-all group">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${color} group-hover:scale-110 transition-transform`}>
                                    <Icon size={22} />
                                </div>
                                <h3 className="font-serif font-bold text-gray-900 text-lg mb-2">{title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* More gallery strip */}
            <section className="py-0 bg-white overflow-hidden">
                <div className="flex gap-2 overflow-x-auto pb-0 scrollbar-hide">
                    {[45, 50, 56, 60, 70, 80, 85, 92, 100, 105].map((n) => (
                        <div key={n} className="relative shrink-0 w-48 h-48 md:w-64 md:h-64 rounded-none overflow-hidden">
                            <Image src={`/images/gallery/gallery-${n}.webp`} alt={`Student ${n}`} fill className="object-cover hover:scale-110 transition-transform duration-500" />
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-primary text-white text-center">
                <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">{t.ctaTitle}</h2>
                <p className="text-blue-200 mb-8 max-w-lg mx-auto">{t.ctaDesc}</p>
                <Link href={`/${locale}/admissions`} className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-light text-white font-bold px-9 py-4 rounded-full transition-all shadow-lg">
                    {t.applyBtn}
                </Link>
            </section>
        </div>
    );
}
