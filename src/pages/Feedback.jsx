import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

const ratingLabels = [
  'Strongly disagree',
  'Disagree',
  'Neutral',
  'Agree',
  'Strongly agree'
];

const questions = [
  { id: 'q1', text: 'The syllabus is relevant and adequate for the course.' },
  { id: 'q2', text: 'The course/programme outcomes are well-defined and clear.' },
  { id: 'q3', text: 'The curriculum promotes career orientation and employability skills.' },
  { id: 'q4', text: 'Sufficiency of resources like Library, Labs, and ICT facilities.' },
  { id: 'q5', text: 'Internal assessment and evaluation process is fair and transparent.' },
  { id: 'q6', text: 'Teachers are well-prepared and cover the syllabus effectively.' },
  { id: 'q7', text: 'Teachers encourage student participation and discussion.' },
  { id: 'q8', text: 'The college environment is conducive to learning and growth.' }
];

export default function Feedback() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    programme: '',
    class: '',
    ratings: {},
    suggestions: ''
  });

  const handleRatingChange = (id, value) => {
    setFormData(prev => ({
      ...prev,
      ratings: { ...prev.ratings, [id]: value }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#f0ebf8] py-8 px-4">
        <div className="max-w-[640px] mx-auto">
          <div className="bg-white rounded-xl shadow-sm border-t-[10px] border-[#673ab7] p-8">
            <h1 className="text-2xl font-medium text-black mb-3">Student Feedback</h1>
            <p className="text-sm text-gray-600 mb-6">Your response has been recorded.</p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({ email: '', name: '', programme: '', class: '', ratings: {}, suggestions: '' });
              }}
              className="text-[#1a73e8] text-sm hover:underline block mb-2"
            >
              Submit another response
            </button>
            <button
              onClick={() => navigate(-1)}
              className="text-[#1a73e8] text-sm hover:underline block"
            >
              Go back
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f0ebf8] py-8 px-4 font-sans antialiased">
      <div className="max-w-[640px] mx-auto space-y-3">

        {/* Header Card */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="bg-white rounded-xl shadow-sm border-t-[10px] border-[#673ab7]"
        >
          <div className="p-6 md:p-8">
            {/* Back button */}
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-1.5 text-sm text-[#673ab7] font-medium hover:bg-purple-50 px-2 py-1 rounded-md transition-all mb-5 -ml-2"
            >
              <ArrowLeft size={16} /> Back
            </button>

            <h1 className="text-3xl font-normal text-black mb-2">Student Feedback</h1>
            <div className="text-sm text-gray-600 mt-3 space-y-0.5">
              <p>Department of Computer Science</p>
              <p>New Arts, Commerce and Science College, Ahmednagar</p>
            </div>
            <p className="text-[12px] text-red-500 italic mt-5 pt-4 border-t border-gray-100">
              * Indicates required question
            </p>
          </div>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Email */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white rounded-lg shadow-sm p-6 md:p-8">
            <label className="block text-base text-gray-900 mb-4 font-medium">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="email"
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
              placeholder="Your email"
              className="w-full border-b border-gray-300 py-2 focus:border-[#673ab7] focus:border-b-2 transition-all outline-none text-sm"
            />
          </motion.div>

          {/* Name */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white rounded-lg shadow-sm p-6 md:p-8">
            <label className="block text-base text-gray-900 mb-4 font-medium">
              Name of the Student <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="text"
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your answer"
              className="w-full border-b border-gray-300 py-2 focus:border-[#673ab7] focus:border-b-2 transition-all outline-none text-sm"
            />
          </motion.div>

          {/* Class */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white rounded-lg shadow-sm p-6 md:p-8">
            <label className="block text-base text-gray-900 mb-5 font-medium">
              Class <span className="text-red-500">*</span>
            </label>
            <div className="space-y-3">
              {['FY', 'SY', 'TY', 'M.Sc.-1', 'M.Sc.-2'].map((item) => (
                <label key={item} className="flex items-center gap-3 cursor-pointer">
                  <div className="relative flex items-center justify-center">
                    <input
                      required
                      type="radio"
                      name="class"
                      value={item}
                      checked={formData.class === item}
                      onChange={e => setFormData({ ...formData, class: e.target.value })}
                      className="peer appearance-none w-5 h-5 border-2 border-gray-400 rounded-full checked:border-[#673ab7] transition-all"
                    />
                    <div className="absolute w-2.5 h-2.5 bg-[#673ab7] rounded-full scale-0 peer-checked:scale-100 transition-transform" />
                  </div>
                  <span className="text-sm text-gray-800">{item}</span>
                </label>
              ))}
            </div>
          </motion.div>

          {/* Programme */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white rounded-lg shadow-sm p-6 md:p-8">
            <label className="block text-base text-gray-900 mb-4 font-medium">
              Name of Programme <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="text"
              value={formData.programme}
              onChange={e => setFormData({ ...formData, programme: e.target.value })}
              placeholder="Ex. M.Sc. Computer Science"
              className="w-full border-b border-gray-300 py-2 focus:border-[#673ab7] focus:border-b-2 transition-all outline-none text-sm"
            />
          </motion.div>

          {/* Questions */}
          {questions.map((q) => (
            <motion.div key={q.id} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white rounded-lg shadow-sm p-6 md:p-8">
              <label className="block text-base text-gray-900 mb-5 font-medium leading-relaxed">
                {q.text} <span className="text-red-500">*</span>
              </label>
              <div className="space-y-3">
                {ratingLabels.map((label, idx) => (
                  <label key={label} className="flex items-center gap-3 cursor-pointer">
                    <div className="relative flex items-center justify-center">
                      <input
                        required
                        type="radio"
                        name={q.id}
                        value={idx + 1}
                        checked={formData.ratings[q.id] === String(idx + 1)}
                        onChange={e => handleRatingChange(q.id, e.target.value)}
                        className="peer appearance-none w-5 h-5 border-2 border-gray-400 rounded-full checked:border-[#673ab7] transition-all"
                      />
                      <div className="absolute w-2.5 h-2.5 bg-[#673ab7] rounded-full scale-0 peer-checked:scale-100 transition-transform" />
                    </div>
                    <span className="text-sm text-gray-800">{label}</span>
                  </label>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Suggestions */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white rounded-lg shadow-sm p-6 md:p-8">
            <label className="block text-base text-gray-900 mb-4 font-medium">
              Suggestions for improvement
            </label>
            <textarea
              rows={3}
              value={formData.suggestions}
              onChange={e => setFormData({ ...formData, suggestions: e.target.value })}
              placeholder="Your answer"
              className="w-full border-b border-gray-300 py-2 focus:border-[#673ab7] focus:border-b-2 transition-all outline-none text-sm resize-none"
            />
          </motion.div>

          {/* Submit */}
          <div className="flex items-center justify-between pt-2 pb-8">
            <button
              type="submit"
              className="px-6 py-2 bg-[#673ab7] text-white font-medium rounded-md hover:bg-[#5e35b1] shadow-sm transition-all text-sm"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={() => setFormData({ email: '', name: '', programme: '', class: '', ratings: {}, suggestions: '' })}
              className="text-[#673ab7] text-sm font-medium hover:bg-purple-50 px-4 py-2 rounded-md transition-all"
            >
              Clear form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
