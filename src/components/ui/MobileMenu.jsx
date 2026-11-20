import { X } from "lucide-react";
import MainButton from "./MainButton";

const MobileMenu = ({ isOpen, setIsOpen, navItems }) => {
  const close = () => setIsOpen(false);

  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
      inert={!isOpen}
      className={`fixed inset-y-0 right-0 z-70 bg-white/70 dark:bg-slate-950/80 backdrop-blur-xl transition-[transform,visibility] duration-300 ease-out w-full max-w-sm sm:max-w-md border-l border-white/20 dark:border-white/10 ${
        isOpen ? "translate-x-0 shadow-2xl" : "translate-x-full invisible"
      }`}
    >
      <div className="relative h-full flex flex-col p-6 overflow-y-auto">
        <div className="flex justify-end mb-8">
          <button
            type="button"
            onClick={close}
            className="p-2 rounded-full text-gray-800 dark:text-gray-200 bg-white/40 dark:bg-white/10 hover:bg-white/60 dark:hover:bg-white/20 transition-all duration-200"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col gap-3 flex-1" aria-label="Mobile">
          {navItems.sections.map((section, i) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={close}
              style={{ transitionDelay: isOpen ? `${80 + i * 40}ms` : "0ms" }}
              className={`block px-4 py-3 rounded-xl text-base font-medium text-gray-800 dark:text-gray-200 bg-white/30 dark:bg-white/5 hover:bg-white/60 dark:hover:bg-white/10 transition-all duration-300
                ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}`}
            >
              {section.label}
            </a>
          ))}
        </nav>

        <div className="mt-auto pt-6">
          <MainButton href="#contact" onClick={close} fullWidth variant="blur">
            Let's Talk
          </MainButton>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
