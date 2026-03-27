import React from "react";
import SectionTitle from "../ui/SectionTitle";

const EducationTraining = ({ data }) => {
  return (
    <section className="px-4  py-7.5 sm:px-6" id="education">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Title */}
        <SectionTitle data={data.titleComponent} />

        {/* Items */}
        <div className="space-y-6 sm:space-y-8">
          {data.items.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition"
              
            >
              
              {/* Type Badge */}
              <span className="inline-block mb-3 text-xs font-semibold text-violet-600 bg-violet-100/30 dark:bg-white backdrop-blur-sm px-3 py-1 rounded-full">
                {item.type}
              </span>

              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h3>

                {item.date && (
                  <span className="text-sm text-gray-500 dark:text-gray-400 mt-1 sm:mt-0 sm:ml-4">
                    {item.date}
                  </span>
                )}
              </div>

              {/* Organization */}
              <p className="text-gray-800 dark:text-gray-300 font-medium mb-3">
                {item.organization}
              </p>

              {/* Description */}
              {item.description && (
                <p className="text-gray-700 dark:text-gray-400 mb-4 leading-relaxed">
                  {item.description}
                </p>
              )}

              {/* Skills */}
              {item.skills && (
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-sm bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EducationTraining;