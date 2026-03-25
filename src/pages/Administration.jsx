import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
<<<<<<< HEAD
import { useState } from 'react';
import FacultyCard from '../components/FacultyCard';
import StaffImage from '../components/StaffImage';
=======
import PlaceholderImage from '../components/PlaceholderImage';
>>>>>>> a3edbfb6126c6d05b9307d910b0cd39aa0b0f1f7
import { useData } from '../context/DataContext';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Administration() {
  const { data } = useData();
<<<<<<< HEAD
  const [openCardId, setOpenCardId] = useState(null);

  const handleToggle = (id) => {
    setOpenCardId(prev => prev === id ? null : id);
  };
=======
>>>>>>> a3edbfb6126c6d05b9307d910b0cd39aa0b0f1f7

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
<<<<<<< HEAD
            { title: 'Principal', name: 'Dr. B. B. Sagade', imageUrl: '/Administration/Dr. B. B. Sagade.jpeg' },
            { title: 'Vice Principal (Science)', name: 'Dr. A. E. Athare', imageUrl: '/Administration/Dr. A. E. Athare.jpeg' },
            { title: 'Vice Principal (Commerce)', name: 'Dr. S. B. Kalamkar', imageUrl: '/Administration/Dr. S. B. Kalamkar.jpeg' },
          ].map(person => (
            <div key={person.title} className="flex items-center gap-6 bg-white rounded-xl p-5 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <StaffImage
                src={person.imageUrl}
                alt={person.name}
                size="md"
              />
              <div className="flex-1">
                <span className="text-xs font-bold text-primary uppercase tracking-wider">{person.title}</span>
                <h3 className="text-xl font-bold text-navy mt-1">{person.name}</h3>
                <div className="w-8 h-0.5 bg-gray-100 mt-2" />
=======
            { title: 'Principal', name: 'Dr. B. B. Sagade' },
            { title: 'Vice Principal (Science)', name: 'Dr. A. E. Athare' },
            { title: 'Vice Principal (Commerce)', name: 'Dr. S. B. Kalamkar' },
          ].map(person => (
            <div key={person.title} className="flex items-center gap-4 bg-white rounded-xl p-5 border border-gray-100 hover:shadow-md transition-shadow">
              <PlaceholderImage label={person.title} height="100px" className="w-24 shrink-0 !rounded-lg" />
              <div>
                <span className="text-xs font-semibold text-primary uppercase">{person.title}</span>
                <h3 className="text-lg font-bold text-navy">{person.name}</h3>
>>>>>>> a3edbfb6126c6d05b9307d910b0cd39aa0b0f1f7
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
<<<<<<< HEAD
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.faculty.map(f => (
            <FacultyCard
              key={f.id}
              faculty={f}
              isOpen={openCardId === f.id}
              onToggle={() => handleToggle(f.id)}
            />
=======
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.faculty.map(f => (
            <div key={f.id} className="bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md transition-shadow text-center">
              <PlaceholderImage label="Faculty Photo" height="120px" className="w-28 mx-auto !rounded-full mb-3" />
              <h3 className="font-bold text-navy">{f.name}</h3>
              <p className="text-sm text-primary">{f.designation}</p>
              <p className="text-xs text-gray-500 mt-1">{f.qualification}</p>
            </div>
>>>>>>> a3edbfb6126c6d05b9307d910b0cd39aa0b0f1f7
          ))}
        </div>
      </motion.div>
    </div>
  );
}
