import React, { useRef } from "react";
import { SigninForm } from "../modals/Signin";
import { Link } from "react-router-dom";
import { useModal } from "../hooks";

interface NavigationProps {
  className?: string;
}

export const Navigation: React.FC<NavigationProps> = ({ className = "" }) => {
  const LoginRef = useRef<HTMLButtonElement | null>(null);
  const {onOpen} = useModal();
  const handleClick = () => {
    onOpen("signinform");
  };

  return (
    <nav
      className={`bg-gradient-to-r from-blue-400 to-blue-500 shadow-md fixed w-full top-0 left-0 z-50 ${className}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 lg:px-10 py-4">
        {/* Logo */}
        <Link to={'/'} className="text-white font-bold text-2xl tracking-wide cursor-pointer">
          Vietnam<span className="text-yellow-300">Tours</span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center space-x-8 text-white font-medium">
          <Link
            to="#destinations"
            className="hover:text-yellow-200 transition-colors duration-300"
          >
            Destinations
          </Link>
          <Link
            to="/ListTour"
            className="hover:text-yellow-200 transition-colors duration-300"
          >
            Tours
          </Link>

          {/* Login button */}
          <button
            ref={LoginRef}
            onClick={handleClick}
            className="bg-white text-blue-600 px-4 py-2 rounded-full shadow hover:bg-yellow-300 hover:text-blue-800 transition duration-300"
          >
            Login
          </button>
        </div>
      </div>

      {/* Modal render chung */}
      <SigninForm />
    </nav>
  );
};
