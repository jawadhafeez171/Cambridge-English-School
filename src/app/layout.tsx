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
  title: "Cambridge English School | Doddaballapur",
  description: "A disciplined, result-oriented State Board school offering quality English-medium education at affordable fees in Doddaballapur, Karnataka.",
  keywords: ["Best State Board School in Doddaballapur", "English Medium School in Doddaballapur", "SSLC School in Doddaballapur"],
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
