import React from "react";

const ContactIcon = ({
  Icon, 
  color = "sky-500", // base color
  glow = "rgba(139, 92, 246, 0.6)", // glow color
}) => {
  return (
    <>
      {/* Icon */}
      <Icon
        className="h-7 w-7 relative z-10 "
        style={{
          filter:
            "drop-shadow(0 0 10px rgba(167,139,250,0.9)) brightness(1.7)",
          color: "white",
        }}
      />
    </>
  );
};

export default ContactIcon;




