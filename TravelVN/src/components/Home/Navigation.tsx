import React from 'react';

interface NavigationProps {
  className?: string;
}

export const Navigation: React.FC<NavigationProps> = ({ className = "" }) => {
  return (
    <nav className={`absolute top-0 left-0 right-0 z-50 p-6 lg:p-8 ${className}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-2xl">
          Vietnam Tours
        </div>
        <div className="hidden md:flex space-x-8 text-white">
          <a href="#destinations" className="hover:text-[#D9EFF7] transition-colors duration-300">Destinations</a>
          <a href="#tours" className="hover:text-[#D9EFF7] transition-colors duration-300">Tours</a>
          <a href="#contact" className="hover:text-[#D9EFF7] transition-colors duration-300">Login</a>
        </div>
      </div>
    </nav>
  );
};

