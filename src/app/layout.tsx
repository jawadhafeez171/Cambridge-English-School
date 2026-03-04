import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import BottomNavigation from "@/components/BottomNavigation";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://cambridgeenglishschool.com"),
  title: {
    default: "Cambridge English School | Doddaballapur",
    template: "%s | Cambridge English School",
  },
  description: "A disciplined, result-oriented State Board school offering quality English-medium education at affordable fees in Doddaballapur, Karnataka.",
  keywords: ["Best State Board School in Doddaballapur", "English Medium School in Doddaballapur", "SSLC School in Doddaballapur", "Education in Doddaballapur"],
  openGraph: {
    title: "Cambridge English School | Doddaballapur",
    description: "A disciplined, result-oriented State Board school offering quality English-medium education at affordable fees in Doddaballapur, Karnataka.",
    url: "/",
    siteName: "Cambridge English School",
    images: [
      {
        url: "/images/School.webp",
        width: 1200,
        height: 630,
        alt: "Cambridge English School Campus",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cambridge English School | Doddaballapur",
    description: "A disciplined, result-oriented State Board school offering quality English-medium education at affordable fees in Doddaballapur, Karnataka.",
    images: ["/images/School.webp"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans flex flex-col min-h-screen pb-16 md:pb-0`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <BottomNavigation />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
