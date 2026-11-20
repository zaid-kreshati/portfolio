import { useEffect, useState } from "react";
import MainButton from "./ui/MainButton";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    toggleVisibility();
    window.addEventListener("scroll", toggleVisibility, { passive: true });

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    visible && (
      <MainButton
        size="arrow"
        className="fixed bottom-6 right-4 sm:right-6 z-40 backdrop-blur-xs animate-fade-up"
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <span aria-hidden="true">↑</span>
      </MainButton>
    )
  );
};

export default ScrollToTop;
