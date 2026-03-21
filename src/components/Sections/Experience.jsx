import React from "react";

const Experience = ({ data }) => {
  return (
    <section className="py-16 px-6 relative ">

      <img src={data.rightDots} className="absolute top-0 right-0"  />
      {/* Title */}
      <h2 className="text-3xl font-bold text-center mb-12">{data.title}</h2>
      

      <div className="max-w-5xl mx-auto relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 h-full border-l-2 border-dashed border-gray-300"></div>

        {/* Timeline Items */}
        <div className="space-y-12 ">
          {data.experience.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={exp.id}
                className="relative flex items-center justify-between"
              >
                {/* LEFT SIDE */}
                <div
                  className={`w-1/2 ${
                    isLeft ? "pr-8 text-right" : "opacity-0"
                  }`}
                >
                  {isLeft && (
                    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {exp.title}
                      </h3>
                      <span className="text-sm text-sky-500 block mb-2">
                        {exp.date}
                      </span>
                      <p className="text-gray-600 font-medium mb-2">
                        {exp.company}
                      </p>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  )}
                </div>

                {/* CENTER DOT */}
                

                <span className="relative flex size-4">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-90"></span>
                  <span className="relative inline-flex size-4 rounded-full bg-sky-500"></span>
                </span>

                {/* RIGHT SIDE */}
                <div className={`w-1/2 ${!isLeft ? "pl-8" : "opacity-0"}`}>
                  {!isLeft && (
                    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {exp.title}
                      </h3>
                      <span className="text-sm text-sky-500 block mb-2">
                        {exp.date}
                      </span>
                      <p className="text-gray-600 font-medium mb-2">
                        {exp.company}
                      </p>
                      <p className="text-gray-700 text-sm leading-relaxed">
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
      <img src={data.leftDots} className="absolute bottom-0 left-0" />
    </section>
  );
};

export default Experience;
