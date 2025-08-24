import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const HeroSection: React.FC = () => {
  return (
    <div
      className="min-h-screen relative bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `linear-gradient(rgba(71, 65, 166, 0.3), rgba(155, 187, 252, 0.2)), url('https://images.pexels.com/photos/2187605/pexels-photo-2187605.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
      }}
    >
      {/* ❄️ Snow effect layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 40 }).map((_, i) => (
          <span
            key={i}
            className="absolute block w-3 h-3 bg-white rounded opacity-80 animate-snow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * -100}%`,
              animationDuration: `${1}s`,
              animationDelay: `${Math.random() * 10}s`,
              transform: `scale(${Math.random() * 1.2 + 0.5})`,
            }}
          />
        ))}
      </div>
      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="text-center text-white max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Discover the Beauty of
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#D9EFF7] to-[#9BBBFC]">
              Vietnam
            </span>
          </h1>

          <p className="text-xl lg:text-2xl mb-8 leading-relaxed opacity-90 max-w-3xl mx-auto">
            Embark on an unforgettable journey through Vietnam's most
            breathtaking destinations. From the mystical waters of Ha Long Bay
            to the ancient charm of Hoi An, experience the perfect blend of
            natural wonders and rich cultural heritage.
          </p>
          <Link to="/ListTour" className="inline-block">
            <button className="group bg-[#4741A6] hover:bg-[#D9EFF7] hover:text-[#4741A6] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl">
              Book Your Tour Now
              <ArrowRight
                className="inline ml-2 group-hover:translate-x-1 transition-transform duration-300"
                size={20}
              />
            </button>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};
