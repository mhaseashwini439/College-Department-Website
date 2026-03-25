import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, ArrowUp, Send, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 500);
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus(''), 3000);
    }, 1000);
  };

  return (
    <footer className="bg-[#2A1608] text-gray-400 pt-20 pb-10 relative overflow-hidden ring-1 ring-white/5">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <GraduationCap size={24} className="text-white group-hover:text-primary transition-colors" />
              </div>
              <div className="text-left">
                <h3 className="text-white font-bold leading-snug font-outfit uppercase tracking-tight text-xs">
                  Ahmednagar Jilha Maratha Vidya Prasark Samaja's
                  <br />
                  New Arts Commerce &amp; Science College
                  <br />
                  <span className="text-primary tracking-normal">CS Department</span>
                </h3>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-8 max-w-sm">
              Empowering the next generation of technology leaders at Ahmednagar Jilha Maratha Vidya Prasark Samaja's New Arts Commerce &amp; Science College since 1918.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Facebook, url: 'https://facebook.com/' },
                { icon: Twitter, url: 'https://twitter.com/' },
                { icon: Instagram, url: 'https://instagram.com/' },
                { icon: Youtube, url: 'https://youtube.com/' },
              ].map(({ icon: Icon, url }, idx) => (
                <motion.a
                  key={idx}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Practical Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-6 font-outfit uppercase tracking-widest text-[10px]">Navigation</h4>
            <ul className="space-y-4 text-sm font-medium">
              {['Home', 'About Us', 'Admissions', 'Placements', 'Events'].map(link => (
                <li key={link}>
                  <Link to={link === 'Home' ? '/' : `/${link.toLowerCase().replace(' ', '-')}`} className="hover:text-primary transition-colors flex items-center gap-2 group">
                    <div className="w-1.5 h-px bg-white/20 group-hover:w-3 group-hover:bg-primary transition-all" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-6 font-outfit uppercase tracking-widest text-[10px]">Resources</h4>
            <ul className="space-y-4 text-sm font-medium">
              {['Student Corner', 'E-Learning', 'Syllabus', 'Results', 'Faculty'].map(link => (
                <li key={link}>
                  <Link to={`/${link.toLowerCase().replace(' ', '-')}`} className="hover:text-primary transition-colors flex items-center gap-2 group">
                    <div className="w-1.5 h-px bg-white/20 group-hover:w-3 group-hover:bg-primary transition-all" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-bold mb-6 font-outfit uppercase tracking-widest text-[10px]">Stay Connected</h4>
            <p className="text-sm mb-6">Subscribe to our newsletter for latest updates on events and admissions.</p>
            <form onSubmit={handleSubscribe} className="relative group">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-5 pr-14 text-sm focus:outline-none focus:border-primary/50 transition-all font-medium"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center hover:bg-primary-hover transition-all disabled:opacity-50"
              >
                {status === 'loading' ? (
                    <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                ) : <Send size={18} />}
              </button>
            </form>
            <AnimatePresence>
                {status === 'success' && (
                    <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-emerald-400 text-xs mt-3 font-bold flex items-center gap-2"
                    >
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Thank you for subscribing!
                    </motion.p>
                )}
            </AnimatePresence>

            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 text-xs">
                <Mail size={14} className="text-primary" />
                <span>cs@newartscollege.ac.in</span>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <Phone size={14} className="text-primary" />
                <span>0241-2324024</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-bold uppercase tracking-widest">
          <p>© {new Date().getFullYear()} CS DEPARTMENT, AJMVPS COLLEGE. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-8 text-white/40">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-[100] w-14 h-14 bg-primary text-white rounded-2xl shadow-2xl flex items-center justify-center hover:bg-primary-hover transition-all group"
          >
            <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
            <div className="absolute inset-0 bg-primary rounded-2xl animate-ping opacity-20 group-hover:opacity-40" />
          </motion.button>
        )}
      </AnimatePresence>
=======
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Youtube, GraduationCap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* College Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <GraduationCap size={20} />
              </div>
              <div>
                <h3 className="text-sm font-bold leading-tight">Department of Computer Science</h3>
                <p className="text-xs text-gray-300">AJMVPS College, Ahilyanagar</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Empowering students with cutting-edge computer science education and practical skills for the modern world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold mb-4 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: 'Home', path: '/' },
                { label: 'About Us', path: '/about/college' },
                { label: 'Admission', path: '/admission' },
                { label: 'Student Corner', path: '/student-corner/schedules' },
                { label: 'E-Learning', path: '/e-learning' },
                { label: 'Events', path: '/events' },
              ].map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-gray-300 hover:text-white hover:pl-1 transition-all duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold mb-4 uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="shrink-0 mt-0.5 text-gray-400" />
                <span className="text-sm text-gray-300">Lal Taki Road, Tarakpur, Ahmednagar - 414001, Maharashtra</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-gray-400" />
                <span className="text-sm text-gray-300">0241-2324024 / 0241-2324715</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-gray-400" />
                <span className="text-sm text-gray-300">cs@newartscollege.ac.in</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={16} className="shrink-0 text-gray-400" />
                <span className="text-sm text-gray-300">Mon - Sat: 9:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Social + Map */}
          <div>
            <h3 className="text-sm font-bold mb-4 uppercase tracking-wider">Follow Us</h3>
            <div className="flex items-center gap-2 mb-6">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Youtube, label: 'YouTube' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <p className="text-xs text-gray-400 text-center">Campus Map Placeholder</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-400">
            © 2026 Department of Computer Science, AJMVPS College. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/admin" className="text-xs text-gray-400 hover:text-white transition-colors">
              Admin
            </Link>
            <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
>>>>>>> a3edbfb6126c6d05b9307d910b0cd39aa0b0f1f7
    </footer>
  );
}
