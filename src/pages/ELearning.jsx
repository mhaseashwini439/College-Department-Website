import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, Download, ChevronDown, ChevronUp, Video, FileText, 
  ExternalLink, Search, Cpu, Database, Grid, Layers, GitBranch, 
  HardDrive, Share2, Brain, Globe, BarChart, Shield, Zap, 
  Cloud, Terminal, Server, Workflow, Wifi, Code, Play
} from 'lucide-react';
import { useData } from '../context/DataContext';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const iconMap = {
  Code: Code,
  Database: Database,
  Grid: Grid,
  Cpu: Cpu,
  Layers: Layers,
  GitBranch: GitBranch,
  HardDrive: HardDrive,
  Share2: Share2,
  Brain: Brain,
  Globe: Globe,
  BarChart: BarChart,
  Shield: Shield,
  Zap: Zap,
  Cloud: Cloud,
  Terminal: Terminal,
  Server: Server,
  Workflow: Workflow,
  Wifi: Wifi
};

const SubjectIcon = ({ name, className }) => {
  const iconKey = name ? Object.keys(iconMap).find(k => k.toLowerCase() === name.toLowerCase()) : null;
  const Icon = iconMap[iconKey] || BookOpen;
  return <Icon className={className} size={22} />;
};

const VideoThumbnail = ({ src, subject, duration }) => {
  const [error, setError] = useState(false);
  
  // High-end gradients for fallbacks
  const gradients = [
    'from-blue-600 to-indigo-700',
    'from-emerald-500 to-teal-700',
    'from-purple-600 to-pink-700',
    'from-amber-500 to-orange-700',
    'from-slate-700 to-navy'
  ];
  
  const randomGradient = useMemo(() => {
    const hash = subject.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return gradients[hash % gradients.length];
  }, [subject]);

  return (
    <div className="group/video block relative w-48 aspect-video rounded-2xl overflow-hidden shadow-xl bg-navy/5 border-2 border-transparent hover:border-primary/30 transition-all duration-500">
      {!error ? (
        <img 
          src={src} 
          alt={subject} 
          className="w-full h-full object-cover group-hover/video:scale-110 transition-transform duration-1000"
          onError={() => setError(true)}
        />
      ) : (
        <div className={`w-full h-full bg-gradient-to-br ${randomGradient} flex flex-col items-center justify-center p-4 text-center`}>
          <Video className="text-white/20 mb-1" size={32} />
          <span className="text-white/90 text-[10px] font-bold leading-tight line-clamp-2">{subject}</span>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent flex items-center justify-center">
        <div className="w-14 h-14 rounded-full bg-white/30 backdrop-blur-xl flex items-center justify-center text-white scale-90 group-hover/video:scale-110 transition-all duration-500">
          <Play size={28} fill="currentColor" className="ml-1" />
        </div>
      </div>
      <div className="absolute bottom-3 right-3 px-2.2 py-1 bg-navy/80 backdrop-blur-md text-[10px] font-bold text-white rounded-lg border border-white/10 shadow-2xl">
        {duration}
      </div>
    </div>
  );
};

export default function ELearning() {
  const { data } = useData();
  const [expandedYear, setExpandedYear] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const yearCards = ['FY', 'SY', 'TY', 'MSC-I', 'MSC-II'];

  const filteredData = useMemo(() => {
    if (!searchQuery) return data.books;
    
    const filtered = {};
    const query = searchQuery.toLowerCase();

    Object.entries(data.books).forEach(([year, books]) => {
      const matchingBooks = books.filter(book => 
        book.subject.toLowerCase().includes(query) ||
        (book.referenceBookName && book.referenceBookName.toLowerCase().includes(query)) ||
        (book.tags && book.tags.some(tag => tag.toLowerCase().includes(query)))
      );
      if (matchingBooks.length > 0) {
        filtered[year] = matchingBooks;
      }
    });
    return filtered;
  }, [data.books, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div initial="hidden" animate="visible" variants={fadeUp} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-extrabold text-navy tracking-tight mb-3">E-Learning Portal</h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Access curated academic resources, verified textbooks, lab manuals, and high-quality video lectures for the Computer Science department.
          </p>
        </div>
        
        <div className="relative w-full md:w-80 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" size={20} />
          <input
            type="text"
            placeholder="Search subjects or materials..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-100 rounded-2xl shadow-sm focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all placeholder:text-gray-400 font-medium"
          />
        </div>
      </motion.div>

      <div className="space-y-6">
        {yearCards.map(year => {
          const books = filteredData[year] || [];
          if (searchQuery && books.length === 0) return null;
          
          const isExpanded = expandedYear === year || (searchQuery && books.length > 0);

          return (
            <motion.div
              key={year}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="group"
            >
              <button
                onClick={() => setExpandedYear(isExpanded ? null : year)}
                className={`w-full flex items-center justify-between p-6 rounded-2xl border-2 transition-all duration-300 ${
                  isExpanded
                    ? 'bg-navy text-white border-navy shadow-xl scale-[1.01]'
                    : 'bg-white text-navy border-gray-50 hover:border-primary/20 hover:shadow-lg'
                }`}
              >
                <div className="flex items-center gap-5">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-500 ${
                    isExpanded ? 'bg-white/10 rotate-12 scale-110' : 'bg-primary/5 group-hover:bg-primary/10'
                  }`}>
                    <BookOpen size={24} className={isExpanded ? 'text-white' : 'text-primary'} />
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-extrabold uppercase tracking-wide">{year} Computer Science <span className="text-sm font-medium opacity-60 ml-2">Students</span></h3>
                    <p className={`text-sm font-medium mt-1 ${isExpanded ? 'text-white/60' : 'text-gray-400'}`}>
                      {books.length} Active Study Modules
                    </p>
                  </div>
                </div>
                <div className={`p-2 rounded-full transition-colors ${isExpanded ? 'bg-white/10' : 'bg-gray-50'}`}>
                  {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </div>
              </button>

              <AnimatePresence>
                {isExpanded && books.length > 0 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, y: -20 }}
                    animate={{ height: 'auto', opacity: 1, y: 0 }}
                    exit={{ height: 0, opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: "circOut" }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-col gap-6 mt-4">
                      {['Semester I', 'Semester II'].map((semester) => {
                        const semBooks = books.filter(b => b.semester === semester || !b.semester);
                        if (semBooks.length === 0) return null;
                        
                        return (
                          <div key={semester} className="rounded-2xl border-2 border-gray-50 bg-white shadow-sm overflow-hidden p-0 relative">
                            <div className="bg-gray-50/50 px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                              <h4 className="font-extrabold text-navy text-sm uppercase tracking-wider flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                                {semester} Modules
                              </h4>
                              <span className="text-xs font-bold text-gray-500 bg-white px-2.5 py-1 rounded-lg border border-gray-100 shadow-sm">{semBooks.length} Subjects</span>
                            </div>
                            <div className="overflow-x-auto">
                              <table className="w-full text-sm border-collapse">
                                <thead>
                                  <tr className="bg-white border-b border-gray-100">
                                    <th className="text-left px-6 py-4 font-bold text-gray-400 uppercase tracking-wider text-[10px]">Subject & Topic</th>
                                    <th className="text-center px-4 py-4 font-bold text-gray-400 uppercase tracking-wider text-[10px]">Reference Book</th>
                                    <th className="text-center px-4 py-4 font-bold text-gray-400 uppercase tracking-wider text-[10px]">Lab Manual</th>
                                    <th className="text-center px-4 py-4 font-bold text-gray-400 uppercase tracking-wider text-[10px]">Textbook</th>
                                    <th className="text-center px-6 py-4 font-bold text-gray-400 uppercase tracking-wider text-[10px]">Video Lecture</th>
                                  </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">
                                  {semBooks.map((book) => (
                                    <tr key={book.id} className="hover:bg-primary/5 transition-all duration-200 group/row bg-white">
                                      <td className="px-6 py-5">
                                        <div className="flex items-start gap-3">
                                          <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-primary group-hover/row:bg-primary group-hover/row:text-white transition-all duration-300 shadow-sm shrink-0">
                                            <SubjectIcon name={book.icon} />
                                          </div>
                                          <div>
                                            <h4 className="font-bold text-navy text-sm group-hover/row:text-primary transition-colors">{book.subject}</h4>
                                            <div className="flex flex-wrap gap-1.5 mt-1.5">
                                              {book.tags?.map(tag => (
                                                <span key={tag} className={`px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-tight ${
                                                  tag === 'Important' ? 'bg-red-100 text-red-600 shadow-sm shadow-red-100/50' : 
                                                  tag === 'Most Viewed' ? 'bg-primary/10 text-primary shadow-sm shadow-primary/10' : 'bg-gray-100 text-gray-600'
                                                }`}>
                                                  {tag}
                                                </span>
                                              ))}
                                            </div>
                                          </div>
                                        </div>
                                      </td>
                                      
                                      <td className="px-4 py-5 text-center align-top">
                                        <div className="flex flex-col items-center gap-1.5">
                                          <span className="text-[9px] font-medium text-gray-400 max-w-[100px] line-clamp-1 italic" title={book.referenceBookName}>{book.referenceBookName}</span>
                                          <a
                                            href={book.referenceBookUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 px-3 py-1.5 bg-navy/5 text-navy hover:bg-navy hover:text-white text-[10px] font-bold rounded-lg transition-all shadow-sm border border-navy/10"
                                          >
                                            <FileText size={12} /> View
                                          </a>
                                        </div>
                                      </td>

                                      <td className="px-4 py-5 text-center align-top">
                                        <div className="flex flex-col items-center gap-1.5">
                                          <span className="text-[9px] font-medium text-gray-400 max-w-[100px] line-clamp-1 italic" title={book.labBookName}>{book.labBookName}</span>
                                          <a
                                            href={book.labBookUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white text-[10px] font-bold rounded-lg transition-all shadow-sm border border-emerald-100"
                                          >
                                            <Download size={12} /> Dwnld
                                          </a>
                                        </div>
                                      </td>

                                      <td className="px-4 py-5 text-center align-top">
                                        <div className="flex flex-col items-center gap-1.5">
                                          <span className="text-[9px] font-medium text-gray-400 max-w-[100px] line-clamp-1 italic" title={book.normalBookName}>{book.normalBookName}</span>
                                          <a
                                            href={book.normalBookUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white text-[10px] font-bold rounded-lg transition-all shadow-sm border border-blue-100"
                                          >
                                            <BookOpen size={12} /> View
                                          </a>
                                        </div>
                                      </td>

                                      <td className="px-6 py-5 border-l border-gray-50 flex justify-center">
                                        <div className="flex flex-col items-center gap-2 mt-1">
                                          <a 
                                            href={book.videoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block scale-75 origin-top transition-transform hover:scale-95"
                                          >
                                            <VideoThumbnail 
                                              src={book.thumbnailUrl}
                                              subject={book.subject}
                                              duration={book.duration}
                                            />
                                          </a>
                                          <a 
                                            href={book.videoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[11px] font-extrabold text-primary flex items-center gap-1.5 hover:text-navy transition-colors bg-primary/5 px-4 py-2 rounded-xl"
                                          >
                                            <Video size={14} /> Play Video
                                          </a>
                                        </div>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}

        {Object.keys(filteredData).length === 0 && (
          <div className="text-center py-24 bg-white rounded-3xl border-2 border-dashed border-gray-100 shadow-inner">
            <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
              <Search size={40} className="text-gray-200" />
            </div>
            <h3 className="text-2xl font-extrabold text-navy">No subjects found</h3>
            <p className="text-gray-400 mt-2 max-w-sm mx-auto">We couldn't find any resources matching your search. Try different keywords or browse by year.</p>
            <button 
              onClick={() => setSearchQuery('')}
              className="mt-8 px-8 py-3 bg-primary text-white font-bold rounded-2xl transition-all hover:shadow-xl hover:shadow-primary/20 hover:scale-105"
            >
              Reset Search
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
