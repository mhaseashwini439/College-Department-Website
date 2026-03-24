import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm py-2">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-4">
        {/* Left side: College Logo */}
        <Link to="/" className="flex-shrink-0 transition-transform hover:scale-[1.01]">
          <img 
            src="/Information/Logo/College logo.png" 
            alt="College Logo" 
            className="w-16 h-16 md:w-24 md:h-24 object-contain" 
          />
        </Link>

        {/* Center: College and Department Names */}
        <div className="flex-1 flex flex-col items-center justify-center text-center hidden sm:flex">
          <p className="text-xs md:text-sm text-gray-600 font-bold tracking-wide uppercase">
            Ahmednagar Jilha Maratha Vidya Prasarak Samaj
          </p>
          <h2 className="text-sm md:text-xl font-bold text-navy mt-1">
            New Arts, Commerce and Science College Ahmednagar
          </h2>
          <h1 className="text-base md:text-3xl font-extrabold text-blue-800 mt-1 tracking-wide">
            Department of Computer Science
          </h1>
        </div>

        {/* Right side: Department Logo */}
        <div className="flex-shrink-0">
          <img 
            src="/Information/Logo/Department logo.png" 
            alt="Department Logo" 
            className="w-16 h-16 md:w-24 md:h-24 object-contain"
            onError={(e) => {
              // Fallback to college logo if department logo is not found
              e.target.src = "/Information/Logo/College logo.png";
            }}
          />
        </div>
      </div>
      
      {/* Mobile Text (Visible only on very small screens where middle text hides) */}
      <div className="sm:hidden px-4 pb-2 text-center">
        <p className="text-[10px] text-gray-600 font-semibold uppercase">Ahmednagar Jilha Maratha Vidya Prasarak Samaj</p>
        <h2 className="text-xs font-bold text-navy mt-1">New Arts, Commerce and Science College</h2>
        <h1 className="text-sm font-extrabold text-blue-800 mt-1">Department of Computer Science</h1>
      </div>
    </header>
  );
}
