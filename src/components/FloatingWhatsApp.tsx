import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
    // Replace with the school's actual WhatsApp number
    const phoneNumber = "919845332367";
    const message = encodeURIComponent("Hello! I want to inquire about admission to Cambridge English School.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle size={32} />

            {/* Tooltip */}
            <span className="absolute right-16 bg-white text-gray-800 text-sm font-medium py-1 px-3 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:-right-2 after:border-8 after:border-transparent after:border-l-white">
                Chat with us!
            </span>
        </a>
    );
}
