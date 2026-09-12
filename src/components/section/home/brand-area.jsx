"use client";
import Image from "next/image";
import React, { useRef } from "react";
import Slider from "react-slick";

const BrandArea = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5.3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2.35,
          slidesToScroll: 1,
        },
      },
    ],
    arrows: false,
  };

  return (
    <section className="w-full flex flex-col text-center gap-3 sm:gap-5 pb-5 pt-2 ">
      <h2 className="heading">Trusted by Clients</h2>

      {/* slide  */}

      <div className="w-full py-1">
        <Slider {...settings} className="outline-none">
          {clients?.map((data, index) => (
            <div
              key={index}
              className="pr-1 sm:pr-3 outline-none rounded-full overflow-hidden"
            >
              <div className="rounded-full px-3 sm:px-5 py-4 bg-primaryLightest overflow-hidden flex-center">
                <Image
                  title={data?.name}
                  alt={data?.name}
                  width={100}
                  height={50}
                  src={`/assets/clients/${data?.logo}`}
                  className="h-[50px] w-auto rounded-lg"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default BrandArea;

const clients = [
  {
    name: "",
    logo: "vertex.webp",
  },
  {
    name: "",
    logo: "airindia.svg",
  },
  {
    name: "",
    logo: "nexa.png",
  },
  {
    name: "",
    logo: "styky.png",
  },
  {
    name: "",
    logo: "np.webp",
  },
  {
    name: "",
    logo: "1.png",
  },
  {
    name: "",
    logo: "2.png",
  },
  {
    name: "",
    logo: "3.png",
  },
  // {
  //   name: "",
  //   logo: "4.png",
  // },
  // {
  //   name: "",
  //   logo: "5.png",
  // },
  // {
  //   name: "instantdoctor24/7",
  //   logo: "instantdoctor.png",
  // },
];
