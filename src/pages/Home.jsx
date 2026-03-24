import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, ArrowRight, BookOpen, GraduationCap, Users, Award } from 'lucide-react';
import ChartComponent from '../components/ChartComponent';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

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
      <section className="relative min-h-[90vh] flex items-center bg-[#0B1120] overflow-hidden py-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
              x: [0, 50, 0],
              y: [0, -30, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-primary/30 rounded-full blur-[120px]" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.15, 0.1],
              x: [0, -40, 0],
              y: [0, 60, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-[10%] -right-[10%] w-[60%] h-[60%] bg-blue-500/20 rounded-full blur-[140px]" 
          />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 z-10 w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            {/* Left: Content */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary-light text-xs font-bold mb-6 tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                Empowering Innovation
              </motion.div>
              
              <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1] font-outfit">
                Master the Future of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-emerald-400">Computer Science</span>
              </motion.h1>
              
              <motion.p variants={fadeUp} className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                Join a legacy of excellence at AJMVPS College. Our department blends cutting-edge technology with academic rigor to shape the tech leaders of tomorrow.
              </motion.p>
              
              <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link
                  to="/admission"
                  className="group relative inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-primary-hover transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  Apply for UG <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/admission"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                >
                  Apply for PG <ArrowRight size={18} />
                </Link>
              </motion.div>

              <motion.div variants={fadeUp} className="mt-12 flex items-center justify-center lg:justify-start gap-8 opacity-60">
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-white">A++</div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">NAAC Grade</div>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-white">100+</div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Annual Placements</div>
                </div>
              </motion.div>
            </div>

            {/* Right: Visual Elements */}
            <div className="lg:col-span-5 relative">
              <motion.div
                variants={fadeUp}
                className="grid gap-4"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4 pt-12">
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-4 overflow-hidden shadow-2xl">
                      <ChartComponent title="Placements" data={placementData} dataKey="students" color="#2563EB" hideTitle />
                    </div>
                    <div className="bg-gradient-to-br from-primary to-blue-600 rounded-3xl p-6 text-white shadow-2xl">
                      <GraduationCap size={32} className="mb-4 text-white/80" />
                      <div className="text-2xl font-bold">220+</div>
                      <div className="text-xs text-white/60 font-medium">New Admissions</div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="aspect-[4/5] bg-slate-800 rounded-3xl overflow-hidden relative group border border-white/5 shadow-2xl">
                        <img 
                          src="/Information/Dept Event Photh/DSC_5086.JPG" 
                          alt="Lab" 
                          className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                            <div className="flex items-center gap-2 text-white">
                                <Play size={16} fill="white" />
                                <span className="text-[10px] font-bold uppercase tracking-wider">Campus Tour</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-4 overflow-hidden shadow-2xl">
                      <ChartComponent title="Network" data={alumniData} dataKey="network" color="#10B981" hideTitle />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

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
            { icon: Users, label: 'Academic Programs', value: '3+', color: 'bg-blue-500' },
            { icon: GraduationCap, label: 'Expert Faculty', value: '12+', color: 'bg-emerald-500' },
            { icon: BookOpen, label: 'Advanced Labs', value: '4', color: 'bg-amber-500' },
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
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* About Sections */}
      <section className="bg-slate-50/50 py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeUp} className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
              <h2 className="text-3xl md:text-5xl font-extrabold text-navy mb-8 font-outfit leading-tight">
                A Century of <br />
                <span className="text-primary italic">Academic Excellence</span>
              </h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                AJMVPS New Arts, Commerce & Science College, established in 1918, is a premier institution dedicated to empowering students through knowledge and values.
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
          </motion.div>
        </div>
      </section>

      {/* Dept Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeUp} className="order-2 lg:order-1 relative">
                <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
                    <img src="/Information/Dept Event Photh/DSC_5086.JPG" alt="Department Lab" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="absolute -top-6 -left-6 bg-navy p-6 rounded-3xl shadow-xl hidden md:block">
                    <div className="text-3xl font-bold text-white">12+</div>
                    <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Expert Faculty</div>
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
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

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
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
