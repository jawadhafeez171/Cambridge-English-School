import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
    const navLinks = [
        { name: "About Us", href: "/about" },
        { name: "Academics", href: "/academics" },
        { name: "Principal's Message", href: "/principal" },
        { name: "Admissions", href: "/admissions" },
        { name: "Facilities", href: "/facilities" },
        { name: "Results & Achievements", href: "/results" },
        { name: "Photo Gallery", href: "/gallery" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <footer className="bg-[#0a1847] text-white">
            {/* Top accent bar */}
            <div className="h-1 w-full bg-gradient-to-r from-secondary via-secondary-light to-secondary" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                    {/* School Info */}
                    <div>
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center overflow-hidden shrink-0 shadow-md">
                                <Image
                                    src="/images/logo.webp"
                                    alt="Cambridge English School Logo"
                                    width={48}
                                    height={48}
                                    className="object-contain"
                                />
                            </div>
                            <div>
                                <p className="font-serif font-bold text-white text-lg leading-tight">Cambridge English School</p>
                                <p className="text-secondary-light text-xs font-semibold tracking-widest uppercase mt-0.5">Estd. 2002</p>
                            </div>
                        </div>

                        <p className="text-blue-200/80 text-sm leading-relaxed mb-6">
                            A disciplined, result-oriented State Board school offering quality English-medium education at affordable fees. Shaping bright futures since 2005.
                        </p>

                        <div className="flex space-x-3">
                            {[
                                { Icon: Facebook, label: "Facebook" },
                                { Icon: Instagram, label: "Instagram" },
                                { Icon: Youtube, label: "YouTube" }
                            ].map(({ Icon, label }) => (
                                <a key={label} href="#" aria-label={label}
                                    className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-blue-200 hover:bg-secondary hover:border-secondary hover:text-white transition-all">
                                    <Icon size={15} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-secondary-light mb-5">Quick Links</h3>
                        <ul className="space-y-2.5">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href}
                                        className="text-blue-200/80 hover:text-white text-sm transition-colors flex items-center gap-2 group">
                                        <span className="w-3 h-[1px] bg-secondary/50 group-hover:bg-secondary group-hover:w-4 transition-all" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-secondary-light mb-5">Contact Us</h3>
                        <ul className="space-y-5">
                            <li className="flex items-start gap-3">
                                <MapPin size={17} className="text-secondary shrink-0 mt-0.5" />
                                <span className="text-blue-200/80 text-sm leading-relaxed">
                                    Cambridge English High School,<br />
                                    Thyagarajanagar, Doddaballapur - 561203
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={17} className="text-secondary shrink-0" />
                                <a href="tel:+919845332367" className="text-blue-200/80 hover:text-white text-sm transition-colors">
                                    +91 98453 32367
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={17} className="text-secondary shrink-0" />
                                <a href="mailto:principalcehs@gmail.com" className="text-blue-200/80 hover:text-white text-sm transition-colors">
                                    principalcehs@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 mt-12 pt-7 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-blue-300/60">
                    <p>&copy; {new Date().getFullYear()} Cambridge English School. All rights reserved.</p>
                    <p>Affiliated to Karnataka State Board &bull; Designed by <a href="https://hafeezstudio.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">HafeezStudio</a></p>
                </div>
            </div>
        </footer>
    );
}
