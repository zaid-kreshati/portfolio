import { Trophy } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import Reveal from "../ui/Reveal";
import { ExternalLink } from "lucide-react";

const Achievements = ({ data }) => {
  return (
    <section id="achievements" className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-16">
      
      {/* Title */}
      <SectionTitle data={data.titleComponent} />

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
        {data.items.map((item, index) => (
          <Reveal
            key={item.text}
            delay={index * 90}
            className="
            relative p-4 sm:p-5 md:p-6 rounded-2xl
            bg-white/30 dark:bg-white/10
            backdrop-blur-xl
            border border-white/30
            shadow-[0_8px_32px_rgba(0,0,0,0.1)]
            hover:-translate-y-1 transition-[translate,box-shadow] duration-300 hover:shadow-xl"
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-2xl pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/40 to-transparent rounded-t-2xl"></div>
            </div>

            <div className="relative z-10 flex flex-col items-start gap-3 sm:gap-4">
              <Trophy className="text-yellow-500" size={26} aria-hidden="true" />
              <p className="text-gray-700 dark:text-gray-200 text-xs sm:text-sm leading-relaxed">
                {item.text}
              </p>
              {item.url && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-sky-600 dark:text-sky-400 hover:underline"
                >
                  View profile <ExternalLink size={14} aria-hidden="true" />
                </a>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Achievements;