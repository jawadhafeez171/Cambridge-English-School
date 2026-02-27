"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Academics", href: "/academics" },
        { name: "Principal's Message", href: "/principal" },
        { name: "Gallery", href: "/gallery" },
        { name: "Admissions", href: "/admissions" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20 md:h-24">
                    {/* Logo / School Name */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center overflow-hidden">
                                <Image
                                    src="/images/logo.webp"
                                    alt="Cambridge English School Logo"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                            <div className="flex flex-col justify-center">
                                <span className="font-serif font-black text-primary text-lg lg:text-xl xl:text-2xl leading-tight tracking-wide whitespace-nowrap">Cambridge English School</span>
                                <span className="text-[9px] lg:text-[10px] xl:text-xs text-secondary font-bold uppercase tracking-widest mt-0.5">Doddaballapur</span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-gray-700 hover:text-primary font-medium transition-colors text-xs xl:text-sm uppercase tracking-wide whitespace-nowrap"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile menu button */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="text-primary hover:text-primary-light focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-blue-50 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}
