import React from "react";
import { Globe } from "lucide-react";

const Languages = ({ data }) => {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 ">
      {/* Section title */}
      <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-200 dark:to-gray-400 bg-clip-text text-transparent">
        Languages
      </h2>

      {/* Cards container */}
      <div className="flex flex-wrap justify-center gap-6">
        {data.map((lang, index) => (
          <div
            key={index}
            className="
              relative px-6 py-4 rounded-2xl min-w-[220px]
              bg-white/30 dark:bg-white/10
              backdrop-blur-xl
              border border-white/30
              shadow-[0_8px_32px_rgba(0,0,0,0.1)]
              flex items-center gap-4
              hover:scale-105 hover:shadow-xl
              transition-all duration-300
              cursor-default
            "
          >
            {/* Inner glow */}
            <div className="absolute inset-0 rounded-2xl pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/40 to-transparent rounded-t-2xl" />
            </div>

            {/* Icon */}
            <div className="relative z-10">
              <Globe className="text-blue-500" size={28} />
            </div>

            {/* Text */}
            <div className="relative z-10">
              <p className="font-semibold text-lg">{lang.name}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {lang.level}
              </p>
              {lang.flag && (
                <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 block">
                  {lang.flag}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Languages;