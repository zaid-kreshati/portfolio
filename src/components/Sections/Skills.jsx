import React from "react";

const Skills = ({ data }) => {
  return (
    <section className="px-20 py-24">

      {/* Title */}
      <div className="max-w-3xl mb-12 text-center">
        <h2 className="text-xl text-sky-500 font-bold mb-4">{data.title}</h2>
        <p className="text-3xl font-bold mb-4">{data.description}</p>
        {/* <p className="text-lg font-bold mb-4">{data.description2}</p> */}
       
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {data.skills?.map((item, index) => (
          <div
            key={item.name || index}
            className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition duration-300"
          >
            {/* Icon */}
            <div className="text-4xl text-sky-500 mb-4">
              {item.icon}
            </div>

            {/* Name */}
            <h3 className="text-lg font-semibold mb-1">
              {item.name}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
