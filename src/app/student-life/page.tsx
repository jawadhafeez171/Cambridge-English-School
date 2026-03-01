import Image from "next/image";
import Link from "next/link";
import { Heart, Music, Trophy, Palette, BookOpen, Users } from "lucide-react";

export const metadata = {
    title: "Student Life | Cambridge English School Doddaballapur",
    description: "Explore the vibrant student life at Cambridge English School — sports, arts, events, and a nurturing campus community.",
};

const activities = [
    { icon: Trophy, title: "Sports & Athletics", desc: "Annual sports meets, Kabaddi, Kho-kho, Volleyball, and daily physical training that builds teamwork and discipline.", color: "text-orange-600 bg-orange-50" },
    { icon: Music, title: "Cultural Events", desc: "School celebrations, Republic Day, Independence Day, and Prathiba Karanji — students shine on stage every year.", color: "text-purple-600 bg-purple-50" },
    { icon: Palette, title: "Arts & Creativity", desc: "Drawing, craft, and art competitions that encourage self-expression and creative thinking from a young age.", color: "text-pink-600 bg-pink-50" },
    { icon: BookOpen, title: "Academic Clubs", desc: "Science exhibitions, quiz competitions, and debate sessions that push students beyond the classroom.", color: "text-blue-600 bg-blue-50" },
    { icon: Heart, title: "Values & Character", desc: "Morning assemblies, moral education, and community service activities that build integrity and empathy.", color: "text-red-600 bg-red-50" },
    { icon: Users, title: "Peer Learning", desc: "Group projects, study circles, and collaborative learning that develop communication and leadership skills.", color: "text-emerald-600 bg-emerald-50" },
];

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

export default function StudentLife() {
    return (
        <div className="flex flex-col min-h-screen">

            {/* Page Header */}
            <section className="relative bg-primary text-white py-20 md:py-28 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/gallery/gallery-32.webp')] bg-cover bg-center opacity-15" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-primary-light/80" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <p className="text-secondary-light font-semibold text-xs tracking-[0.2em] uppercase mb-4">Beyond the Classroom</p>
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Student Life</h1>
                    <div className="h-[2px] w-16 bg-secondary mx-auto mb-6" />
                    <p className="text-blue-100/80 max-w-xl mx-auto text-lg">
                        A vibrant campus where students grow academically, creatively, and as responsible citizens.
                    </p>
                </div>
            </section>

            {/* Photo Collage */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <p className="text-secondary font-semibold text-xs tracking-[0.18em] uppercase mb-2">Campus Moments</p>
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">Life at Cambridge</h2>
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
                        <Link href="/gallery" className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-7 py-3 rounded-full hover:bg-primary-light transition-colors text-sm">
                            View Full Gallery →
                        </Link>
                    </div>
                </div>
            </section>

            {/* Activities Grid */}
            <section className="py-16 bg-accent-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <p className="text-secondary font-semibold text-xs tracking-[0.18em] uppercase mb-2">What We Offer</p>
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">Activities & Programmes</h2>
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
                <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">Be Part of Our Community</h2>
                <p className="text-blue-200 mb-8 max-w-lg mx-auto">Join hundreds of students experiencing a holistic, values-driven education at Cambridge English School.</p>
                <Link href="/admissions" className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-light text-white font-bold px-9 py-4 rounded-full transition-all shadow-lg">
                    Apply for Admission →
                </Link>
            </section>

        </div>
    );
}
