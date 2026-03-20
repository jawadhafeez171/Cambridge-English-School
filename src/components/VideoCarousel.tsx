"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";

interface Video {
  id: string;
  title: string;
}

const videos: Video[] = [
  { id: "G2e3xON0au4", title: "Story of our school" },
  { id: "bRo55S12ExU", title: "School Annual Fest 2026" },
  { id: "7zeGSub6aLQ", title: "Annual Fest 2025" },
  { id: "6da-MJMbC8I", title: "Annual Day 2024" },
];

export default function VideoCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="relative group">
      {/* Navigation Buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-primary p-3 rounded-full shadow-lg -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 hidden md:flex items-center justify-center border border-gray-100"
        aria-label="Previous video"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-primary p-3 rounded-full shadow-lg translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 hidden md:flex items-center justify-center border border-gray-100"
        aria-label="Next video"
      >
        <ChevronRight size={24} />
      </button>

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 px-4 md:px-0"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {videos.map((video) => (
          <div
            key={video.id}
            className="flex-shrink-0 w-[85vw] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start"
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-border-light group/card">
              <div className="relative aspect-video bg-gray-100 overflow-hidden">
                {playingVideoId === video.id ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                    title={video.title}
                    className="absolute inset-0 w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <button 
                    onClick={() => setPlayingVideoId(video.id)}
                    className="absolute inset-0 w-full h-full group/btn"
                    aria-label={`Play ${video.title}`}
                  >
                    <Image
                      src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                      alt={video.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover/btn:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover/btn:bg-black/40 transition-colors flex items-center justify-center">
                      <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center shadow-xl transform transition-all duration-300 group-hover/btn:scale-110 group-hover/btn:bg-secondary-light">
                        <Play size={28} fill="currentColor" className="ml-1" />
                      </div>
                    </div>
                  </button>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-serif font-bold text-gray-900 text-lg line-clamp-1">{video.title}</h3>
                <div className="flex items-center gap-2 mt-2 text-secondary text-xs font-semibold uppercase tracking-wider">
                   <Play size={12} fill="currentColor" />
                   {playingVideoId === video.id ? "Now Playing" : "Watch Highlight"}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
