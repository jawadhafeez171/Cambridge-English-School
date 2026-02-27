"use client";

import { useState } from "react";
import Image from "next/image";
import { Maximize2 } from "lucide-react";

export default function Gallery() {
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = ["All", "Annual Day", "Sports Day", "Festivals", "Classroom"];

    // Mapping provided images to categories
    const photos = [
        { src: "/images/School 1.jpeg", alt: "Science Exhibition", category: "Classroom" },
        { src: "/images/School 2.jpeg", alt: "Classroom Session", category: "Classroom" },
        { src: "/images/School 3.jpeg", alt: "Independence Day Reading", category: "Festivals" },
        { src: "/images/School 4.jpeg", alt: "Annual Sports Meet", category: "Sports Day" },
        { src: "/images/School 5.jpeg", alt: "Library Activity", category: "Classroom" },
        { src: "/images/School.jpeg", alt: "School Annual Day Setup", category: "Annual Day" }
    ];

    const filteredPhotos = activeCategory === "All"
        ? photos
        : photos.filter(photo => photo.category === activeCategory);

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            {/* Page Header */}
            <section className="bg-primary text-white py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Photo Gallery</h1>
                    <p className="text-blue-100 max-w-2xl mx-auto text-lg">
                        Glimpses of life, learning, and celebrations at Cambridge English School.
                    </p>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${activeCategory === category
                                        ? "bg-primary text-white shadow-md"
                                        : "bg-white text-gray-700 border border-gray-200 hover:border-primary hover:text-primary"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Photo Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredPhotos.map((photo, index) => (
                            <div
                                key={index}
                                className="group relative h-72 md:h-80 w-full rounded-xl overflow-hidden shadow-sm border border-gray-200 bg-white"
                            >
                                <Image
                                    src={photo.src}
                                    alt={photo.alt}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    {/* Decorative Icon */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/80 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <Maximize2 size={32} />
                                    </div>

                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <span className="text-secondary text-xs font-bold uppercase tracking-wider mb-1 block">
                                            {photo.category}
                                        </span>
                                        <h3 className="text-white font-bold text-lg">
                                            {photo.alt}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Note if empty category */}
                    {filteredPhotos.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-gray-500 text-lg">No photos available in this category yet.</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
