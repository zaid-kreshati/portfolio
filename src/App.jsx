import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Education from "./components/Education";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import ScrollToTop from "./components/Scroll";
import ScrollDown from "./components/ScrollDown";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { createContext, useState } from "react";

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
  ContactFormData,
  FooterData,
} from "./data";
const ContactFormContext = createContext(ContactFormData);
export { ContactFormContext };
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
        <ScrollDown data={AboutBoxItem} />
        <Projects data={ProjectsData} />
        <ContactFormContext.Provider value={ContactFormData}>
          <Contact data={ContactData} />
        </ContactFormContext.Provider>
      </main>
      <Footer data={FooterData}/>
    </>
  );
}

export default App;
