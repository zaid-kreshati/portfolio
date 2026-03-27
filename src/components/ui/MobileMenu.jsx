import React from "react";
import { X } from "lucide-react";
import MainButton from "./MainButton";

const MobileMenu = ({ isOpen, setIsOpen, navItems }) => {
  return (
    <div
      className={`fixed inset-y-0 right-0 z-70 bg-white/30 dark:bg-black/50 backdrop-blur-xl transition-transform duration-300 ease-in-out w-full max-w-sm sm:max-w-md border-l border-white/20 dark:border-white/10 shadow-2xl ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="relative h-full flex flex-col p-6">
        {/* Close Button */}
        <div className="flex justify-end mb-8">
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-full text-gray-800 dark:text-gray-200 bg-white/40 dark:bg-white/10 hover:bg-white/60 dark:hover:bg-white/20 transition-all duration-200"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col gap-3 flex-1">
          {navItems.sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id.toLowerCase()}`}
              className="block px-4 py-3 rounded-xl text-base font-medium text-gray-800 dark:text-gray-200 bg-white/20 dark:bg-white/5 hover:bg-white/40 dark:hover:bg-white/10 transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              {section.label}
            </a>
          ))}
        </nav>

        {/* Bottom Button */}
        <div className="mt-auto pt-6">
          {/* <button className="w-full rounded-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
            Let's Talk
          </button> */}

          <MainButton fullWidth variant="blur">Let's Talk</MainButton>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
