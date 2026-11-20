import { LuArrowRight } from "react-icons/lu";
import MainButton from "./ui/MainButton";
import Reveal from "./ui/Reveal";

const ScrollDown = ({ data }) => {
  return (
    <Reveal direction="scale" className="relative w-11/12 md:w-4/5 min-h-48 sm:h-56 md:h-64 lg:h-75 mx-auto my-8">
      {/* Background Image */}
      <img
        src={data.backGround}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover rounded-2xl sm:rounded-3xl md:rounded-4xl"
      />

      {/* Overlay Content */}
      <div className="relative sm:absolute sm:inset-0 py-6 sm:py-0 flex flex-col md:flex-row  sm:gap-6 md:gap-10 lg:gap-30 items-center justify-center text-center px-4 sm:px-6 md:px-8 lg:px-15">
        <div>
          <p className="text-sm sm:text-l md:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2">
            {data.title}
          </p>

          <p className="text-xs sm:text-base md:text-lg lg:text-xl text-white mb-3 sm:mb-4">
            {data.description}
          </p>
        </div>

        <MainButton href="#contact" size="md" variant="opacity" className="shrink-0">
          {data.button}
          <LuArrowRight aria-hidden="true" />
        </MainButton>
      </div>
    </Reveal>
  );
};

export default ScrollDown;