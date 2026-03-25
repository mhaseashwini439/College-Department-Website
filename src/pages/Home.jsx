import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, ArrowRight, BookOpen, GraduationCap, Users, Award } from 'lucide-react';
<<<<<<< HEAD
import ChartComponent from '../components/ChartComponent';
=======
import PlaceholderImage from '../components/PlaceholderImage';
>>>>>>> a3edbfb6126c6d05b9307d910b0cd39aa0b0f1f7

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

<<<<<<< HEAD
const placementData = [
  { year: '2021', students: 75 },
  { year: '2022', students: 120 },
  { year: '2023', students: 158 },
  { year: '2024', students: 185 },
];

const alumniData = [
  { year: '2021', network: 450 },
  { year: '2022', network: 780 },
  { year: '2023', network: 1100 },
  { year: '2024', network: 1450 },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-[#2A1608] overflow-hidden py-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1], x: [0, 50, 0], y: [0, -30, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px]" 
          />
          <motion.div 
            animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.15, 0.1], x: [0, -40, 0], y: [0, 60, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-[10%] -right-[10%] w-[60%] h-[60%] bg-navy/30 rounded-full blur-[140px]" 
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(42,22,8,0.8)_100%)]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 z-10 w-full">
=======
export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy via-navy-light to-navy overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
>>>>>>> a3edbfb6126c6d05b9307d910b0cd39aa0b0f1f7
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
<<<<<<< HEAD
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch"
          >
            {/* COLUMN 1: Placement Growth Chart */}
            <motion.div variants={fadeUp} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-5 shadow-2xl flex flex-col">
              <div className="text-[10px] text-primary font-black uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-ping inline-block" />
                Year-wise Placements
              </div>
              <div className="flex-1">
                <ChartComponent title="Placements" data={placementData} dataKey="students" color="#F7931D" hideTitle />
              </div>
              <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <div className="text-white font-black text-xl">100+</div>
                  <div className="text-white/40 text-[9px] font-bold uppercase tracking-widest">Annual Placements</div>
                </div>
                <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Award size={16} className="text-primary" />
                </div>
              </div>
            </motion.div>

            {/* COLUMN 2: Department of Computer Science + Buttons */}
            <motion.div variants={fadeUp} className="text-center flex flex-col items-center justify-center gap-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[9px] font-black uppercase tracking-[0.2em]">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                Welcome to
              </div>

              <div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-white font-outfit leading-tight tracking-tight">
                  Department of
                </h1>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black font-outfit leading-tight tracking-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-primary-hover">
                    Computer Science
                  </span>
                </h2>
              </div>

              <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-medium max-w-[200px]">
                Shaping future tech leaders through quality education at Ahmednagar Jilha Maratha Vidya Prasark Samaja's College.
              </p>

              <div className="flex flex-col gap-3 w-full">
                <Link
                  to="/admission"
                  className="group relative w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-primary text-white font-bold rounded-2xl hover:bg-primary-hover transition-all duration-300 shadow-[0_0_15px_rgba(247,147,29,0.3)] overflow-hidden text-sm"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  Apply UG <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/admission"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all backdrop-blur-sm text-sm"
                >
                  Apply PG <ArrowRight size={14} />
=======
            className="grid lg:grid-cols-2 gap-10 items-center"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-block px-3 py-1 bg-white/10 text-blue-200 text-xs font-medium rounded-full mb-4">
                Welcome to
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Department of<br />
                <span className="text-blue-300">Computer Science</span>
              </h1>
              <p className="text-gray-300 text-base md:text-lg mb-8 max-w-lg">
                Shaping future tech leaders through quality education, practical training, and industry-oriented programs at AJMVPS College, Ahilyanagar.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/admission"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-hover transition-all duration-200 shadow-lg shadow-primary/25"
                >
                  Apply for UG <ArrowRight size={16} />
                </Link>
                <Link
                  to="/admission"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-navy font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200"
                >
                  Apply for PG <ArrowRight size={16} />
>>>>>>> a3edbfb6126c6d05b9307d910b0cd39aa0b0f1f7
                </Link>
              </div>
            </motion.div>

