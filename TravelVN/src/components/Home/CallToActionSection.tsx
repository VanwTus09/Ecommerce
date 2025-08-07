import React from 'react';
import { ArrowRight } from 'lucide-react';

export const CallToActionSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-[#4741A6]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready for Your Vietnamese Adventure?
        </h2>
        <p className="text-xl text-[#D9EFF7] mb-8 leading-relaxed">
          Join thousands of travelers who have discovered the magic of Vietnam. 
          Book your personalized tour today and create memories that will last a lifetime.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="group bg-[#D9EFF7] hover:bg-white text-[#4741A6] px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl">
            Book Your Tour Now
            <ArrowRight className="inline ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
          </button>
          <button className="border-2 border-[#D9EFF7] hover:bg-[#D9EFF7] hover:text-[#4741A6] text-[#D9EFF7] px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
            View Sample Itineraries
          </button>
        </div>
      </div>
    </section>
  );
};

