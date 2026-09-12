"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { homePageContent } from "../../../../public/db/contents.home";
const { technologies } = homePageContent;
const TechnologiesArea = ({
  heading = "Technologies and Platforms We Use",
}) => {
  const [data, setData] = useState({
    current: "Frontend",
    categories: technologies,
  });

  const frontendItems =
    data?.categories?.find((category) => category?.category === data?.current)
      ?.items || [];

  return (
    <section className="w-full flex flex-col  gap-7 sm:gap-10 xl:gap-12 py-8 lg:py-10  px-5 sm:px-2">
      <h2 className="heading text-center">{heading}</h2>

      {/* filter  */}

      <div className="overflow-x-auto no-scrollbar space-x-6 sm:space-x-4 container  sm:px-2 flex flex-row justify-center">
        {data?.categories?.map(({ category }, index) => {
          return (
            <button
              key={index}
              onClick={() =>
                setData((prev) => ({ ...prev, current: category }))
              }
              className={`${
                category === data?.current
                  ? "bg-primaryLightest text-primary"
                  : ""
              } flex-shrink-0  py-1.5 px-3 sm:py-2.5 sm:px-4 transition-all duration-200`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="container flex flex-row items-center justify-center gap-5 sm:gap-8 xl:gap-10 flex-wrap xl:px-20">
        {frontendItems?.map((category, index) => {
          const { name, icon, route = "#" } = category;
          const logoUrl = icon
            ? `/assets/technologies/${icon}`
            : "https://w7.pngwing.com/pngs/549/955/png-transparent-angularjs-javascript-jquery-directive-python-software-foundation-angle-triangle-logo.png";
          return (
            <Link
              href={route}
              key={index}
              className="flex flex-col gap-2 text-center bg-white p-2"
            >
              <Image
                alt="react-js"
                height={70}
                width={70}
                src={logoUrl}
                className="h-[50px] object-contain  mx-auto"
              />
              <h3 className="text-sm font-medium">{name}</h3>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default TechnologiesArea;
