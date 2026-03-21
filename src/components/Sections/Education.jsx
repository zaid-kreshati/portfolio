import React from "react";

const EducationTraining = ({ data }) => {
  return (
    <section className="py-12 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-gray-800 mb-10  pb-2">
          {data.title}
        </h2>

        {/* Items */}
        <div className="space-y-8">
          {data.items.map((item, index) => (
            <div
              key={index}
              className=" rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              
              {/* Type Badge */}
              <span className="inline-block mb-3 text-xs font-semibold text-violet-600 bg-violet-100/30 backdrop-blur-sm px-3 py-1 rounded-full">
                {item.type}
              </span>

              {/* Header */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>

                {item.date && (
                  <span className="text-sm text-sky-500">
                    {item.date}
                  </span>
                )}
              </div>

              {/* Organization */}
              <p className="text-gray-600 font-medium mb-3">
                {item.organization}
              </p>

              {/* Description */}
              {item.description && (
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {item.description}
                </p>
              )}

              {/* Skills */}
              {item.skills && (
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-sm bg-gray-200 text-gray-700 px-3 py-1 rounded-full"
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