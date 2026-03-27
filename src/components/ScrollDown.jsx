import React from "react";
import { LuArrowRight } from "react-icons/lu";
import MainButton from "./ui/MainButton";

const ScrollDown = ({ data }) => {
  const scrollToContact = () => {
    const contactEl = document.querySelector("#contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-11/12 md:w-4/5 h-48 sm:h-56 md:h-64 lg:h-75 mx-auto">
      {/* Background Image */}
      <img
        src={data.backGround}
        alt="decoration"
        className="w-full h-full object-cover rounded-2xl sm:rounded-3xl md:rounded-4xl"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col md:flex-row  sm:gap-6 md:gap-10 lg:gap-30 items-center justify-center text-center px-4 sm:px-6 md:px-8 lg:px-15">
        <div>
          <p className="text-sm sm:text-l md:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2">
            {data.title}
          </p>

          <p className="text-xs sm:text-base md:text-lg lg:text-xl text-white mb-3 sm:mb-4">
            {data.description}
          </p>
        </div>

        {/* <button className=" flex gap-2 brightness-[1.2]  items-center font-semibold justify-center px-6 py-2 w-[200px] cursor-pointer rounded-2xl bg-sky-600 text-white shadow-lg  opacity-100  hover:scale-110 transition duration-300 backdrop-blur-sm">
          {data.button} <LuArrowRight />
        </button> */}

        <div onClick={scrollToContact}>
          <MainButton
            size="md"
            variant="opacity"
          >
            {data.button}
            <LuArrowRight />
          </MainButton>
        </div>
      </div>
    </div>
  );
};

export default ScrollDown;