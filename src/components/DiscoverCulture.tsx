import { Play, X, Heart, Star } from "lucide-react";
import { useState } from "react";

export default function DiscoverCulture() {
  const [activeVideo, setActiveVideo] = useState<{ url: string; title: string } | null>(null);

  const videos = {
    dance: {
      title: "Bharatanatyam Recital - The Language of Mudras",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ", // rickroll as fallback or nice nature video
      badge: "Classical Dance",
      duration: "5:24",
      image: "/assets/discover_dance.png",
    },
    festival: {
      title: "Celebrating Pongal - Harvest Blessings & Togetherness",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      badge: "Community Festival",
      duration: "3:40",
      image: "/assets/discover_festival.png",
    },
    music: {
      title: "Mridangam Performance - Rhythms of Carnatic Music",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      badge: "Traditional Music",
      duration: "4:15",
      image: "/assets/discover_music.png",
    },
  };

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 flex flex-col gap-3">
          <span className="font-sans font-semibold text-xs tracking-widest text-brand-rust uppercase">
            Media Library
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-brand-green">
            Discover Tamil Culture
          </h2>
          <p className="font-sans text-brand-charcoal/70 text-sm sm:text-base">
            Experience the vibrant classical dances, seasonal festivals, and rhythmic percussion systems that represent Tamil heritage.
          </p>
        </div>

        {/* Video Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left - Large Video Card */}
          <div
            onClick={() => setActiveVideo({ url: videos.dance.url, title: videos.dance.title })}
            className="lg:col-span-7 relative group rounded-2xl overflow-hidden shadow-md aspect-[16/10] cursor-pointer border border-brand-beige-dark/40"
          >
            <img
              src={videos.dance.image}
              alt={videos.dance.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-brand-charcoal/20 to-transparent group-hover:via-brand-charcoal/30 transition-all duration-300" />
            
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-brand-rust text-white flex items-center justify-center shadow-lg group-hover:scale-115 transition-transform duration-300">
                <Play className="w-6 h-6 fill-white ml-1" />
              </div>
            </div>

            {/* Content Details */}
            <div className="absolute bottom-0 left-0 right-0 p-8 text-left flex justify-between items-end">
              <div className="flex flex-col gap-2 max-w-md">
                <span className="bg-brand-rust/95 text-white font-sans font-semibold text-[10px] tracking-widest uppercase px-3 py-1 rounded-full w-fit">
                  {videos.dance.badge}
                </span>
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-white">
                  {videos.dance.title}
                </h3>
              </div>
              <span className="font-sans text-xs text-white/70 bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded-md">
                {videos.dance.duration}
              </span>
            </div>
          </div>

          {/* Right - Two Medium Video Cards */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Right Top Card */}
            <div
              onClick={() => setActiveVideo({ url: videos.festival.url, title: videos.festival.title })}
              className="relative group rounded-2xl overflow-hidden shadow-md flex-1 min-h-[220px] aspect-[16/10] cursor-pointer border border-brand-beige-dark/40"
            >
              <img
                src={videos.festival.image}
                alt={videos.festival.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/85 via-brand-charcoal/20 to-transparent" />
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-brand-rust text-white flex items-center justify-center shadow-md group-hover:scale-115 transition-transform duration-300">
                  <Play className="w-4 h-4 fill-white ml-0.5" />
                </div>
              </div>

              {/* Card Footer */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-left flex justify-between items-end">
                <div className="flex flex-col gap-1 max-w-[280px]">
                  <span className="bg-brand-green text-white font-sans font-semibold text-[9px] tracking-wider uppercase px-2.5 py-0.5 rounded-full w-fit">
                    {videos.festival.badge}
                  </span>
                  <h4 className="font-serif font-bold text-lg text-white leading-tight">
                    {videos.festival.title}
                  </h4>
                </div>
                <span className="font-sans text-[10px] text-white/70 bg-black/30 backdrop-blur-sm px-2 py-0.5 rounded-md">
                  {videos.festival.duration}
                </span>
              </div>
            </div>

            {/* Right Bottom Card */}
            <div
              onClick={() => setActiveVideo({ url: videos.music.url, title: videos.music.title })}
              className="relative group rounded-2xl overflow-hidden shadow-md flex-1 min-h-[220px] aspect-[16/10] cursor-pointer border border-brand-beige-dark/40"
            >
              <img
                src={videos.music.image}
                alt={videos.music.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/85 via-brand-charcoal/20 to-transparent" />
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-brand-rust text-white flex items-center justify-center shadow-md group-hover:scale-115 transition-transform duration-300">
                  <Play className="w-4 h-4 fill-white ml-0.5" />
                </div>
              </div>

              {/* Card Footer */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-left flex justify-between items-end">
                <div className="flex flex-col gap-1 max-w-[280px]">
                  <span className="bg-brand-green text-white font-sans font-semibold text-[9px] tracking-wider uppercase px-2.5 py-0.5 rounded-full w-fit">
                    {videos.music.badge}
                  </span>
                  <h4 className="font-serif font-bold text-lg text-white leading-tight">
                    {videos.music.title}
                  </h4>
                </div>
                <span className="font-sans text-[10px] text-white/70 bg-black/30 backdrop-blur-sm px-2 py-0.5 rounded-md">
                  {videos.music.duration}
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Video Modal Overlay */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#121E19] rounded-2xl overflow-hidden w-full max-w-4xl shadow-2xl relative border border-brand-green/30">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-brand-green/20 text-white">
              <h3 className="font-serif font-semibold text-lg max-w-xs sm:max-w-md truncate">
                {activeVideo.title}
              </h3>
              <button
                onClick={() => setActiveVideo(null)}
                className="p-1 rounded-full hover:bg-white/10 text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            {/* Modal Content - Player */}
            <div className="aspect-video bg-black flex items-center justify-center relative">
              {/* If playing fake video to look high quality, or just embed iframe */}
              <iframe
                src={`${activeVideo.url}?autoplay=1`}
                title={activeVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            {/* Modal Footer */}
            <div className="p-4 bg-brand-green-dark/40 flex items-center justify-between text-xs text-[#EAE4D9]/60">
              <span>Streaming from cultural repository.</span>
              <div className="flex gap-4">
                <button className="flex items-center gap-1.5 hover:text-white transition-colors">
                  <Heart className="w-4 h-4 text-brand-rust" />
                  <span>Favorite</span>
                </button>
                <button className="flex items-center gap-1.5 hover:text-white transition-colors">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>Rating</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
