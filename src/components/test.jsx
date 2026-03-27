import MainButton from "../ui/MainButton";

const Hero = ({ data }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800"
    >
      {/* Liquid glass backdrop */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-white/30 dark:bg-black/30 backdrop-blur-xl" />
      </div>

      {/* Decorative lines */}
      <img
        src={data.lines}
        className="absolute top-10 left-0 w-full h-auto max-h-screen object-contain z-10 pointer-events-none opacity-30 dark:opacity-20"
      />

      {/* Blur orb */}
      <div className="absolute top-20 -left-20 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-sky-300/40 to-violet-300/40 rounded-full blur-3xl z-10 pointer-events-none" />

      {/* Squers graphic */}
      <img
        src={data.Squers}
        className="absolute right-4 md:right-8 lg:right-15 top-20 md:top-32 w-24 h-auto md:w-30 lg:w-32 object-contain z-20 pointer-events-none opacity-80"
      />

      {/* Personal photo with liquid glass frame */}
      <div className="absolute right-6 md:right-10 top-24 md:top-36 w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 z-30">
        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/20 dark:ring-white/10">
          <img
            src={data.personal_photo}
            className="w-full h-full object-cover"
            alt="Personal"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        </div>
      </div>

      {/* Coloured circle with glass effect */}
      <div className="absolute right-10 md:right-20 top-48 md:top-56 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-violet-200/60 to-white/60 dark:from-violet-400/40 dark:to-white/40 rounded-full blur-xl z-10 pointer-events-none" />

      {/* Hero content */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 pt-32 md:pt-40 lg:pt-48">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-slate-900 dark:text-white">
          {data.title}
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-violet-500">
            {data.subtitle}
          </span>
        </h1>

        <p className="text-base md:text-lg mt-6 max-w-xl text-slate-600 dark:text-slate-300 leading-relaxed">
          {data.description}
        </p>

        <div className="mt-8">
          <MainButton
            sizes="lg"
            className="inline-flex items-center gap-2"
          >
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
      </div>

      {/* Bottom divider with glass dot */}
      <div className="absolute bottom-10 left-0 right-0 flex items-center justify-center gap-4 px-6">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-sky-400/60 to-transparent" />
        <span className="relative flex size-5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400/70" />
          <span className="relative inline-flex size-5 rounded-full bg-sky-500 shadow-lg shadow-sky-500/40 ring-2 ring-white/50 dark:ring-slate-900/50" />
        </span>
        <div className="flex-1 h-px bg-gradient-to-l from-transparent via-sky-400/60 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
