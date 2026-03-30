import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Users, GraduationCap, BookOpen, Award } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

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
          >
            Department of Computer Science
          </motion.h1>

          <p className="text-gray-300 mb-6">
            Shaping future tech leaders through quality education.
          </p>

          <Link
            to="/admission"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg"
          >
            Apply Now <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Stats Section */}
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
            </motion.div>
          ))}
        </div>
      </section>

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

    </div>
  );
}