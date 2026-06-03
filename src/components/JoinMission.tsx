import { Check } from "lucide-react";

export default function JoinMission() {
  return (
    <section id="join" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-16 flex flex-col gap-3">
          <span className="font-sans font-semibold text-xs tracking-widest text-brand-rust uppercase">
            Get Involved
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-brand-green">
            Join Our Mission to Preserve Tamil Heritage
          </h2>
          <p className="font-sans text-brand-charcoal/70 text-sm sm:text-base">
            Whether you want to share your time as a teacher, help organize festivals, or sponsor educational materials, your presence makes a difference.
          </p>
        </div>

        {/* Dual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Volunteer */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg border border-brand-green-dark/20 min-h-[420px] flex flex-col justify-end text-left group">
            {/* Background Image */}
            <img
              src="/assets/volunteer_bg.png"
              alt="Volunteers cooperating"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 -z-10"
            />
            {/* Brand Green Overlay */}
            <div className="absolute inset-0 bg-brand-green/90 group-hover:bg-brand-green/95 transition-colors -z-10" />

            <div className="p-8 sm:p-10 flex flex-col gap-5 text-brand-beige">
              <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white">
                Volunteer With Us
              </h3>
              <p className="font-sans text-xs sm:text-sm text-brand-beige/80 leading-relaxed">
                Join our committee of teachers, event coordinators, translation experts, and technical supporters to run weekly programs.
              </p>

              <div className="flex flex-col gap-2 font-sans text-xs sm:text-sm text-white/90 my-2">
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-brand-rust" />
                  <span>Language Instruction & Speech Coaching</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-brand-rust" />
                  <span>Festival Setup & Guest Hospitality</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-brand-rust" />
                  <span>Social Media & Community Outreach</span>
                </div>
              </div>

              <button className="w-full sm:w-fit bg-white hover:bg-brand-beige text-brand-green font-sans font-bold px-6 py-3 rounded-full shadow-md transition-colors transform hover:-translate-y-0.5 mt-2">
                Apply as Volunteer
              </button>
            </div>
          </div>

          {/* Card 2: Sponsor / Donate */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg border border-brand-rust-dark/20 min-h-[420px] flex flex-col justify-end text-left group">
            {/* Background Image */}
            <img
              src="/assets/sponsor_bg.png"
              alt="Brass cultural oil lamp"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 -z-10"
            />
            {/* Brand Rust Overlay */}
            <div className="absolute inset-0 bg-brand-rust/90 group-hover:bg-brand-rust/95 transition-colors -z-10" />

            <div className="p-8 sm:p-10 flex flex-col gap-5 text-white">
              <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white">
                Sponsor / Donate
              </h3>
              <p className="font-sans text-xs sm:text-sm text-white/80 leading-relaxed">
                Empower children with educational resources. Your sponsorships help maintain classrooms, distribute textbooks, and keep events free.
              </p>

              <div className="flex flex-col gap-2 font-sans text-xs sm:text-sm text-white/90 my-2">
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-brand-green" />
                  <span>Student Scholarship Fund Sponsorships</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-brand-green" />
                  <span>Annual Festival Grand Sponsor Levels</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-brand-green" />
                  <span>Classroom Literature Materials Donations</span>
                </div>
              </div>

              <button className="w-full sm:w-fit bg-white hover:bg-brand-beige text-brand-rust font-sans font-bold px-6 py-3 rounded-full shadow-md transition-colors transform hover:-translate-y-0.5 mt-2">
                Donate Today
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
