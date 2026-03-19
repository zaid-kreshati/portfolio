const Hero = ({ data }) => {
  return (
    <>
      {/*lines*/}
      <img
        src={data.lines}
        className="absolute -top-2 h-screen w-full object-contain -z-50 pointer-events-none"
      />

      {/* Fixed background images */}
      <img
        src={data.Blur}
        className="absolute top-10 h-250 w-250  object-fill  -z-10 pointer-events-none"
      />

      <img
        src={data.Squers}
        className="absolute right-13 top-30 h-68 w-100 object-contain z-20 pointer-events-none"
      />

      {/* Personal photo */}
      <img
        src={data.personal_photo}
        className="absolute right-10 top-17  h-110 w-100 object-contain -z-10 pointer-events-none"
      />

      <img
        src={data.Circle}
        className="absolute right-18 top-30 h-100 w-85 object-contain -z-20 pointer-events-none"
      />

      {/* Hero section */}
      <div className="max-w-7xl mx-20 px-6 z-0 pt-24 ">
        <h1 className="text-6xl font-bold mb-4">{data.title}</h1>
        <p className="text-6xl font-bold mt-4 mb-4 ">{data.subtitle}</p>
        <p className="text-base mt-4 w-100 leading-relaxed">{data.description}</p>

        {/* <button
          onClick={() => downloadCV()}
          className="mt-8 px-6 py-2 bg-white text-black rounded-md right-20 h-14 w-40 cursor-pointer hover:bg-[#583FBC]"
        >
          {data.button}
        </button> */}

        <div className="mt-4 w-40 text-center py-2 bg-white text-black rounded-md   cursor-pointer hover:bg-sky-500">
          <a href={data.CV} download="Zaid Kreshati Cv.pdf">
            {data.button}
          </a>
        </div>

        <img
          src={data.Dots}
          className="absolute bottom-25 left-0 w-screen h-auto object-contain -z-40 pointer-events-none"
        />
      </div>
    </>
  );
};

export default Hero;
