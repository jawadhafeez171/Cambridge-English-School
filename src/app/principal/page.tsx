import Image from "next/image";
import Link from "next/link";
import { Quote } from "lucide-react";

export const metadata = {
    title: "Principal's Message | Cambridge English School",
    description: "Read the inspiring message from Miss Seema Yasmeen, Principal of Cambridge English School, Doddaballapur.",
};

export default function PrincipalMessage() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            {/* Page Header */}
            <section className="bg-primary text-white py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">Principal&apos;s Message</h1>
                    <p className="text-blue-100 max-w-2xl mx-auto text-lg">
                        A word from our leadership on our commitment to excellence, values, and student success.
                    </p>
                </div>
            </section>

            {/* Main Content Area */}
            <section className="py-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="flex flex-col lg:flex-row">

                            {/* Image Column */}
                            <div className="lg:w-2/5 relative h-[400px] lg:h-auto bg-gray-100">
                                <Image
                                    src="/images/principal-message.webp"
                                    alt="Miss Seema Yasmeen - Principal"
                                    fill
                                    className="object-cover object-top"
                                    priority
                                />
                            </div>

                            {/* Content Column */}
                            <div className="lg:w-3/5 p-8 md:p-12 relative">
                                <Quote size={80} className="absolute top-6 left-6 text-blue-50 opacity-50 z-0" />

                                <div className="relative z-10">
                                    <h2 className="text-3xl font-bold text-gray-800 mb-2 font-serif">Miss Seema Yasmeen</h2>
                                    <p className="text-primary font-bold mb-8 tracking-wider uppercase text-sm">Principal, Cambridge English School</p>

                                    <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                                        <p>
                                            <strong>Dear Parents and Students,</strong>
                                        </p>
                                        <p>
                                            Welcome to Cambridge English School. It is with great pride that I address you as the Principal of an institution that has stood as a beacon of quality education and discipline in Doddaballapur for nearly two decades.
                                        </p>
                                        <p>
                                            Education is not merely about accumulating facts; it is about preparing a child for life. Our philosophy revolves around building a strong academic foundation while simultaneously instilling deep-rooted moral values. We believe that true success comes from a harmonious blend of knowledge, character, and discipline.
                                        </p>
                                        <p>
                                            Our consistent 100% pass rate in the SSLC board examinations over the past 5 years is a testament to the rigorous, result-oriented approach of our dedicated faculty. But beyond the marks, we are proud of the well-rounded global citizens our students become. We emphasize strong English communication, critical thinking, and a profound sense of responsibility.
                                        </p>
                                        <p>
                                            As we look to the future, we remain steadfast in our commitment to providing affordable, premium education that transforms lives. I invite you to join our community and partner with us in shaping bright futures.
                                        </p>
                                        <p className="italic pt-4">
                                            &quot;Education is the passport to the future, for tomorrow belongs to those who prepare for it today.&quot;
                                        </p>
                                    </div>

                                    <div className="mt-12 flex items-center gap-4 border-t border-gray-100 pt-8">
                                        <div className="w-16 h-16 relative">
                                            <Image
                                                src="/images/logo.webp"
                                                alt="School Logo"
                                                fill
                                                className="object-contain opacity-20"
                                            />
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-800 font-serif text-xl">Miss Seema Yasmeen</p>
                                            <p className="text-sm text-gray-500 font-medium">Principal</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <Link href="/about" className="inline-flex justify-center items-center text-primary hover:text-primary-light font-bold transition-colors">
                            &larr; Back to About Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
