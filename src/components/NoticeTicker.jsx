import { useData } from '../context/DataContext';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { Bell } from 'lucide-react';
=======
>>>>>>> a3edbfb6126c6d05b9307d910b0cd39aa0b0f1f7

export default function NoticeTicker() {
  const { data } = useData();

  if (!data?.notices || data.notices.length === 0) {
    return null;
  }

  return (
<<<<<<< HEAD
    <div className="bg-white/70 backdrop-blur-md border-b border-gray-200/50 sticky top-[129px] md:top-[161px] z-[45] font-outfit">
      <div className="max-w-7xl mx-auto px-4 py-1.5 flex items-center gap-4">
        <div className="shrink-0 flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-lg shadow-sm z-10 uppercase tracking-widest border border-primary/20">
          <Bell size={12} className="animate-bounce" />
          Notices
        </div>
        <div className="overflow-hidden whitespace-nowrap mask-edges relative flex-1">
          <div className="inline-block animate-marquee hover:[animation-play-state:paused] cursor-pointer py-1">
            {data.notices.map((n, i) => (
              <span key={n.id} className="text-[13px] text-navy mx-10 font-semibold group">
                <span className="text-primary mr-2 opacity-50">•</span> 
                {n.title} 
                <span className="mx-2 text-slate-300 font-normal">|</span>
                <span className="text-slate-500 font-medium">{n.date}</span>
=======
    <div className="bg-primary-light border-b border-blue-200 sticky top-[125px] z-30">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center gap-3">
        <span className="shrink-0 px-2 py-0.5 bg-primary text-white text-xs font-bold rounded shadow-sm z-10">
          NOTICES
        </span>
        <div className="overflow-hidden whitespace-nowrap mask-edges relative flex-1">
          <div className="inline-block animate-marquee hover:[animation-play-state:paused] cursor-pointer">
            {data.notices.map((n, i) => (
              <span key={n.id} className="text-sm text-navy mx-8 font-medium">
                <span className="text-primary mr-1">📌</span> 
                {n.title} <span className="text-gray-500 mx-1">—</span> {n.content}
                {i < data.notices.length - 1 && <span className="mx-6 text-gray-300">|</span>}
>>>>>>> a3edbfb6126c6d05b9307d910b0cd39aa0b0f1f7
              </span>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes marquee {
<<<<<<< HEAD
          0% { transform: translateX(50%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .mask-edges {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
=======
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .mask-edges {
          mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
>>>>>>> a3edbfb6126c6d05b9307d910b0cd39aa0b0f1f7
        }
      `}</style>
    </div>
  );
}
