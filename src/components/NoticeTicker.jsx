import { useData } from '../context/DataContext';
import { motion } from 'framer-motion';
import { Bell } from 'lucide-react';

export default function NoticeTicker() {
  const { data } = useData();

  if (!data?.notices || data.notices.length === 0) {
    return null;
  }

  return (
    <div className="bg-white/70 backdrop-blur-md border-b border-gray-200/50 sticky top-[129px] md:top-[161px] z-[45] font-outfit">
      <div className="max-w-7xl mx-auto px-4 py-1.5 flex items-center gap-4">
        <div className="shrink-0 flex items-center gap-2 px-3 py-1 bg-red-600/10 text-red-600 text-[10px] font-bold rounded-lg shadow-sm z-10 uppercase tracking-widest border border-red-600/20">
          <Bell size={12} className="animate-bounce" />
          Notices
        </div>
        <div className="overflow-hidden whitespace-nowrap mask-edges relative flex-1">
          <div className="inline-block animate-marquee hover:[animation-play-state:paused] cursor-pointer py-1">
            {data.notices.map((n, i) => (
              <span key={n.id} className="text-[13px] text-navy mx-10 font-semibold group">
                <span className="text-red-500 mr-2 opacity-50">•</span> 
                {n.title} 
                <span className="mx-2 text-slate-300 font-normal">|</span>
                <span className="text-slate-500 font-medium">{n.date}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(50%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .mask-edges {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </div>
  );
}
