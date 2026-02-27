"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Info, BookOpen, ClipboardList, Phone } from "lucide-react";

export default function BottomNavigation() {
    const pathname = usePathname();

    const navItems = [
        { name: "Home", href: "/", icon: Home },
        { name: "About", href: "/about", icon: Info },
        { name: "Academics", href: "/academics", icon: BookOpen },
        { name: "Apply", href: "/admissions", icon: ClipboardList },
        { name: "Call", href: "tel:+919845332367", icon: Phone }, // Using the updated phone number
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
