import MainButton from "../ui/MainButton";
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
        className="absolute right-15 top-29 h-68 w-120 object-contain z-20 pointer-events-none"
      />

      {/* Personal photo */}
      <img
        src={data.personal_photo}
        className="absolute right-10 top-17  h-127 w-117 object-contain -z-10 pointer-events-none"
      />

      <img
        src={data.Circle}
        className="absolute right-16 top-35 h-107 w-107 object-contain -z-20 pointer-events-none"
      />

      {/* Hero section */}
      <div className="max-w-7xl mx-20 px-6 z-0 pt-30 pb-20 ">
        <h1 className="text-5xl font-bold mb-4">
          {data.title}
          <br />
          <span className="text-sky-600 ">{data.subtitle}</span>
        </h1>


        <p className="text-lg mt-4 w-100 leading-relaxed">{data.description}</p>

        {/* <button
          onClick={() => downloadCV()}
          className="mt-8 px-6 py-2 bg-white text-black rounded-md right-20 h-14 w-40 cursor-pointer hover:bg-[#583FBC]"
        >
          {data.button}
        </button> */}

        <MainButton
          className="mt-4"
          sizes="lg"
          children={
            <a href={data.CV} download="Zaid Kreshati Cv.pdf">
              Download CV
            </a>
          }
        ></MainButton>
      </div>

      <img
        src={data.Dots}
        className="absolute bottom-5 left-0 w-screen h-auto object-contain -z-40 pointer-events-none"
      />
    </>
  );
};

export default Hero;
