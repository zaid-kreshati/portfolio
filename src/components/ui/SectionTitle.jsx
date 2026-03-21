import React from "react";

const SectionTitle = ({ data }) => {
  return (
    <div className="mb-12 md:mb-16 text-center overflow-visible">
      
      {/* Top Label */}
      <div className="flex items-center justify-center gap-3 mb-3">
        <span className="text-primary font-semibold text-xs uppercase tracking-wider">
          {data.title}
        </span>
      </div>

      {/* Main Title */}
      <h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400 leading-normal pb-1"
        style={{ lineHeight: "1.3", paddingBottom: "0.25rem" }}
      >
        {data.subtitle}
      </h2>

      {/* Divider */}
      <div
        className="h-0.5 bg-gradient-to-r from-violet-500 via-primary to-transparent text-primary rounded-full mx-auto mb-4 max-w-24"
      />


      {/* Description */}
      <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
        {data.description}
      </p>

    </div>
  );
};

export default SectionTitle;