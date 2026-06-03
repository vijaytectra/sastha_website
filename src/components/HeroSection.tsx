import { Calendar, Globe } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-brand-sand">
      {/* Background organic shape */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 rounded-full bg-brand-beige-dark/20 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 rounded-full bg-brand-green/5 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="lg:col-span-6 flex flex-col items-start text-left gap-6 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-green/10 border border-brand-green/10">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              <span className="font-sans font-semibold text-xs tracking-wider text-brand-green uppercase">
                Tamil Heritage & Language Society
              </span>
            </div>
            
            <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.12] text-brand-green tracking-tight">
              Preserving Heritage, <br className="hidden sm:inline" />
              <span className="text-brand-rust">Connecting</span> with <br />
              Community
            </h1>
            
            <p className="font-sans text-base sm:text-lg leading-relaxed text-brand-charcoal/80">
              Empowering our youth and community through Tamil language classes, traditional arts academies, vibrant celebrations, and mutual support programs. Join us in bridging the past and future.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-2">
              <a
                href="#join"
                className="bg-brand-green hover:bg-brand-green-dark text-white font-sans font-bold text-base px-8 py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Get Involved
              </a>
              <a
                href="#programs"
                className="border-2 border-brand-rust hover:bg-brand-rust/5 text-brand-rust font-sans font-bold text-base px-8 py-3 rounded-full transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Our Programs
              </a>
            </div>

            {/* Quick trust metrics */}
            <div className="flex flex-wrap gap-8 items-center mt-6 pt-6 border-t border-brand-beige-dark/60 w-full">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-rust/10 flex items-center justify-center text-brand-rust">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-brand-charcoal leading-none">Weekly</h4>
                  <span className="font-sans text-xs text-brand-charcoal/60">Language Classes</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-brand-charcoal leading-none">Accredited</h4>
                  <span className="font-sans text-xs text-brand-charcoal/60">School Curriculums</span>
                </div>
              </div>
            </div>
          </div>

          {/* Dancers Visual */}
          <div className="lg:col-span-6 flex justify-center items-center relative">
            {/* Visual background frame */}
            <div className="absolute -inset-4 bg-brand-beige-dark/30 rounded-3xl -rotate-2 -z-10" />
            <div className="absolute inset-0 bg-brand-rust/5 rounded-3xl rotate-1 -z-10" />
            
            <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-white aspect-[4/3] w-full max-w-xl group">
              <img
                src="/assets/hero_dancers.png"
                alt="Bharatanatyam Folk Dancers"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="font-serif text-white italic text-sm">
                  Traditional Bharatanatyam recital at our Annual Heritage Gala
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
