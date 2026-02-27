import { BookOpen, GraduationCap, Users, PenTool, LayoutTemplate, Activity, Award } from "lucide-react";
import Image from "next/image";

export const metadata = {
    title: "Academics | Cambridge English School Doddaballapur",
    description: "Explore our rigorous Karnataka State Board curriculum, SSLC preparation strategy, co-curricular activities, and English communication focus.",
};

export default function Academics() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Page Header */}
            <section className="bg-primary text-white py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Academics</h1>
                    <p className="text-blue-100 max-w-2xl mx-auto text-lg">
                        A structured, disciplined approach to the Karnataka State Board Curriculum, building strong foundations from Nursery to Grade 10.
                    </p>
                </div>
            </section>

            {/* Curriculum Overview & Classes Offered */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-primary mb-6 flex items-center">
                                <span className="w-8 h-1 bg-secondary inline-block mr-3"></span>
                                State Board Curriculum
                            </h2>
                            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                                We strictly adhere to the guidelines set by the Department of Public Instruction, Karnataka. Our curriculum is designed to be comprehensive, logical, and highly structured, ensuring that every student grasps core concepts with clarity.
                            </p>

                            <div className="space-y-6 mt-8">
                                <div className="flex items-start">
                                    <div className="bg-blue-50 p-3 rounded-full text-primary mt-1 mr-4 shrink-0">
                                        <LayoutTemplate size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">Pre-Primary (Nursery, LKG, UKG)</h3>
                                        <p className="text-gray-600">Play-way method combined with structured early learning. Focus on basic numeracy, alphabet recognition, and motor skills.</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-blue-50 p-3 rounded-full text-primary mt-1 mr-4 shrink-0">
                                        <Users size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">Lower Primary (Grades 1 to 5)</h3>
                                        <p className="text-gray-600">Building strong foundations in English, Mathematics, Environmental Science, and Kannada as a subject.</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-blue-50 p-3 rounded-full text-primary mt-1 mr-4 shrink-0">
                                        <BookOpen size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">Higher Primary & High School (Grades 6 to 10)</h3>
                                        <p className="text-gray-600">Rigorous academic training in core subjects: Mathematics, General Science, Social Science, First Language English, Second Language Kannada, and Third Language Hindi.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-xl">
                            <Image
                                src="/images/gallery/gallery-8.webp"
                                alt="Students studying in classroom"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                                <div className="text-white">
                                    <h3 className="text-2xl font-bold mb-2">Discipline in Learning</h3>
                                    <p className="text-gray-200">Our classrooms are structured to minimize distractions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Focus on English */}
            <section className="py-20 bg-gray-50 border-y border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="grid md:grid-cols-2">
                            <div className="p-10 md:p-16 flex flex-col justify-center bg-primary text-white">
                                <h2 className="text-3xl font-bold mb-6 text-secondary-light">English Communication Focus</h2>
                                <p className="text-blue-100 mb-6 text-lg leading-relaxed">
                                    While we pride ourselves on our state board roots, we recognize that fluent English communication is critical in today's world. We ensure that our medium of instruction is strictly upheld.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3">
                                        <div className="bg-secondary p-1 rounded-full"><div className="w-2 h-2 bg-white rounded-full"></div></div>
                                        <span>Mandatory English communication on campus</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="bg-secondary p-1 rounded-full"><div className="w-2 h-2 bg-white rounded-full"></div></div>
                                        <span>Dedicated grammar and phonetics classes</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="bg-secondary p-1 rounded-full"><div className="w-2 h-2 bg-white rounded-full"></div></div>
                                        <span>Regular public speaking and reading exercises</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="relative min-h-[300px] md:min-h-full">
                                <Image
                                    src="/images/gallery/gallery-28.webp"
                                    alt="English reading activity"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SSLC Preparation & Examination */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-primary mb-4">SSLC Preparation Strategy</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Our rigorous approach ensures our students consistently achieve top ranks and 100% pass results in their 10th board exams.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="border border-blue-100 p-8 rounded-xl hover:shadow-md transition-shadow">
                            <div className="text-secondary bg-amber-50 w-16 h-16 flex items-center justify-center rounded-lg mb-6">
                                <PenTool size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Continuous Assessment</h3>
                            <p className="text-gray-600">Frequent unit tests, mid-term examinations, and monthly evaluations ensure students are constantly revising their syllabus and identifying weak areas early.</p>
                        </div>

                        <div className="border border-blue-100 p-8 rounded-xl hover:shadow-md transition-shadow">
                            <div className="text-primary bg-blue-50 w-16 h-16 flex items-center justify-center rounded-lg mb-6">
                                <GraduationCap size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Preparatory Exams</h3>
                            <p className="text-gray-600">Grade 10 students undergo a minimum of 3 full-syllabus preparatory examinations rigorously evaluated by experienced board examiners before the main exam.</p>
                        </div>

                        <div className="border border-blue-100 p-8 rounded-xl hover:shadow-md transition-shadow">
                            <div className="text-secondary bg-amber-50 w-16 h-16 flex items-center justify-center rounded-lg mb-6">
                                <BookOpen size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Remedial Classes</h3>
                            <p className="text-gray-600">Dedicated after-school classes for students who need extra attention in Mathematics and Science. No student is left behind in our pursuit of excellence.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Co-curricular Activities */}
            <section className="py-20 bg-gray-50 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <div className="lg:w-1/2 order-2 lg:order-1 relative">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="relative h-[250px] rounded-lg overflow-hidden">
                                    <Image src="/images/gallery/gallery-10.webp" alt="Sports Activity" fill className="object-cover" />
                                </div>
                                <div className="relative h-[250px] rounded-lg overflow-hidden mt-8">
                                    <Image src="/images/gallery/gallery-12.webp" alt="Library" fill className="object-cover" />
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2 order-1 lg:order-2">
                            <h2 className="text-3xl font-bold text-primary mb-6 flex items-center">
                                <span className="w-8 h-1 bg-secondary inline-block mr-3"></span>
                                Co-curricular Activities
                            </h2>
                            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                                While academics form our core, we believe in balanced development. Our co-curricular activities are structured and disciplined, ensuring physical and mental well-being.
                            </p>

                            <ul className="space-y-6">
                                <li className="flex items-start">
                                    <Activity className="text-primary mt-1 mr-4 shrink-0" size={24} />
                                    <div>
                                        <h4 className="font-bold text-gray-800 text-lg">Physical Education</h4>
                                        <p className="text-gray-600">Scheduled PT classes, annual sports meets, and team sports (Kho-kho, Kabbadi, Volleyball) to instill teamwork.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <BookOpen className="text-primary mt-1 mr-4 shrink-0" size={24} />
                                    <div>
                                        <h4 className="font-bold text-gray-800 text-lg">Library Program</h4>
                                        <p className="text-gray-600">Mandatory reading hours to cultivate a reading habit and improve general knowledge and vocabulary.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <Award className="text-primary mt-1 mr-4 shrink-0" size={24} />
                                    <div>
                                        <h4 className="font-bold text-gray-800 text-lg">Cultural Events</h4>
                                        <p className="text-gray-600">Celebration of national festivals and an Annual Day to provide a stage for our students' talents.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
