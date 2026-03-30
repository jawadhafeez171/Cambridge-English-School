"use client";

import { useState } from "react";
import Image from "next/image";
import { Maximize2, ImageIcon } from "lucide-react";

type GalleryDict = {
    catAll: string;
    catCampus: string;
    catEvents: string;
    catAwards: string;
    noImages: string;
};

const internalCategories = ["All", "Campus Life", "School Events", "Awards & Achievements"];

const totalImages = 110;
const awardImages = [1, 2, 8, 15, 22];
const newBatchStart = 32;

const galleryImages = Array.from({ length: totalImages }, (_, i) => {
    const id = i + 1;
    let category = "Campus Life";
    if (awardImages.includes(id)) category = "Awards & Achievements";
    if (id >= newBatchStart) category = "School Events";
    return { id, src: `/images/gallery/gallery-${id}.webp`, category };
});

export default function GalleryClient({ t }: { t: GalleryDict }) {
    const [activeCategory, setActiveCategory] = useState("All");

    const localizedCategories: Record<string, string> = {
        "All": t.catAll,
        "Campus Life": t.catCampus,
        "School Events": t.catEvents,
        "Awards & Achievements": t.catAwards,
    };

    const filteredImages = activeCategory === "All"
        ? galleryImages
        : galleryImages.filter(img => img.category === activeCategory);

    const counts: Record<string, number> = { All: galleryImages.length };
    internalCategories.slice(1).forEach(c => {
        counts[c] = galleryImages.filter(img => img.category === c).length;
    });

    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
                    {internalCategories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${activeCategory === category
                                ? "bg-primary text-white shadow-md"
                                : "bg-white text-gray-700 border border-border-light hover:border-primary hover:text-primary"
                                }`}
                        >
                            {localizedCategories[category]}
                            <span className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${activeCategory === category ? "bg-white/20" : "bg-gray-100 text-gray-500"}`}>
                                {counts[category] ?? 0}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Masonry Grid */}
                <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                    {filteredImages.map((image) => (
                        <div
                            key={image.id}
                            className="break-inside-avoid group relative rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 bg-white cursor-pointer"
                        >
                            <div className="relative w-full">
                                <Image
                                    src={image.src}
                                    alt={`Cambridge English School - ${localizedCategories[image.category]}`}
                                    width={800}
                                    height={600}
                                    className="object-cover w-full h-auto transform scale-[1.08] origin-top transition-transform duration-700 group-hover:scale-[1.15]"
                                />
                            </div>
                            <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                                <div className="bg-white p-3 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 mb-3">
                                    <Maximize2 size={20} className="text-primary" />
                                </div>
                                <span className="text-white text-sm font-bold text-center transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                                    {localizedCategories[image.category]}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredImages.length === 0 && (
                    <div className="text-center py-20 text-gray-500">
                        <ImageIcon size={48} className="mx-auto text-gray-300 mb-4" />
                        <p className="text-xl">{t.noImages}</p>
                    </div>
                )}
            </div>
        </section>
    );
}
