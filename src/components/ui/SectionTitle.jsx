import React from "react";

const SectionTitle = ({ data }) => {
  return (
    <div className="mb-10 pt-12 sm:mb-12 sm:pt-14 md:mb-16 md:pt-15 text-center overflow-visible">
      {/* Top Label */}
      {data.title && (
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2 sm:mb-3">
          <span className="text-primary text-purple-500 font-semibold text-[10px] xs:text-xs uppercase tracking-wider">
            {data.title}
          </span>
        </div>
      )}

      {/* Main Title */}
      {data.subtitle && (
        <h2
          className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-300 leading-normal pb-1"
          style={{ lineHeight: "1.3", paddingBottom: "0.25rem" }}
        >
          {data.subtitle}
        </h2>
      )}

      {/* Divider */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent text-purple-500 rounded-full mx-auto mb-3 sm:mb-4 max-w-16 xs:max-w-20 sm:max-w-24" />

      {/* Description */}
      {data.description && (
        <p className="text-muted-foreground text-xs xs:text-sm sm:text-base max-w-xs xs:max-w-sm sm:max-w-xl md:max-w-2xl mx-auto px-2 xs:px-0">
          {data.description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
