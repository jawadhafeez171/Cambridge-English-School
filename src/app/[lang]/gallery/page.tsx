import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/i18n.config";
import GalleryClient from "./GalleryClient";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const locale = lang as Locale;
    const dict = await getDictionary(locale);
    return {
        title: dict.galleryPage.heroTitle,
        description: dict.galleryPage.heroDesc,
        alternates: { canonical: `/${locale}/gallery` },
        openGraph: { title: dict.galleryPage.heroTitle, url: `/${locale}/gallery` },
    };
}

export default async function Gallery({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const locale = lang as Locale;
    const dict = await getDictionary(locale);
    const t = dict.galleryPage;

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            {/* Page Header */}
            <section className="relative bg-primary text-white py-20 md:py-28 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/gallery/gallery-6.webp')] bg-cover bg-center opacity-10" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary-light/80" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <p className="text-secondary-light font-semibold text-xs tracking-[0.2em] uppercase mb-4">{t.heroEyebrow}</p>
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">{t.heroTitle}</h1>
                    <div className="h-[2px] w-16 bg-secondary mx-auto mb-6" />
                    <p className="text-blue-100/80 max-w-xl mx-auto text-lg">{t.heroDesc}</p>
                </div>
            </section>

            {/* Gallery Grid — Client Component handles filtering state */}
            <GalleryClient t={t} />
        </div>
    );
}
