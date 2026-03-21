import React from "react";
import { LuArrowRight } from "react-icons/lu";
import MainButton from "./ui/MainButton";

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

        {/* <button className=" flex gap-2 brightness-[1.2]  items-center font-semibold justify-center px-6 py-2 w-[200px] cursor-pointer rounded-2xl bg-sky-600 text-white shadow-lg  opacity-100  hover:scale-110 transition duration-300 backdrop-blur-sm">
          {data.button} <LuArrowRight />
        </button> */}

        <MainButton
          className="mt-4"
          sizes="lg"
          children={data.button}
          variant="opacity"
        ></MainButton>
      </div>
    </div>
  );
};

export default ScrollDown;
