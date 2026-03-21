import React, { useState } from "react";
import { Menu } from "lucide-react";
import MobileMenu from "./ui/MobileMenu";
import { Sun, Moon } from "lucide-react";

const Navbar = ({ navItems, isOpen, setIsOpen }) => {
  const [enabled, setEnabled] = useState(false);
  const [dark, setDark] = useState(false);

  return (
    <>
      <nav
        className="
        fixed top-5 left-1/2 -translate-x-1/2 w-full max-w-7xl
         px-6 py-4 flex items-center justify-between z-40 rounded-2xl
          bg-white/30 dark:bg-gray-900/30 backdrop-blur-md border
           border-white/30 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.1)] "
      >
        {/* Left */}
        <h1 className="text-xl font-bold">{navItems.name}</h1>
        {/* <button
          onClick={() => setEnabled(!enabled)}
          className={`w-14 h-8 flex items-center rounded-full p-1 transition-all duration-300 cursor-pointer
        ${
          enabled
            ? "bg-blue-500/80 backdrop-blur-md shadow-lg"
            : "bg-white/30 backdrop-blur-md border border-white/40"
        }`}
        >
          <div
            className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-all duration-300
          ${enabled ? "translate-x-6" : "translate-x-0"}
        `}
          />
        </button> */}
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          {navItems.sections.map((section) => (
            <a
              key={section}
              href={`#${section.toLowerCase()}`}
              className="cursor-pointer hover:text-blue-500 transition"
            >
              {section}
            </a>
          ))}
        </div>
        {/* Right */}
        <div className="flex items-center gap-4">
          {/* Desktop Icon */}
          {/* <div className="hidden md:block text-2xl cursor-pointer">
            <button onClick={() => (setEnabled(!enabled), setDark(!dark))}>
              {enabled ? <Sun /> : <Moon />}
            </button>
          </div> */}

          {/*new icon */}
          <div
            onClick={() => setDark(!dark)}
            className="relative w-24 h-8 rounded-full p-2 cursor-pointer 
      bg-linear-to-br from-gray-100 to-gray-300 
      dark:from-gray-700 dark:to-gray-800
      shadow-inner flex items-center transition-all duration-300"
          >
            {/* Sliding Circle */}
            <div
              className={`absolute  left-1 w-12 h-6 rounded-full 
        bg-white shadow-md flex items-center justify-center
        transition-all duration-300 text-neutral-400
        ${dark ? "translate-x-[40.7px]" : "translate-x-0"}`}
            >
              {dark ? <Moon size={20} /> : <Sun size={20} />}
            </div>

            {/* Text */}
            <div
              className={`w-full  font-light text-sm text-neutral-400 dark:text-gray-200 transition
            ${dark ? "text-left" : "text-right"}`}
            >
              {dark ? "Dark  " : "Light  "}
            </div>
          </div>

          {/* Hamburger */}
          <div
            className="md:hidden cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={28} />
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} navItems={navItems} />
    </>
  );
};

export default Navbar;
