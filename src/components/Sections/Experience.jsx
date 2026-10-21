import React from "react";
import {
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  CheckCircle2,
  MapPin,
} from "lucide-react";
import SectionTitle from "../ui/SectionTitle";

const ExperienceCard = ({ experience }) => (
  <article className="rounded-2xl border border-gray-200/80 bg-white/35 p-5 text-left shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-gray-900/40 sm:p-6">
    <div className="mb-3 flex items-start gap-3">
      <span className="mt-0.5 rounded-xl bg-sky-500/10 p-2 text-sky-500 dark:bg-sky-400/10 dark:text-sky-400">
        <BriefcaseBusiness size={20} aria-hidden="true" />
      </span>
      <div>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 sm:text-xl">
          {experience.title}
        </h3>
        <p className="mt-1 flex items-center gap-1.5 text-sm font-medium text-sky-600 dark:text-sky-400">
          <Building2 size={15} aria-hidden="true" />
          {experience.company}
        </p>
      </div>
    </div>

    <div className="mb-4 flex flex-wrap gap-2 text-xs font-medium sm:text-sm">
      <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-500/10 px-3 py-1.5 text-purple-700 dark:bg-purple-400/10 dark:text-purple-300">
        <CalendarDays size={14} aria-hidden="true" />
        {experience.date}
      </span>
      {experience.employmentType && (
        <span className="rounded-full bg-sky-500/10 px-3 py-1.5 text-sky-700 dark:bg-sky-400/10 dark:text-sky-300">
          {experience.employmentType}
        </span>
      )}
      {experience.duration && (
        <span className="rounded-full bg-slate-500/10 px-3 py-1.5 text-slate-700 dark:bg-slate-300/10 dark:text-slate-300">
          {experience.duration}
        </span>
      )}
    </div>

    {(experience.location || experience.arrangement) && (
      <p className="mb-4 flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-300">
        <MapPin size={16} className="shrink-0 text-purple-500" aria-hidden="true" />
        {[experience.location, experience.arrangement].filter(Boolean).join(" · ")}
      </p>
    )}

    <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
      {experience.summary || experience.description}
    </p>

    {experience.responsibilities && (
      <div className="mt-5 border-t border-gray-200/80 pt-4 dark:border-gray-700">
        <h4 className="mb-3 text-sm font-semibold text-gray-800 dark:text-gray-100">
          Key responsibilities
        </h4>
        <ul className="space-y-2.5 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
          {experience.responsibilities.map((responsibility) => (
            <li key={responsibility} className="flex gap-2">
              <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-sky-500" aria-hidden="true" />
              <span>{responsibility}</span>
            </li>
          ))}
        </ul>
      </div>
    )}
  </article>
);

const Experience = ({ data }) => {
  return (
    <section id="experience" className="relative px-6 py-4 sm:py-16">
      <img src={data.rightDots} alt="" className="absolute right-0 top-0 hidden sm:block" />
      <SectionTitle data={data.titleComponent} />

      <div className="relative mx-auto max-w-5xl">
        <div className="absolute left-4 top-0 h-full border-l-2 border-dashed border-gray-300 dark:border-gray-600 sm:left-1/2 sm:-translate-x-1/2" />

        <div className="space-y-12 pl-8 sm:pl-0">
          {data.experience.map((experience, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div key={experience.id} className="relative flex items-start justify-start sm:items-center sm:justify-between">
                <div className={`w-full sm:w-1/2 ${isLeft ? "sm:pr-8" : "hidden sm:block sm:opacity-0"}`}>
                  {isLeft && <ExperienceCard experience={experience} />}
                </div>

                <span className="absolute left-0 flex size-4 -translate-x-6 sm:relative sm:translate-x-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-90" />
                  <span className="relative inline-flex size-4 rounded-full bg-sky-500" />
                </span>

                <div className={`w-full sm:w-1/2 ${!isLeft ? "sm:pl-8" : "hidden sm:block sm:opacity-0"}`}>
                  {!isLeft && <ExperienceCard experience={experience} />}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <img src={data.leftDots} alt="" className="absolute bottom-0 left-0 hidden sm:block" />
    </section>
  );
};

export default Experience;
