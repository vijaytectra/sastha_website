export default function PreservationBanner() {
  const stats = [
    { value: "$50k+", label: "Raised for Facilities" },
    { value: "1,200+", label: "Individual Donors" },
    { value: "25k+", label: "Hours Volunteered" },
  ];

  return (
    <section className="py-20 bg-brand-green text-brand-beige border-y border-brand-green-dark relative overflow-hidden">
      {/* Subtle background graphics */}
      <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-white/5 blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-brand-rust/10 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-10">
        
        {/* Texts */}
        <div className="max-w-2xl flex flex-col gap-4">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-white">
            Support the Preservation and Shape Our Future
          </h2>
          <p className="font-sans text-brand-beige/80 text-sm sm:text-base leading-relaxed">
            Your generous contributions directly support classroom learning workbooks, student speech competitions, library archives, and rental facilities for large heritage celebrations.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-4xl py-6 border-y border-white/10">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col gap-1 items-center justify-center">
              <span className="font-serif font-bold text-3xl sm:text-4xl text-brand-rust">
                {stat.value}
              </span>
              <span className="font-sans text-xs tracking-wider text-brand-beige/70 uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Button */}
        <div>
          <button className="bg-brand-rust hover:bg-brand-rust-dark text-white font-sans font-bold px-8 py-3.5 rounded-full shadow-lg transition-colors transform hover:-translate-y-0.5">
            Support Our Mission
          </button>
        </div>

      </div>
    </section>
  );
}
