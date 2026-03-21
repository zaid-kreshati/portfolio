import React, { useState } from "react";
import MainButton from "../ui/MainButton";

const Projects = ({ data }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="py-16 px-6 center">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-left">
            <h2 className="text-xl text-sky-500 font-bold  ">{data.title}</h2>

            <p className="text-center text-2xl text-gray-600 mb-12">
              {data.description}
            </p>
          </div>

           <MainButton
            variant="primary"
            size="md"
          >
            {data.button.name}
            {data.button.icon}
          </MainButton>


        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition group"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-contain group-hover:scale-110 transition duration-300"
                />
              </div>

              {/* Title */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {project.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl max-w-2xl w-full p-6 relative">
              {/* Close */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-black"
              >
                ✕
              </button>

              <h3 className="text-2xl font-bold mb-4">
                {selectedProject.name}
              </h3>

              {/* Tech */}
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Description */}
              <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
                {selectedProject.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              {/* GitHub */}
              <a
                href={selectedProject.github}
                target="_blank"
                className="inline-block bg-black text-white px-5 py-2 rounded-full"
              >
                View on GitHub
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
