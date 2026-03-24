import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Book, Users, Calendar, ArrowRight, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';

export default function SearchOverlay({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);
  const { data } = useData();

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const q = query.toLowerCase();
    const searchResults = [];

    // Search Faculty
    data.faculty?.forEach(f => {
      if (f.name.toLowerCase().includes(q) || f.specialization.toLowerCase().includes(q)) {
        searchResults.push({ type: 'Faculty', title: f.name, subtitle: f.specialization, link: '/about/department', icon: Users });
      }
    });

    // Search Notices
    data.notices?.forEach(n => {
      if (n.title.toLowerCase().includes(q) || n.content.toLowerCase().includes(q)) {
        searchResults.push({ type: 'Notice', title: n.title, subtitle: n.date, link: '/events', icon: Calendar });
      }
    });

    // Search Syllabus/Courses
    data.syllabus?.forEach(s => {
      if (s.year.toLowerCase().includes(q)) {
        searchResults.push({ type: 'Course', title: s.year, subtitle: `Level: ${s.level}`, link: '/student-corner/curriculum', icon: Book });
      }
    });

    // Search Results
    data.results?.forEach(r => {
        if (r.title.toLowerCase().includes(q)) {
            searchResults.push({ type: 'Result', title: r.title, subtitle: r.semester, link: '/student-corner/results', icon: FileText });
        }
    });

    setResults(searchResults.slice(0, 8));
  }, [query, data]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-navy/90 backdrop-blur-md p-4 md:p-8"
        >
          <div className="max-w-3xl mx-auto pt-20">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search faculty, notices, courses, results..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-2xl py-4 pl-14 pr-14 text-xl text-white placeholder-white/40 focus:outline-none focus:border-primary/50 transition-all font-outfit"
              />
              <button
                onClick={onClose}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 hover:bg-white/10 rounded-full text-white/60 hover:text-white transition-all"
              >
                <X size={24} />
              </button>
            </div>

            <div className="mt-8">
              {query && results.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-white/60 text-lg">No results found for "{query}"</p>
                </div>
              ) : (
                <div className="grid gap-3">
                  {results.map((res, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <Link
                        to={res.link}
                        onClick={onClose}
                        className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 rounded-xl transition-all group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                          <res.icon size={20} />
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] uppercase tracking-wider font-bold text-primary-light/60 px-2 py-0.5 bg-primary/10 rounded">
                              {res.type}
                            </span>
                          </div>
                          <h4 className="text-white font-semibold mt-1">{res.title}</h4>
                          <p className="text-white/40 text-xs">{res.subtitle}</p>
                        </div>
                        <ArrowRight className="text-white/20 group-hover:text-primary transition-all group-hover:translate-x-1" size={18} />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-12 border-t border-white/10 pt-8 flex justify-center gap-8">
                <div className="text-center">
                    <p className="text-white/40 text-[10px] uppercase font-bold mb-2">Helpful Links</p>
                    <div className="flex gap-4">
                        <Link to="/admission" onClick={onClose} className="text-white/60 hover:text-white text-sm">Admission</Link>
                        <Link to="/about/department" onClick={onClose} className="text-white/60 hover:text-white text-sm">Faculty</Link>
                        <Link to="/student-corner/results" onClick={onClose} className="text-white/60 hover:text-white text-sm">Results</Link>
                    </div>
                </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
