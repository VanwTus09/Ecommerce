import React, { useRef, useState } from "react";
import { SignupForm } from "../modals/Signup";
import { Link } from "react-router-dom";

interface NavigationProps {
  className?: string;
}

export const Navigation: React.FC<NavigationProps> = ({ className = "" }) => {
  const LoginRef = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(true);
    return <SignupForm />;
  };
  return (
    <nav
      className={`absolute top-0 left-0 rounded-md 0 right-0 z-50 p-6 lg:p-8 ${className}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center rounded-md">
        <div className="text-white font-bold text-2xl">Vietnam Tours</div>
        <div className="hidden md:flex space-x-8 text-white">
          <a
            href="#destinations"
            className="hover:text-[#D9EFF7] transition-colors duration-300"
          >
            Destinations
          </a>
          <Link
            to="ListTour"
            className="hover:text-[#D9EFF7] transition-colors duration-300"
          >
            Tours
          </Link>
          {show && <SignupForm />}
          <div
            ref={LoginRef}
            onClick={() => handleClick}
            className="hover:text-[#D9EFF7] transition-colors duration-300"
          >
            Login
          </div>
        </div>
      </div>
    </nav>
  );
};
