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

    window.addEventListener("scroll", toggleVisibility);

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
          className="fixed bottom-25 right-6 z-50"
          children={<div onClick={scrollToTop}>↑</div>}
        />
    )
  );
};

export default ScrollToTop;
