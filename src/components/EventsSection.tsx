import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";

export default function EventsSection() {
  const events = [
    {
      title: "The Pongal Festival",
      category: "Annual Celebration",
      badgeColor: "bg-brand-rust text-white",
      date: "January 14, 2027",
      time: "10:00 AM - 4:00 PM",
      location: "Zilker Park Pavilion, Austin, TX",
      desc: "Celebrate the harvest festival with traditional sweet rice cooking (Pongal), folk dances (Karakattam), sugarcane harvesting, family cultural games, and traditional foods.",
      image: "/assets/event_pongal.png",
      link: "#pongal",
    },
    {
      title: "Tamil New Year Celebration",
      category: "Cultural Gala",
      badgeColor: "bg-brand-green text-white",
      date: "April 14, 2027",
      time: "6:00 PM - 9:30 PM",
      location: "Palmer Events Center, Austin, TX",
      desc: "Welcome the year of Chithirai. Features student poetry readings, traditional drama showcases, musical instrument recitals, community awards, and an authentic South Indian dinner buffet.",
      image: "/assets/event_newyear.png",
      link: "#newyear",
    },
    {
      title: "Tamil Heritage Month",
      category: "Heritage Seminars",
      badgeColor: "bg-brand-rust text-white",
      date: "October 1 - 31, 2027",
      time: "Varying Schedules",
      location: "UT Austin Campus & Online Stream",
      desc: "A month-long series of literary symposiums, ancient palm-leaf manuscript archives exhibitions, language workshops, and guest lectures from renowned Tamil historians.",
      image: "/assets/event_month.png",
      link: "#heritagemonth",
    },
  ];

  return (
    <section id="events" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20 flex flex-col gap-3">
          <span className="font-sans font-semibold text-xs tracking-widest text-brand-rust uppercase">
            Calendar
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-brand-green">
            Celebrating Tamil Heritage Together
          </h2>
          <p className="font-sans text-brand-charcoal/70 text-sm sm:text-base">
            Participate in our yearly cultural programs designed to unite the community, highlight student progress, and share our rich culture with the world.
          </p>
        </div>

        {/* Events List (Vertical stack of horizontal cards) */}
        <div className="flex flex-col gap-12">
          {events.map((evt, idx) => (
            <div
              key={idx}
              className={`bg-brand-sand/30 rounded-3xl overflow-hidden border border-brand-beige-dark/50 shadow-sm hover:shadow-md transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-0 group`}
            >
              {/* Event Image */}
              <div className="lg:col-span-4 relative min-h-[240px] overflow-hidden bg-brand-beige">
                <img
                  src={evt.image}
                  alt={evt.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-brand-charcoal/10" />
              </div>

              {/* Event Details */}
              <div className="lg:col-span-8 p-8 sm:p-10 flex flex-col gap-4 text-left justify-center">
                <div className="flex items-center gap-3">
                  <span className={`font-sans font-semibold text-[10px] tracking-wider uppercase px-3 py-1 rounded-full ${evt.badgeColor}`}>
                    {evt.category}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-2xl sm:text-3xl text-brand-green leading-tight">
                  {evt.title}
                </h3>

                <p className="font-sans text-sm text-brand-charcoal/80 leading-relaxed max-w-2xl">
                  {evt.desc}
                </p>

                {/* Event Schedule Info */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4 border-t border-brand-beige-dark/60 mt-2 text-brand-charcoal/70">
                  <div className="flex items-center gap-2.5">
                    <Calendar className="w-4 h-4 text-brand-rust flex-shrink-0" />
                    <span className="font-sans text-xs sm:text-sm font-semibold">{evt.date}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-brand-rust flex-shrink-0" />
                    <span className="font-sans text-xs sm:text-sm">{evt.time}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-brand-rust flex-shrink-0" />
                    <span className="font-sans text-xs sm:text-sm truncate max-w-[200px]">{evt.location}</span>
                  </div>
                </div>

                <a
                  href={evt.link}
                  className="inline-flex items-center gap-2 font-sans font-bold text-sm text-brand-rust hover:text-brand-rust-dark transition-colors w-fit group/link"
                >
                  <span>Learn More & RSVP</span>
                  <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
