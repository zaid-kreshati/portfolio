import SectionTitle from "../ui/SectionTitle";

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
        <div className="hidden lg:flex items-center justify-center">
          <img
            src={data.icons}
            alt="technology icons"
            className="w-full max-w-[400px] object-contain z-20 rounded-2xl
          bg-gradient-to-b from-sky-500 to-violet-400 dark:bg-gray-900/40 border 
         border-white/30 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.1)]"
          />
        </div>

        <div className=" flex flex-col gap-10">
          {/* DESCRIPTION */}
          <div className="flex flex-col justify-center">
            <p className="leading-relaxed text-base md:text-lg">
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
                    className="absolute -top-6 text-xs font-semibold text-sky-500"
                    style={{ left: `calc(${item.value}% - 10px)` }}
                  >
                    {item.value}%
                  </span>

                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-sky-500"
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
