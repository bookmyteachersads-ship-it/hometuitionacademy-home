import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";
export const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute md:-right-14 -right-6  top-1/2 z-10 -translate-y-1/2 cursor-pointer bg-white border border-whiteBlue md:h-14 h-9 md:w-14 w-9 hidden md:flex justify-center items-center shadow-lg rounded-full text-primary"
      onClick={onClick}
    >
     <SlArrowRight/>
    </div>
  );
};

export const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute md:-left-14 -left-6 top-1/2 z-10 -translate-y-1/2 cursor-pointer bg-white border border-whiteBlue md:h-14 h-9 md:w-14 w-9 hidden md:flex justify-center items-center shadow-lg rounded-full text-primary"
      onClick={onClick}
    >
    <SlArrowLeft/>
    </div>
  );
};
