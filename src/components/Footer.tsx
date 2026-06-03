import { Landmark, Mail, Phone, MapPin, Send } from "lucide-react";
import React, { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-[#121E19] text-[#EAE4D9]/80 pt-20 pb-10 border-t border-brand-green/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-brand-green flex items-center justify-center text-brand-beige shadow-md">
                <Landmark className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl leading-none tracking-tight text-white">
                  தமிழ்
                </span>
                <span className="font-sans font-semibold text-[10px] tracking-widest text-brand-rust uppercase leading-none mt-1">
                  Heritage Org
                </span>
              </div>
            </div>
            <p className="font-sans text-sm leading-relaxed text-[#EAE4D9]/60">
              Preserving, celebrating, and teaching Tamil language, literature, arts, and traditions. Building a vibrant, inclusive community across generations.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-[#1A2D25] border border-brand-green/20 flex items-center justify-center text-[#EAE4D9]/80 hover:text-brand-rust hover:bg-brand-beige hover:border-transparent transition-all transform hover:-translate-y-1 shadow-sm"
              >
                <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-[#1A2D25] border border-brand-green/20 flex items-center justify-center text-[#EAE4D9]/80 hover:text-brand-rust hover:bg-brand-beige hover:border-transparent transition-all transform hover:-translate-y-1 shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full bg-[#1A2D25] border border-brand-green/20 flex items-center justify-center text-[#EAE4D9]/80 hover:text-brand-rust hover:bg-brand-beige hover:border-transparent transition-all transform hover:-translate-y-1 shadow-sm"
              >
                <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" className="fill-current" />
                </svg>
              </a>
            </div>
          </div>

          {/* Programs Links */}
          <div className="flex flex-col gap-6">
            <h4 className="font-serif font-semibold text-lg text-white border-b border-brand-green/20 pb-2">
              Programs
            </h4>
            <div className="flex flex-col gap-3 font-sans text-sm">
              <a href="#" className="hover:text-brand-rust transition-colors">Tamil School (PreK - 12)</a>
              <a href="#" className="hover:text-brand-rust transition-colors">Language Literacy Labs</a>
              <a href="#" className="hover:text-brand-rust transition-colors">Classical Dance Academy</a>
              <a href="#" className="hover:text-brand-rust transition-colors">Carnatic Music Classes</a>
              <a href="#" className="hover:text-brand-rust transition-colors">Youth Leadership Forum</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h4 className="font-serif font-semibold text-lg text-white border-b border-brand-green/20 pb-2">
              Quick Links
            </h4>
            <div className="flex flex-col gap-3 font-sans text-sm">
              <a href="#" className="hover:text-brand-rust transition-colors">Upcoming Festivals</a>
              <a href="#" className="hover:text-brand-rust transition-colors">Photo & Video Gallery</a>
              <a href="#" className="hover:text-brand-rust transition-colors">Volunteer Opportunities</a>
              <a href="#" className="hover:text-brand-rust transition-colors">Sponsorship Brochure</a>
              <a href="#" className="hover:text-brand-rust transition-colors">Research Archives</a>
            </div>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-6">
            <h4 className="font-serif font-semibold text-lg text-white border-b border-brand-green/20 pb-2">
              Contact Us
            </h4>
            <div className="flex flex-col gap-4 font-sans text-sm text-[#EAE4D9]/60">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-brand-rust flex-shrink-0" />
                <span>108 Heritage Boulevard, Culture Suite 400, Austin, TX 78701</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-rust flex-shrink-0" />
                <a href="tel:+15125550199" className="hover:text-white transition-colors">+1 (512) 555-0199</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-rust flex-shrink-0" />
                <a href="mailto:info@tamilheritage.org" className="hover:text-white transition-colors font-semibold">info@tamilheritage.org</a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-brand-green/10 pt-10 pb-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-2 max-w-md">
            <h5 className="font-serif font-semibold text-lg text-white">
              Stay Connected
            </h5>
            <p className="font-sans text-xs text-[#EAE4D9]/50">
              Subscribe to our monthly newsletter for school updates, festival announcements, and cultural stories.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="w-full md:w-auto flex items-center relative max-w-md">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="bg-[#1A2D25] border border-brand-green/30 text-white rounded-full pl-6 pr-12 py-3.5 w-full md:w-80 font-sans text-sm focus:outline-none focus:border-brand-rust transition-colors placeholder:text-[#EAE4D9]/30"
              required
            />
            <button
              type="submit"
              className="absolute right-1.5 top-1.5 w-10.5 h-10.5 rounded-full bg-brand-rust hover:bg-brand-rust-dark flex items-center justify-center text-white transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
            {subscribed && (
              <span className="absolute -bottom-6 left-6 font-sans text-xs text-brand-rust font-semibold">
                Thank you for subscribing!
              </span>
            )}
          </form>
        </div>

        {/* Copyright */}
        <div className="border-t border-brand-green/10 pt-8 mt-4 text-center font-sans text-xs text-[#EAE4D9]/40 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span>&copy; {new Date().getFullYear()} Tamil Heritage Organization. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