<<<<<<< HEAD
            {/* COLUMN 3: Department Video */}
            <motion.div variants={fadeUp} className="bg-slate-800/80 rounded-3xl overflow-hidden relative group border border-white/5 shadow-2xl min-h-[280px]">
              <img 
                src="/Information/Dept Event Photh/DSC_5086.JPG" 
                alt="Department Video" 
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-[0_0_25px_rgba(247,147,29,0.6)] cursor-pointer"
                >
                  <Play size={24} fill="white" className="text-white ml-1" />
                </motion.div>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="text-[10px] text-primary font-black uppercase tracking-[0.2em] mb-1 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping inline-block" />
                  Department Video
                </div>
                <p className="text-white/60 text-[10px] font-medium">Take a Virtual Tour</p>
              </div>
            </motion.div>

            {/* COLUMN 4: Alumni Network Growth Chart */}
            <motion.div variants={fadeUp} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-5 shadow-2xl flex flex-col">
              <div className="text-[10px] text-primary font-black uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-ping inline-block" />
                Alumni Network Growth
              </div>
              <div className="flex-1">
                <ChartComponent title="Network" data={alumniData} dataKey="network" color="#073B6B" hideTitle />
              </div>
              <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <div className="text-white font-black text-xl">1450+</div>
                  <div className="text-white/40 text-[9px] font-bold uppercase tracking-widest">Alumni Network</div>
                </div>
                <div className="w-8 h-8 rounded-xl bg-navy/30 flex items-center justify-center">
                  <GraduationCap size={16} className="text-navy-light" />
                </div>
              </div>
            </motion.div>

=======
            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-3">
              <div className="col-span-2 bg-white/5 backdrop-blur rounded-xl border border-white/10 overflow-hidden shadow-2xl">
                <div className="aspect-video w-full">
                  <iframe 
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/zOjov-2OZ0E?autoplay=0&mute=1" 
                    title="Department Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur rounded-xl border border-white/10 overflow-hidden relative aspect-video">
                <img src="/Information/Dept Event Photh/DSC_3790.JPG" alt="Department Office" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                  <p className="text-white text-xs font-medium">Department Office</p>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur rounded-xl border border-white/10 overflow-hidden relative aspect-video">
                <img src="/Information/Dept Event Photh/DSC_5037.JPG" alt="Computer Lab" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                  <p className="text-white text-xs font-medium">Computer Lab</p>
                </div>
              </div>
            </motion.div>
>>>>>>> a3edbfb6126c6d05b9307d910b0cd39aa0b0f1f7
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Stats Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="max-w-7xl mx-auto px-4 py-20"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Users, label: 'Academic Programs', value: '3+', color: 'bg-orange-500' },
            { icon: GraduationCap, label: 'Expert Faculty', value: '12+', color: 'bg-navy' },
            { icon: BookOpen, label: 'Advanced Labs', value: '4', color: 'bg-accent' },
            { icon: Award, label: 'Student Intake', value: '220', color: 'bg-primary' },
          ].map((stat, idx) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              whileHover={{ y: -5 }}
              className="relative p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden"
            >
                <div className={`absolute top-0 right-0 w-24 h-24 ${stat.color} opacity-[0.03] rounded-bl-full translate-x-8 -translate-y-8 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-500`} />
              <stat.icon size={32} className="mb-6 text-primary group-hover:scale-110 transition-transform duration-300" />
              <div className="text-4xl font-extrabold text-navy font-outfit mb-1">{stat.value}</div>
              <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
=======
      {/* Stats */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={stagger}
        className="max-w-7xl mx-auto px-4 py-12"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Users, label: 'Programs', value: '3' },
            { icon: GraduationCap, label: 'Faculty', value: '12' },
            { icon: BookOpen, label: 'Labs', value: '4' },
            { icon: Award, label: 'Intake Capacity', value: '220' },
          ].map(stat => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="text-center p-6 rounded-xl border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
            >
              <stat.icon size={28} className="mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
              <div className="text-2xl md:text-3xl font-bold text-navy">{stat.value}</div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
>>>>>>> a3edbfb6126c6d05b9307d910b0cd39aa0b0f1f7
            </motion.div>
          ))}
        </div>
      </motion.section>

<<<<<<< HEAD
      {/* About Sections */}
      <section className="bg-slate-50/50 py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
