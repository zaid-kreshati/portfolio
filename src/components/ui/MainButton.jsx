// components/ui/Button.jsx
import React from "react";
import clsx from "clsx";

const baseStyles =
  "shadow-lg hover:brightness-120 bg-sky-600 flex gap-2 items-center justify-center text-white rounded-2xl font-semibold transition duration-300  cursor-pointer hover:scale-110";

const variants = {
  primary: "   backdrop-blur-xs",

  contact: " border-2 border-sky-300 overflow-hidden  backdrop-blur-md",

  opacity: "opacity-100  ",

  icon: " m-2   rounded-full bg-sky-600   border-2 border-sky-300 overflow-hidden  cursor-pointer transition-transform duration-300 hover:scale-125",
};

const sizes = {
  sm: "px-2.5 py-2.5 ",
  md: "px-6 py-2",
  lg: "px-8 py-3 text-lg",
  sq: "px-5 py-5",
  arrow: "px-4 py-3.5"
};

const MainButton = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  return (
    <button
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default MainButton;
