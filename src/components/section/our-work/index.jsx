"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import {
  Champions,
  Employee,
  HeroEmployee,
  Cake,
  Employee2,
  GreatPlace,
  RadixHappy,
  FreshRoom,
  CoFounder,
  Inclusive,
  Radixweb,
  Deriving,
} from "../../../../public/assets/our-culture";

import {
  Ahero,
  Ahmedabad,
  Business,
  Global,
  India,
  Power,
  TopIndia,
  Worldfestival,
  Itfirms,
  Good,
  Selected,
} from "../../../../public/assets/our-awards";


const services = [
  {
    category: "Mobile App Development",
    items: [
      { name: "iOS Apps", desc: "High-performance iPhone & iPad apps", thumbnail: Champions, route: "#" },
      { name: "Android Apps", desc: "Custom Android apps for all devices", thumbnail: Employee, route: "#" },
      { name: "Flutter", desc: "Cross-platform apps with Flutter", thumbnail: CoFounder, route: "#" },
      { name: "React Native", desc: "Native-feel apps using JavaScript", thumbnail: Deriving, route: "#" },
      { name: "Kotlin", desc: "Modern Android apps in Kotlin", thumbnail: Itfirms, route: "#" },
      { name: "Swift", desc: "Native iOS apps using Swift", thumbnail: Worldfestival, route: "#" },
    ],
  },
  {
    category: "Web Development",
    items: [
      { name: "MERN Stack", desc: "Full-stack apps using MongoDB, Express, React & Node", thumbnail: HeroEmployee, route: "#" },
      { name: "Next.js", desc: "SEO-friendly & performant web apps", thumbnail: Employee2, route: "#" },
      { name: "Laravel", desc: "Robust backend apps using PHP", thumbnail: Cake, route: "#" },
      { name: "WordPress", desc: "Custom WordPress websites & plugins", thumbnail: GreatPlace, route: "#" },
      { name: "Django", desc: "Secure Python-based web apps", thumbnail: Global, route: "#" },
      { name: "Spring Boot", desc: "Scalable Java backend solutions", thumbnail: Business, route: "#" },
    ],
  },
  {
    category: "E-Commerce Solutions",
    items: [
      { name: "Shopify", desc: "Launch your online store with ease", thumbnail: RadixHappy, route: "#" },
      { name: "WooCommerce", desc: "WordPress-powered e-commerce", thumbnail: Inclusive, route: "#" },
      { name: "Custom Storefronts", desc: "Tailored e-commerce platforms", thumbnail: Radixweb, route: "#" },
      { name: "Magento", desc: "Enterprise-grade e-commerce stores", thumbnail: Good, route: "#" },
      { name: "BigCommerce", desc: "Cloud e-commerce solutions", thumbnail: Selected, route: "#" },
    ],
  },
  {
    category: "Cloud & Integrations",
    items: [
      { name: "Firebase", desc: "Real-time backend & hosting", thumbnail: FreshRoom, route: "#" },
      { name: "AWS", desc: "Scalable cloud infrastructure", thumbnail: Ahero, route: "#" },
      { name: "REST APIs", desc: "Robust API development", thumbnail: Ahmedabad, route: "#" },
      { name: "Google Cloud", desc: "Cloud apps on Google’s platform", thumbnail: India, route: "#" },
      { name: "Azure", desc: "Microsoft’s secure cloud services", thumbnail: Power, route: "#" },
      { name: "GraphQL", desc: "Efficient query APIs", thumbnail: TopIndia, route: "#" },
    ],
  },
];



const OurWork = () => {
  const [data, setData] = useState({
    current: "Mobile App Development",
    categories: services,
  });

  const currentItems =
    data.categories.find((cat) => cat.category === data.current)?.items || [];

  return (
    <section className="w-full flex flex-col gap-8 py-14 md:py-32 px-5">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h2 className="text-3xl md:text-4xl font-bold text-black tracking-wide">
          What We Build
        </h2>
        <p className=" text-base md:text-lg text-black font-medium tracking-wide py-4">
          We specialize in crafting high-quality digital solutions tailored to your business needs – across web, mobile, and cloud.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="no-scrollbar overflow-x-auto">
        <div className="flex gap-4 justify-center md:w-auto w-[850px]">
          {services.map(({ category }, index) => (
            <button
              key={index}
              onClick={() => setData((prev) => ({ ...prev, current: category }))}
              className={`px-4 py-2 border rounded-full transition duration-200 ${
                category === data.current
                  ? "bg-primary text-white"
                  : "bg-white text-black border-gray font-medium tracking-wide text-[1rem]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Dynamic Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 container pt-6 md:px-24">
        {currentItems.map(({ name, thumbnail, route,desc }, index) => (
          <ProjectCard key={index} title={name} desc={desc} thumbnail={thumbnail} route={route} />
        ))}
      </div>
    </section>
  );
};

export default OurWork;
