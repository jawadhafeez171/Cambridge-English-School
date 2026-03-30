import { FileText, ClipboardList, CheckCircle, Download, HelpCircle, FileCheck, IndianRupee } from "lucide-react";
import AdmissionsForm from "@/components/forms/AdmissionsForm";
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/i18n.config";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const locale = lang as Locale;
    const dict = await getDictionary(locale);
    return {
        title: dict.admissionsPage.heroTitle,
        description: dict.admissionsPage.heroDescription,
        alternates: { canonical: `/${locale}/admissions` },
        openGraph: { title: dict.admissionsPage.heroTitle, url: `/${locale}/admissions` },
    };
}

export default async function Admissions({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const locale = lang as Locale;
    const dict = await getDictionary(locale);
    const t = dict.admissionsPage;

    return (
        <div className="flex flex-col min-h-screen bg-accent-bg">
            {/* Header */}
            <section className="relative bg-primary text-white py-20 md:py-28 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary-light/80" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <p className="text-secondary-light font-semibold text-xs tracking-[0.2em] uppercase mb-4">{t.heroEyebrow}</p>
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">{t.heroTitle}</h1>
                    <div className="h-[2px] w-16 bg-secondary mx-auto mb-6" />
                    <p className="text-blue-100/80 max-w-xl mx-auto text-lg">
                        {t.heroDescription}
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex flex-col lg:flex-row gap-10">

                    {/* Left Column */}
                    <div className="lg:w-2/3 space-y-8">

                        {/* Step-by-Step Process */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-border-light">
                            <h2 className="font-serif text-2xl font-bold text-primary mb-8 flex items-center gap-3">
                                <ClipboardList className="text-secondary" size={22} />
                                {t.processTitle}
                            </h2>
                            <div className="relative border-l-2 border-accent-bg ml-4 space-y-8 pb-2">
                                {[
                                    { step: "1", title: t.step1Title, body: t.step1Body },
                                    { step: "2", title: t.step2Title, body: t.step2Body },
                                    { step: "3", title: t.step3Title, body: t.step3Body },
                                    { step: "4", title: t.step4Title, body: t.step4Body, primary: true },
                                ].map(({ step, title, body, primary }) => (
                                    <div key={step} className="relative pl-8">
                                        <div className={`absolute left-[-29px] w-12 h-12 rounded-full border-4 border-accent-bg flex items-center justify-center font-bold ${primary ? "bg-primary text-white" : "bg-white text-primary border-border-light shadow-sm"}`}>
                                            {step}
                                        </div>
                                        <h3 className="font-serif font-bold text-gray-900 text-lg">{title}</h3>
                                        <p className="text-gray-500 text-sm mt-1 leading-relaxed">{body}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Fee Structure */}
                        <div className="bg-[#fffbf0] border border-amber-100 p-8 rounded-2xl">
                            <h2 className="font-serif text-2xl font-bold text-primary mb-3 flex items-center gap-3">
                                <IndianRupee className="text-secondary" size={22} />
                                {t.feesTitle}
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-5">
                                {t.feesDesc}
                            </p>
                            <div className="bg-white p-4 rounded-xl border border-amber-100 flex items-start gap-4">
                                <CheckCircle className="text-secondary shrink-0 mt-0.5" size={18} />
                                <div>
                                    <h4 className="font-semibold text-gray-900 text-sm">{t.valueTitle}</h4>
                                    <p className="text-gray-500 text-sm mt-0.5">{t.valueDesc}</p>
                                </div>
                            </div>
                        </div>

                        {/* Eligibility & Documents */}
                        <div className="grid md:grid-cols-2 gap-7">
                            <div className="bg-white p-7 rounded-2xl shadow-sm border border-border-light">
                                <h2 className="font-serif font-bold text-xl text-primary mb-5 flex items-center gap-2">
                                    <HelpCircle className="text-secondary" size={20} /> {t.eligibilityTitle}
                                </h2>
                                <ul className="space-y-3.5">
                                    {[
                                        { label: t.ageLabel1, val: t.ageVal1 },
                                        { label: t.ageLabel2, val: t.ageVal2 },
                                        { label: t.ageLabel3, val: t.ageVal3 },
                                        { label: t.ageLabel4, val: t.ageVal4 },
                                        { label: t.ageLabel5, val: t.ageVal5 },
                                        { label: t.ageLabel6, val: t.ageVal6 },
                                    ].map(({ label, val }) => (
                                        <li key={label} className="flex items-start gap-3">
                                            <CheckCircle className="text-secondary shrink-0 mt-0.5" size={15} />
                                            <span className="text-gray-600 text-sm"><strong>{label}:</strong> {val}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-white p-7 rounded-2xl shadow-sm border border-border-light">
                                <h2 className="font-serif font-bold text-xl text-primary mb-5 flex items-center gap-2">
                                    <FileCheck className="text-secondary" size={20} /> {t.docsTitle}
                                </h2>
                                <ul className="space-y-3.5">
                                    {[
                                        t.doc1,
                                        t.doc2,
                                        t.doc3,
                                        t.doc4,
                                        t.doc5,
                                    ].map((doc) => (
                                        <li key={doc} className="flex items-start gap-3">
                                            <FileText className="text-gray-400 shrink-0 mt-0.5" size={15} />
                                            <span className="text-gray-600 text-sm">{doc}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="lg:w-1/3 space-y-7">
                        {/* Prospectus */}
                        <div className="bg-primary text-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full" />
                            <h3 className="font-serif text-xl font-bold mb-3">{t.prospectusTitle}</h3>
                            <p className="text-blue-200/80 mb-7 text-sm">{t.prospectusDesc}</p>
                            <a href="/prospectus.pdf" download className="w-full bg-secondary hover:bg-secondary-light text-white font-bold py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 group">
                                <Download size={18} className="group-hover:animate-bounce" /> {t.downloadBtn}
                            </a>
                        </div>

                        {/* Enquiry Form */}
                        <div className="bg-white p-7 rounded-2xl shadow-sm border border-border-light">
                            <h3 className="font-serif text-xl font-bold text-gray-900 mb-6">{t.enquiryTitle}</h3>
                            <AdmissionsForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
