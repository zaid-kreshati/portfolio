import Hero from "./components/Sections/Hero";
import Navbar from "./components/Navbar";
import Education from "./components/Sections/Education";
import About from "./components/Sections/About";
import Skills from "./components/Sections/Skills";
import Experience from "./components/Sections/Experience";
import ScrollToTop from "./components/ScrollToTop";
import ScrollDown from "./components/ScrollDown";
import Projects from "./components/Sections/Projects";
import Certifications from "./components/Sections/Certifications";
import Contact from "./components/Sections/Contact";
import Footer from "./components/Footer";
import Achievements from "./components/Sections/Achievements";
import Languages from "./components/Sections/Languages";
import { useState, useEffect } from "react";

import {
  navItems,
  HeroItem,
  AboutItem,
  SkillsItem,
  ExperienceItem,
  EducationTrainingData,
  AboutBoxItem,
  ProjectsData,
  CertificationsData,
  ContactData,
  FooterData,
  AchievementsItem,
  LanguagesItem,
} from "./data";

const getInitialTheme = () => {
  try {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
  } catch {
    /* ignore */
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

function App() {
  const [isOpen, setIsOpen] = useState(false);
  // Read the theme synchronously so the first render already matches the
  // class that the inline script in index.html put on <html> (no flash).
  const [darkMode, setDarkMode] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    try {
      localStorage.setItem("theme", darkMode ? "dark" : "light");
    } catch {
      /* storage unavailable (private mode) – theme just won't persist */
    }
  }, [darkMode]);

  // Close the mobile menu with Escape.
  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (e) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  return (
    <div className="text-slate-900 dark:text-white">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-sky-600 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      {isOpen && (
        <div
          aria-hidden="true"
          className="fixed inset-0 bg-white/70 dark:bg-black/50 backdrop-blur-md z-50 animate-fade-in"
          onClick={() => setIsOpen(false)}
        />
      )}
      <Navbar
        navItems={navItems}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <ScrollToTop />

      <main
        id="main"
        className="w-full overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100
             dark:from-slate-900 dark:to-slate-800 "
      >
        <Hero data={HeroItem} />
        <About data={AboutItem} />
        <Skills data={SkillsItem} />
        <Experience data={ExperienceItem} />
        <Education data={EducationTrainingData} />
        <Achievements data={AchievementsItem} />
        <ScrollDown data={AboutBoxItem} />
        <Projects data={ProjectsData} />
        <Certifications data={CertificationsData} />
        <Languages data={LanguagesItem} />
        <Contact data={ContactData} />
      </main>
      <Footer data={FooterData} />
    </div>
  );
}

export default App;
