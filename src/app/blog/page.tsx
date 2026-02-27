import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";

export const metadata = {
    title: "School Blog & News | Cambridge English School Doddaballapur",
    description: "Read the latest news, educational articles, and announcements from Cambridge English School.",
};

export default function Blog() {
    const posts = [
        {
            id: 1,
            title: "The Importance of Discipline in Early Education",
            excerpt: "Why setting a structured routine early on is crucial for long-term academic and personal success for children.",
            date: "August 15, 2025",
            author: "Miss Seema Yasmeen",
            category: "Education",
            image: "/images/gallery/gallery-30.webp"
        },
        {
            id: 2,
            title: "Preparation Strategies for SSLC Board Exams",
            excerpt: "Top tips and tricks for 10th-grade students to crack the Karnataka State Board examinations with flying colors.",
            date: "September 02, 2025",
            author: "Academic Coordinator",
            category: "Academics",
            image: "/images/gallery/gallery-24.webp"
        },
        {
            id: 3,
            title: "Highlights from our Annual Sports Meet",
            excerpt: "A look back at the thrilling track and field events from our recent annual athletic competition.",
            date: "October 10, 2025",
            author: "Physical Education Dept.",
            category: "Events",
            image: "/images/gallery/gallery-11.webp"
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            {/* Page Header */}
            <section className="bg-primary text-white py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">School Blog & News</h1>
                    <p className="text-blue-100 max-w-2xl mx-auto text-lg">
                        Stay updated with educational insights, student achievements, and campus events.
                    </p>
                </div>
            </section>

            {/* Main Blog Area */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <div key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col group">
                                {/* Image Container */}
                                <div className="relative h-56 w-full overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 left-4 bg-secondary text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full shadow-md z-10">
                                        {post.category}
                                    </div>
                                </div>

                                {/* Content Container */}
                                <div className="p-6 flex-grow flex flex-col">
                                    {/* Meta */}
                                    <div className="flex items-center text-xs text-gray-500 mb-3 gap-4">
                                        <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                                        <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
                                    </div>

                                    {/* Title & Excerpt */}
                                    <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight group-hover:text-primary transition-colors">
                                        <Link href={`/blog`}>{post.title}</Link>
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                                        {post.excerpt}
                                    </p>

                                    {/* Read More */}
                                    <Link href={`/blog`} className="inline-flex items-center text-primary font-bold text-sm tracking-wide hover:text-primary-light transition-colors mt-auto">
                                        Read Article <ArrowRight size={16} className="ml-1" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination / Load More (Placeholder for now) */}
                    <div className="mt-16 text-center">
                        <button className="bg-white border-2 border-primary text-primary hover:bg-primary-light hover:text-white hover:border-primary-light font-bold py-3 px-8 rounded-full transition-colors">
                            Load More Articles
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
