import { Link } from 'react-router-dom';
import { Search, MapIcon, Facebook, Twitter, Instagram, Youtube, GraduationCap } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SearchOverlay from './SearchOverlay';

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`sticky top-0 z-[60] transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-lg border-b border-gray-200/50 py-2 shadow-sm' 
            : 'bg-white border-b border-gray-100 py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between gap-4">
            {/* Logo + College Name */}
            <Link to="/" className="flex items-center gap-3 md:gap-4 group">
              <div className="relative">
                <img 
                  src="/Information/Logo/College logo.png" 
                  alt="College Logo" 
                  className="w-16 h-16 md:w-24 md:h-24 shrink-0 object-contain transition-transform duration-500 group-hover:rotate-[360deg]" 
                />
              </div>
              <div className="hidden sm:block text-left">
                <h1 className="text-[9px] md:text-[11px] font-extrabold text-navy leading-tight tracking-tight font-outfit uppercase whitespace-nowrap">
                  Ahmednagar Jilha Maratha Vidya Prasark Samaja's New Arts Commerce &amp; Science College
                </h1>
                <h2 className="text-sm md:text-3xl font-black text-primary mt-0.5 font-outfit uppercase tracking-tight drop-shadow-sm">
                  Department of Computer Science
                </h2>
                <p className="text-[10px] md:text-xs text-slate-500 mt-1 font-bold flex items-center gap-2 border-l-2 border-accent pl-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  NAAC 'A++' Accredited (CGPA 3.79)
                </p>
              </div>
            </Link>

            {/* Right side: social, search, sitemap */}
            <div className="flex items-center gap-2 md:gap-4">
              {/* Social Icons - hidden on mobile */}
              <div className="hidden lg:flex items-center gap-2">
                {[
                  { icon: Facebook, label: 'Facebook', url: 'https://facebook.com/' },
                  { icon: Twitter, label: 'Twitter', url: 'https://twitter.com/' },
                  { icon: Instagram, label: 'Instagram', url: 'https://instagram.com/' },
                  { icon: Youtube, label: 'YouTube', url: 'https://youtube.com/' },
                ].map(({ icon: Icon, label, url }) => (
                  <motion.a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ y: -2 }}
                    className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-primary hover:text-white transition-all duration-200"
                  >
                    <Icon size={14} />
                  </motion.a>
                ))}
              </div>

              <div className="h-8 w-px bg-slate-200 hidden md:block" />

              {/* Search Toggle */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center gap-2 px-3 py-2 md:px-4 bg-slate-50 hover:bg-primary/5 text-slate-600 hover:text-primary rounded-xl transition-all duration-200 border border-slate-100"
              >
                <Search size={18} />
                <span className="text-sm font-medium hidden md:block">Search...</span>
                <kbd className="hidden lg:flex h-5 items-center gap-1 rounded border border-slate-200 bg-white px-1.5 font-sans text-[10px] font-medium text-slate-400">
                  <span className="text-xs">⌘</span>K
                </kbd>
              </motion.button>
            </div>
          </div>
        </div>
      </header>

      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
