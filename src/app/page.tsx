import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Award, Shield, CheckCircle, Monitor } from "lucide-react";

export default function Home() {
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
              <span className="text-secondary font-semibold text-xs tracking-[0.2em] uppercase">Doddaballapur · Est. 2002</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 fade-in-up text-shadow">
              Strong Foundations.<br />
              <span className="text-secondary-light italic">Bright Futures.</span>
            </h1>

            <p className="text-blue-100/90 text-lg md:text-xl mb-10 leading-relaxed max-w-xl fade-in-up">
              A disciplined, result-oriented State Board school offering quality English‑medium education at affordable fees in Doddaballapur.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 fade-in-up">
              <Link href="/admissions" className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-light text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl group">
                Apply for Admission
                <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center border-2 border-white/60 hover:border-white text-white font-semibold px-8 py-4 rounded-full transition-all hover:bg-white/10">
                Book Campus Visit
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-white/95 backdrop-blur-sm rounded-t-2xl shadow-2xl grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
              {[
                { num: "100%", label: "SSLC Results (10 yrs)" },
                { num: "20+", label: "Years of Excellence" },
                { num: "800+", label: "Students Enrolled" },
                { num: "50+", label: "District Toppers" },
              ].map(({ num, label }) => (
                <div key={label} className="py-5 px-6 text-center">
                  <div className="text-2xl md:text-3xl font-serif font-bold text-primary">{num}</div>
                  <div className="text-xs text-gray-500 font-medium mt-1">{label}</div>
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
            <p className="decorative-line text-secondary font-semibold text-xs tracking-[0.18em] uppercase inline-flex items-center">Why Choose Us</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mt-3">What Sets Us Apart</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { Icon: CheckCircle, title: "Admissions Open", body: "Pre-Nursery to 5th STD seats available for the upcoming academic year.", color: "text-blue-600 bg-blue-50" },
              { Icon: BookOpen, title: "State Board Curriculum", body: "Rigorous adherence to Karnataka State Board — core concepts, deeply mastered.", color: "text-indigo-600 bg-indigo-50" },
              { Icon: Award, title: "100% Results (10 yrs)", body: "An unbroken track record of 100% pass results in SSLC board examinations.", color: "text-amber-600 bg-amber-50" },
              { Icon: Monitor, title: "AI Digital Classrooms", body: "AI-model digital classrooms with Smart TVs and Tabs, introduced in 2025–26.", color: "text-emerald-600 bg-emerald-50" },
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Image side */}
            <div className="lg:w-1/2 relative">
              <div className="relative h-[480px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/gallery/gallery-24.webp"
                  alt="School Campus"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-primary text-white rounded-2xl p-6 shadow-xl hidden md:block">
                <div className="font-serif text-4xl font-bold text-secondary-light">22+</div>
                <div className="text-xs text-blue-200 font-medium tracking-wide mt-1 uppercase">Years of<br />Excellence</div>
              </div>
              <div className="absolute -top-5 -left-5 w-24 h-24 bg-secondary/10 rounded-2xl -z-10 hidden md:block" />
            </div>

            {/* Text side */}
            <div className="lg:w-1/2">
              <p className="decorative-line text-secondary font-semibold text-xs tracking-[0.18em] uppercase inline-flex items-center mb-4">About Us</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6 leading-snug">
                Nurturing Excellence in<br />
                <span className="italic text-secondary">Doddaballapur</span>
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed text-lg">
                Founded in 2002, Cambridge English School has grown from a humble start of 22 students to one of Doddaballapur&apos;s most trusted English-medium institutions.
              </p>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Our deeply structured, result-oriented approach has produced a consistent 100% SSLC pass rate since our first batch in 2015. We focus on discipline, integrity, and rigorous academic preparation.
              </p>
              <Link href="/about" className="inline-flex items-center font-semibold text-primary hover:text-primary-light transition-colors group gap-2">
                Read our full story
                <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DARK STATS BAND ──────────────────────────────────────── */}
      <section className="py-16 bg-[#0a1847]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: "100%", label: "SSLC Pass Rate" },
              { num: "22+", label: "Years of Excellence" },
              { num: "30:1", label: "Student-Teacher Ratio" },
              { num: "50+", label: "District Toppers" },
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
            <p className="decorative-line text-secondary font-semibold text-xs tracking-[0.18em] uppercase inline-flex items-center">Testimonials</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mt-3">What Parents Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {[
              { text: "The discipline and focus on academics here is unmatched. My son's English communication has improved drastically, and he achieved an outstanding score in his SSLC exams.", author: "Ramesh K.", role: "Parent of Grade 10 Student" },
              { text: "We wanted quality English-medium education at reasonable fees in Doddaballapur. Cambridge English School exceeded our expectations. The teachers are incredibly dedicated.", author: "Sunita M.", role: "Parent of Grade 7 Student" },
              { text: "The emphasis on moral values along with studies is what makes this school special. The campus is safe, teachers are approachable, and my daughter loves going to school.", author: "Prakash V.", role: "Parent of Grade 4 Student" },
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
            <p className="text-secondary font-semibold text-xs tracking-[0.18em] uppercase mb-3">Campus Life</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">Moments at Cambridge</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">A glimpse into the vibrant daily life of our students on campus.</p>
          </div>

          {/* Mosaic Collage Grid */}
          <div className="grid grid-cols-4 grid-rows-3 gap-3 h-[520px] md:h-[600px]">
            {/* Large left image */}
            <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden group">
              <Image src="/images/gallery/gallery-32.webp" alt="School event" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            {/* Top right small */}
            <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden group">
              <Image src="/images/gallery/gallery-40.webp" alt="School event" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            {/* Top far right small */}
            <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden group">
              <Image src="/images/gallery/gallery-55.webp" alt="School event" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            {/* Middle right small */}
            <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden group">
              <Image src="/images/gallery/gallery-67.webp" alt="School event" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            {/* Middle far right small */}
            <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden group">
              <Image src="/images/gallery/gallery-78.webp" alt="School event" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            {/* Bottom row: 3 wide images */}
            <div className="col-span-2 row-span-1 relative rounded-2xl overflow-hidden group">
              <Image src="/images/gallery/gallery-90.webp" alt="School event" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden group">
              <Image src="/images/gallery/gallery-98.webp" alt="School event" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            {/* Last tile — "See all" overlay */}
            <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden group">
              <Image src="/images/gallery/gallery-108.webp" alt="View all photos" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <Link href="/gallery" className="absolute inset-0 bg-primary/75 flex flex-col items-center justify-center text-white hover:bg-primary/90 transition-colors">
                <span className="font-serif text-2xl font-bold">108+</span>
                <span className="text-xs mt-1 font-semibold uppercase tracking-wider opacity-90">View All</span>
              </Link>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/gallery" className="inline-flex items-center gap-2 text-primary hover:text-primary-light font-semibold transition-colors">
              Browse Full Gallery <ArrowRight size={16} />
            </Link>
          </div>
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
            Ready to Join Our School Community?
          </h2>
          <p className="text-blue-200 mb-10 text-lg">
            Admissions are open for Pre-Nursery to 5th STD. Limited seats available.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/admissions" className="bg-secondary hover:bg-secondary-light text-white font-bold px-10 py-4 rounded-full transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2">
              Apply for Admission <ArrowRight size={17} />
            </Link>
            <Link href="/contact" className="border-2 border-white/40 hover:border-white text-white font-semibold px-10 py-4 rounded-full transition-all inline-flex items-center justify-center">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
