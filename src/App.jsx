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
import { useState } from "react";

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

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-white/70 backdrop-blur-md bg-opacity-50 z-50"
          onClick={() => setIsOpen(false)}
        />
      )}
      <Navbar navItems={navItems} isOpen={isOpen} setIsOpen={setIsOpen} />
      <ScrollToTop />

      <main className="max-w-7xl pt-24">
        <Hero data={HeroItem} />
        <About data={AboutItem} />
        <Skills data={SkillsItem} />
        <Experience data={ExperienceItem} />
        <Education data={EducationTrainingData} />
        <Achievements data={AchievementsItem} />
        <ScrollDown data={AboutBoxItem} />
        <Projects data={ProjectsData} />
        <Languages data={LanguagesItem}  />
        <Contact data={ContactData} />
      </main>
      <Footer data={FooterData} />
    </>
  );
}

export default App;
