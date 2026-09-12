import Image from "next/image";
import Link from "next/link";
import React from "react";
import { homePageContent } from "../../../../public/db/contents.home";

const WorkPlace = () => {
  const { workplace } = homePageContent;
  const {
    heading,
    description,
    action = {},
    body,
    heroImage,
    card,
  } = workplace;
  return (
    <section className="w-full flex flex-col  gap-10 xl:gap-12 py-8 lg:py-10 px-5 sm:px-0 bg-white">
      <div className="xl:px-5 container grid grid-cols-1 xl:grid-cols-2 gap-5 xl:gap-20">
        {/* image  */}

        <Image
          src={heroImage}
          height={600}
          width={600}
          className="w-full mb-4"
          alt="Our workplace"
        />

        {/* content  */}
        <div className="w-full flex flex-col gap-3">
          <h2 className="heading">{heading}</h2>

          <h3 className="ext-base sm:text-lg xl:text-xl mt-3 text-meteoriteDark">
            {description}
          </h3>

          <p className="description text-sm sm:text-md xl:text-base">{body}</p>

          <Link
            href={action?.route}
            className="primary-btn-sm w-fit mx-auto xl:mx-0 mt-3"
          >
            {action?.label}
          </Link>
        </div>
      </div>

      <div className="container bg-meteoriteDark2 p-7 sm:p-10 flex flex-col gap-3 sm:gap-7 transition-all duration-300">
        <h3 className="!text-white heading">{card?.title} </h3>

        <p className="text-xs xl:text-base text-white">{card?.description}</p>

        <Link
          href={card?.action?.route || "#"}
          className="flex flex-row items-center gap-2 hover:gap-3 transition-all duration-100 text-primary"
        >
          <div className="font-bold  text-sm">{card?.action?.label}</div>

          <span className="text-lg pt-[1px]">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              ></path>
            </svg>
          </span>
        </Link>
      </div>
    </section>
  );
};

export default WorkPlace;
