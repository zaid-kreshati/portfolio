import React from "react";
import SectionTitle from "../ui/SectionTitle";

const Experience = ({ data }) => {
  return (
    <section className="py-4 sm:py-16 px-6 relative ">

      <img src={data.rightDots} className="absolute top-0 right-0 hidden sm:block"  />
      {/* Title */}
      <SectionTitle data={data.titleComponent} />

      <div className="max-w-5xl mx-auto relative">
        {/* Vertical Line - hidden on small screens */}
        <div className="absolute left-4 sm:left-1/2 top-0 transform sm:-translate-x-1/2 h-full border-l-2 border-dashed border-gray-300"></div>

        {/* Timeline Items */}
        <div className="space-y-12 pl-8 sm:pl-0">
          {data.experience.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={exp.id}
                className="relative flex items-start sm:items-center justify-start sm:justify-between"
              >
                {/* LEFT SIDE - full width on small screens */}
                <div
                  className={`w-full sm:w-1/2 ${
                    isLeft ? "sm:pr-8 sm:text-right" : "hidden sm:block sm:opacity-0"
                  }`}
                >
                  {isLeft && (
                    <div className="border border-gray-200 p-4 sm:p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                      <h3 className="text-lg sm:text-xl font-semibold ">
                        {exp.title}
                      </h3>
                      <span className="text-xs sm:text-sm text-sky-500 block mb-2">
                        {exp.date}
                      </span>
                      <p className=" font-medium mb-2">
                        {exp.company}
                      </p>
                      <p className=" text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  )}
                </div>

                {/* CENTER DOT */}
                <span className="-translate-x-6  flex size-4 absolute left-0 md:left-0 sm:relative sm:translate-x-0 ">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-90"></span>
                  <span className="relative inline-flex size-4 rounded-full bg-sky-500"></span>
                </span>

                {/* RIGHT SIDE - full width on small screens */}
                <div className={`w-full sm:w-1/2 ${!isLeft ? "sm:pl-8" : "hidden sm:block sm:opacity-0"}`}>
                  {!isLeft && (
                    <div className="border border-gray-200 p-4 sm:p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                      <h3 className="text-lg sm:text-xl font-semibold ">
                        {exp.title}
                      </h3>
                      <span className="text-xs sm:text-sm text-sky-500 block mb-2">
                        {exp.date}
                      </span>
                      <p className=" font-medium mb-2">
                        {exp.company}
                      </p>
                      <p className=" text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Left dots at bottom-left under last experience */}
      <img src={data.leftDots} className="absolute bottom-0 left-0 hidden sm:block" />
    </section>
  );
};

export default Experience;
