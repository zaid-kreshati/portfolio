import React from "react";
import SectionTitle from "../ui/SectionTitle";

const Skills = ({ data }) => {
  return (
    <section className="px-4 sm:px-8 md:px-12 lg:px-20 py-4 sm:py-24">
      <SectionTitle data={data.titleComponent} />

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        {data.skills?.map((item, index) => (
          <div
            key={item.name || index}
            className="p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition duration-300"
          >
            {/* Icon */}
            <div className="text-3xl sm:text-4xl text-sky-500 mb-3 sm:mb-4">
              {item.icon}
            </div>

            {/* Name */}
            <h3 className="text-base sm:text-lg font-semibold mb-1">
              {item.name}
            </h3>

            {/* Description */}
            <p className="text-sm">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
