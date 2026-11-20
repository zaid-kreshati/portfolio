import SectionTitle from "../ui/SectionTitle";
import Reveal from "../ui/Reveal";

const About = ({ data }) => {
  return (
    <section
      className="py-12 px-4 sm:px-10 md:px-20 flex flex-col gap-10"
      id="about"
    >
      {/* TITLE */}
      <div className="text-center">
        <SectionTitle data={data.titleComponent} />
      </div>

      {/* CONTENT */}
      <div
        className="
          grid grid-cols-1 
          md:grid-cols-2 
          gap-8 md:gap-12 lg:gap-16
          items-stretch"
      >
        {/* IMAGE (hidden on iPad, shown on desktop) */}
        <Reveal direction="left" className="hidden lg:flex items-center justify-center">
          <img
            src={data.icons}
            alt="Icons of the technologies I work with"
            loading="lazy"
            className="w-full max-w-[400px] object-contain z-20 rounded-2xl
          bg-gradient-to-b from-sky-500 to-violet-400 dark:bg-gray-900/40 border 
         border-white/30 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.1)]"
          />
        </Reveal>

        <Reveal direction="right" className="flex flex-col gap-10">
          {/* DESCRIPTION */}
          <div className="flex flex-col justify-center">
            <p className="leading-relaxed text-base md:text-lg text-slate-700 dark:text-slate-300">
              {data.description}
            </p>
          </div>

          {/* SKILLS */}
          <div className="flex flex-col justify-center space-y-4">
            {data.languages?.map((item, index) => (
              <div key={item.name || index}>
                {/* Skill name */}
                <div className="flex justify-between mb-2">
                  <p className="font-medium">{item.name}</p>
                </div>

                {/* Progress */}
                <div className="relative">
                  <span
                    className="absolute -top-6 text-xs font-semibold text-sky-600 dark:text-sky-400"
                    style={{ left: `calc(${item.value}% - 10px)` }}
                  >
                    {item.value}%
                  </span>

                  <div
                    className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
                    role="progressbar"
                    aria-label={item.name}
                    aria-valuenow={item.value}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="animate-grow-x h-full rounded-full bg-gradient-to-r from-sky-500 to-violet-500"
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
