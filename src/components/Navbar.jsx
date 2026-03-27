import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import MobileMenu from "./ui/MobileMenu";
import { Sun, Moon } from "lucide-react";
import useActiveSection from "../hooks/useActiveSection";

const Navbar = ({ navItems, isOpen, setIsOpen, darkMode, setDarkMode }) => {
  const active = useActiveSection(navItems);

  useEffect(() => {
    scrollToSection(active);
  }, [navItems]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      const offset = 40; // offset in pixels to scroll higher
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className="
        fixed top-5 left-1/2 -translate-x-1/2 w-full max-w-7xl
        px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between z-60 rounded-2xl
        bg-white/30 dark:bg-gray-900/30 backdrop-blur-md border font-bold
        border-white/30 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.1)]"
      >
        {/* Left */}
        <h1 className="text-sm sm:text-base md:text-lg lg:text-xl">{navItems.name}</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-4 lg:gap-6">
          {navItems.sections.map((section) => {
            const isActive = section.id.toLowerCase() === active;
            return (
              <a
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`
                  relative cursor-pointer transition-all duration-300 text-sm lg:text-base
                  ${isActive ? "text-blue-500 " : "text-inherit hover:text-blue-500"}
                `}
              >
                {section.label}
                <span
                  className={`
                    absolute left-0 bottom-[-4px] h-[2px] w-full
                    bg-blue-500 transition-all duration-300 scale-x-0 origin-center
                    ${isActive ? "scale-x-100" : ""}
                  `}
                />
              </a>
            );
          })}
        </div>

        {/* Right */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/*new icon */}
          <div
            onClick={() => setDarkMode(!darkMode)}
            className="relative w-20 sm:w-24 h-6 sm:h-8 rounded-full p-1 sm:p-2 cursor-pointer 
              bg-linear-to-br from-gray-100 to-gray-300 
              dark:from-gray-700 dark:to-gray-800
              shadow-inner flex items-center transition-all duration-300"
          >
            {/* Sliding Circle */}
            <div
              className={`absolute left-1 w-10 sm:w-12 h-5 sm:h-6 rounded-full 
                bg-white shadow-md flex items-center justify-center
                transition-all duration-300 text-neutral-400
                ${darkMode ? "translate-x-[34px] sm:translate-x-[40.7px]" : "translate-x-0"}`}
            >
              {darkMode ? <Moon size={16} sm:size={20} /> : <Sun size={16} sm:size={20} />}
            </div>

            {/* Text */}
            <div
              className={`w-full font-light text-xs sm:text-sm text-neutral-400 dark:text-gray-200 transition
                ${darkMode ? "text-left" : "text-right"}`}
            >
              {darkMode ? "Dark  " : "Light  "}
            </div>
          </div>

          {/* Hamburger */}
          <div
            className="md:hidden cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={24} sm:size={28} />
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} navItems={navItems} />
    </>
  );
};

export default Navbar;