=======
      {/* About College */}
      <section className="bg-section-bg">
        <div className="max-w-7xl mx-auto px-4 py-16">
>>>>>>> a3edbfb6126c6d05b9307d910b0cd39aa0b0f1f7
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
<<<<<<< HEAD
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeUp} className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
              <h2 className="text-3xl md:text-5xl font-extrabold text-navy mb-8 font-outfit leading-tight">
                A Century of <br />
                <span className="text-primary italic">Academic Excellence</span>
              </h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Ahmednagar Jilha Maratha Vidya Prasark Samaja's New Arts Commerce &amp; Science College, established in 1918, is a premier institution dedicated to empowering students through knowledge and values.
              </p>
              <div className="space-y-4 mb-10">
                {[
                  'NAAC A++ Accreditation (3.79 CGPA)',
                  'Century-long legacy of quality education',
                  'State-of-the-art research infrastructure'
                ].map(point => (
                  <div key={point} className="flex items-center gap-3 text-slate-700 font-medium">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <ArrowRight size={12} />
                    </div>
                    {point}
                  </div>
                ))}
              </div>
              <Link
                to="/about/college"
                className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all"
              >
                Discover our History <ArrowRight size={18} />
              </Link>
            </motion.div>
            <motion.div variants={fadeUp} className="relative">
              <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
                <img src="/Information/Dept Event Photh/DSC_5077.JPG" alt="College Campus" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 hidden md:block">
                  <div className="text-3xl font-bold text-primary">100+</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Years Legacy</div>
              </div>
            </motion.div>
=======
            className="grid md:grid-cols-2 gap-10 items-center"
          >
            <motion.div variants={fadeUp}>
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">About Our College</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                AJMVPS New Arts, Commerce & Science College, Ahmednagar, is a premier educational institution established in 1918. Committed to academic excellence, the college has grown to become one of the leading institutions in the region.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With a prestigious <strong>NAAC 'A++' accreditation (CGPA 3.79)</strong> and a dedicated faculty, we prepare students for the challenges of the modern world through comprehensive curriculum and hands-on learning experiences.
              </p>
              <Link
                to="/about/college"
                className="inline-flex items-center gap-1 text-primary font-medium mt-4 hover:gap-2 transition-all"
              >
                Learn more <ArrowRight size={16} />
              </Link>
            </motion.div>
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100 relative pt-[75%]">
              <img src="/Information/Dept Event Photh/DSC_5077.JPG" alt="College Campus" className="absolute inset-0 w-full h-full object-cover" />
            </div>
>>>>>>> a3edbfb6126c6d05b9307d910b0cd39aa0b0f1f7
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Dept Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
=======
      {/* About Department */}
      <section>
        <div className="max-w-7xl mx-auto px-4 py-16">
>>>>>>> a3edbfb6126c6d05b9307d910b0cd39aa0b0f1f7
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
<<<<<<< HEAD
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeUp} className="order-2 lg:order-1 relative">
                <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
                    <img src="/Information/Dept Event Photh/DSC_5086.JPG" alt="Department Lab" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="absolute -top-6 -left-6 bg-primary p-6 rounded-3xl shadow-xl hidden md:block">
                    <div className="text-3xl font-bold text-white">12+</div>
                    <div className="text-[10px] font-bold text-white/70 uppercase tracking-widest">Expert Faculty</div>
                </div>
            </motion.div>
            <motion.div variants={fadeUp} className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-5xl font-extrabold text-navy mb-8 font-outfit leading-tight">
                Shaping the <br />
                <span className="text-primary italic">Digital Frontier</span>
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                The Department of Computer Science is at the core of technological innovation. We offer specialized UG and PG programs that bridge the gap between theory and industry practice.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-10">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                      <div className="font-bold text-navy mb-1 italic">Industry Ready</div>
                      <p className="text-xs text-slate-500">Curriculum aligned with latest IT trends.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                      <div className="font-bold text-navy mb-1 italic">Advanced Labs</div>
                      <p className="text-xs text-slate-500">High-performance computing resources.</p>
                  </div>
              </div>
              <Link
                to="/about/department"
                className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all"
              >
                Examine our Programs <ArrowRight size={18} />
