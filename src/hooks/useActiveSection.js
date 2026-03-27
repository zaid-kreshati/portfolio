import { useEffect, useState } from "react";
const useActiveSection = (navItems) => {
  const [active, setActive] = useState(navItems.sections[0].id);

  useEffect(() => {
    const observers = [];

    navItems.sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(section.id);
          }
        },
        {
          threshold: 0.6,
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [navItems]);

  return active;
};

export default useActiveSection;