import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Award, Shield, CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] md:h-[700px] flex items-center">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/School.jpeg"
            alt="Students at Cambridge English School"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-blue-900/70 mix-blend-multiply"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Strong Foundations.<br />
              <span className="text-secondary-light">Bright Futures.</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl">
              A disciplined, result-oriented State Board school offering quality English-medium education at affordable fees in Doddaballapur.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/admissions"
                className="bg-secondary hover:bg-secondary-light text-white font-semibold px-6 py-3 rounded-md text-center transition-colors flex items-center justify-center gap-2"
              >
                Apply for Admission
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="bg-white hover:bg-gray-100 text-primary font-semibold px-6 py-3 rounded-md text-center transition-colors"
              >
                Enquire Now
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-md text-center transition-colors"
              >
                Book Campus Visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Highlight Cards */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center transform transition hover:-translate-y-1 hover:shadow-md">
              <div className="w-14 h-14 bg-blue-50 text-primary rounded-full flex items-center justify-center mb-4">
                <CheckCircle size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Admissions Open</h3>
              <p className="text-gray-600">Nursery to Grade 10 admissions now open for the upcoming academic year.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center transform transition hover:-translate-y-1 hover:shadow-md">
              <div className="w-14 h-14 bg-blue-50 text-primary rounded-full flex items-center justify-center mb-4">
                <BookOpen size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">State Board Affiliation</h3>
              <p className="text-gray-600">Strict adherence to Karnataka State Board curriculum focusing on core concepts.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center transform transition hover:-translate-y-1 hover:shadow-md">
              <div className="w-14 h-14 bg-amber-50 text-secondary rounded-full flex items-center justify-center mb-4">
                <Award size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">100% SSLC Results</h3>
              <p className="text-gray-600">Proudly maintaining a 100% pass rate in SSLC board examinations for the past 5 consecutive years.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center transform transition hover:-translate-y-1 hover:shadow-md">
              <div className="w-14 h-14 bg-blue-50 text-primary rounded-full flex items-center justify-center mb-4">
                <Shield size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Safe & Disciplined</h3>
              <p className="text-gray-600">A structured learning environment focusing on moral values and discipline.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Brief About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-primary mb-6 flex items-center">
                <span className="w-8 h-1 bg-secondary inline-block mr-3"></span>
                About Cambridge English School
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed text-lg">
                Located in the heart of Doddaballapur, Cambridge English School is dedicated to providing high-quality, English-medium education accessible to all. We believe in nurturing academic excellence alongside strong moral values.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Our approach is deeply structured and result-oriented, ensuring every student develops a robust academic foundation. We focus heavily on discipline, integrity, respect, and preparing our students rigorously for SSLC exam success.
              </p>
              <Link href="/about" className="inline-flex items-center text-primary font-semibold hover:text-primary-light transition-colors group">
                Read our full story
                <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/School 1.jpeg"
                  alt="School Campus"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative block */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary rounded-lg -z-10 hidden md:block"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-100 rounded-lg -z-10 hidden md:block"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Stats Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-y border-blue-800 py-12">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-secondary-light mb-2">100%</div>
              <div className="text-blue-100 font-medium">SSLC Pass Rate</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-secondary-light mb-2">15+</div>
              <div className="text-blue-100 font-medium">Years of Excellence</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-secondary-light mb-2">30:1</div>
              <div className="text-blue-100 font-medium">Student-Teacher Ratio</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-secondary-light mb-2">50+</div>
              <div className="text-blue-100 font-medium">District Toppers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Parent Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">What Parents Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Hear from our community about their experiences with our structured and disciplined approach to education.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "The discipline and focus on academics here is unmatched. My son's English communication has improved drastically, and he achieved an outstanding score in his SSLC exams thanks to the teachers' rigorous preparation.",
                author: "Ramesh K.",
                role: "Parent of Grade 10 Student"
              },
              {
                text: "We wanted a school that provided quality English-medium education at reasonable fees in Doddaballapur. Cambridge English School exceeded our expectations. The teachers are very dedicated.",
                author: "Sunita M.",
                role: "Parent of Grade 7 Student"
              },
              {
                text: "The emphasis on moral values along with studies is what makes this school special. The campus is safe, teachers are approachable, and my daughter loves going to school every day.",
                author: "Prakash V.",
                role: "Parent of Grade 4 Student"
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 relative">
                <div className="text-secondary opacity-20 text-6xl absolute top-4 left-4 font-serif">&quot;</div>
                <p className="text-gray-600 mb-6 relative z-10 italic">&quot;{testimonial.text}&quot;</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-primary font-bold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.author}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News & Announcements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">Latest News & Announcements</h2>
              <p className="text-gray-600">Stay updated with important notices and events.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6 hover:border-primary transition-colors flex gap-6 items-start">
              <div className="bg-blue-50 text-center p-3 rounded-md shrink-0 w-20">
                <div className="text-sm font-bold text-primary uppercase">Mar</div>
                <div className="text-2xl font-bold text-gray-800">15</div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">SSLC Preparatory Exams Schedule</h3>
                <p className="text-gray-600 text-sm">The timetable for the 3rd preparatory exams for Grade 10 students has been published. Parents are requested to ensure students are well-prepared.</p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:border-primary transition-colors flex gap-6 items-start">
              <div className="bg-blue-50 text-center p-3 rounded-md shrink-0 w-20">
                <div className="text-sm font-bold text-primary uppercase">May</div>
                <div className="text-2xl font-bold text-gray-800">20</div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Admissions Process for New Academic Year</h3>
                <p className="text-gray-600 text-sm">Forms are now available at the school office. Limited seats available for Nursery and Grade 1. Please visit between 9 AM and 2 PM.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
