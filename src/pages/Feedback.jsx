import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

export default function Feedback() {
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#f0ebf8] py-6 px-4 flex flex-col items-center font-sans">
        <div className="w-full max-w-2xl mb-4 text-left">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
          >
            <ArrowLeft size={18} /> Back
          </button>
        </div>
        <motion.div 
          initial="hidden" animate="visible" variants={fadeUp}
          className="w-full max-w-2xl bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm"
        >
          <div className="h-2.5 bg-[#673ab7]"></div>
          <div className="p-8">
            <h1 className="text-3xl font-normal text-gray-900 mb-4 text-left">Student Feedback Form</h1>
            <p className="text-sm text-gray-700 mb-6 font-medium text-left">Your response has been recorded.</p>
            <button 
              onClick={() => setSubmitted(false)}
              className="text-[#673ab7] text-sm font-medium hover:underline block text-left"
            >
              Submit another response
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f0ebf8] py-6 px-4 flex flex-col items-center pb-20 font-sans">
      <div className="w-full max-w-2xl mb-4">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
        >
          <ArrowLeft size={18} /> Back
        </button>
      </div>

      <div className="w-full max-w-2xl space-y-3">
        {/* Form Header Card */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm text-left">
          <div className="h-2.5 bg-[#673ab7]"></div>
          <div className="p-8 pt-6">
            <h1 className="text-3xl font-normal text-gray-900 border-b border-gray-100 pb-4 mb-4">Student Feedback Form</h1>
            <p className="text-sm text-gray-800 mb-2">Dear Student, Please fill out this form to help us improve our department facilities and teaching standards.</p>
            <div className="text-xs text-red-600 mt-4">* Required</div>
          </div>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Email Question */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm group focus-within:border-[#673ab7] transition-colors text-left"
          >
            <div className="mb-4">
              <label className="text-base font-normal text-gray-900">Email <span className="text-red-600">*</span></label>
            </div>
            <input 
              required
              type="email"
              placeholder="Your email"
              className="w-full sm:w-2/3 border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-[#673ab7] focus:border-b-2 transition-all placeholder-gray-400"
            />
          </motion.div>

          {/* Name Question */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm group focus-within:border-[#673ab7] transition-colors text-left"
          >
            <div className="mb-4">
              <label className="text-base font-normal text-gray-900">Your Full Name <span className="text-red-600">*</span></label>
            </div>
            <input 
              required
              type="text"
              placeholder="Your answer"
              className="w-full sm:w-2/3 border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-[#673ab7] focus:border-b-2 transition-all placeholder-gray-400"
            />
          </motion.div>

          {/* Class / Year Question */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm group focus-within:border-[#673ab7] transition-colors text-left"
          >
            <div className="mb-4">
              <label className="text-base font-normal text-gray-900">Class / Year <span className="text-red-600">*</span></label>
              <p className="text-xs text-gray-500 mt-1">Select your current academic year</p>
            </div>
            <div className="space-y-4 pt-2">
              {['FY', 'SY', 'TY', 'MSC-I', 'MSC-II'].map((option) => (
                <label key={option} className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative flex items-center justify-center">
                    <input 
                      required
                      name="classYear"
                      type="radio"
                      className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-gray-400 checked:border-[#673ab7] checked:border-2 transition-all"
                    />
                    <div className="absolute h-2.5 w-2.5 scale-0 rounded-full bg-[#673ab7] transition-transform peer-checked:scale-100" />
                  </div>
                  <span className="text-sm text-gray-800">{option}</span>
                </label>
              ))}
            </div>
          </motion.div>

          {/* Quality Question */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm group focus-within:border-[#673ab7] transition-colors text-left"
          >
            <div className="mb-4">
              <label className="text-base font-normal text-gray-900">Rate the Quality of Teaching <span className="text-red-600">*</span></label>
              <p className="text-xs text-gray-500 mt-1">Select one option</p>
            </div>
            <div className="space-y-4 pt-2">
              {['Excellent', 'Very Good', 'Good', 'Needs Improvement'].map((option) => (
                <label key={option} className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative flex items-center justify-center">
                    <input 
                      required
                      name="quality"
                      type="radio"
                      className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-gray-400 checked:border-[#673ab7] checked:border-2 transition-all"
                    />
                    <div className="absolute h-2.5 w-2.5 scale-0 rounded-full bg-[#673ab7] transition-transform peer-checked:scale-100" />
                  </div>
                  <span className="text-sm text-gray-800">{option}</span>
                </label>
              ))}
            </div>
          </motion.div>

          {/* Syllabus Completion Question */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm group focus-within:border-[#673ab7] transition-colors text-left"
          >
            <div className="mb-4">
              <label className="text-base font-normal text-gray-900">Was the syllabus completed? <span className="text-red-600">*</span></label>
              <p className="text-xs text-gray-500 mt-1">Select one option</p>
            </div>
            <div className="space-y-4 pt-2">
              {['Yes', 'No', 'Partially'].map((option) => (
                <label key={option} className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative flex items-center justify-center">
                    <input 
                      required
                      name="syllabusCompleted"
                      type="radio"
                      className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-gray-400 checked:border-[#673ab7] checked:border-2 transition-all"
                    />
                    <div className="absolute h-2.5 w-2.5 scale-0 rounded-full bg-[#673ab7] transition-transform peer-checked:scale-100" />
                  </div>
                  <span className="text-sm text-gray-800">{option}</span>
                </label>
              ))}
            </div>
          </motion.div>

          {/* Detailed Question */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm group focus-within:border-[#673ab7] transition-colors text-left"
          >
            <div className="mb-4">
              <label className="text-base font-normal text-gray-900">Any suggestions for improvement?</label>
            </div>
            <textarea 
              placeholder="Your answer"
              rows={1}
              onInput={(e) => {
                e.target.style.height = 'auto';
                e.target.style.height = e.target.scrollHeight + 'px';
              }}
              className="w-full border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-[#673ab7] focus:border-b-2 transition-all placeholder-gray-400 resize-none min-h-[32px]"
            />
          </motion.div>

          {/* Form Actions */}
          <div className="flex items-center justify-between pt-4">
            <button 
              type="submit"
              className="bg-[#673ab7] text-white px-6 py-2 rounded font-medium text-sm hover:bg-[#5e35b1] transition-colors shadow-sm"
            >
              Submit
            </button>
            <div className="flex flex-col items-center">
              <span className="text-[10px] text-gray-500 mb-1">Never submit passwords through Google Forms.</span>
            </div>
          </div>

          <div className="text-center pt-8">
            <p className="text-[10px] text-gray-500">This content is neither created nor endorsed by Google. Report Abuse - Terms of Service - Privacy Policy</p>
          </div>
        </form>
      </div>
    </div>
  );
}
