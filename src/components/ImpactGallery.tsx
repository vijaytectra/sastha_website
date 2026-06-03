export default function ImpactGallery() {
  const images = [
    {
      src: "/assets/hero_dancers.png",
      alt: "Bharatanatyam Recital Performance",
      span: "md:col-span-6 md:row-span-2",
      title: "Classical Art Heritage",
      category: "Performance",
    },
    {
      src: "/assets/discover_dance.png",
      alt: "Solo dance expression",
      span: "md:col-span-3 md:row-span-1",
      title: "Expressive Mudras",
      category: "Bharatanatyam",
    },
    {
      src: "/assets/discover_festival.png",
      alt: "Festival gathering",
      span: "md:col-span-3 md:row-span-1",
      title: "Community Gatherings",
      category: "Festival",
    },
    {
      src: "/assets/tamil_school_children.png",
      alt: "Children in language lab",
      span: "md:col-span-3 md:row-span-2",
      title: "Tamil Language Schools",
      category: "Education",
    },
    {
      src: "/assets/discover_music.png",
      alt: "Percussion player close-up",
      span: "md:col-span-3 md:row-span-2",
      title: "Traditional Percussion",
      category: "Carnatic Music",
    },
    {
      src: "/assets/event_pongal.png",
      alt: "Pongal festival cooking",
      span: "md:col-span-6 md:row-span-1",
      title: "Harvest Festival Traditions",
      category: "Celebration",
    },
    {
      src: "/assets/event_month.png",
      alt: "Folk performance outdoors",
      span: "md:col-span-3 md:row-span-1",
      title: "Folk Arts Showcase",
      category: "Folk Dance",
    },
    {
      src: "/assets/event_newyear.png",
      alt: "Family celebration greeting",
      span: "md:col-span-3 md:row-span-1",
      title: "Cultural Values",
      category: "Family & Heritage",
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-brand-sand/50 relative border-y border-brand-beige-dark/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 flex flex-col gap-3">
          <span className="font-sans font-semibold text-xs tracking-widest text-brand-rust uppercase">
            Captured Moments
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-brand-green">
            Our Impact in Action
          </h2>
          <p className="font-sans text-brand-charcoal/70 text-sm sm:text-base">
            Take a look at our community in action—from classrooms to dance stages, community festivals, and family celebrations.
          </p>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[220px]">
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`relative overflow-hidden rounded-2xl shadow-sm hover:shadow-lg transition-all duration-500 group border-2 border-white ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-brand-charcoal/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left" />
              
              {/* Text content absolute */}
              <div className="absolute inset-x-0 bottom-0 p-6 text-left transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="font-sans font-bold text-[9px] tracking-wider text-brand-rust uppercase bg-white/95 px-2 py-0.5 rounded-full w-fit block mb-1.5">
                  {img.category}
                </span>
                <h4 className="font-serif font-bold text-lg text-white">
                  {img.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
