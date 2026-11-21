import MainButton from "../ui/MainButton";
import { Download, ArrowRight } from "lucide-react";

const Hero = ({ data }) => {
  return (
    <section
      id="home"
      className="relative pb-10 pt-28 sm:pt-32 md:pt-44 lg:pt-48"
    >
      {/* decorative lines */}
      <img
        src={data.lines}
        alt=""
        aria-hidden="true"
        className="absolute top-10 left-0 h-screen w-full max-h-screen object-contain hidden lg:block z-0 pointer-events-none dark:opacity-50"
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative order-2 md:order-1 z-20">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-up"
              style={{ animationDelay: "100ms" }}
            >
              {data.title}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-violet-500 to-sky-500 animate-gradient">
                {data.subtitle}
              </span>
            </h1>

            <p
              className="text-base md:text-lg mt-4 w-full leading-relaxed text-slate-700 dark:text-slate-300 animate-fade-up"
              style={{ animationDelay: "200ms" }}
            >
              {data.description}
            </p>

            <div
              className="mt-8 flex flex-wrap gap-3 animate-fade-up"
              style={{ animationDelay: "300ms" }}
            >
              <MainButton
                href={data.CV}
                download="Zaid_Kreshati_CV.pdf"
                size="md"
              >
                <Download className="w-5 h-5" aria-hidden="true" />
                {data.button}
              </MainButton>
              <MainButton
                href="#projects"
                size="md"
                className="!bg-transparent !text-sky-700 dark:!text-sky-300 border-2 border-sky-600 dark:border-sky-400 !shadow-none"
              >
                View Projects
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </MainButton>
            </div>

            {/* Blur orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-sky-300/40 to-violet-300/40 rounded-full blur-3xl -z-10 pointer-events-none" />
          </div>

          <div
            className="relative w-full max-w-[260px] sm:max-w-[360px] md:max-w-[500px] mx-auto aspect-square flex items-center justify-center order-1 md:order-2 md:-translate-y-16 lg:-translate-y-24 animate-fade-up"
            style={{ animationDelay: "150ms" }}
          >
            <div className="absolute inset-0 animate-float">
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-[80%] h-[80%] rounded-full bg-violet-200 dark:bg-white" />
              </div>
              <img
                src={data.Squers}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-contain z-20 pointer-events-none"
              />
              <img
                src={data.personal_photo}
                alt="Portrait of Zaid Kreshati"
                width="900"
                height="907"
                fetchPriority="high"
                className="absolute inset-0 w-full h-full object-contain z-30 pointer-events-none"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="flex items-center justify-center gap-2 sm:gap-3.5 w-full mt-10 sm:mt-6 px-4"
      >
        <div className="flex-1 border-t-2 sm:border-t-4 border-dashed border-sky-700" />
        <span className="relative flex size-3 sm:size-4">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-90" />
          <span className="relative inline-flex size-3 sm:size-4 rounded-full bg-sky-500 outline-4 sm:outline-6 outline-offset-3 sm:outline-offset-5 outline-sky-700 outline-double" />
        </span>
        <div className="flex-1 border-t-2 sm:border-t-4 border-dashed border-sky-700" />
      </div>
    </section>
  );
};

export default Hero;
