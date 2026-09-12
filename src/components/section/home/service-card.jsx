"use client";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import { limitTextLength } from "~/utils/limitText";

const ServiceCard = ({ title, index, route }) => {
  // index 7, 16, 19 → no padding-right
  const rightPadding = [7, 14, 16, 17, 19, 27, 34, 36, 37, 39].includes(index)
    ? "pr-0"
    : "pr-11";

  return (
    <Link
      href={route}
      className="bg-gradient-to-r h-full to-primaryDark from-primary text-white rounded-sm md:p-6 p-5 py-5 md:py-6 flex justify-between items-center md:gap-6 gap-2 shadow-md hover:scale-105 transition-transform duration-200 cursor-pointer"
    >
      <h3
        className={`md:text-[1rem] text-[0.8rem] font-semibold leading-tight flex-1 ${rightPadding}`}
      >
        {limitTextLength(title, 25)}
      </h3>
      <div className="bg-white text-primary rounded-full md:p-2.5 p-1">
        <BsArrowUpRight className="text-primary md:text-xl text-lg" />
      </div>
    </Link>
  );
};

export default ServiceCard;
