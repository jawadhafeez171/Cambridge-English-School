import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/i18n.config";
import { Mail, MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const locale = lang as Locale;
    const dict = await getDictionary(locale);
    return {
        title: dict.contactPage.heroTitle,
        description: dict.contactPage.heroDesc,
        alternates: { canonical: `/${locale}/contact` },
        openGraph: { title: dict.contactPage.heroTitle, url: `/${locale}/contact` },
    };
}

export default async function Contact({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const locale = lang as Locale;
    const dict = await getDictionary(locale);
    const t = dict.contactPage;

    return (
        <div className="flex flex-col min-h-screen bg-accent-bg">
            {/* Header */}
            <section className="relative bg-primary text-white py-20 md:py-28 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary-light/80" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <p className="text-secondary-light font-semibold text-xs tracking-[0.2em] uppercase mb-4">{t.heroEyebrow}</p>
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">{t.heroTitle}</h1>
                    <div className="h-[2px] w-16 bg-secondary mx-auto mb-6" />
                    <p className="text-blue-100/80 max-w-xl mx-auto text-lg">{t.heroDesc}</p>
                </div>
            </section>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex flex-col lg:flex-row gap-10">

                    {/* Left: Contact Info */}
                    <div className="lg:w-5/12 space-y-6">
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-border-light">
                            <h2 className="font-serif text-2xl font-bold text-primary mb-8">{t.infoTitle}</h2>
                            <div className="space-y-7">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-accent-bg border border-border-light rounded-xl flex items-center justify-center text-primary shrink-0">
                                        <MapPin size={18} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 text-sm mb-1">{t.campusAddr}</h3>
                                        <div className="space-y-3">
                                            <a
                                                href="https://maps.app.goo.gl/eTRtRKeeSv1rA2Ks9"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="block hover:bg-gray-50 transition-colors p-2 -m-2 rounded-xl group/link"
                                            >
                                                <span className="text-[10px] font-bold uppercase tracking-wider text-secondary block mb-0.5 group-hover/link:underline">{t.mainCampus}</span>
                                                <span className="text-gray-500 text-sm leading-relaxed">{t.mainCampusDesc}</span>
                                            </a>
                                            <a
                                                href="https://maps.app.goo.gl/j3PRqmGQEJfy4yfw7"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="block hover:bg-gray-50 transition-colors p-2 -m-2 rounded-xl group/link"
                                            >
                                                <span className="text-[10px] font-bold uppercase tracking-wider text-secondary block mb-0.5 group-hover/link:underline">{t.adminBlock}</span>
                                                <span className="text-gray-500 text-sm leading-relaxed">{t.adminBlockDesc}</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-accent-bg border border-border-light rounded-xl flex items-center justify-center text-primary shrink-0">
                                        <Phone size={18} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 text-sm mb-0.5">{t.phoneTitle}</h3>
                                        <a href="tel:+919845332367" className="text-gray-500 text-sm hover:text-primary transition-colors">+91 98453 32367</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-accent-bg border border-border-light rounded-xl flex items-center justify-center text-primary shrink-0">
                                        <Mail size={18} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 text-sm mb-0.5">{t.emailTitle}</h3>
                                        <a href="mailto:principalcehs@gmail.com" className="text-gray-500 text-sm hover:text-primary transition-colors">principalcehs@gmail.com</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-accent-bg border border-border-light rounded-xl flex items-center justify-center text-primary shrink-0">
                                        <Clock size={18} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 text-sm mb-0.5">{t.hoursTitle}</h3>
                                        <p className="text-gray-500 text-sm leading-relaxed">
                                            {t.hoursDesc}<br />
                                            <span className="text-xs text-secondary font-semibold uppercase tracking-wide">{t.closedDesc}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* WhatsApp */}
                        <div className="bg-gradient-to-br from-[#1DA462] to-[#0d8c4f] p-8 rounded-2xl shadow-md text-white">
                            <div className="flex items-center gap-3 mb-3">
                                <MessageCircle size={28} />
                                <h3 className="text-xl font-bold">{t.waTitle}</h3>
                            </div>
                            <p className="opacity-85 mb-6 text-sm">{t.waDesc}</p>
                            <a
                                href="https://wa.me/919845332367?text=Hello!%20I%20have%20an%20inquiry%20about%20Cambridge%20English%20School."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-[#0d8c4f] hover:bg-gray-50 font-bold py-3 px-6 rounded-full transition-colors inline-block w-full text-center shadow-sm"
                            >
                                {t.waBtn}
                            </a>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="lg:w-7/12 space-y-7">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-border-light">
                            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6">{t.formTitle}</h3>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
