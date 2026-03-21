import React from "react";
import MainButton from "./ui/MainButton";

const Footer = ({ data }) => {
  return (
    <>
    <div
        className="left-0 border-t-2 border-solid mx-10   border-gray-300"
      ></div>
    <div className="flex justify-between items-center gap-1 mx-10 h-20 ">
      <p className="text-sm text-gray-500">{data.copyright}</p>
      <p className="text-l text-bold text-black-500">{data.developmentBy}</p>
      <div className="flex">
        {data.socialMedia.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"

          >
            {/* <div
              className=" relative flex m-2 h-10 w-10 items-center justify-center rounded-2xl bg-sky-600   border-2 border-sky-300 overflow-hidden  cursor-pointer 
                  transition-transform duration-300 hover:scale-125"
            >
              {item.icon}
            </div> */}

            <MainButton 
            variant="icon"
            size="sm"
            children={item.icon}
            />
            {/* <span>{item.name}</span> */}
          </a>
        ))}
      </div>
    </div>
    </>
  );
};

export default Footer;
