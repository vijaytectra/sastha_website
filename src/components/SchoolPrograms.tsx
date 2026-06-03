import { Compass, BookOpen, GraduationCap, ChevronRight, Check } from "lucide-react";

export default function SchoolPrograms() {
  const programs = [
    {
      icon: <Compass className="w-6 h-6 text-brand-green" />,
      title: "Pre-K to K",
      age: "Ages 4 - 6",
      desc: "Focuses on conversational fluency, story-telling, Tamil nursery rhymes, and visual vocabulary matching.",
      link: "#enroll",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-brand-rust" />,
      title: "Elementary School",
      age: "Ages 7 - 10",
      desc: "Covers standard phonetics (Uyir & Mei), spelling, writing basic sentences, and moral literature (Aathichoodi).",
      link: "#enroll",
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-brand-green" />,
      title: "High School Credits",
      age: "Ages 11 - 18",
      desc: "Vetted courses offering high school graduation foreign language credits, advanced literature, and history.",
      link: "#enroll",
    },
  ];

  return (
    <section id="programs" className="py-24 bg-brand-sand relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 flex flex-col gap-3">
          <span className="font-sans font-semibold text-xs tracking-widest text-brand-rust uppercase">
            Curriculum Path
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-brand-green">
            Accredited Tamil School Programs
          </h2>
          <p className="font-sans text-brand-charcoal/70 text-sm sm:text-base">
            Our structured, age-appropriate educational paths are recognized for high-school foreign language credits.
          </p>
        </div>

        {/* 3 Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {programs.map((prog, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl border border-brand-beige-dark/50 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col gap-6 text-left group"
            >
              <div className="w-12 h-12 rounded-2xl bg-brand-beige flex items-center justify-center group-hover:scale-110 transition-transform">
                {prog.icon}
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-sans font-semibold text-[11px] text-brand-rust tracking-wider uppercase">
                  {prog.age}
                </span>
                <h3 className="font-serif font-bold text-xl text-brand-green">
                  {prog.title}
                </h3>
              </div>
              <p className="font-sans text-xs sm:text-sm text-brand-charcoal/80 leading-relaxed min-h-[72px]">
                {prog.desc}
              </p>
              <a
                href={prog.link}
                className="mt-auto inline-flex items-center gap-1 font-sans font-bold text-xs text-brand-green hover:text-brand-rust transition-colors"
              >
                <span>Enroll Now</span>
                <ChevronRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        {/* Highlight Banner (Tamil Literacy Program) */}
        <div className="bg-brand-green rounded-3xl overflow-hidden text-brand-beige shadow-xl border border-brand-green-dark">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 p-8 sm:p-12 md:p-16 flex flex-col gap-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full border border-white/5 w-fit">
                <span className="font-sans font-bold text-[10px] tracking-wider uppercase text-white">
                  Signature Program
                </span>
              </div>
              
              <h3 className="font-serif font-bold text-3xl sm:text-4xl text-white">
                Tamil Literacy Program
              </h3>
              
              <p className="font-sans text-sm sm:text-base text-brand-beige/80 leading-relaxed max-w-xl">
                Levels 1 - 8: Interactive weekly classes covering writing stroke directions, sentence semantics, reading compression, and speaking eloquence.
              </p>

              <div className="flex flex-col gap-3 font-sans text-sm text-brand-beige/90">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-brand-rust">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span>Custom Tamil Heritage Workbooks & Interactive Software</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-brand-rust">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span>Vetted, Native-Speaking Certified Language Instructors</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-brand-rust">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span>Monthly Parent-Teacher Academic Progress Check-ins</span>
                </div>
              </div>

              <div className="pt-4">
                <button className="bg-brand-rust hover:bg-brand-rust-dark text-white font-sans font-bold px-8 py-3.5 rounded-full shadow-md transition-colors transform hover:-translate-y-0.5">
                  View Full Curriculum
                </button>
              </div>
            </div>

            {/* Right Graphic Stack */}
            <div className="lg:col-span-5 relative w-full h-full min-h-[300px] lg:min-h-[450px] overflow-hidden bg-brand-green-dark/40 flex items-center justify-center">
              <img
                src="/assets/tamil_literacy_books.png"
                alt="Stack of Tamil books and palm leaf manuscripts"
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-green/30 via-transparent to-transparent hidden lg:block" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
