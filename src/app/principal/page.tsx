import Image from "next/image";
import Link from "next/link";
import { Quote } from "lucide-react";

export const metadata = {
    title: "Principal's Message | Cambridge English School",
    description: "Read the inspiring message from Mrs. Seema Yasmin, Principal of Cambridge English School, Doddaballapur.",
};

export default function PrincipalMessage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Header */}
            <section className="relative bg-primary text-white py-20 md:py-28 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary-light/80" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <p className="text-secondary-light font-semibold text-xs tracking-[0.2em] uppercase mb-4">From Our Leadership</p>
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Principal&apos;s Message</h1>
                    <div className="h-[2px] w-16 bg-secondary mx-auto mb-6" />
                    <p className="text-blue-100/80 max-w-xl mx-auto text-lg">
                        A word from our leadership on our commitment to excellence, values, and student success.
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-3xl shadow-sm border border-border-light overflow-hidden">
                        <div className="flex flex-col lg:flex-row">
                            {/* Photo */}
                            <div className="lg:w-2/5 relative h-[400px] lg:h-auto bg-gray-100">
                                <Image
                                    src="/images/principal-message.webp"
                                    alt="Mrs. Seema Yasmin - Principal"
                                    fill
                                    className="object-cover object-top"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent lg:bg-none" />
                            </div>

                            {/* Message */}
                            <div className="lg:w-3/5 p-8 md:p-12 relative">
                                <Quote size={60} className="absolute top-8 left-8 text-primary/5 z-0" />
                                <div className="relative z-10">
                                    {/* Name block */}
                                    <div className="inline-block bg-accent-bg border border-border-light rounded-xl px-5 py-3 mb-8">
                                        <h2 className="font-serif text-xl font-bold text-primary">Mrs. Seema Yasmin</h2>
                                        <p className="text-secondary text-xs font-semibold uppercase tracking-widest mt-0.5">Principal, Cambridge English School</p>
                                    </div>

                                    <div className="space-y-5 text-gray-600 leading-relaxed">
                                        <p><strong className="text-gray-900">Dear Parents and Students,</strong></p>
                                        <p>
                                            Welcome to Cambridge English School. It is with great pride that I address you as the Principal of an institution that has stood as a beacon of quality education and discipline in Doddaballapur for nearly two decades.
                                        </p>
                                        <p>
                                            Education is not merely about accumulating facts; it is about preparing a child for life. Our philosophy revolves around building a strong academic foundation while simultaneously instilling deep-rooted moral values.
                                        </p>
                                        <p>
                                            Our consistent 100% result in the SSLC board examinations over the past 10 years is a testament to the rigorous, result-oriented approach of our dedicated faculty. Beyond the marks, we are proud of the well-rounded global citizens our students become.
                                        </p>
                                        <p>
                                            As we look to the future, we remain steadfast in our commitment to providing affordable, premium education that transforms lives. I invite you to join our community and partner with us in shaping bright futures.
                                        </p>
                                        <p className="italic text-gray-500 border-l-2 border-secondary pl-4 mt-6">
                                            &ldquo;Education is the passport to the future, for tomorrow belongs to those who prepare for it today.&rdquo;
                                        </p>
                                    </div>

                                    {/* Signature */}
                                    <div className="mt-10 pt-8 border-t border-border-light flex items-center gap-4">
                                        <div className="relative w-14 h-14">
                                            <Image src="/images/logo.webp" alt="School Logo" fill className="object-contain opacity-15" />
                                        </div>
                                        <div>
                                            <p className="font-serif font-bold text-gray-900 text-lg">Mrs. Seema Yasmin</p>
                                            <p className="text-sm text-gray-400 font-medium">Principal</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 text-center">
                        <Link href="/about" className="inline-flex items-center text-primary hover:text-primary-light font-semibold transition-colors">
                            ← Back to About Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
