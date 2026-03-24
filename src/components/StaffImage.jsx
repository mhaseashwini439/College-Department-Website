import { useState } from 'react';
import { User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function StaffImage({ src, alt, className = "", size = "md", objectPosition = "center", zoom = 1 }) {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const sizeClasses = {
    sm: "w-24 h-24",
    md: "w-[140px] h-[140px]",
    lg: "w-[140px] h-[140px]",
    xl: "w-40 h-40"
  };

  const containerClass = `relative flex-shrink-0 overflow-hidden bg-gray-50 ring-4 ring-white shadow-md aspect-square ${sizeClasses[size] || size} ${className}`;
  const circularStyle = { borderRadius: '50%', clipPath: 'circle(50%)' };

  return (
    <div className={containerClass} style={circularStyle}>
      <AnimatePresence mode="wait">
        {!loaded && !error && (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center bg-gray-50"
          >
            <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          </motion.div>
        )}

        {error || !src ? (
          <motion.div
            key="fallback"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400"
          >
            <User size={size === 'sm' ? 24 : 32} strokeWidth={1.5} />
          </motion.div>
        ) : (
          <motion.div
            key="image"
            initial={{ opacity: 0 }}
            animate={{ opacity: loaded ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 w-full h-full"
            style={{ 
              backgroundImage: `url("${src}")`,
              backgroundSize: zoom > 1 ? `${zoom * 100}%` : 'cover',
              backgroundPosition: objectPosition || 'center',
              backgroundRepeat: 'no-repeat',
              borderRadius: '50%',
              imageRendering: '-webkit-optimize-contrast',
              display: loaded ? 'block' : 'none',
              transition: 'all 0.3s ease-out'
            }}
          >
            {/* Hidden image to trigger onLoad and onError */}
            <img 
              src={src} 
              alt={alt} 
              onLoad={() => setLoaded(true)} 
              onError={() => setError(true)}
              style={{ display: 'none' }} 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
