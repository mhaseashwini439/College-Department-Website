import { motion } from 'framer-motion';
import { ExternalLink, FileText, Download } from 'lucide-react';
import { useData } from '../context/DataContext';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function Results() {
  const { data } = useData();
  const results = data.results || [];

  // Group results by title (FY, SY, TY, etc.)
  const groupedResults = results.reduce((acc, result) => {
    if (!acc[result.title]) acc[result.title] = [];
    acc[result.title].push(result);
    return acc;
  }, {});

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div initial="hidden" animate="visible" variants={fadeUp}>
        <h1 className="text-3xl font-bold text-navy mb-2">Examination Results</h1>
        <p className="text-gray-500 mb-8">View and download your semester-wise results for academic year 2024-25.</p>
      </motion.div>

      {/* Results Sections */}
      <div className="space-y-12 mb-16">
        {Object.entries(groupedResults).map(([title, items], index) => (
          <motion.div
            key={title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-xl font-bold text-navy mb-5 pb-2 border-b-2 border-primary inline-block">
              {title}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4">
              {items.map((result) => (
                <div
                  key={result.id}
                  className="bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md hover:border-primary/30 transition-all duration-300 group flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <FileText size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-navy text-base">{result.semester}</h3>
                      <p className="text-xs text-gray-500">Exam Date: {result.date}</p>
                    </div>
                  </div>
                  
                  <a
                    href={result.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 text-primary text-sm font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-200"
                  >
                    View Result
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* backup Portal Link */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="text-center bg-gray-50 rounded-2xl p-8 border border-gray-100 border-dashed"
      >
        <p className="text-gray-600 mb-4 font-medium italic">
          Looking for older records?
        </p>
        <a
          href="http://college.unipune.ac.in/Result/List_Result.aspx"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
        >
          <ExternalLink size={16} /> Official University Results Portal
        </a>
      </motion.div>
    </div>
  );
}
