import { BookOpen, Sparkles, GraduationCap, Users } from "lucide-react";

export default function GenerationsSection() {
  const points = [
    {
      icon: <BookOpen className="w-5 h-5 text-white" />,
      title: "Tamil Classes",
      desc: "Comprehensive weekly courses covering speaking, reading, writing, and literature for all ages.",
      bg: "bg-brand-green",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-white" />,
      title: "Cultural Events",
      desc: "Annual regional festivals, drama programs, poetry symposiums, and traditional holiday galas.",
      bg: "bg-brand-rust",
    },
    {
      icon: <GraduationCap className="w-5 h-5 text-white" />,
      title: "Youth Programs",
      desc: "Mentorship, leadership workshops, summer camps, and public speaking training in Tamil.",
      bg: "bg-brand-green",
    },
    {
      icon: <Users className="w-5 h-5 text-white" />,
      title: "Community Service",
      desc: "Civic engagement, charity drives, translation support, and heritage advocacy panels.",
      bg: "bg-brand-rust",
    },
  ];

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Visual Showcase (Left) */}
          <div className="lg:col-span-6 relative">
            <div className="absolute -inset-4 bg-brand-beige rounded-3xl rotate-1 -z-10" />
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] w-full border border-brand-beige-dark">
              <img
                src="/assets/tamil_school_children.png"
                alt="Tamil School Students studying"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Overlapping Badge Card */}
            <div className="absolute bottom-6 -right-4 sm:-right-8 bg-brand-rust text-white p-6 rounded-2xl shadow-xl max-w-xs transform hover:scale-105 transition-transform duration-300">
              <span className="font-serif font-bold text-3xl block leading-none mb-1">
                15+
              </span>
              <span className="font-sans font-bold text-sm block tracking-wide">
                Tamil School Branches
              </span>
              <p className="font-sans text-[11px] text-white/80 leading-relaxed mt-2">
                Convenient locations offering standard accredited language programs across the region.
              </p>
            </div>
          </div>

          {/* Core Content (Right) */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-left">
            <span className="font-sans font-semibold text-xs tracking-widest text-brand-rust uppercase">
              Preserving Identity
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-brand-green leading-tight">
              Connecting Generations through Tamil Language and Culture
            </h2>
            <p className="font-sans text-brand-charcoal/80 text-sm sm:text-base leading-relaxed">
              We provide structural roots for Tamil families. Through interactive lessons, heritage celebrations, and cultural showcase events, we guide children to speak, write, and feel proud of their legacy.
            </p>

            {/* List of Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              {points.map((point, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className={`w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center shadow-md ${point.bg}`}>
                    {point.icon}
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="font-serif font-bold text-base text-brand-charcoal">
                      {point.title}
                    </h4>
                    <p className="font-sans text-xs text-brand-charcoal/70 leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
