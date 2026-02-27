import Link from "next/link";
import { Mail, MapPin, Phone, Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-primary text-white pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* School Info */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary font-bold text-xl">
                                C
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-white text-xl leading-tight">Cambridge English School</span>
                                <span className="text-xs text-blue-200 font-medium tracking-wider">ESTD. 2005</span>
                            </div>
                        </div>
                        <p className="text-blue-100 text-sm mb-4 leading-relaxed">
                            A disciplined, result-oriented State Board school offering quality English-medium education at affordable fees. Strong foundations for bright futures.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center hover:bg-secondary transition-colors" aria-label="Facebook">
                                <Facebook size={16} />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center hover:bg-secondary transition-colors" aria-label="Instagram">
                                <Instagram size={16} />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center hover:bg-secondary transition-colors" aria-label="YouTube">
                                <Youtube size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-secondary-light">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="text-blue-100 hover:text-white transition-colors text-sm">About Us</Link></li>
                            <li><Link href="/academics" className="text-blue-100 hover:text-white transition-colors text-sm">Academics</Link></li>
                            <li><Link href="/admissions" className="text-blue-100 hover:text-white transition-colors text-sm">Admissions</Link></li>
                            <li><Link href="/facilities" className="text-blue-100 hover:text-white transition-colors text-sm">Facilities</Link></li>
                            <li><Link href="/results" className="text-blue-100 hover:text-white transition-colors text-sm">Results & Achievements</Link></li>
                            <li><Link href="/gallery" className="text-blue-100 hover:text-white transition-colors text-sm">Photo Gallery</Link></li>
                            <li><Link href="/blog" className="text-blue-100 hover:text-white transition-colors text-sm">Blog</Link></li>
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-secondary-light">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <MapPin size={20} className="mr-3 text-secondary-light shrink-0 mt-0.5" />
                                <span className="text-blue-100 text-sm leading-relaxed">
                                    NH-48, Doddaballapura Main Rd,<br />
                                    Dargajogihalli, Doddaballapura,<br />
                                    Karnataka 561203
                                </span>
                            </li>
                            <li className="flex items-center">
                                <Phone size={20} className="mr-3 text-secondary-light shrink-0" />
                                <span className="text-blue-100 text-sm">
                                    +91 98453 32367
                                </span>
                            </li>
                            <li className="flex items-center">
                                <Mail size={20} className="mr-3 text-secondary-light shrink-0" />
                                <span className="text-blue-100 text-sm">
                                    principalcehs@gmail.com
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-blue-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-blue-200 text-sm mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} Cambridge English School. All rights reserved.
                    </p>
                    <p className="text-blue-200 text-xs">
                        Affiliated to Karnataka State Board
                    </p>
                </div>
            </div>
        </footer>
    );
}
