import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer({ lang, dict, nav }: { lang: string, dict: any, nav?: any }) {
    const n = nav || {};
    const navLinks = [
        { name: n.about || "About Us", href: `/${lang}/about` },
        { name: n.academics || "Academics", href: `/${lang}/academics` },
        { name: n.studentLife || "Student Life", href: `/${lang}/student-life` },
        { name: n.principal || "Principal's Message", href: `/${lang}/principal` },
        { name: n.admissions || "Admissions", href: `/${lang}/admissions` },
        { name: n.results || "Results & Achievements", href: `/${lang}/results` },
        { name: n.gallery || "Photo Gallery", href: `/${lang}/gallery` },
        { name: n.schoolRules || "School Rules", href: `/${lang}/school-rules` },
        { name: n.antiRagging || "Anti-Ragging Policy", href: `/${lang}/anti-ragging` },
        { name: n.facilities || "Infrastructure", href: `/${lang}/facilities` },
        { name: n.contact || "Contact", href: `/${lang}/contact` },
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
                            {dict.aboutText || "A disciplined, result-oriented State Board school offering quality English-medium education at affordable fees. Shaping bright futures since 2005."}
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
                        <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-secondary-light mb-5">{dict.quickLinks || "Quick Links"}</h3>
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
                        <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-secondary-light mb-5">{dict.contactInfo || "Contact Us"}</h3>
                        <ul className="space-y-5">
                            <li className="flex items-start gap-3">
                                <MapPin size={17} className="text-secondary shrink-0 mt-0.5" />
                                <div className="space-y-4">
                                    <a 
                                        href="https://maps.app.goo.gl/eTRtRKeeSv1rA2Ks9" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="block hover:bg-white/5 transition-colors p-1 -m-1 rounded"
                                    >
                                        <p className="text-secondary-light text-[10px] font-bold uppercase tracking-wider mb-1">Main Campus</p>
                                        <p className="text-blue-200/80 text-sm leading-relaxed">
                                            7GVM+8VV, NH-48, Doddaballapura Main Road,<br />
                                            Dargajogihalli, Doddaballapura, Karnataka 561203
                                        </p>
                                    </a>
                                    <a 
                                        href="https://maps.app.goo.gl/j3PRqmGQEJfy4yfw7" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="block hover:bg-white/5 transition-colors p-1 -m-1 rounded"
                                    >
                                        <p className="text-secondary-light text-[10px] font-bold uppercase tracking-wider mb-1">Admin Block</p>
                                        <p className="text-blue-200/80 text-sm leading-relaxed">
                                            32, near telephone exchange,<br />
                                            Thyagarajanagar, Doddaballapura, Karnataka 561203
                                        </p>
                                    </a>
                                </div>
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
                    <p>{dict.copyright?.replace("{year}", new Date().getFullYear().toString()) || `© ${new Date().getFullYear()} Cambridge English School. All rights reserved.`}</p>
                    <p>Affiliated to Karnataka State Board &bull; {(dict.designBy || "Designed by").replace("Antigravity", "")} <a href="https://hafeezstudio.com" target="_blank" rel="noopener noreferrer" className="text-blue-200/90 font-semibold hover:text-white transition-colors">HafeezStudio</a></p>
                </div>
            </div>
        </footer>
    );
}
