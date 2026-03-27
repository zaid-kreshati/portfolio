import MainButton from "../ui/MainButton";
const Hero = ({ data }) => {
  return (
    <section id="home" className="pb-10 lg:pt-50 md:pt-45 sm:pt-5 pt-25  ">
      {/*lines*/}
      <img
        src={data.lines}
        className="absolute top-10 left-0 h-screen w-full  max-h-screen object-contain hidden sm:block lg:flex md:hidden z-0 pointer-events-none opacity-100  dark:opacity-50"
      />

      <div className="max-w-7xl px-20 z-0 ">
        {/* Grid container: 1 column on small, 2 columns on medium+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Hero section */}

          <div className="relative order-2 md:order-1">
            <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {data.title}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-violet-500">
                {data.subtitle}
              </span>
            </h1>

            <p className="text-md  sm:text-base md:text-lg mt-4 w-full leading-relaxed">
              {data.description}
            </p>
            <div className="mt-8">
              <MainButton size="md" className="inline-flex items-center gap-2">
                <a
                  href={data.CV}
                  download="Zaid_Kreshati_CV.pdf"
                  className="flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V7a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download CV
                </a>
              </MainButton>
            </div>

            {/* Blur orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 h-75 md:w-100 md:h-100 bg-gradient-to-br from-sky-300/40 to-violet-300/40 rounded-full blur-3xl z-10 pointer-events-none opacity-90" />
          </div>

          {/* Image section */}
          <div className="relative flex items-center md:-translate-y-35 md:translate-x-35  justify-center order-1 md:order-2">
            <img
              src={data.Squers}
              className="absolute md:-translate-y-20 h-40 w-80 sm:h-75 sm:w-75 md:h-68 md:w-130 object-contain z-20 pointer-events-none"
            />

            {/* Personal photo */}
            <img
              src={data.personal_photo}
              className="relative h-65 w-65 object-contain z-20 pointer-events-none
              sm:h-75 sm:w-75
              md:object-inhert md:-translate-x-40 md:translate-y-20 md:h-60 md:w-70"
            />

            {/* coloured circle */}
            <div className="absolute translate-y-5 md:translate-y-10 sm:translate-y-5 h-55 w-55 sm:h-60 sm:w-60 md:h-100 md:w-100 object-contain z-10 pointer-events-none bg-violet-200 rounded-full dark:bg-white"></div>
          </div>
        </div>
      </div>

      {/* <img
        src={data.Dots}
        className="absolute top-100 h-screen w-full object-contain z-50 pointer-events-none dark:text-white  to-white"
      /> */}

      <div className="flex items-center justify-center gap-2 sm:gap-3.5 w-screen translate-y-10 sm:translate-y-15 px-4">
        <div className="flex-1 border-t-2 sm:border-t-4 border-dashed border-sky-700"></div>

        <span className="relative flex size-3 sm:size-4">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-90"></span>
          <span className="relative inline-flex size-3 sm:size-4 rounded-full bg-sky-500 outline-4 sm:outline-6 outline-offset-3 sm:outline-offset-5 outline-sky-700 outline-double"></span>
        </span>

        <div className="flex-1 border-t-2 sm:border-t-4 border-dashed border-sky-700"></div>
      </div>
    </section>
  );
};

export default Hero;
