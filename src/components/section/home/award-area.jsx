"use client";
import Image from "next/image";
import React, { useRef } from "react";
import Slider from "react-slick";
import {
  FaSchool,
  FaUniversity,
  FaGraduationCap,
  FaLanguage,
  FaBook,
  FaComputer,
  FaMusic,
  FaTheaterMasks,
  FaCamera,
  FaPalette,
  FaChalkboardTeacher,
  FaTshirt,
} from "react-icons/fa";
import {
  GiMusicalNotes,
  GiDance,
  GiSewingNeedle,
  GiTeacher,
  GiAvoidance,
} from "react-icons/gi";
import { FaComputerMouse } from "react-icons/fa6";
const AwardArea = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2.65,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const sliderRef = useRef(null);
  const awards = [
    {
      name: "School",
      count: "10000+",
      icon: <FaSchool />,
    },
    {
      name: "College",
      count: "6000+",
      icon: <FaUniversity />,
    },
    {
      name: "Diploma",
      count: "1500+",
      icon: <FaGraduationCap />,
    },
    {
      name: "Under Graduation",
      count: "1800+",
      icon: <FaGraduationCap />,
    },
    {
      name: "Post Graduation",
      count: "2500+",
      icon: <FaGraduationCap />,
    },
    {
      name: "Competitive Exam",
      count: "2000+",
      icon: <FaBook />,
    },
    {
      name: "Language Studies",
      count: "3000+",
      icon: <FaLanguage />,
    },
    {
      name: "English Speaking",
      count: "2000+",
      icon: <FaLanguage />,
    },
    {
      name: "Foreign Language",
      count: "600+",
      icon: <FaLanguage />,
    },
    {
      name: "Religious Studies",
      count: "150+",
      icon: <FaBook />,
    },
    {
      name: "Computer/IT",
      count: "800+",
      icon: <FaComputerMouse />,
    },
    {
      name: "Music",
      count: "600+",
      icon: <GiMusicalNotes />,
    },
    {
      name: "Dance",
      count: "800+",
      icon: <GiAvoidance />,
    },
    {
      name: "Photography/Film Making",
      count: "80+",
      icon: <FaCamera />,
    },
    {
      name: "Theatre/Acting",
      count: "200+",
      icon: <FaTheaterMasks />,
    },
    {
      name: "Industrial Training",
      count: "250+",
      icon: <GiTeacher />,
    },
    {
      name: "Tailoring / Fashion Design",
      count: "50+",
      icon: <GiSewingNeedle />,
    },
    {
      name: "Special Education",
      count: "600+",
      icon: <FaChalkboardTeacher />,
    },
    {
      name: "Art & Craft",
      count: "200+",
      icon: <FaPalette />,
    },
    {
      name: "Regional Language",
      count: "250+",
      icon: <FaLanguage />,
    },
  ];
  return (
    <section className="w-full flex flex-col  gap-10 xl:gap-12 py-8 lg:py-10 xl:py-20 bg-primaryLightest ">
      <h2 className=" heading text-center">All Teachers</h2>

      {/* slider  */}

      <div className="container ">
        <Slider ref={sliderRef} {...settings} className="outline-none ">
          {awards?.map((data, index) => (
            <div
              key={index}
              className="outline-none w-full flex flex-col text-center"
            >
              {/* Icon + Count Box */}
              <div className="w-[110px] h-[110px] mx-auto bg-white rounded-2xl flex flex-col items-center justify-center shadow-sm">
                <div className="text-primary text-3xl mb-1">{data?.icon}</div>

                <span className="text-xl font-bold text-meteoriteDark">
                  {data?.count}
                </span>
              </div>

              {/* Divider */}
              <div className="bg-primary h-1 rounded-xl w-[50px] mx-auto my-3" />

              {/* Name */}
              <span className="text-sm text-meteoriteDark font-medium capitalize">
                {data?.name}
              </span>
            </div>
          ))}
        </Slider>
      </div>

      <div className="flex-row flex-center gap-2">
        <button
          onClick={() => sliderRef.current.slickPrev()}
          className="text-xl text-primary"
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
          className="text-xl text-primary"
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
    </section>
  );
};

export default AwardArea;