=======
            className="grid md:grid-cols-2 gap-10 items-center"
          >
            <motion.div variants={fadeUp} className="order-2 md:order-1">
              <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100 relative pt-[75%]">
                <img src="/Information/Dept Event Photh/DSC_5086.JPG" alt="Department Lab" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="order-1 md:order-2">
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">About Our Department</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                The Department of Computer Science offers undergraduate (B.Sc. Computer Science) and postgraduate (M.Sc. Computer Science) programs designed to meet the evolving demands of the IT industry.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our curriculum blends theoretical foundations with practical applications, ensuring students are industry-ready upon graduation. We focus on emerging technologies including AI, ML, Cloud Computing, and Cybersecurity.
              </p>
              <Link
                to="/about/department"
                className="inline-flex items-center gap-1 text-primary font-medium mt-4 hover:gap-2 transition-all"
              >
                Learn more <ArrowRight size={16} />
>>>>>>> a3edbfb6126c6d05b9307d910b0cd39aa0b0f1f7
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Gallery Section */}
      <section className="bg-slate-900 py-24 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                <div>
                    <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-extrabold mb-4 font-outfit text-white">
                        Vibrant Campus <span className="text-primary italic">Life</span>
                    </motion.h2>
                    <motion.p variants={fadeUp} className="text-white/50 max-w-xl font-medium">
                        Capturing the essence of learning, innovation, and celebration at our department.
                    </motion.p>
                </div>
                <motion.div variants={fadeUp}>
                    <Link to="/events" className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all font-bold text-sm">
                        View Full Gallery
                    </Link>
                </motion.div>
            </div>
            
            <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Coding Challenge', src: '/Information/Dept Event Photh/DSC_3731.JPG' },
                { label: 'Technical Seminar', src: '/Information/Dept Event Photh/IMG_0644.JPG' },
                { label: 'Practical Exam', src: '/Information/Dept Event Photh/20220502114007_IMG_0728.JPG' },
                { label: 'Placement Drive', src: '/Information/Dept Event Photh/DSC_5039.JPG' },
                { label: 'Merit Awards', src: '/Information/Dept Event Photh/DSC_7997.JPG' },
                { label: 'Annual Gathering', src: '/Information/Dept Event Photh/DSC_8011.JPG' },
                { label: 'Faculty Meet', src: '/Information/Dept Event Photh/DSC_8014.JPG' },
                { label: 'Convocation', src: '/Information/Dept Event Photh/DSC_8012.JPG' }
              ].map((img, idx) => (
                <motion.div 
                    key={img.label} 
                    whileHover={{ scale: 0.98 }}
                    className="group relative aspect-square overflow-hidden rounded-[32px] bg-slate-800 border border-white/5"
                >
                  <img
                    src={img.src}
                    alt={img.label}
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white font-bold font-outfit text-lg leading-tight">{img.label}</p>
                    <p className="text-primary text-[10px] font-bold uppercase tracking-widest mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Department Event</p>
                  </div>
                </motion.div>
=======
      {/* Gallery */}
      <section className="bg-section-bg">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-bold text-navy text-center mb-10">
              Gallery
            </motion.h2>
            <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { label: 'Programming Contest', src: '/Information/Dept Event Photh/DSC_3731.JPG' },
                { label: 'Student Presentation', src: '/Information/Dept Event Photh/IMG_0644.JPG' },
                { label: 'Lab Session', src: '/Information/Dept Event Photh/20220502114007_IMG_0728.JPG' },
                { label: 'Campus Placement', src: '/Information/Dept Event Photh/DSC_5039.JPG' },
                { label: 'Prize Distribution', src: '/Information/Dept Event Photh/DSC_7997.JPG' },
                { label: 'Cultural Activity', src: '/Information/Dept Event Photh/DSC_8011.JPG' },
                { label: 'Group Photo', src: '/Information/Dept Event Photh/DSC_8014.JPG' },
                { label: 'Awards Ceremony', src: '/Information/Dept Event Photh/DSC_8012.JPG' }
              ].map(img => (
                <div key={img.label} className="group overflow-hidden rounded-xl bg-white border border-gray-100 relative pt-[75%]">
                  <img
                    src={img.src}
                    alt={img.label}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-sm font-medium">{img.label}</p>
                  </div>
                </div>
>>>>>>> a3edbfb6126c6d05b9307d910b0cd39aa0b0f1f7
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
