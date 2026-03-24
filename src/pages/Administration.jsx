import { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import StaffImage from '../components/StaffImage';
import FacultyCard from '../components/FacultyCard';
import { useData } from '../context/DataContext';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Administration() {
  const { data } = useData();
  const [openCardId, setOpenCardId] = useState(null);

  const handleToggle = (id) => {
    setOpenCardId(prev => prev === id ? null : id);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div initial="hidden" animate="visible" variants={fadeUp}>
        <h1 className="text-3xl font-bold text-navy mb-2">Administration</h1>
        <p className="text-gray-500 mb-8">Meet the team that drives our academic and administrative excellence.</p>
      </motion.div>

      {/* College Leadership */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-10">
        <h2 className="text-xl font-bold text-navy mb-4 flex items-center gap-2">
          <Shield size={20} className="text-primary" /> College Leadership
        </h2>
        <div className="grid md:grid-cols-2 gap-5">
          {[
            { title: 'Principal', name: 'Dr. B. B. Sagade' },
            { title: 'Vice Principal (Science)', name: 'Dr. A. E. Athare' },
            { title: 'Vice Principal (Commerce)', name: 'Dr. S. B. Kalamkar' },
          ].map(person => (
            <div key={person.title} className="flex items-center gap-6 bg-white rounded-xl p-5 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
               <StaffImage 
              src={`/Administration/${person.name}.jpeg`} 
                alt={person.name}
                size="md"
              />
              <div className="flex-1">
                <span className="text-xs font-bold text-primary uppercase tracking-wider">{person.title}</span>
                <h3 className="text-xl font-bold text-navy mt-1">{person.name}</h3>
                <div className="w-8 h-0.5 bg-gray-100 mt-2" />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Department Faculty */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <h2 className="text-xl font-bold text-navy mb-4 flex items-center gap-2">
          <Shield size={20} className="text-primary" /> Department Faculty
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.faculty.map(f => (
            <FacultyCard
              key={f.id}
              faculty={f}
              isOpen={openCardId === f.id}
              onToggle={() => handleToggle(f.id)}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
