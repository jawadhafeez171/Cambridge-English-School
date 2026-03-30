import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Award, Shield, CheckCircle, Monitor } from "lucide-react";
import VideoCarousel from "@/components/VideoCarousel";
import type { Metadata } from "next";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = lang as Locale;
  const t = await getDictionary(locale);
  
  return (
    <div className="flex flex-col min-h-screen">

      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="relative w-full min-h-[92vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/School.webp"
            alt="Cambridge English School Campus"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c1f6e]/90 via-[#0c1f6e]/70 to-[#0c1f6e]/30" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6 fade-in">
              <span className="h-[2px] w-10 bg-secondary" />
              <span className="text-secondary font-semibold text-xs tracking-[0.2em] uppercase">{t.home.heroEyebrow}</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 fade-in-up text-shadow">
              {t.home.heroTitle1}<br />
              <span className="text-secondary-light italic">{t.home.heroTitle2}</span>
            </h1>

            <p className="text-blue-100/90 text-lg md:text-xl mb-10 leading-relaxed max-w-xl fade-in-up">
              {t.home.heroDescription}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 fade-in-up">
              <Link href={`/${locale}/admissions`} className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-light text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl group">
                {t.home.applyForAdmission}
                <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href={`/${locale}/about`} className="inline-flex items-center justify-center border-2 border-white/60 hover:border-white text-white font-semibold px-8 py-4 rounded-full transition-all hover:bg-white/10">
                {t.home.ourStory}
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-white/95 backdrop-blur-sm rounded-t-2xl shadow-2xl grid grid-cols-2 md:grid-cols-4 divide-y divide-gray-100 md:divide-y-0 md:divide-x">
              {[
                { num: t.home.stat1Num, label: t.home.stat1Label },
                { num: t.home.stat2Num, label: t.home.stat2Label },
                { num: t.home.stat3Num, label: t.home.stat3Label },
                { num: t.home.stat4Num, label: t.home.stat4Label },
              ].map(({ num, label }, i) => (
                <div key={label} className={`py-4 px-4 text-center ${i % 2 === 0 ? "border-r border-gray-100" : ""} ${i < 2 ? "md:border-r-0" : ""}`}>
                  <div className="text-xl md:text-3xl font-serif font-bold text-primary">{num}</div>
                  <div className="text-[11px] text-gray-500 font-medium mt-1 leading-tight">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── HIGHLIGHTS ───────────────────────────────────────────── */}
      <section className="py-24 bg-accent-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="decorative-line text-secondary font-semibold text-xs tracking-[0.18em] uppercase inline-flex items-center">{t.home.whyChooseUs}</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mt-3">{t.home.whatSetsUsApart}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { Icon: CheckCircle, title: t.home.feature1Title, body: t.home.feature1Body, color: "text-blue-600 bg-blue-50" },
              { Icon: BookOpen, title: t.home.feature2Title, body: t.home.feature2Body, color: "text-indigo-600 bg-indigo-50" },
              { Icon: Award, title: t.home.feature3Title, body: t.home.feature3Body, color: "text-amber-600 bg-amber-50" },
              { Icon: Monitor, title: t.home.feature4Title, body: t.home.feature4Body, color: "text-emerald-600 bg-emerald-50" },
            ].map(({ Icon, title, body, color }) => (
              <div key={title} className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-border-light group">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${color} transition-transform group-hover:scale-110`}>
                  <Icon size={24} />
                </div>
                <h3 className="font-serif font-bold text-gray-900 text-lg mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT SECTION ────────────────────────────────────────── */}
      <section className="py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-16 items-center">
            {/* Image side */}
            <div className="lg:w-1/2 relative w-full">
              <div className="relative h-56 sm:h-72 lg:h-[480px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/gallery/gallery-24.webp"
                  alt="School Campus"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-primary text-white rounded-2xl p-6 shadow-xl hidden md:block">
                <div className="font-serif text-4xl font-bold text-secondary-light">23+</div>
                <div className="text-xs text-blue-200 font-medium tracking-wide mt-1 uppercase">Years of<br />Excellence</div>
              </div>
              <div className="absolute -top-5 -left-5 w-24 h-24 bg-secondary/10 rounded-2xl -z-10 hidden md:block" />
            </div>

            {/* Text side */}
            <div className="lg:w-1/2">
              <p className="decorative-line text-secondary font-semibold text-xs tracking-[0.18em] uppercase inline-flex items-center mb-4">{t.home.aboutUs}</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6 leading-snug">
                {t.home.aboutTitle1}<br />
                <span className="italic text-secondary">{t.home.aboutTitle2}</span>
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed text-lg">
                {t.home.aboutDescription1}
              </p>
              <p className="text-gray-500 mb-8 leading-relaxed">
                {t.home.aboutDescription2}
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <Link href={`/${locale}/about`} className="inline-flex items-center font-semibold text-primary hover:text-primary-light transition-colors group gap-2">
                  {t.home.readOurFullStory}
                  <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href={`/${locale}/principal`} className="inline-flex items-center font-semibold text-secondary hover:text-secondary-light transition-colors group gap-2 border-l border-gray-200 pl-6">
                  {t.home.principalsMessage}
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DARK STATS BAND ──────────────────────────────────────── */}
      <section className="py-16 bg-[#0a1847]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: t.home.darkStat1Num, label: t.home.darkStat1Label },
              { num: t.home.darkStat2Num, label: t.home.darkStat2Label },
              { num: t.home.darkStat3Num, label: t.home.darkStat3Label },
              { num: t.home.darkStat4Num, label: t.home.darkStat4Label },
            ].map(({ num, label }) => (
              <div key={label} className="relative">
                <div className="font-serif text-4xl md:text-5xl font-bold text-secondary-light mb-2">{num}</div>
                <div className="text-blue-200/70 text-sm font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─────────────────────────────────────────── */}
      <section className="py-24 bg-accent-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="decorative-line text-secondary font-semibold text-xs tracking-[0.18em] uppercase inline-flex items-center">{t.home.testimonials}</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mt-3">{t.home.whatParentsSay}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {[
              { text: t.home.testimonial1Text, author: t.home.testimonial1Author, role: t.home.testimonial1Role },
              { text: t.home.testimonial2Text, author: t.home.testimonial2Author, role: t.home.testimonial2Role },
              { text: t.home.testimonial3Text, author: t.home.testimonial3Author, role: t.home.testimonial3Role },
            ].map(({ text, author, role }, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-border-light relative overflow-hidden hover:shadow-md transition-shadow">
                <div className="font-serif text-8xl text-secondary/10 absolute -top-4 -left-2 leading-none select-none">&ldquo;</div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 relative z-10 italic">&ldquo;{text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold font-serif text-sm shrink-0">
                    {author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{author}</p>
                    <p className="text-gray-400 text-xs">{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PHOTO COLLAGE ─────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-secondary font-semibold text-xs tracking-[0.18em] uppercase mb-3">{t.home.campusLife}</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">{t.home.momentsAtCambridge}</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">{t.home.campusLifeDescription}</p>
          </div>

          {/* Mobile: simple 2-col grid. Desktop: mosaic layout */}
          <div className="md:hidden grid grid-cols-2 gap-3">
            {[
              "/images/gallery/gallery-32.webp",
              "/images/gallery/gallery-40.webp",
              "/images/gallery/gallery-55.webp",
              "/images/gallery/gallery-67.webp",
              "/images/gallery/gallery-78.webp",
              "/images/gallery/gallery-90.webp",
            ].map((src, i) => (
              <div key={i} className="relative rounded-xl overflow-hidden aspect-square">
                <Image src={src} alt="School event" fill className="object-cover" />
              </div>
            ))}
          </div>

          {/* Desktop: full mosaic */}
          <div className="hidden md:grid grid-cols-4 grid-rows-3 gap-3 h-[600px]">
            {/* Large left image */}
            <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden group">
              <Image src="/images/gallery/gallery-32.webp" alt="School event" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden group">
              <Image src="/images/gallery/gallery-40.webp" alt="School event" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden group">
              <Image src="/images/gallery/gallery-55.webp" alt="School event" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden group">
              <Image src="/images/gallery/gallery-67.webp" alt="School event" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden group">
              <Image src="/images/gallery/gallery-78.webp" alt="School event" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="col-span-2 row-span-1 relative rounded-2xl overflow-hidden group">
              <Image src="/images/gallery/gallery-90.webp" alt="School event" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden group">
              <Image src="/images/gallery/gallery-98.webp" alt="School event" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden group">
              <Image src="/images/gallery/gallery-108.webp" alt="View all photos" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <Link href={`/${locale}/gallery`} className="absolute inset-0 bg-primary/75 flex flex-col items-center justify-center text-white hover:bg-primary/90 transition-colors">
                <span className="font-serif text-2xl font-bold">108+</span>
                <span className="text-xs mt-1 font-semibold uppercase tracking-wider opacity-90">{t.home.viewAll}</span>
              </Link>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href={`/${locale}/gallery`} className="inline-flex items-center gap-2 text-primary hover:text-primary-light font-semibold transition-colors">
              {t.home.browseFullGallery} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FEATURED VIDEOS ────────────────────────────────────────── */}
      <section className="py-24 bg-accent-bg border-t border-border-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="decorative-line text-secondary font-semibold text-xs tracking-[0.18em] uppercase inline-flex items-center">{t.home.schoolHighlights}</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mt-3 text-shadow-sm">{t.home.featuredVideos}</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">{t.home.featuredVideosDescription}</p>
          </div>
          
          <VideoCarousel />
        </div>
      </section>

      {/* ─── CTA BANNER ───────────────────────────────────────────── */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white transform translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white transform -translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4 leading-snug">
            {t.home.readyToJoin}
          </h2>
          <p className="text-blue-200 mb-10 text-lg">
            {t.home.readyToJoinDescription}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href={`/${locale}/admissions`} className="bg-secondary hover:bg-secondary-light text-white font-bold px-10 py-4 rounded-full transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2">
              {t.home.applyForAdmission} <ArrowRight size={17} />
            </Link>
            <Link href={`/${locale}/contact`} className="border-2 border-white/40 hover:border-white text-white font-semibold px-10 py-4 rounded-full transition-all inline-flex items-center justify-center">
              {t.home.contactUs}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
