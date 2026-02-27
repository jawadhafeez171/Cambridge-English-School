import { Trophy, Star, TrendingUp, Award, Medal } from "lucide-react";
import Image from "next/image";

export const metadata = {
    title: "Results & Achievements | Cambridge English School Doddaballapur",
    description: "View our outstanding SSLC board exam results, district toppers, and academic achievements.",
};

export default function Results() {
    const toppers = [
        { name: "Ananya S.", score: "620/625", percentile: "99.2%", subject: "State Topper (Rank 5)" },
        { name: "Karthik R.", score: "615/625", percentile: "98.4%", subject: "District Topper" },
        { name: "Meghana V.", score: "612/625", percentile: "97.9%", subject: "School Topper (Science: 100)" },
        { name: "Srinivas K.", score: "608/625", percentile: "97.2%", subject: "School Topper (Math: 100)" },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Page Header */}
            <section className="bg-primary text-white py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Results & Achievements</h1>
                    <p className="text-blue-100 max-w-2xl mx-auto text-lg">
                        A testament to our disciplined approach and rigorous academic standards.
                    </p>
                </div>
            </section>

            {/* Main SSLC Results Highlight */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-gray-200 pb-20">
                    <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
                        <div className="lg:w-1/2">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-secondary border border-amber-100 text-sm font-bold mb-4">
                                <Medal size={16} /> Latest SSLC Results
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                                100% Pass Result for 5 Consecutive Years
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Cambridge English School has consistently secured a 100% pass rate in the Karnataka State Board SSLC examinations. Our structured curriculum and mandatory preparatory exams ensure that every single child crosses the finish line successfully.
                            </p>

                            <div className="grid grid-cols-2 gap-4 mt-8">
                                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 text-center">
                                    <div className="text-4xl font-bold text-primary mb-2">95+</div>
                                    <div className="text-gray-700 font-medium">Distinctions</div>
                                </div>
                                <div className="bg-amber-50 p-6 rounded-xl border border-amber-100 text-center">
                                    <div className="text-4xl font-bold text-secondary mb-2">45+</div>
                                    <div className="text-gray-700 font-medium">Centums (100/100)</div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-5/12 relative">
                            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 relative z-10">
                                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center justify-center">
                                    <Trophy className="text-secondary mr-3" size={28} />
                                    Top Performers
                                </h3>

                                <div className="space-y-4">
                                    {toppers.map((topper, i) => (
                                        <div key={i} className="flex justify-between items-center p-4 border-b border-gray-100 last:border-0 hover:bg-gray-50 rounded-lg transition-colors">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                                                    {i + 1}
                                                </div>
                                                <div>
                                                    <p className="font-bold text-gray-800">{topper.name}</p>
                                                    <p className="text-xs text-secondary-light font-medium">{topper.subject}</p>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <p className="font-bold text-primary text-xl">{topper.score}</p>
                                                <p className="text-xs text-gray-500">{topper.percentile}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="absolute top-8 -right-8 w-full h-full bg-primary/5 rounded-2xl -z-10"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Academic Awards & Recognitions */}
            <section className="py-20 bg-gray-50 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-primary mb-4">Awards & Recognitions</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Acknowledging the hard work of our students and the dedication of our faculty.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Award Card 1 */}
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex gap-4">
                            <div className="shrink-0 mt-1">
                                <Award className="text-secondary w-10 h-10" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Best School in Taluk</h3>
                                <p className="text-gray-600 text-sm">Recognized by the Block Education Officer for outstanding overall SSLC performance in Doddaballapur Taluk.</p>
                            </div>
                        </div>

                        {/* Award Card 2 */}
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex gap-4">
                            <div className="shrink-0 mt-1">
                                <Star className="text-primary w-10 h-10" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Pratibha Puraskar</h3>
                                <p className="text-gray-600 text-sm">Over 20 students from our school were awarded the state government's Pratibha Puraskar scholarship for meritorious performance.</p>
                            </div>
                        </div>

                        {/* Award Card 3 */}
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex gap-4">
                            <div className="shrink-0 mt-1">
                                <TrendingUp className="text-secondary-light w-10 h-10" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Science Model Exhibition</h3>
                                <p className="text-gray-600 text-sm">1st Prize in the District Level Science Model making competition, showcasing our practical approach to education.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Extracurricular Participation */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-primary mb-4">Extracurricular Achievements</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Our students excel beyond academics on regional and state platforms.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                            <Image
                                src="/images/School 4.jpeg"
                                alt="Sports Achievements"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="space-y-8">
                            <div className="border-l-4 border-primary pl-6">
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">State Level Athletics</h3>
                                <p className="text-gray-600">Three of our high school athletes qualified for the State Level Track and Field meet, securing one silver and two bronze medals in the 100m sprint and long jump events.</p>
                            </div>

                            <div className="border-l-4 border-secondary pl-6">
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">Inter-School Quiz Competitions</h3>
                                <p className="text-gray-600">Our team remains the defending champion at the regional "Knowledge Quest" for three consecutive years.</p>
                            </div>

                            <div className="border-l-4 border-blue-300 pl-6">
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">District Essay Writing</h3>
                                <p className="text-gray-600">First prize in the Kannada Rajyotsava district-level essay writing competition, emphasizing our focus on linguistic skills in English as well as regional languages.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
