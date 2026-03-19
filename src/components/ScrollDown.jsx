import React from "react";
import { LuArrowRight } from "react-icons/lu";

const ScrollDown = ({ data }) => {
  return (
    <div className="relative w-4/5  mx-auto ">
      {/* Background Image */}
      <img
        src={data.backGround}
        alt="decoration"
        className="w-full h-full object-cover rounded-4xl"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-row gap-30 items-center justify-center text-center px-15 ">
        <div>
          <p className="text-5xl font-bold text-white mb-2">{data.title}</p>

          <p className="text-xl text-white mb-4">{data.description}</p>
        </div>

        <button className=" flex gap-2 items-center justify-center px-6 py-2 w-[200px] cursor-pointer rounded-lg bg-blue-500 text-white shadow-lg  hover:bg-blue-600 transition-all duration-300">
            {data.button} <LuArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ScrollDown;
