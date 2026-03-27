import React from "react";

const Icon = ({
  Icon, 
  color = "sky-500", // base color
  glow = "rgba(139, 92, 246, 0.6)", // glow color
}) => {
  return (
    <Icon
      className="h-5 w-5 sm:h-6 sm:w-6 text-white transition-all duration-300"
    />
  );
};

export default Icon;




