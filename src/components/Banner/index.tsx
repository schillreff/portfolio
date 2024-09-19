import { FiArrowDownCircle } from "react-icons/fi";
import resume from "../../assets/resume.pdf";
import banner from "../../assets/banner.svg";

const Banner = () => {
  return (
    <section className="mt-12 flex flex-col items-center sm:flex-row sm:justify-between md:mt-2">
      <div className="w-full md:w-1/3">
        <h1 className="text-center font-roboto text-2xl font-semibold text-ternary-dark dark:text-primary-light lg:text-3xl xl:text-4xl">
          Hi, I'm Schillreff
        </h1>
        <p className="mt-4 text-center font-roboto text-lg font-medium leading-normal text-gray-500 dark:text-gray-200 md:text-xl lg:text-2xl xl:text-3xl">
          A Full-Stack Developer
        </p>
        <div className="flex justify-center">
          <a
            download="Schilreff-Resume.pdf"
            href={resume}
            className="mb-6 mt-6 flex w-36 items-center justify-center rounded-lg border border-indigo-200 bg-indigo-50 py-2.5 font-roboto text-lg text-gray-500 shadow-lg duration-500 hover:bg-indigo-500 hover:text-white focus:ring-1 focus:ring-indigo-900 dark:border-ternary-dark sm:mb-0 sm:w-48 sm:py-3"
            aria-label="Download Resume"
          >
            <FiArrowDownCircle className="sn:w-6 mr-2 h-5 w-5 duration-100 sm:mr-3 sm:h-6" />
            <span className="font-roboto text-sm font-medium duration-100 sm:text-lg">
              Download CV
            </span>
          </a>
        </div>
      </div>
      <div className="mt-6 flex justify-center sm:w-2/3">
        <img src={banner} alt="Banner" />
      </div>
    </section>
  );
};

export default Banner;
