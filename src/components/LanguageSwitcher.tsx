"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { i18n, type Locale } from "@/i18n.config";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  
  const redirectedPathName = (locale: Locale) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  // Get current locale from pathname
  const currentLocale = pathname?.split("/")[1] as Locale || i18n.defaultLocale;

  return (
    <div className="flex items-center gap-2 bg-gray-100/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-gray-200/50 ml-2">
      {i18n.locales.map((locale) => (
        <Link
          key={locale}
          href={redirectedPathName(locale)}
          className={`text-xs font-semibold px-2 py-1 rounded-full transition-all ${
            currentLocale === locale
              ? "bg-white text-primary shadow-sm"
              : "text-gray-500 hover:text-gray-900"
          }`}
        >
          {locale === "en" ? "EN" : "ಕನ್ನಡ"}
        </Link>
      ))}
    </div>
  );
}
