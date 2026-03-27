import React from "react";
import MainButton from "./ui/MainButton";

const Footer = ({ data }) => {
  return (
    <>
      <div className="left-0 border-t-2 border-solid mx-4 md:mx-10 border-gray-300"></div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-1 mx-4 md:mx-10 py-4 md:h-20">
        <p className="text-xs md:text-sm text-gray-500 text-center md:text-left">
          {data.copyright}
        </p>
        <p className="text-sm md:text-base font-bold text-black text-center md:text-left">
          {data.developmentBy}
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {data.socialMedia.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MainButton variant="icon" size="sm">
                {item.icon}
              </MainButton>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Footer;
