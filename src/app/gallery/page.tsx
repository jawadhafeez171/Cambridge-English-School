"use client";

import { useState } from "react";
import Image from "next/image";
import { Maximize2, ImageIcon } from "lucide-react";

// The total images and static IDs
const totalImages = 108;
const awardImages = [1, 2, 8, 15, 22];
const newBatchStart = 32; // gallery-32 onwards are from gallery 2

const galleryImages = Array.from({ length: totalImages }, (_, i) => {
    const id = i + 1;
    let category = "Campus Life";
    let title = `Campus Activity ${id}`;

    if (awardImages.includes(id)) {
        category = "Awards & Achievements";
        title = "Prathiba Karanji & School Awards";
    }

    if (id >= newBatchStart) {
        category = "School Events";
        title = `School Event ${id - newBatchStart + 1}`;
    }

    return {
        id,
        src: `/images/gallery/gallery-${id}.webp`,
        alt: `Cambridge English School - ${title}`,
        category
    };
});

export default function Gallery() {
    const [activeCategory, setActiveCategory] = useState("All");
    const categories = ["All", "Campus Life", "School Events", "Awards & Achievements"];

    const filteredImages = activeCategory === "All"
        ? galleryImages
        : galleryImages.filter(img => img.category === activeCategory);

    const counts: Record<string, number> = { All: galleryImages.length };
    categories.slice(1).forEach(c => {
        counts[c] = galleryImages.filter(img => img.category === c).length;
    });

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            {/* Page Header */}
            <section className="relative bg-primary text-white py-20 md:py-28 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/gallery/gallery-6.webp')] bg-cover bg-center opacity-10" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary-light/80" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <p className="text-secondary-light font-semibold text-xs tracking-[0.2em] uppercase mb-4">Our Moments</p>
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Photo Gallery</h1>
                    <div className="h-[2px] w-16 bg-secondary mx-auto mb-6" />
                    <p className="text-blue-100/80 max-w-xl mx-auto text-lg">
                        Snapshots of student life, campus activities, and school events.
                    </p>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${activeCategory === category
                                        ? "bg-primary text-white shadow-md"
                                        : "bg-white text-gray-700 border border-border-light hover:border-primary hover:text-primary"
                                    }`}
                            >
                                {category}
                                <span className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${activeCategory === category ? "bg-white/20" : "bg-gray-100 text-gray-500"}`}>
                                    {counts[category] ?? 0}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Masonry-style Grid using CSS Columns */}
                    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                        {filteredImages.map((image) => (
                            <div
                                key={image.id}
                                className="break-inside-avoid group relative rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 bg-white cursor-pointer"
                            >
                                <div className="relative w-full">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        width={800}
                                        height={600}
                                        layout="responsive"
                                        className="object-cover w-full h-auto transform scale-[1.08] origin-top transition-transform duration-700 group-hover:scale-[1.15]"
                                    />
                                </div>

                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                                    <div className="bg-white p-3 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 mb-3">
                                        <Maximize2 size={20} className="text-primary" />
                                    </div>
                                    <span className="text-white text-sm font-bold text-center transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                                        {image.category}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {galleryImages.length === 0 && (
                        <div className="text-center py-20 text-gray-500">
                            <ImageIcon size={48} className="mx-auto text-gray-300 mb-4" />
                            <p className="text-xl">No images found in the gallery yet.</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
