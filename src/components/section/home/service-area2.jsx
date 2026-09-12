"use client";
import Slider from "react-slick";
import ServiceCard from "./service-card";
import { NextArrow, PrevArrow } from "./slider-arrow";

const services = [
  "Mobile App Development",
  "Web Development",
  "E-Commerce Development",
  "FinTech Solutions",
  "EdTech Solutions",
  "HealthTech Solutions",
  "Game Development",
  "Travel & Booking Platforms",
  "Logistics & Delivery",
  "SaaS Development",
  "Digital Marketing",
  "UI/UX & Design",
  "CRM Solutions",
  "ERP Solutions",
  "AI & Machine Learning",
  "Blockchain & Web3",
  "OTT & Streaming Platforms",
  "Social Media Platforms",
  "Hospitality & FoodTech",
  "Event & Ticketing Platforms",
  "Mobile App Development",
  "Web Development",
  "E-Commerce Development",
  "FinTech Solutions",
  "EdTech Solutions",
  "HealthTech Solutions",
  "Game Development",
  "Travel & Booking Platforms",
  "Logistics & Delivery",
  "SaaS Development",
  "Digital Marketing",
  "UI/UX & Design",
  "CRM Solutions",
  "ERP Solutions",
  "AI & Machine Learning",
  "Blockchain & Web3",
  "OTT & Streaming Platforms",
  "Social Media Platforms",
  "Hospitality & FoodTech",
  "Event & Ticketing Platforms",
];

export default function ServicesPage({ featuredServices = [] }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToScroll: true,
    autoplay: true,
    autoplayspeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToShow: 1, // Needed to be 1 for rows layout
    slidesToScroll: 1,
    rows: 5, // 5 rows
    slidesPerRow: 4, // 4 cards per row
    responsive: [
      {
        breakpoint: 768, // Mobile
        settings: {
          rows: 1,
          slidesPerRow: 2,
          slidesToShow: 0.9,
          slidesToScroll: 0.9,
        },
      },
    ],
  };

  return (
    <section className=" p-6 bg-white container relative">
      {/* <Slider {...settings}> */}
      <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {featuredServices?.map(({ slug, heading, _id }, index) => (
          <div key={_id} className="w-full">
            <ServiceCard
              route={`/services/${slug}`}
              title={heading}
              index={index}
            />
          </div>
        ))}
      </div>

      {/* // </Slider> */}
    </section>
  );
}
