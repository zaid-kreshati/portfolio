import SectionTitle from "../ui/SectionTitle";
import Reveal from "../ui/Reveal";

const Skills = ({ data }) => {
  return (
    <section id="skills" className="px-4 sm:px-8 md:px-12 lg:px-20 py-4 sm:py-16">
      <SectionTitle data={data.titleComponent} />

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        {data.skills?.map((item, index) => (
          <Reveal
            key={item.name || index}
            delay={(index % 3) * 90}
            className="group p-4 sm:p-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/40 dark:bg-gray-900/30 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-sky-400/60 transition-[box-shadow,translate,border-color] duration-300"
          >
            {/* Icon */}
            <div className="text-3xl sm:text-4xl text-sky-500 mb-3 sm:mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 w-fit" aria-hidden="true">
              {item.icon}
            </div>

            {/* Name */}
            <h3 className="text-base sm:text-lg font-semibold mb-1">
              {item.name}
            </h3>

            {/* Description */}
            <p className="text-sm text-slate-600 dark:text-slate-300">
              {item.value}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Skills;
