const About = ({ data }) => {
  return (
    <section className="pt-60 flex items-center gap-16 px-20">

      {/* Icons */}
      <div className="flex-1">
        <img
          src={data.icons}
          alt="technology icons"
          className="w-2/3"
        />
      </div>

      {/* Content */}
      <div className="flex-1">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>

        <p className="mb-8 text-gray-600 leading-relaxed">
          {data.description}
        </p>

        {/* Skills */}
        <div className="space-y-2 max-w-md">
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
