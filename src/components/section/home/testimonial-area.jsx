"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import { homePageContent } from "../../../../public/db/contents.home";

const TestimonialArea = () => {
  const { recommendation } = homePageContent;

  const { heading, description, features = [], reviews = [] } = recommendation;
  var settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <section className="w-full flex flex-col  gap-5 sm:gap-10 xl:gap-12 py-8 lg:py-10  px-5 sm:px-2">
      <h2 className="heading text-center">{heading}</h2>

      <div className="container grid grid-cols-1 xl:grid-cols-2 gap-10 sm:gap-5">
        <div className=" w-full flex flex-col gap-5">
          <p className="description text-meteoriteDark text-sm sm:text-md xl:text-lg text-center sm:text-start">
            {description}
          </p>
          <div className="w-full grid  text-center sm:grid-cols-3 ">
            {features?.map((text, index) => (
              <div
                key={index}
                className="sm:border-l border-primaryLight px-3 py-1"
              >
                <h3 className="text-primary font-bold text-md xl:text-lg">
                  {text}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* slider  */}
        <div className="container ">
          <Slider {...settings} className="outline-none">
            {reviews?.map((data, index) => (
              <div
                key={index}
                className="p-5 sm:p-8 bg-white border border-primaryLightest flex flex-col text-center sm:text-start"
              >
                <div className="flex  justify-center sm:justify-start text-2xl text-primary">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    version="1.1"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3.516 7c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5l-0.016-0.5c0-3.866 3.134-7 7-7v2c-1.336 0-2.591 0.52-3.536 1.464-0.182 0.182-0.348 0.375-0.497 0.578 0.179-0.028 0.362-0.043 0.548-0.043zM12.516 7c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5l-0.016-0.5c0-3.866 3.134-7 7-7v2c-1.336 0-2.591 0.52-3.536 1.464-0.182 0.182-0.348 0.375-0.497 0.578 0.179-0.028 0.362-0.043 0.549-0.043z"></path>
                  </svg>
                </div>

                <p className="text-sm sm:text-md xl:text-lg my-4">
                  {data?.review}
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <div className="h-12 w-12 bg-primaryLight rounded-full" />

                  <div>
                    <h4 className="text-sm sm:text-md xl:text-base font-bold text-meteoriteDark capitalize">
                      {data?.name}
                    </h4>

                    <span className="text-xs text-gray">
                      {data?.designation}
                    </span>
                  </div>
                </div>
              </div>
            ))}{" "}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TestimonialArea;
