"use client";
import Link from "next/link";
import { useState, useRef } from "react";
import Slider from "react-slick";
import { homePageContent } from "../../../../public/db/contents.home";
const { developmentServices } = homePageContent;

const Card = ({ title, description, items = [], navigation = {} }) => {
  return (
    <div className="w-full bg-meteoriteDark2 p-7 sm:p-10 flex flex-col gap-3 sm:gap-7 transition-all duration-300">
      <h3 className="text-lg lg:text-xl text-white font-bold">{title} </h3>

      <p className="text-xs xl:text-base text-white">{description}</p>

      <div className="w-full grid sm:grid-cols-2 gap-3 sm:gap-5">
        {items?.map((data, index) => {
          return (
            <ul key={index} className="w-full flex flex-col gap-3">
              {data?.map((item, index) => {
                return (
                  <li key={index}>
                    <Link
                      href={item?.route}
                      className="w-full flex flex-row items-center gap-3"
                    >
                      <div className="outline outline-4 rounded-full outline-primaryLightest h-[7px] w-[7px] bg-primary" />

                      <span className="text-sm text-white">{item?.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          );
        })}
      </div>

      <Link
        href={navigation?.route}
        className="flex flex-row gap-2 items-center justify-end hover:gap-3 transition-all duration-100 text-white"
      >
        <span className="font-bold  text-sm">{navigation?.label}</span>

        <span className="text-lg">
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
  );
};

const SoftwareService = () => {
  const [selectedService, setSelectedService] = useState({
    current: 0,
    details: developmentServices[0]?.metaData,
  });
  const sliderRef = useRef(null);
  const {
    title,
    description,
    navigation,
    items = [],
  } = selectedService?.details;

  const handleSelect = (index, data) => {
    setSelectedService((prev) => ({ ...prev, current: index, details: data }));
  };

  var settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="w-full flex flex-col  gap-10 xl:gap-12 py-8 lg:py-10  px-5 sm:px-2">
      <h2 className="heading text-center">Software Development Services</h2>

      <div className="hidden xl:block">
        <div className="container grid xl:grid-cols-3">
          <div className="hidden w-full sm:col-span-1 h-full xl:flex flex-col justify-center items-center">
            <ul className="flex flex-col  gap-2">
              {developmentServices?.map((data, index) => {
                return (
                  <li
                    onClick={() => handleSelect(index, data?.metaData)}
                    key={index}
                    className={`${
                      index == selectedService?.current
                        ? "text-primary pl-1"
                        : "text-gray"
                    } cursor-pointer text-lg font-semibold transition-all duration-200`}
                  >
                    {data?.label}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* detail card  */}

          <div className="xl:col-span-2">
            <Card
              title={title}
              description={description}
              items={items}
              navigation={navigation}
            />
          </div>
        </div>
      </div>
      <div className="xl:hidden">
        <div className="container flex flex-col gap-3">
          <div className="flex flex-row justify-end gap-2">
            <button
              onClick={() => sliderRef.current.slickPrev()}
              className="text-xl text-primary_low"
            >
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
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                ></path>
              </svg>
            </button>
            <button
              onClick={() => sliderRef.current.slickNext()}
              className="text-xl text-primary_low"
            >
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
            </button>
          </div>
          <Slider ref={sliderRef} {...settings} className="outline-none">
            {developmentServices?.map((data, index) => {
              const { metaData } = data;
              return (
                <div key={index} className="px-1">
                  <Card
                    title={metaData?.title}
                    description={metaData?.description}
                    items={metaData?.items}
                    navigation={metaData?.navigation}
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default SoftwareService;
