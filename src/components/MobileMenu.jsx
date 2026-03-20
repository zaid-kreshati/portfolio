import React from "react";
import { X } from "lucide-react";

const MobileMenu = ({ isOpen, setIsOpen, navItems }) => {
  return (
    <div
      className={`fixed inset-y-0 right-0 z-50 bg-white transition-transform duration-400 w-2/3 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="relative z-10 h-full flex flex-col p-6">
        {/* Close Button */}
        <div className="flex justify-end mb-8">
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-black p-2"
          >
            <X size={24} />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col gap-4 flex-1">
          {navItems.sections.map((section) => (
            <a
              key={section}
              href={`#${section.toLowerCase()}`}
              className="block px-4 py-3 rounded-xl text-base font-medium transition-all text-gray-500 hover:text-black hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              {section}
            </a>
          ))}
        </nav>

        {/* Bottom Button */}
        <div className="mt-auto pt-6">
          <button className="w-full rounded-full bg-blue-600 text-white px-6 py-3 font-medium shadow-lg hover:bg-blue-700 transition">
            Let's Talk
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
