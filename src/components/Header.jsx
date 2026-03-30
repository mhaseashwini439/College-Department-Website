import { Link } from 'react-router-dom';
import { Search, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
        className={`sticky top-0 z-[60] transition-all duration-300 ${isScrolled
            ? 'bg-white/80 backdrop-blur-lg border-b border-gray-200 py-2 shadow-sm'
            : 'bg-white border-b border-gray-100 py-3'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between gap-4">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/Information/Logo/College logo.png"
                alt="College Logo"
                className="w-16 h-16 object-contain transition-transform duration-500 group-hover:rotate-[360deg]"
              />
              <div className="hidden sm:block">
                <h1 className="text-sm font-bold text-navy">
                  Department of Computer Science
                </h1>
                <p className="text-xs text-gray-500">
                  Ahmednagar College
                </p>
              </div>
            </Link>

            {/* Right Side */}
            <div className="flex items-center gap-3">

              {/* Social Icons */}
              <div className="hidden lg:flex items-center gap-2">
                {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ y: -2 }}
                    className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white"
                  >
                    <Icon size={14} />
                  </motion.a>
                ))}
              </div>

              {/* Search Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg"
              >
                <Search size={16} />
                <span className="hidden md:block text-sm">Search</span>
              </motion.button>
            </div>
          </div>
        </div>
      </header>

      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}