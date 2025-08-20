import React, { useRef, useState, useEffect } from "react";
import { SigninForm } from "../modals/Signin";
import { Link } from "react-router-dom";
import { useModal } from "../hooks";
import { SignupForm } from "../modals";
import { useAuthStore } from "../hooks/use-auth";
import Avatar from "../ui/avatar";

interface NavigationProps {
  className?: string;
}

export const Navigation: React.FC<NavigationProps> = ({ className = "" }) => {
  const LoginRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null); // ref cho dropdown
  const { onOpen, onClose } = useModal();
  const [openMenu, setOpenMenu] = useState(false);
  const { user, logout } = useAuthStore();

  const handleClickLogin = () => onOpen("signinform");

  // Click outside để đóng menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        openMenu &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setOpenMenu(false);
        onClose(); // dùng onClose của zustand/modal
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openMenu, onClose]);

  return (
    <nav
      className={`bg-gradient-to-r from-blue-400 to-blue-500 shadow-md fixed w-full top-0 left-0 z-50 ${className}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 lg:px-10 py-4">
        {/* Logo */}
        <Link
          to={"/"}
          className="text-white font-bold text-2xl tracking-wide cursor-pointer"
        >
          Vietnam<span className="text-yellow-300">Tours</span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center space-x-8 text-white font-medium">
          <Link
            to="/ListTour"
            className="hover:text-yellow-200 transition-colors duration-300"
          >
            Tours
          </Link>

          {user ? (
            <div ref={menuRef} className="relative flex items-center space-x-2">
              {/* Username */}
              <span className="font-semibold">{user.email}</span>

              {/* Avatar */}
              <div
                onClick={() => setOpenMenu(!openMenu)}
                className="cursor-pointer select-none"
              >
                <Avatar
                  email={user.email}
                  size={40}
                  className="rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
                />
              </div>

              {/* Dropdown menu */}
              {openMenu && (
                <div className="absolute top-0 mt-12 w-36 bg-gray-300 shadow-lg rounded-md py-2 z-50 text-black">
                  <button
                    onClick={() => {
                      logout();
                      setOpenMenu(false);
                      onClose();
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-600"
                  >
                    Logout
                  </button>
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-600">
                    Profile
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              ref={LoginRef}
              onClick={handleClickLogin}
              className="bg-white text-blue-600 px-4 py-2 rounded-full shadow hover:bg-yellow-300 hover:text-blue-800 transition duration-300"
            >
              Login
            </button>
          )}
        </div>
      </div>

      {/* Modal render chung */}
      <SigninForm />
      <SignupForm />
    </nav>
  );
};
