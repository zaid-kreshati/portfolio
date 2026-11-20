import { useEffect, useRef, useState } from "react";

/**
 * Fades/slides its children in the first time they scroll into view.
 * Pure CSS transitions + IntersectionObserver; disabled for reduced-motion users
 * via the `.reveal` rules in index.css.
 */
const Reveal = ({
  children,
  as: Tag = "div",
  delay = 0,
  direction = "up",
  className = "",
  ...props
}) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-direction={direction}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
