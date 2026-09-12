"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import { homePageContent } from "../../../../public/db/contents.home";

const ChooseUs = () => {
  const { whyChoose } = homePageContent;
  const { heading, description, reasons = [] } = whyChoose;
  var settings = {
    dots: false,
    infinite: false,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="w-full flex flex-col gap-7 sm:gap-10 xl:gap-12 py-8 lg:py-10 px-5 sm:px-2">
      <div className="container text-center px-5">
        <h2 className="heading">{heading}</h2>

        <p className="description text-sm sm:text-md xl:text-lg mt-2">
          {description}
        </p>
      </div>

      {/* slider  */}
      <div className="container">
        <Slider {...settings} className="outline-none">
          {reasons?.map((data, index) => (
            <div
              key={index}
              className="px-1 sm:px-3 xl:px-4 2xl:px-6 outline-none"
            >
              <div className="relative pt-2">
                <div className="hidden lg:block h-[100px] w-[100px] bg-primary absolute -top-2 -left-2 " />

                <div className="relative z-10 w-full p-8 bg-primaryLightest flex flex-col gap-4">
                  <h3 className="font-bold text-lg text-meteoriteDark">
                    {data?.title}
                  </h3>
                  <p className="font-medium text-gray-600 text-sm">
                    {data?.description}
                  </p>
                  <ul className="w-full flex flex-col gap-3 mt-2">
                    {data?.items?.map((item, index) => {
                      return (
                        <li key={index}>
                          <span className="w-full flex flex-row items-center gap-3">
                            <div className="outline outline-4 rounded-full outline-primaryLight h-[7px] w-[7px] bg-primary" />

                            <span className="text-sm text-black">{item}</span>
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ChooseUs;
