import React from "react";

const Navbar = ({ navItems }) => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-screen max-w-6xl px-6 py-4 flex items-center justify-between z-100 bg-white rounded-md">
      
      {/* Left */}
      <h1 className="text-xl font-bold">
        {navItems.name}
      </h1>

      {/* Center */}
      <div className="flex gap-6">
        {navItems.sections.map((section) => (
          <h2 key={section} className="cursor-pointer hover:text-blue-500">
            {section}
          </h2>
        ))}
      </div>

      {/* Right */}
      <div className="text-2xl cursor-pointer">
        {navItems.icon}
      </div>

    </nav>
  );
};

export default Navbar;