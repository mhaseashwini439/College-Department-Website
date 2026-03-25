import { useState } from 'react';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import { Send, MessageCircle, Mail, Phone, User } from 'lucide-react';
=======
import { Send, MessageCircle } from 'lucide-react';
>>>>>>> a3edbfb6126c6d05b9307d910b0cd39aa0b0f1f7

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Suggestions() {
  const [submitted, setSubmitted] = useState(false);
<<<<<<< HEAD
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    suggestion: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
=======
  const [name, setName] = useState('');
  const [suggestion, setSuggestion] = useState('');
>>>>>>> a3edbfb6126c6d05b9307d910b0cd39aa0b0f1f7

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
<<<<<<< HEAD
    setFormData({ name: '', email: '', phone: '', suggestion: '' });
=======
    setName('');
    setSuggestion('');
>>>>>>> a3edbfb6126c6d05b9307d910b0cd39aa0b0f1f7
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div initial="hidden" animate="visible" variants={fadeUp}>
        <h1 className="text-3xl font-bold text-navy mb-2">Suggestions</h1>
        <p className="text-gray-500 mb-8">Share your ideas and suggestions to help us grow better.</p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
<<<<<<< HEAD
        className="max-w-2xl mx-auto"
      >
        {submitted ? (
          <div className="bg-green-50 rounded-2xl border border-green-200 p-10 text-center flex flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
              <MessageCircle size={32} className="text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-green-700">Thank You!</h3>
            <p className="text-base text-green-600 mt-2">Your suggestion has been received. We appreciate your input!</p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all"
=======
        className="max-w-xl mx-auto"
      >
        {submitted ? (
          <div className="bg-green-50 rounded-2xl border border-green-200 p-10 text-center">
            <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
              <MessageCircle size={24} className="text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-green-700">Thank You!</h3>
            <p className="text-sm text-green-600 mt-2">Your suggestion has been received. We appreciate your input!</p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 text-sm text-primary hover:underline"
>>>>>>> a3edbfb6126c6d05b9307d910b0cd39aa0b0f1f7
            >
              Submit another suggestion
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
<<<<<<< HEAD
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-semibold text-navy mb-1.5 flex items-center gap-2">
                  <User size={14} className="text-primary" /> Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-navy mb-1.5 flex items-center gap-2">
                  <Mail size={14} className="text-primary" /> Email ID
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold text-navy mb-1.5 flex items-center gap-2">
                <Phone size={14} className="text-primary" /> Contact Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-navy mb-1.5 flex items-center gap-2">
                <MessageCircle size={14} className="text-primary" /> Your Suggestion *
              </label>
              <textarea
                required
                name="suggestion"
                value={formData.suggestion}
                onChange={handleChange}
                rows={6}
                placeholder="Tell us how we can improve..."
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm resize-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-hover transition-all w-full justify-center shadow-lg shadow-primary/20"
            >
              <Send size={18} /> Send Suggestion
=======
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Your Name (Optional)</label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              />
            </div>
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Your Suggestion *</label>
              <textarea
                required
                value={suggestion}
                onChange={e => setSuggestion(e.target.value)}
                rows={6}
                placeholder="Write your suggestion here..."
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-white font-medium rounded-lg hover:bg-primary-hover transition-colors w-full justify-center"
            >
              <Send size={16} /> Submit Suggestion
>>>>>>> a3edbfb6126c6d05b9307d910b0cd39aa0b0f1f7
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
}
