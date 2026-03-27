import { useState, useEffect } from "react";
import MainButton from "../ui/MainButton";
import SectionTitle from "../ui/SectionTitle";
import { X } from "lucide-react";
import { LuCircleArrowOutUpRight } from "react-icons/lu";

const Projects = ({ data }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  return (
    <section className="px-4 py-3 sm:px-6 lg:px-8 center" id="projects">
      <div className="max-w-6xl mx-auto relative">
        
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <SectionTitle data={data.titleComponent} />

          {/* Button positioned below title on small screens, inline on large */}
          <div className="pb-4 lg:pb-0">
            <a href={data.button.url}>
              <MainButton variant="primary" size="md">
                {data.button.name}
                {data.button.icon}
              </MainButton>
            </a>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {data.projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer bg-white/30 dark:bg-gray-900/40 border border-white/30 dark:border-gray-700 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] overflow-hidden hover:shadow-md dark:hover:shadow-xl transition group"
            >
              {/* Image */}
              <div className="h-40 sm:h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-contain group-hover:scale-110 transition duration-300"
                />
              </div>

              {/* Title */}
              <div className="p-4">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-100">
                  {project.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <>
            {/* Backdrop with blur */}
            <div className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md opacity-100"></div>

            {/* Modal Wrapper */}
            <div
              className="fixed inset-0 z-50 flex top-20 items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              {/* Modal Container */}
              <div
                className="relative w-full max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl max-h-[80vh] overflow-y-auto rounded-3xl pointer-events-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Glass Layers */}
                <div className="relative rounded-3xl overflow-hidden">
                  {/* Base Glass */}
                  <div className="absolute inset-0 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-3xl"></div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent dark:from-gray-800/30 dark:via-gray-800/10 dark:to-transparent backdrop-blur-2xl rounded-3xl"></div>

                  {/* Border */}
                  <div className="absolute inset-0 border border-white/30 dark:border-gray-700 rounded-3xl"></div>

                  {/* Shadow */}
                  <div className="absolute inset-0 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.4)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)]"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Close Button */}
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 p-2 rounded-full bg-black/20 dark:bg-gray-400 backdrop-blur-md border border-white/30 dark:border-gray-600 text-white dark:text-gray-200 hover:bg-black/30 dark:hover:bg-gray-900 transition z-20 cursor-pointer"
                    >
                      <X size={18} className="sm:size-5 md:size-5" />
                    </button>

                    {/* Image Section */}
                    <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-80 overflow-hidden">
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.name}
                        className="w-full h-full object-cover"
                      />

                      {/* Image Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/20 to-blue-500/40 dark:via-blue-600/20 dark:to-blue-800/40"></div>

                      {/* Year Badge */}
                      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 md:top-6 md:left-6 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium bg-blue-700/40 dark:bg-blue-600/40 backdrop-blur-md border border-white/30 dark:border-gray-600 text-white shadow-lg">
                        {selectedProject.date || "2024"}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 sm:p-6 md:p-8 lg:p-12">
                      {/* Title */}
                      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-500 dark:text-blue-400 mb-3 sm:mb-4">
                        {selectedProject.name}
                      </h2>

                      {/* Description */}
                      <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 whitespace-pre-line">
                        {selectedProject.description}
                      </p>

                      {/* Technologies */}
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-800 dark:text-gray-200">
                          Technologies Used
                        </h3>

                        <div className="flex flex-wrap gap-2 sm:gap-3 mb-4">
                          {selectedProject.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium bg-blue-700/40 dark:bg-blue-600/30 text-white border border-blue-500/30 dark:border-blue-400/30 backdrop-blur-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Github url */}
                      <div className="text-base sm:text-lg">
                        <h3 className=" font-semibold mb-3 sm:mb-4 text-gray-800 dark:text-gray-200">
                          Github Repo
                        </h3>
                        <a href={selectedProject.github}>
                          <MainButton variant="primary" size="md">
                            {data.button.name}
                            <LuCircleArrowOutUpRight
                              size={16}
                              className="sm:size-5 md:size-5"
                            />
                          </MainButton>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;
