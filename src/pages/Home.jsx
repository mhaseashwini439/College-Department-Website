import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import { Play, ArrowRight, BookOpen, GraduationCap, Users, Award } from 'lucide-react';
import ChartComponent from '../components/ChartComponent';
=======
import { ArrowRight, Users, GraduationCap, BookOpen, Award } from 'lucide-react';
>>>>>>> da8300eed22f507a198d3c58bb189ee71239ad79

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

<<<<<<< HEAD
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
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch"
=======
export default function Home() {
  return (
    <div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy to-navy-light text-white">
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-3xl md:text-5xl font-bold mb-4"
>>>>>>> da8300eed22f507a198d3c58bb189ee71239ad79
          >
            Department of Computer Science
          </motion.h1>

          <p className="text-gray-300 mb-6">
            Shaping future tech leaders through quality education.
          </p>

<<<<<<< HEAD
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
                </Link>
              </div>
            </motion.div>

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

          </motion.div>
=======
          <Link
            to="/admission"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg"
          >
            Apply Now <ArrowRight size={16} />
          </Link>
>>>>>>> da8300eed22f507a198d3c58bb189ee71239ad79
        </div>
      </section>

      {/* Stats Section */}
<<<<<<< HEAD
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
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Users, label: 'Programs', value: '3+' },
            { icon: GraduationCap, label: 'Faculty', value: '12+' },
            { icon: BookOpen, label: 'Labs', value: '4' },
            { icon: Award, label: 'Intake', value: '220' }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              className="text-center p-6 border rounded-lg"
            >
              <item.icon className="mx-auto mb-2 text-primary" />
              <h3 className="text-xl font-bold">{item.value}</h3>
              <p className="text-gray-500 text-sm">{item.label}</p>
>>>>>>> da8300eed22f507a198d3c58bb189ee71239ad79
            </motion.div>
          ))}
        </div>
      </section>

<<<<<<< HEAD
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
=======
      {/* About Section */}
      <section className="bg-section-bg">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            About Department
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Our department offers UG and PG programs with focus on practical and industry-ready skills.
          </p>

          <Link
            to="/about/department"
            className="inline-flex items-center gap-2 text-primary mt-4"
          >
            Learn More <ArrowRight size={16} />
          </Link>
        </div>
      </section>

>>>>>>> da8300eed22f507a198d3c58bb189ee71239ad79
    </div>
  );
}