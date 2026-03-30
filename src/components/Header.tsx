"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header({ lang, dict }: { lang: string, dict: any }) {
    const nav = dict.navigation;
    const hdr = dict.header;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Desktop nav excludes secondary utility pages (School Rules etc.) — they are in the footer & mobile menu
    const desktopNavLinks = [
        { name: nav.home, href: `/${lang}` },
        { name: nav.about, href: `/${lang}/about` },
        { name: nav.academics, href: `/${lang}/academics` },
        { name: nav.studentLife, href: `/${lang}/student-life` },
        { name: nav.gallery, href: `/${lang}/gallery` },
        { name: nav.contact, href: `/${lang}/contact` },
    ];

    // Mobile nav includes all links
    const allNavLinks = [
        ...desktopNavLinks,
        { name: nav.schoolRules, href: `/${lang}/school-rules` },
    ];

    return (
        <header className={`sticky top-0 z-50 w-full transition-all duration-300 flex flex-col ${scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white"} border-b border-gray-100`}>
            {/* Announcement Bar */}
            <div className="bg-primary text-white text-center py-2 px-4 shadow-sm z-50">
                <p className="text-white text-xs sm:text-sm font-medium tracking-wide">
                    {hdr.announcement}{" "}
                    <Link href={`/${lang}/admissions`} className="font-bold text-secondary-light hover:underline transition-all ml-1">
                        {hdr.applyNow}
                    </Link>
                </p>
            </div>

            <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20 md:h-[88px]">
                    {/* Logo / School Name */}
                    <div className="flex-shrink-0 flex items-center min-w-0">
                        <Link href={`/${lang}`} className="flex items-center gap-2 group min-w-0">
                            <div className="relative w-11 h-11 md:w-14 md:h-14 flex items-center justify-center overflow-hidden shrink-0">
                                <Image
                                    src="/images/logo.webp"
                                    alt="Cambridge English School Logo"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                            <div className="flex flex-col justify-center min-w-0">
                                <span className="font-serif font-bold text-primary text-sm md:text-base lg:text-lg leading-tight tracking-wide">
                                    Cambridge English School
                                </span>
                                <span className="hidden sm:block text-[9px] lg:text-[10px] text-secondary font-semibold uppercase tracking-[0.18em] mt-0.5">
                                    Doddaballapura, Karnataka 561203
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 shrink-0">
                        {desktopNavLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`relative px-2 py-2 text-xs font-medium tracking-wide transition-colors whitespace-nowrap
                                        ${isActive ? "text-primary" : "text-gray-600 hover:text-primary"}`}
                                >
                                    {link.name}
                                    {isActive && (
                                        <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-secondary rounded-full" />
                                    )}
                                </Link>
                            );
                        })}
                        <Link
                            href={`/${lang}/admissions`}
                            className="ml-2 bg-primary hover:bg-primary-light text-white text-xs font-semibold px-4 py-2.5 rounded-full transition-all shadow-sm hover:shadow-md whitespace-nowrap shrink-0"
                        >
                            {nav.admissions}
                        </Link>
                        <div className="shrink-0 ml-1">
                            <LanguageSwitcher />
                        </div>
                    </nav>

                    {/* Mobile menu button */}
                    <div className="lg:hidden flex items-center gap-3">
                        <LanguageSwitcher />
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-primary hover:text-primary-light focus:outline-none p-1"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="lg:hidden bg-white border-t border-gray-100 absolute top-full w-full left-0 shadow-xl">
                    <div className="px-4 py-4 space-y-1">
                        {allNavLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`flex items-center px-4 py-3 rounded-lg text-base font-medium transition-colors
                                        ${isActive ? "text-primary bg-accent-bg font-semibold" : "text-gray-700 hover:text-primary hover:bg-gray-50"}`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {isActive && <span className="w-[3px] h-4 bg-secondary rounded-full mr-3" />}
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            )}
        </header>
    );
}
