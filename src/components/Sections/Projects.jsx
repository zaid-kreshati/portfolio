import { useState, useEffect, useRef, useCallback } from "react";
import MainButton from "../ui/MainButton";
import SectionTitle from "../ui/SectionTitle";
import Reveal from "../ui/Reveal";
import { X, Globe, Lock } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const LiveBadge = ({ className = "" }) => (
  <span
    className={`inline-flex items-center gap-1.5 rounded-full bg-emerald-500/90 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white shadow-md backdrop-blur-sm ${className}`}
  >
    <span className="relative flex size-1.5">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
      <span className="relative inline-flex size-1.5 rounded-full bg-white" />
    </span>
    Live
  </span>
);

const ProjectModal = ({ project, onClose, githubLabel }) => {
  const closeRef = useRef(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement;
    closeRef.current?.focus();
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
      previouslyFocused?.focus?.();
    };
  }, [onClose]);

  const description = Array.isArray(project.description)
    ? project.description
    : [project.description];

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto overscroll-contain rounded-3xl border border-white/30 dark:border-gray-700 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.3)] animate-modal-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute top-3 right-3 sm:top-5 sm:right-5 z-20 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 backdrop-blur-md border border-white/30 transition cursor-pointer focus-visible:outline-2 focus-visible:outline-sky-400"
        >
          <X size={20} />
        </button>

        <div className="relative w-full aspect-[16/9] max-h-80 overflow-hidden bg-slate-100 dark:bg-slate-950">
          <img
            src={project.image}
            alt={`${project.name} screenshot`}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
          <div className="absolute top-3 left-3 sm:top-5 sm:left-5 flex gap-2">
            <span className="px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-sky-700/70 backdrop-blur-md border border-white/30 text-white">
              {project.date}
            </span>
            {project.live && <LiveBadge />}
          </div>
        </div>

        <div className="p-5 sm:p-8">
          <h2
            id="project-modal-title"
            className="text-xl sm:text-2xl md:text-3xl font-bold text-sky-600 dark:text-sky-400 mb-4 pr-8"
          >
            {project.name}
          </h2>

          <ul className="space-y-2 mb-6 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
            {description.map((line) => (
              <li key={line} className="flex gap-2">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-sky-500" aria-hidden="true" />
                <span>{line}</span>
              </li>
            ))}
          </ul>

          <h3 className="text-base sm:text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
            Technologies Used
          </h3>
          <ul className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-sky-500/10 text-sky-800 dark:text-sky-200 border border-sky-500/30"
              >
                {tech}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3">
            {project.live && (
              <MainButton href={project.live} external size="md" className="!bg-emerald-600 dark:!bg-emerald-500">
                <Globe size={18} aria-hidden="true" />
                Visit Live Website
              </MainButton>
            )}
            {project.github ? (
              <MainButton href={project.github} external size="md">
                <FaGithub size={18} aria-hidden="true" />
                {githubLabel}
              </MainButton>
            ) : (
              <span className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <Lock size={16} aria-hidden="true" />
                Private client repository
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = ({ data }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const closeModal = useCallback(() => setSelectedProject(null), []);

  return (
    <section className="px-4 py-3 sm:px-6 lg:px-8" id="projects">
      <div className="max-w-6xl mx-auto relative">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <SectionTitle data={data.titleComponent} />
          <div className="pb-6 lg:pb-0 flex justify-center">
            <MainButton href={data.button.url} external variant="primary" size="md">
              {data.button.name}
              {data.button.icon}
            </MainButton>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {data.projects.map((project, i) => (
            <Reveal key={project.id} delay={(i % 3) * 90} className="h-full">
              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                aria-haspopup="dialog"
                className="group flex h-full w-full flex-col text-left cursor-pointer bg-white/40 dark:bg-gray-900/40 border border-white/40 dark:border-gray-700 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(14,165,233,0.25)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
              >
                <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-100 dark:bg-slate-950">
                  <img
                    src={project.image}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  {project.live && <LiveBadge className="absolute top-3 left-3" />}
                  <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/70 to-transparent px-4 pb-3 pt-10 text-xs font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                    View details →
                  </span>
                </div>

                <div className="flex flex-1 flex-col gap-3 p-4">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-100">
                    {project.name}
                  </h3>
                  <ul className="mt-auto flex flex-wrap gap-1.5" aria-label="Technologies">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full bg-sky-500/10 px-2 py-0.5 text-[11px] font-medium text-sky-700 dark:text-sky-300"
                      >
                        {tech}
                      </li>
                    ))}
                    {project.technologies.length > 4 && (
                      <li className="rounded-full bg-slate-500/10 px-2 py-0.5 text-[11px] font-medium text-slate-600 dark:text-slate-300">
                        +{project.technologies.length - 4}
                      </li>
                    )}
                  </ul>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={closeModal}
          githubLabel="View on GitHub"
        />
      )}
    </section>
  );
};

export default Projects;
