import { Menu, Sun, Moon } from "lucide-react";
import MobileMenu from "./ui/MobileMenu";
import useActiveSection from "../hooks/useActiveSection";

const Navbar = ({ navItems, isOpen, setIsOpen, darkMode, setDarkMode }) => {
  const active = useActiveSection(navItems);

  return (
    <>
      <nav
        aria-label="Primary"
        className="
        fixed top-3 sm:top-5 left-1/2 -translate-x-1/2 w-[calc(100%-1.5rem)] sm:w-[calc(100%-2.5rem)] max-w-7xl
        px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between z-60 rounded-2xl
        bg-white/50 dark:bg-gray-900/50 backdrop-blur-md border font-bold
        border-white/40 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.1)]
        animate-fade-in"
      >
        <a
          href="#home"
          aria-label="Zaid Kreshati – back to top"
          className="bg-gradient-to-l from-sky-500 via-sky-600 to-sky-800 bg-clip-text text-transparent text-2xl animate-gradient"
        >
          ZK
        </a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-5 xl:gap-6">
          {navItems.sections.map((section) => {
            const isActive = section.id === active;
            return (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`group relative transition-colors duration-300 text-sm xl:text-base
                    ${isActive ? "text-sky-500" : "text-inherit hover:text-sky-500"}`}
                >
                  {section.label}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] w-full bg-sky-500 transition-transform duration-300 origin-center
                      ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button
            type="button"
            role="switch"
            aria-checked={darkMode}
            aria-label="Dark mode"
            onClick={() => setDarkMode(!darkMode)}
            className="relative w-20 sm:w-24 h-7 sm:h-8 rounded-full p-1 sm:p-2 cursor-pointer
              bg-linear-to-br from-gray-100 to-gray-300
              dark:from-gray-700 dark:to-gray-800
              shadow-inner flex items-center transition-all duration-300
              focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
          >
            <span
              className={`absolute left-1 w-10 sm:w-12 h-5 sm:h-6 rounded-full
                bg-white shadow-md flex items-center justify-center
                transition-transform duration-300 text-neutral-500
                ${darkMode ? "translate-x-[34px] sm:translate-x-[40px]" : "translate-x-0"}`}
            >
              {darkMode ? <Moon size={16} /> : <Sun size={16} />}
            </span>
            <span
              className={`w-full font-light text-xs sm:text-sm text-neutral-500 dark:text-gray-200
                ${darkMode ? "text-left" : "text-right"}`}
            >
              {darkMode ? "Dark" : "Light"}
            </span>
          </button>

          <button
            type="button"
            className="lg:hidden cursor-pointer p-1 rounded-lg focus-visible:outline-2 focus-visible:outline-sky-500"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <Menu size={26} />
          </button>
        </div>
      </nav>

      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} navItems={navItems} />
    </>
  );
};

export default Navbar;
