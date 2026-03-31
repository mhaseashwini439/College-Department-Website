import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, Download, ChevronDown, ChevronUp, Video, FileText, 
  Search, Cpu, Database, Grid, Layers, GitBranch, 
  HardDrive, Share2, Brain, Globe, BarChart, Shield, Zap, 
  Cloud, Terminal, Server, Workflow, Wifi, Code, Play,
  ClipboardList, GraduationCap, ScrollText, StickyNote
} from 'lucide-react';
<<<<<<< HEAD
=======

>>>>>>> da8300eed22f507a198d3c58bb189ee71239ad79
import { useData } from '../context/DataContext';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const iconMap = {
  Code, Database, Grid, Cpu, Layers, GitBranch, HardDrive, Share2,
  Brain, Globe, BarChart, Shield, Zap, Cloud, Terminal, Server, Workflow, Wifi
};

const SubjectIcon = ({ name, className }) => {
  const iconKey = name ? Object.keys(iconMap).find(k => k.toLowerCase() === name.toLowerCase()) : null;
  const Icon = iconMap[iconKey] || BookOpen;
  return <Icon className={className} size={22} />;
};

const VideoThumbnail = ({ src, subject, duration }) => {
  const [error, setError] = useState(false);
  const gradients = [
    'from-blue-600 to-indigo-700', 'from-emerald-500 to-teal-700',
    'from-purple-600 to-pink-700', 'from-amber-500 to-orange-700',
    'from-slate-700 to-navy'
  ];
  const randomGradient = useMemo(() => {
    const hash = subject.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return gradients[hash % gradients.length];
  }, [subject]);

  return (
    <div className="group/video block relative w-48 aspect-video rounded-2xl overflow-hidden shadow-xl bg-navy/5 border-2 border-transparent hover:border-primary/30 transition-all duration-500">
      {!error ? (
        <img src={src} alt={subject} className="w-full h-full object-cover group-hover/video:scale-110 transition-transform duration-1000" onError={() => setError(true)} />
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
      <div className="absolute bottom-3 right-3 px-2 py-1 bg-navy/80 backdrop-blur-md text-[10px] font-bold text-white rounded-lg border border-white/10 shadow-2xl">
        {duration}
      </div>
    </div>
  );
};

// ─── Mock data for new content features ──────────────────────────
const questionPapers = [
  { year: 'FY', semester: 'Semester I', subjects: [
    { name: 'Introduction to Programming', years: ['2024', '2023', '2022'], url: '#' },
    { name: 'Mathematics I', years: ['2024', '2023', '2022'], url: '#' },
    { name: 'Digital Electronics', years: ['2024', '2023'], url: '#' },
  ]},
  { year: 'SY', semester: 'Semester III', subjects: [
    { name: 'Data Structures', years: ['2024', '2023', '2022'], url: '#' },
    { name: 'Database Management', years: ['2024', '2023', '2022'], url: '#' },
    { name: 'Computer Networks', years: ['2024', '2023'], url: '#' },
  ]},
  { year: 'TY', semester: 'Semester V', subjects: [
    { name: 'Artificial Intelligence', years: ['2024', '2023', '2022'], url: '#' },
    { name: 'Web Technologies', years: ['2024', '2023', '2022'], url: '#' },
    { name: 'Software Engineering', years: ['2024', '2023'], url: '#' },
  ]},
  { year: 'MSC-I', semester: 'Semester I', subjects: [
    { name: 'Advanced Algorithms', years: ['2024', '2023', '2022'], url: '#' },
    { name: 'Machine Learning', years: ['2024', '2023'], url: '#' },
  ]},
  { year: 'MSC-II', semester: 'Semester III', subjects: [
    { name: 'Cloud Computing', years: ['2024', '2023'], url: '#' },
    { name: 'Cyber Security', years: ['2024', '2023'], url: '#' },
  ]},
];

const syllabusData = [
  { year: 'FY', label: 'First Year B.Sc. Computer Science', semesters: [
    { sem: 'Semester I', subjects: 6, url: '#', size: '420 KB', updated: 'June 2024' },
    { sem: 'Semester II', subjects: 6, url: '#', size: '390 KB', updated: 'Nov 2024' },
  ]},
  { year: 'SY', label: 'Second Year B.Sc. Computer Science', semesters: [
    { sem: 'Semester III', subjects: 6, url: '#', size: '450 KB', updated: 'June 2024' },
    { sem: 'Semester IV', subjects: 6, url: '#', size: '440 KB', updated: 'Nov 2024' },
  ]},
  { year: 'TY', label: 'Third Year B.Sc. Computer Science', semesters: [
    { sem: 'Semester V', subjects: 6, url: '#', size: '480 KB', updated: 'June 2024' },
    { sem: 'Semester VI', subjects: 6, url: '#', size: '460 KB', updated: 'Nov 2024' },
  ]},
  { year: 'MSC-I', label: 'M.Sc. Computer Science – Year I', semesters: [
    { sem: 'Semester I', subjects: 5, url: '#', size: '520 KB', updated: 'June 2024' },
    { sem: 'Semester II', subjects: 5, url: '#', size: '510 KB', updated: 'Nov 2024' },
  ]},
  { year: 'MSC-II', label: 'M.Sc. Computer Science – Year II', semesters: [
    { sem: 'Semester III', subjects: 5, url: '#', size: '500 KB', updated: 'June 2024' },
    { sem: 'Semester IV', subjects: 5, url: '#', size: '490 KB', updated: 'Nov 2024' },
  ]},
];

const studyNotes = [
  { year: 'FY', notes: [
    { subject: 'Introduction to Programming', faculty: 'Prof. A. Sharma', topic: 'C Programming Basics', pages: 45, url: '#', date: 'Jan 2024', type: 'PDF' },
    { subject: 'Mathematics I', faculty: 'Prof. B. Patil', topic: 'Set Theory & Relations', pages: 32, url: '#', date: 'Feb 2024', type: 'PDF' },
    { subject: 'Digital Electronics', faculty: 'Prof. C. Desai', topic: 'Logic Gates & Boolean Algebra', pages: 58, url: '#', date: 'Mar 2024', type: 'PDF' },
  ]},
  { year: 'SY', notes: [
    { subject: 'Data Structures', faculty: 'Prof. D. Kulkarni', topic: 'Trees & Graphs', pages: 72, url: '#', date: 'Jan 2024', type: 'PDF' },
    { subject: 'Database Management', faculty: 'Prof. E. Jadhav', topic: 'SQL & Normalization', pages: 63, url: '#', date: 'Feb 2024', type: 'PDF' },
    { subject: 'Computer Networks', faculty: 'Prof. F. Shinde', topic: 'OSI Model & TCP/IP', pages: 55, url: '#', date: 'Mar 2024', type: 'PDF' },
  ]},
  { year: 'TY', notes: [
    { subject: 'Artificial Intelligence', faculty: 'Prof. G. More', topic: 'Search Algorithms & ML Intro', pages: 80, url: '#', date: 'Jan 2024', type: 'PDF' },
    { subject: 'Web Technologies', faculty: 'Prof. H. Pawar', topic: 'HTML, CSS & JavaScript', pages: 95, url: '#', date: 'Feb 2024', type: 'PDF' },
  ]},
  { year: 'MSC-I', notes: [
    { subject: 'Advanced Algorithms', faculty: 'Prof. I. Gawade', topic: 'Dynamic Programming', pages: 68, url: '#', date: 'Jan 2024', type: 'PDF' },
    { subject: 'Machine Learning', faculty: 'Prof. J. Nimkar', topic: 'Supervised & Unsupervised Learning', pages: 90, url: '#', date: 'Feb 2024', type: 'PDF' },
  ]},
  { year: 'MSC-II', notes: [
    { subject: 'Cloud Computing', faculty: 'Prof. K. Bhosale', topic: 'AWS & Azure Fundamentals', pages: 75, url: '#', date: 'Jan 2024', type: 'PDF' },
    { subject: 'Cyber Security', faculty: 'Prof. L. Wagh', topic: 'Network Security & Cryptography', pages: 82, url: '#', date: 'Feb 2024', type: 'PDF' },
  ]},
];

// ─── Tab definitions ──────────────────────────────────────────────
const TABS = [
  { id: 'materials', label: 'Study Materials', icon: BookOpen, color: 'primary' },
  { id: 'papers', label: 'Question Papers', icon: ClipboardList, color: 'navy' },
  { id: 'syllabus', label: 'Syllabus', icon: ScrollText, color: 'accent' },
  { id: 'notes', label: 'Study Notes', icon: StickyNote, color: 'emerald' },
];

const YEARS = ['FY', 'SY', 'TY', 'MSC-I', 'MSC-II'];

export default function ELearning() {
  const { data } = useData();
  const [activeTab, setActiveTab] = useState('materials');
  const [expandedYear, setExpandedYear] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState('All');

  const filteredBooks = useMemo(() => {
    if (!searchQuery) return data.books;
    const filtered = {};
    const query = searchQuery.toLowerCase();
    Object.entries(data.books).forEach(([year, books]) => {
      const matchingBooks = books.filter(book =>
        book.subject.toLowerCase().includes(query) ||
        (book.referenceBookName && book.referenceBookName.toLowerCase().includes(query)) ||
        (book.tags && book.tags.some(tag => tag.toLowerCase().includes(query)))
      );
      if (matchingBooks.length > 0) filtered[year] = matchingBooks;
    });
    return filtered;
  }, [data.books, searchQuery]);

  const filteredQP = useMemo(() =>
    selectedYear === 'All' ? questionPapers : questionPapers.filter(q => q.year === selectedYear),
    [selectedYear]);

  const filteredSyllabus = useMemo(() =>
    selectedYear === 'All' ? syllabusData : syllabusData.filter(s => s.year === selectedYear),
    [selectedYear]);

  const filteredNotes = useMemo(() =>
    selectedYear === 'All' ? studyNotes : studyNotes.filter(n => n.year === selectedYear),
    [selectedYear]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* ── Header ── */}
      <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest mb-4">
              <GraduationCap size={12} />
              CS Department — E-Learning Portal
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-navy tracking-tight mb-3 font-outfit">E-Learning Hub</h1>
            <p className="text-gray-500 text-lg leading-relaxed max-w-2xl">
              Your complete academic resource centre — study materials, question papers, syllabus, and faculty notes all in one place.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-80 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" size={18} />
            <input
              type="text"
              placeholder="Search subjects or topics..."
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setActiveTab('materials'); }}
              className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-100 rounded-2xl shadow-sm focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all placeholder:text-gray-400 font-medium"
            />
          </div>
        </div>

        {/* Stats Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {[
            { label: 'Study Subjects', value: Object.values(data.books || {}).flat().length + '+', icon: BookOpen, color: 'bg-primary/10 text-primary' },
            { label: 'Question Papers', value: '50+', icon: ClipboardList, color: 'bg-navy/10 text-navy' },
            { label: 'Syllabus PDFs', value: '10', icon: ScrollText, color: 'bg-accent/10 text-accent' },
            { label: 'Faculty Notes', value: '20+', icon: StickyNote, color: 'bg-emerald-100 text-emerald-600' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center`}>
                <stat.icon size={20} />
              </div>
              <div>
                <div className="text-2xl font-black text-navy">{stat.value}</div>
                <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Tabs ── */}
      <motion.div initial="hidden" animate="visible" variants={fadeUp} className="flex flex-wrap gap-3 mb-6">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => { setActiveTab(tab.id); setSearchQuery(''); }}
            className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-bold text-sm transition-all duration-300 border ${
              activeTab === tab.id
                ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20'
                : 'bg-white text-gray-500 border-gray-100 hover:border-primary/20 hover:text-primary hover:shadow-md'
            }`}
          >
            <tab.icon size={16} />
            {tab.label}
          </button>
        ))}

        {/* Year filter (for QP, Syllabus, Notes tabs) */}
        {activeTab !== 'materials' && (
          <div className="flex flex-wrap gap-2 ml-auto">
            {['All', ...YEARS].map(yr => (
              <button
                key={yr}
                onClick={() => setSelectedYear(yr)}
                className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all ${
                  selectedYear === yr
                    ? 'bg-navy text-white border-navy'
                    : 'bg-white text-gray-500 border-gray-100 hover:border-navy/20'
                }`}
              >
                {yr}
              </button>
            ))}
          </div>
        )}
      </motion.div>

      {/* ═══════════════ TAB CONTENT ═══════════════ */}
      <AnimatePresence mode="wait">

        {/* ── Study Materials Tab ── */}
        {activeTab === 'materials' && (
          <motion.div key="materials" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6">
            {['FY', 'SY', 'TY', 'MSC-I', 'MSC-II'].map(year => {
              const books = filteredBooks[year] || [];
              if (searchQuery && books.length === 0) return null;
              const isExpanded = expandedYear === year || (searchQuery && books.length > 0);
              return (
                <motion.div key={year} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="group">
                  <button
                    onClick={() => setExpandedYear(isExpanded ? null : year)}
                    className={`w-full flex items-center justify-between p-6 rounded-2xl border-2 transition-all duration-300 ${
                      isExpanded ? 'bg-navy text-white border-navy shadow-xl scale-[1.01]' : 'bg-white text-navy border-gray-50 hover:border-primary/20 hover:shadow-lg'
                    }`}
                  >
                    <div className="flex items-center gap-5">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-500 ${isExpanded ? 'bg-white/10 rotate-12 scale-110' : 'bg-primary/5 group-hover:bg-primary/10'}`}>
                        <BookOpen size={24} className={isExpanded ? 'text-white' : 'text-primary'} />
                      </div>
                      <div className="text-left">
                        <h3 className="text-xl font-extrabold uppercase tracking-wide">{year} Computer Science <span className="text-sm font-medium opacity-60 ml-2">Students</span></h3>
                        <p className={`text-sm font-medium mt-1 ${isExpanded ? 'text-white/60' : 'text-gray-400'}`}>{books.length} Active Study Modules</p>
                      </div>
                    </div>
                    <div className={`p-2 rounded-full transition-colors ${isExpanded ? 'bg-white/10' : 'bg-gray-50'}`}>
                      {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {isExpanded && books.length > 0 && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease: 'circOut' }} className="overflow-hidden">
                        <div className="flex flex-col gap-6 mt-4">
                          {['Semester I', 'Semester II'].map((semester) => {
                            const semBooks = books.filter(b => b.semester === semester || !b.semester);
                            if (semBooks.length === 0) return null;
                            return (
                              <div key={semester} className="rounded-2xl border-2 border-gray-50 bg-white shadow-sm overflow-hidden">
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
                                        <th className="text-left px-6 py-4 font-bold text-gray-400 uppercase tracking-wider text-[10px]">Subject</th>
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
                                                      tag === 'Important' ? 'bg-red-100 text-red-600' :
                                                      tag === 'Most Viewed' ? 'bg-primary/10 text-primary' : 'bg-gray-100 text-gray-600'
                                                    }`}>{tag}</span>
                                                  ))}
                                                </div>
                                              </div>
                                            </div>
                                          </td>
                                          <td className="px-4 py-5 text-center align-top">
                                            <div className="flex flex-col items-center gap-1.5">
                                              <span className="text-[9px] font-medium text-gray-400 max-w-[100px] line-clamp-1 italic">{book.referenceBookName}</span>
                                              <a href={book.referenceBookUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 bg-navy/5 text-navy hover:bg-navy hover:text-white text-[10px] font-bold rounded-lg transition-all border border-navy/10">
                                                <FileText size={12} /> View
                                              </a>
                                            </div>
                                          </td>
                                          <td className="px-4 py-5 text-center align-top">
                                            <div className="flex flex-col items-center gap-1.5">
                                              <span className="text-[9px] font-medium text-gray-400 max-w-[100px] line-clamp-1 italic">{book.labBookName}</span>
                                              <a href={book.labBookUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white text-[10px] font-bold rounded-lg transition-all border border-emerald-100">
                                                <Download size={12} /> Download
                                              </a>
                                            </div>
                                          </td>
                                          <td className="px-4 py-5 text-center align-top">
                                            <div className="flex flex-col items-center gap-1.5">
                                              <span className="text-[9px] font-medium text-gray-400 max-w-[100px] line-clamp-1 italic">{book.normalBookName}</span>
                                              <a href={book.normalBookUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white text-[10px] font-bold rounded-lg transition-all border border-blue-100">
                                                <BookOpen size={12} /> View
                                              </a>
                                            </div>
                                          </td>
                                          <td className="px-6 py-5 border-l border-gray-50 flex justify-center">
                                            <div className="flex flex-col items-center gap-2 mt-1">
                                              <a href={book.videoUrl} target="_blank" rel="noopener noreferrer" className="block scale-75 origin-top transition-transform hover:scale-95">
                                                <VideoThumbnail src={book.thumbnailUrl} subject={book.subject} duration={book.duration} />
                                              </a>
                                              <a href={book.videoUrl} target="_blank" rel="noopener noreferrer" className="text-[11px] font-extrabold text-primary flex items-center gap-1.5 hover:text-navy transition-colors bg-primary/5 px-4 py-2 rounded-xl">
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
            {Object.keys(filteredBooks).length === 0 && (
              <div className="text-center py-24 bg-white rounded-3xl border-2 border-dashed border-gray-100">
                <Search size={40} className="text-gray-200 mx-auto mb-4" />
                <h3 className="text-2xl font-extrabold text-navy">No subjects found</h3>
                <p className="text-gray-400 mt-2">Try different keywords or browse by year.</p>
                <button onClick={() => setSearchQuery('')} className="mt-6 px-8 py-3 bg-primary text-white font-bold rounded-2xl hover:bg-primary-hover transition-all">Reset Search</button>
              </div>
            )}
          </motion.div>
        )}

        {/* ── Question Papers Tab ── */}
        {activeTab === 'papers' && (
          <motion.div key="papers" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6">
            {filteredQP.map((group) => (
              <motion.div key={group.year} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="bg-navy px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                      <ClipboardList size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-black text-white uppercase tracking-wide">{group.year} — {group.semester}</h3>
                      <p className="text-white/50 text-xs font-medium">{group.subjects.length} Subjects</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-white/10 text-white text-xs font-bold rounded-xl border border-white/10">Question Papers</span>
                </div>
                <div className="divide-y divide-gray-50">
                  {group.subjects.map((sub) => (
                    <div key={sub.name} className="px-6 py-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-gray-50/50 transition-colors group">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-navy/5 flex items-center justify-center text-navy group-hover:bg-navy group-hover:text-white transition-all">
                          <FileText size={16} />
                        </div>
                        <span className="font-bold text-navy text-sm">{sub.name}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {sub.years.map(yr => (
                          <a
                            key={yr}
                            href={sub.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 px-4 py-2 bg-navy/5 hover:bg-primary hover:text-white text-navy text-xs font-bold rounded-xl border border-navy/10 transition-all duration-200"
                          >
                            <Download size={12} /> {yr} Paper
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* ── Syllabus Tab ── */}
        {activeTab === 'syllabus' && (
          <motion.div key="syllabus" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="grid md:grid-cols-2 gap-6">
            {filteredSyllabus.map((item) => (
              <motion.div key={item.year} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="bg-gradient-to-r from-navy to-navy-light px-6 py-5">
                  <div className="flex items-center gap-3 mb-1">
                    <ScrollText size={20} className="text-primary" />
                    <span className="text-primary font-black text-xs uppercase tracking-widest">{item.year}</span>
                  </div>
                  <h3 className="text-white font-black text-lg leading-tight">{item.label}</h3>
                </div>
                <div className="p-4 space-y-3">
                  {item.semesters.map((sem) => (
                    <div key={sem.sem} className="flex items-center justify-between p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-primary/20 hover:bg-primary/5 transition-all group">
                      <div>
                        <div className="font-bold text-navy text-sm">{sem.sem}</div>
                        <div className="text-[10px] text-gray-400 mt-0.5 font-medium">{sem.subjects} Subjects · {sem.size} · Updated {sem.updated}</div>
                      </div>
                      <a
                        href={sem.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white text-xs font-bold rounded-xl hover:bg-primary-hover transition-all shadow-sm shadow-primary/20"
                      >
                        <Download size={14} /> Download PDF
                      </a>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* ── Study Notes Tab ── */}
        {activeTab === 'notes' && (
          <motion.div key="notes" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-8">
            {filteredNotes.map((group) => (
              <motion.div key={group.year} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 flex items-center justify-center">
                    <StickyNote size={16} className="text-emerald-600" />
                  </div>
                  <h3 className="font-black text-navy uppercase tracking-widest text-sm">{group.year} Notes</h3>
                  <div className="flex-1 h-px bg-gray-100" />
                  <span className="text-xs font-bold text-gray-400">{group.notes.length} Documents</span>
                </div>
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {group.notes.map((note, idx) => (
                    <div key={idx} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md hover:border-emerald-100 transition-all group">
                      <div className="flex items-start justify-between mb-3">
                        <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                          <FileText size={18} />
                        </div>
                        <span className="px-2 py-1 bg-gray-50 text-gray-500 text-[9px] font-bold rounded-lg border border-gray-100">{note.type} · {note.pages}p</span>
                      </div>
                      <h4 className="font-black text-navy text-sm mb-1">{note.subject}</h4>
                      <p className="text-xs text-primary font-bold mb-1">{note.topic}</p>
                      <p className="text-[10px] text-gray-400 font-medium mb-4">By {note.faculty} · {note.date}</p>
                      <a
                        href={note.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 py-2.5 bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white text-xs font-bold rounded-xl border border-emerald-100 transition-all"
                      >
                        <Download size={13} /> Download Notes
                      </a>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}
