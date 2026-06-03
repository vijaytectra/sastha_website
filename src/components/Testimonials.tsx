import { Quote, Star } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      stars: 5,
      quote: "Sending our children to the Tamil School has been the best decision. Not only are they writing and speaking Tamil fluently now, but they've also made lifelong friends and gained a beautiful appreciation for their family cultural heritage.",
      author: "Priya Elangovan",
      role: "Parent of Level 3 & Level 5 Students",
      initials: "PE",
      color: "bg-brand-green text-brand-beige",
    },
    {
      stars: 5,
      quote: "As a volunteer, assisting with the annual Pongal and New Year festivals has been a deeply fulfilling journey. The warmth, cooperation, and dedication of this society to preserving our heritage is truly inspiring.",
      author: "Karthik Subramanian",
      role: "Community Volunteer (4 Years)",
      initials: "KS",
      color: "bg-brand-rust text-white",
    },
    {
      stars: 5,
      quote: "The High School Credit program made a huge difference. I was able to study advanced Tamil poetry and history, get official foreign language school credits, and connect deeply with my roots before heading off to college.",
      author: "Meera Nedunchezhiyan",
      role: "Vite Program Graduate (Class of 2025)",
      initials: "MN",
      color: "bg-brand-green text-brand-beige",
    },
  ];

  return (
    <section id="stories" className="py-24 bg-brand-sand/30 relative border-t border-brand-beige-dark/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 flex flex-col gap-3">
          <span className="font-sans font-semibold text-xs tracking-widest text-brand-rust uppercase">
            Testimonials
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-brand-green">
            Member Stories & Connection
          </h2>
          <p className="font-sans text-brand-charcoal/70 text-sm sm:text-base">
            Read what parents, student graduates, and active volunteers say about their experiences within our community.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-3xl border border-brand-beige-dark/40 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-6 text-left relative transform hover:-translate-y-1"
            >
              {/* Quote Mark */}
              <div className="absolute top-6 right-8 text-brand-rust/10">
                <Quote className="w-12 h-12 fill-brand-rust/5" />
              </div>

              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(rev.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              {/* Quote text */}
              <p className="font-sans text-sm text-brand-charcoal/80 leading-relaxed italic flex-1">
                "{rev.quote}"
              </p>

              {/* Profile details */}
              <div className="flex items-center gap-4 border-t border-brand-beige-dark/50 pt-5 mt-2">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-sans font-bold text-sm shadow-sm ${rev.color}`}>
                  {rev.initials}
                </div>
                <div className="flex flex-col">
                  <span className="font-serif font-bold text-base text-brand-green leading-none">
                    {rev.author}
                  </span>
                  <span className="font-sans text-xs text-brand-charcoal/50 mt-1 leading-none">
                    {rev.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
