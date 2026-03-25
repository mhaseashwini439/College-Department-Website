import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Award, Briefcase, ChevronDown, BookOpen } from 'lucide-react';
import StaffImage from './StaffImage';

export default function FacultyCard({ faculty, isOpen, onToggle }) {
  return (
    <motion.div
      layout
      className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer"
      onClick={onToggle}
    >
      <div className="p-6 flex flex-col items-center text-center">
        {/* Photo */}
        <div className="mb-5">
          <StaffImage
            src={faculty.imageUrl}
            alt={faculty.name}
            size="md"
            objectPosition={faculty.imagePosition}
            zoom={faculty.zoom}
          />
        </div>

        {/* Name & Title */}
        <div className="space-y-1.5 w-full">
          <h3 className="font-bold text-navy text-lg leading-tight group-hover:text-primary transition-colors">
            {faculty.name}
          </h3>
          <p className="text-sm font-medium text-primary uppercase tracking-wide">
            {faculty.designation}
          </p>
          <div className="w-12 h-0.5 bg-gray-100 mx-auto my-2" />
          <p className="text-xs text-gray-500 leading-relaxed">
            {faculty.qualification}
          </p>
        </div>

        {/* Chevron indicator */}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="mt-4 text-gray-300"
        >
          <ChevronDown size={18} />
        </motion.div>

        {/* Expandable Details — accordion, only one open at a time */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="details"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="w-full overflow-hidden"
            >
              <div className="mt-4 pt-4 border-t border-gray-100 space-y-3 text-left">

                {/* Qualification */}
                <div className="flex items-start gap-2.5">
                  <BookOpen className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">Qualification</p>
                    <p className="text-sm text-gray-700 font-medium">{faculty.qualification}</p>
                  </div>
                </div>

                {/* Eligibility — only shown if present */}
                {faculty.eligibility && (
                  <div className="flex items-start gap-2.5">
                    <Award className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">Eligibility</p>
                      <p className="text-sm text-gray-700 font-medium">{faculty.eligibility}</p>
                    </div>
                  </div>
                )}

                {/* Experience */}
                {faculty.experience && (
                  <div className="flex items-start gap-2.5">
                    <Briefcase className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">Experience</p>
                      <p className="text-sm text-gray-700 font-medium">{faculty.experience}</p>
                    </div>
                  </div>
                )}

                {/* Contact */}
                {faculty.contact && (
                  <div className="flex items-start gap-2.5">
                    <Phone className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">Contact No.</p>
                      <p className="text-sm text-gray-700 font-medium">{faculty.contact}</p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
