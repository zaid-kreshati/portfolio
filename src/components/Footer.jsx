import MainButton from "./ui/MainButton";

const Footer = ({ data }) => {
  return (
    <footer className="bg-slate-100 dark:bg-slate-800">
      <div className="border-t-2 border-solid mx-4 md:mx-10 border-gray-300 dark:border-gray-700"></div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-1 mx-4 md:mx-10 py-4 md:h-20">
        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 text-center md:text-left">
          {data.copyright}
        </p>
        <p className="text-sm md:text-base font-bold  text-center md:text-left">
          {data.developmentBy}
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {data.socialMedia.map((item) => (
            <MainButton
              key={item.id}
              href={item.url}
              external
              variant="icon"
              size="sm"
              aria-label={item.name}
              title={item.name}
            >
              {item.icon}
            </MainButton>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
