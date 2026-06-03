import { useState, useEffect } from "react";
import { Menu, X, Landmark, Heart } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About Us", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Events", href: "#events" },
    { name: "Gallery", href: "#gallery" },
    { name: "Stories", href: "#stories" },
    { name: "Join", href: "#join" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-beige/85 backdrop-blur-md border-b border-brand-beige-dark/50 py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-brand-green flex items-center justify-center text-brand-beige shadow-md">
              <Landmark className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl leading-none tracking-tight text-brand-green">
                தமிழ்
              </span>
              <span className="font-sans font-semibold text-[10px] tracking-widest text-brand-rust uppercase leading-none mt-1">
                Heritage Org
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans font-medium text-sm text-brand-charcoal/80 hover:text-brand-green transition-colors relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:height-[2px] after:bg-brand-rust after:transition-all hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <button className="flex items-center gap-2 bg-brand-rust hover:bg-brand-rust-dark text-white font-sans font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0">
              <Heart className="w-4 h-4 fill-white" />
              <span>Donate</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-brand-green hover:bg-brand-beige-dark/30 transition-colors focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-[73px] z-40 bg-brand-charcoal/40 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
      )}

      {/* Mobile Drawer Menu */}
      <div
        className={`md:hidden fixed top-[72px] right-0 bottom-0 w-4/5 max-w-sm bg-brand-beige z-50 shadow-2xl border-l border-brand-beige-dark/50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="px-6 py-8 flex flex-col gap-6 h-full">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-sans font-semibold text-lg text-brand-charcoal py-2 border-b border-brand-beige-dark/50 hover:text-brand-green transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="mt-auto">
            <button
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-brand-rust hover:bg-brand-rust-dark text-white font-sans font-bold py-3.5 rounded-2xl transition-colors shadow-md"
            >
              <Heart className="w-5 h-5 fill-white" />
              <span>Donate Today</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
