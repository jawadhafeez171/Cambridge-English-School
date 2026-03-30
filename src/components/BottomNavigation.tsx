"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Info, BookOpen, ClipboardList, Phone } from "lucide-react";

export default function BottomNavigation({ lang, dict }: { lang?: string, dict?: any }) {
    const pathname = usePathname();
    const currentLang = lang || pathname?.split("/")[1] || "en";
    const t = dict || { nav: { home: "Home", about: "About", academics: "Academics", apply: "Apply", call: "Call" } };

    const navItems = [
        { name: t.nav?.home || t.home || "Home", href: `/${currentLang}`, icon: Home },
        { name: t.nav?.about || t.about || "About", href: `/${currentLang}/about`, icon: Info },
        { name: t.nav?.academics || t.academics || "Academics", href: `/${currentLang}/academics`, icon: BookOpen },
        { name: t.nav?.apply || t.apply || "Apply", href: `/${currentLang}/admissions`, icon: ClipboardList },
        { name: t.nav?.call || t.call || "Call", href: "tel:+919845332367", icon: Phone },
    ];

    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40 pb-safe">
            <div className="flex justify-around items-center h-16">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    const isExternal = item.href.startsWith("tel:");

                    const content = (
                        <>
                            <item.icon size={20} className={isActive ? "fill-primary/20" : ""} />
                            <span className={`text-[10px] font-medium ${isActive ? "font-bold" : ""}`}>
                                {item.name}
                            </span>
                        </>
                    );

                    const classes = `flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors ${isActive ? "text-primary" : "text-gray-500 hover:text-gray-900"
                        }`;

                    if (isExternal) {
                        return (
                            <a key={item.name} href={item.href} className={classes}>
                                {content}
                            </a>
                        );
                    }

                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={classes}
                        >
                            {content}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
