"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { useSelector } from "react-redux";
import { limitTextLength } from "~/utils/limitText";
import { replaceTemplateVars } from "~/utils/replaceTemplateVars";

const ServiceDrop = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [services, setServices] = useState([
    {
      title: "Home Tuition for Competitive Exam",
      slug: "home-tuition-for-competitive-exam",
      menu: [],
    },
    {
      title: "Home Tuition for Post-Graduation",
      slug: "home-tuition-for-post-graduation",
      menu: [],
    },
    {
      title: "Home Tuition for Under-Graduation",
      slug: "home-tuition-for-under-graduation",
      menu: [],
    },
    {
      title: "Home Tuition for Diploma",
      slug: "home-tuition-for-diploma",
      menu: [],
    },
    {
      title: "Home Tuition for College",
      slug: "home-tuition-for-college",
      menu: [],
    },
    {
      title: "Home Tuition for School Tuition",
      slug: "home-tuition-for-school-tuition",
      menu: [],
    },
  ]);

  const { servicesByCategory, loading } = useSelector((state) => state.menus);

  // Step 2: Update services state when API returns
  useEffect(() => {
    if (Object.keys(servicesByCategory).length > 0) {
      const updated = services.map((item) => ({
        ...item,
        menu: servicesByCategory[item.slug] || [], // attach API data by slug
      }));
      setServices(updated);
    }
  }, [servicesByCategory]);


  return (
    <div className="w-full bg-white rounded-lg md:shadow-xl flex flex-col md:flex-row  border-t border-blight">
      {/* Left Column */}
      <div className="w-full md:w-3/12 border-b md:border-b-0 md:border-r  border-grayLight py-4 md:py-8 md:px-6">
        <h2 className="text-lg font-semibold mb-4 text-primary hidden md:block">
          Services
        </h2>
        <ul className="flex flex-col ">
          {services.map((service, idx) => (
            <li
              key={idx}
              onMouseEnter={() => setActiveIndex(idx)}
              onClick={() => setActiveIndex(idx)}
              className={`cursor-pointer text-sm  font-medium px-3 md:text-sm md:px-4 py-2.5  flex justify-between items-center transition ${
                activeIndex === idx ? "bg-primary text-white" : ""
              }`}
            >
              {service.title}
              <svg
                className={`w-3 h-3 transition-transform ${
                  activeIndex === idx ? "rotate-0" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Column */}
      <div className="w-full md:w-9/12 py-4 md:py-8 px-1 md:px-6">
        <h3 className="text-lg md:text-lg font-bold text-dark mb-4 md:mb-6 flex items-center gap-1">
          {services[activeIndex].title}{" "}
          <span className="text-primary text-xl font-light">
            <LiaLongArrowAltRightSolid />
          </span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {services[activeIndex].menu?.map(
            ({ heading, slug, subHeading, _id }, i) => {
              const title = replaceTemplateVars(heading, {
                pre: "",
                loc: "",
                post: "",
              });

              const description = replaceTemplateVars(subHeading, {
                pre: "",
                loc: "",
                post: "",
              });

              return (
                <div
                  key={_id}
                  className=" rounded p-4 hover:bg-grayLightest transition"
                >
                  <div className="flex items-start gap-4">
                    {/* {sub.icon} */}
                    <div>
                      <h4 className="first-letter:capitalize font-semibold text-sm md:text-sm text-gray-800 mb-1">
                        {limitTextLength(title, 50)}
                      </h4>
                      <p className="first-letter:capitalize text-gray-600 text-sm md:text-sm">
                        {limitTextLength(description, 100)}
                      </p>
                      <Link
                        href={`/services/${slug}`}
                        className="text-primary hover:underline font-semibold text-sm md:text-sm  mt-1"
                      >
                        Explore Now
                      </Link>
                    </div>
                  </div>
                </div>
              );
            },
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceDrop;
