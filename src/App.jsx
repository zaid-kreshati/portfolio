import Hero from "./components/Sections/Hero";
import Navbar from "./components/Navbar";
import Education from "./components/Sections/Education";
import About from "./components/Sections/About";
import Skills from "./components/Sections/Skills";
import Experience from "./components/Sections/Experience";
import ScrollToTop from "./components/ScrollToTop";
import ScrollDown from "./components/ScrollDown";
import Projects from "./components/Sections/Projects";
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
  ContactData,
  FooterData,
  AchievementsItem,
  LanguagesItem,
} from "./data";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      setDarkMode(saved === "dark");
    } else {
      setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className={"text-dark  dark:text-white"}>
      {isOpen && (
        <div
          className="fixed inset-0 bg-white/70 backdrop-blur-md bg-opacity-50 z-50"
          onClick={() => setIsOpen(false)}
        />

      //    <div className="absolute inset-0 z-0">
      //   <div className="absolute top-0 left-0 w-full h-full bg-white/30 dark:bg-black/30 backdrop-blur-xl" />
      // </div>
      )}
      <Navbar
        navItems={navItems}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <ScrollToTop />

      <main className=" w-screen overflow-hidden  bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 ">
        <Hero data={HeroItem} />
        <About data={AboutItem} />
        <Skills data={SkillsItem} />
        <Experience data={ExperienceItem} />
        <Education data={EducationTrainingData} />
        <Achievements data={AchievementsItem} />
        <ScrollDown data={AboutBoxItem} />
        <Projects data={ProjectsData} />
        <Languages data={LanguagesItem} />
        <Contact data={ContactData} />
        <Footer data={FooterData} />
      </main>
    </div>
  );
}

export default App;
