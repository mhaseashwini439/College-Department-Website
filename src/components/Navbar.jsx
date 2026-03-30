import { NavLink, useLocation, Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';


const navItems = [
  { label: 'Home', path: '/' },
  {
    label: 'About', path: '/about',

    children: [
      { label: 'About College', path: '/about/college' },
      { label: 'About Department', path: '/about/department' },
    ]
  },
  { label: 'Admissions', path: '/admission' },
  {
    label: 'Students', path: '/student-corner',

    children: [
      { label: 'Academic Schedules', path: '/student-corner/schedules' },
      { label: 'Curriculum', path: '/student-corner/curriculum' },
      { label: 'Results', path: '/student-corner/results' },
      { label: 'Merit List / Toppers', path: '/student-corner/toppers' },
      { label: 'Student Feedback', path: '/student-corner/feedback' },
      { label: 'Suggestions', path: '/student-corner/suggestions' },
    ]
  },
  { label: 'E-Learning', path: '/e-learning' },
  { label: 'Placements', path: '/training-placement' },
  { label: 'Events', path: '/events' },
  { label: 'Skills', path: '/skill-development' },

];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  const toggleDropdown = (label) => {
    setOpenDropdown(prev => prev === label ? null : label);
  };

  const closeMobile = () => {
    setMobileOpen(false);
    setOpenDropdown(null);
  };

  return (
    <nav className="bg-navy sticky top-[81px] md:top-[97px] z-50 shadow-lg border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center justify-center">
          {navItems.map(item => (
            <div key={item.label} className="relative group px-1">
              {item.children ? (
                <button
                  className={`flex items-center gap-1.5 px-3 py-4 text-[13px] font-semibold text-white/80 hover:text-white transition-all relative ${
                    location.pathname.startsWith(item.path) ? 'text-white' : ''
                  }`}
                >
                  {item.label}
                  <ChevronDown size={14} className="opacity-50 group-hover:rotate-180 transition-transform duration-300" />
                  {location.pathname.startsWith(item.path) && (
                    <motion.div 
                      layoutId="activeNav"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary"
                    />
                  )}
                </button>
              ) : (
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `block px-3 py-4 text-[13px] font-semibold transition-all relative ${
                      isActive ? 'text-white' : 'text-white/80 hover:text-white'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      {isActive && (
                        <motion.div 
                          layoutId="activeNav"
                          className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary"
                        />
                      )}
                    </>
                  )}

                </NavLink>
              )}

              {/* Desktop dropdown */}
              {item.children && (
                <div className="absolute top-full left-0 bg-white text-gray-800 rounded-b-xl shadow-2xl min-w-[220px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-4 border border-gray-100 overflow-hidden py-2 p-1">

                  {item.children.map(child => (
                    <NavLink
                      key={child.path}
                      to={child.path}
                      className={({ isActive }) =>
                        `flex items-center justify-between px-4 py-3 text-sm rounded-lg hover:bg-slate-50 transition-all font-medium ${
                          isActive ? 'text-primary bg-primary/5' : 'text-slate-600'
                        }`
                      }
                    >
                      {child.label}
                      {location.pathname === child.path && <div className="w-1.5 h-1.5 rounded-full bg-primary" />}

                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile hamburger */}
        <div className="lg:hidden flex items-center justify-between py-3">
          <Link to="/" className="text-white font-bold tracking-tight font-outfit">NAVIGATION</Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-all"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}

          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-navy-dark border-t border-white/5 overflow-hidden"
          >
            <div className="p-4 space-y-1">
              {navItems.map(item => (
                <div key={item.label} className="rounded-xl overflow-hidden">
                  {item.children ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className={`flex items-center justify-between w-full p-4 text-sm font-semibold transition-all ${
                          location.pathname.startsWith(item.path) ? 'bg-primary/10 text-white' : 'text-white/70 hover:bg-white/5'
                        }`}
                      >
                        {item.label}
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-300 ${
                            openDropdown === item.label ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {openDropdown === item.label && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: 'auto' }}
                            exit={{ height: 0 }}
                            className="bg-black/20 overflow-hidden"
                          >
                            {item.children.map(child => (
                              <NavLink
                                key={child.path}
                                to={child.path}
                                onClick={closeMobile}
                                className={({ isActive }) =>
                                  `block pl-8 pr-4 py-3 text-sm font-medium transition-all ${
                                    isActive ? 'text-primary bg-primary/5' : 'text-white/50 hover:text-white'
                                  }`
                                }
                              >
                                {child.label}
                              </NavLink>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <NavLink
                      to={item.path}
                      onClick={closeMobile}
                      className={({ isActive }) =>
                        `block p-4 text-sm font-semibold transition-all ${
                          isActive ? 'bg-primary/10 text-white' : 'text-white/70 hover:bg-white/5'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
}
