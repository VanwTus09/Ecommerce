import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-4">Vietnam Tours</h3>
        <p className="text-gray-400 mb-6">Creating unforgettable experiences in the heart of Southeast Asia</p>
        <div className="flex justify-center space-x-8 text-sm text-gray-400">
          <a href="#" className="hover:text-[#D9EFF7] transition-colors duration-300">About Us</a>
          <a href="#" className="hover:text-[#D9EFF7] transition-colors duration-300">Contact</a>
          <a href="#" className="hover:text-[#D9EFF7] transition-colors duration-300">Terms</a>
          <a href="#" className="hover:text-[#D9EFF7] transition-colors duration-300">Privacy</a>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-gray-500">
          <p>&copy; 2025 Vietnam Tours. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

