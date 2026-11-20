import { useEffect, useState } from "react";

/**
 * Returns the id of the nav section currently under the navbar.
 * Uses a thin detection band near the top of the viewport instead of a
 * visibility threshold, so sections taller than the screen are still detected.
 */
const useActiveSection = (navItems) => {
  const [active, setActive] = useState(navItems.sections[0].id);

  useEffect(() => {
    const elements = navItems.sections
      .map((section) => document.getElementById(section.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -65% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [navItems]);

  return active;
};

export default useActiveSection;
