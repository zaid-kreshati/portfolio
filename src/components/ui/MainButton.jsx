import clsx from "clsx";

const baseStyles =
  "shadow-lg hover:brightness-110 flex gap-2 items-center justify-center text-white rounded-2xl font-semibold transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";

const variants = {
  primary: "bg-sky-600 dark:bg-sky-500 backdrop-blur-xs",

  contact: "bg-sky-600 dark:bg-sky-500 border-2 border-sky-300 dark:border-sky-400 overflow-hidden backdrop-blur-md",

  opacity: "bg-sky-600 dark:bg-sky-500 opacity-100 hover:opacity-90",

  icon: "m-2 rounded-full bg-sky-600 dark:bg-sky-500 border-2 border-sky-300 dark:border-sky-400 overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-110",

  blur: "px-4 py-2 rounded-full text-md font-medium bg-blue-700/40 dark:bg-blue-600/30 text-white border border-blue-500/30 dark:border-blue-400/30 backdrop-blur-sm"
};

const sizes = {
  sm: "px-2 py-1 text-xs xs:px-3 xs:py-1.5 xs:text-sm sm:px-3 sm:py-1.5 sm:text-sm md:text-sm",
  md: "px-3 py-2 text-xs xs:px-4 xs:py-2 xs:text-sm sm:px-5 sm:py-2.5 sm:text-base md:text-base",
  lg: "px-4 py-2 text-sm xs:px-5 xs:py-2.5 xs:text-base sm:px-6 sm:py-3 sm:text-lg md:px-8 md:py-4 md:text-xl",
  sq: "p-2 xs:p-3 sm:p-4 md:p-5",
  arrow: "px-3 py-2 text-xs xs:px-3 xs:py-2 xs:text-sm sm:px-4 sm:py-3 sm:text-base md:text-base"
};

const MainButton = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  ...props
}) => {
  return (
    <button
      className={clsx(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth ? "w-full" : "w-auto",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default MainButton;
