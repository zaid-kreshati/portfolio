import SectionTitle from "../ui/SectionTitle";

const About = ({ data }) => {
  return (
    <section className="flex flex-col py-7.5 md:flex-row items-center gap-8 md:gap-16 px-4 sm:px-10 md:px-20" id="about">

      {/* Icons */}
      <div className="w-full order-3 md:w-auto md:flex-1">
        <img
          src={data.icons}
          alt="technology icons"
          className="w-full md:translate-y-[85px] bg-gradient-to-b from-sky-500 to-violet-400"
        />
      </div>

      {/* Content */}
      <div className="w-full md:w-auto md:flex-1">
        <SectionTitle data={data.titleComponent}></SectionTitle>

        <p className="mb-6 md:mb-8 leading-relaxed">
          {data.description}
        </p>

        {/* Skills */}
        <div className="space-y-2 max-w-full md:max-w-md">
          {data.languages?.map((item, index) => (
            <div key={item.name || index} className="relative">

              {/* Skill name */}
              <div className="flex justify-between mb-2">
                <p className="font-medium">{item.name}</p>
              </div>

              {/* Progress */}
              <div className="relative">

                {/* Percentage label */}
                <span
                  className="absolute -top-6 text-xs font-semibold text-sky-500"
                  style={{ left: `calc(${item.value}% - 10px)` }}
                >
                  {item.value}%
                </span>

                <input
                  type="range"
                  min="0"
                  max="100"
                  value={item.value}
                  readOnly
                  className="w-full h-2 rounded-lg appearance-none cursor-default"
                  style={{
                    background: `linear-gradient(to right, #0ea5e9 ${item.value}%, #e5e7eb ${item.value}%)`,
                  }}
                />
              </div>

            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default About;
