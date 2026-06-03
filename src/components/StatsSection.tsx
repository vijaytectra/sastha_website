export default function StatsSection() {
  const stats = [
    {
      value: "30,000+",
      label: "Active Members",
      desc: "An active community supporting our vision",
      border: "border-brand-green/20",
      bg: "bg-white",
      textColor: "text-brand-green",
    },
    {
      value: "120+",
      label: "Yearly Events",
      desc: "Cultural celebrations, festivals, & seminars",
      border: "border-brand-rust/20",
      bg: "bg-white",
      textColor: "text-brand-rust",
    },
    {
      value: "15k+",
      label: "Students Enrolled",
      desc: "Weekly Tamil language & literature learners",
      border: "border-brand-green/20",
      bg: "bg-white",
      textColor: "text-brand-green",
    },
    {
      value: "20+",
      label: "Accredited Programs",
      desc: "From preschool foundations to high school graduation credits",
      border: "border-brand-rust/20",
      bg: "bg-white",
      textColor: "text-brand-rust",
    },
  ];

  return (
    <section className="py-20 bg-brand-beige-dark/25 relative border-y border-brand-beige-dark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16 flex flex-col gap-3">
          <span className="font-sans font-semibold text-xs tracking-widest text-brand-rust uppercase">
            Our Footprint
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-brand-green">
            Building a Stronger Community
          </h2>
          <p className="font-sans text-brand-charcoal/70 text-sm sm:text-base leading-relaxed">
            By providing cultural infrastructure, educational channels, and events, we foster a deep, lifelong bond with the Tamil language and heritage.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-2xl border ${stat.border} ${stat.bg} shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 text-center flex flex-col items-center justify-between gap-4`}
            >
              <div className="flex flex-col gap-1">
                <span className={`font-serif font-bold text-4xl sm:text-5xl ${stat.textColor}`}>
                  {stat.value}
                </span>
                <span className="font-sans font-bold text-sm text-brand-charcoal tracking-wide">
                  {stat.label}
                </span>
              </div>
              <p className="font-sans text-xs text-brand-charcoal/60 leading-relaxed max-w-[200px]">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
