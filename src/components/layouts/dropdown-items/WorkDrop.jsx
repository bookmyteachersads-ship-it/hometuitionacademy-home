"use client";
import React from "react";
import {
  FaShoppingCart,
  FaSitemap,
  FaMobileAlt,
  FaChartLine,
  FaHandshake,
  FaCogs,
  FaCloud,
  FaRocket,
  FaPalette,
} from "react-icons/fa";

const WorkDrop = () => {
  const workItems = [
    {
      icon: <FaShoppingCart className="text-success text-2xl" />,
      title: "E-Commerce Solutions",
      desc:
        "Building scalable online stores with seamless user experience, integrating payment gateways, and powerful admin dashboards.",
    },
    {
      icon: <FaSitemap className="text-primary text-2xl" />,
      title: "Enterprise SaaS Products",
      desc:
        "Delivering complex SaaS platforms with microservice architecture, continuous deployment, and performance optimization.",
    },
    {
      icon: <FaMobileAlt className="text-warning text-2xl" />,
      title: "Mobile & Cross-Platform Apps",
      desc:
        "Native and hybrid mobile applications with smooth animations, offline support, and app store publishing.",
    },
    {
      icon: <FaChartLine className="text-danger text-2xl" />,
      title: "Analytics & Reporting",
      desc:
        "Custom dashboards and real-time data visualizations to help clients make informed decisions.",
    },
    {
      icon: <FaHandshake className="text-meteorite text-2xl" />,
      title: "Client Partnerships",
      desc:
        "Long-term collaborations with startups and enterprises focused on growth and success.",
    },
    {
      icon: <FaCogs className="text-primaryLight text-2xl" />,
      title: "Custom Integrations",
      desc:
        "API integrations, third-party services, and custom backend workflows tailored to your needs.",
    },
    {
      icon: <FaCloud className="text-blue-500 text-2xl" />,
      title: "Cloud Infrastructure",
      desc:
        "Cloud-native apps with autoscaling, CI/CD pipelines, and infrastructure as code using AWS, Azure, or GCP.",
    },
    {
      icon: <FaRocket className="text-pink-600 text-2xl" />,
      title: "Startup MVP Launch",
      desc:
        "Rapid prototyping, product-market fit, and scalable MVPs to accelerate startup journey.",
    },
    {
      icon: <FaPalette className="text-purple-600 text-2xl" />,
      title: "Creative UI/UX Design",
      desc:
        "Pixel-perfect interfaces with user-centric workflows, intuitive interactions, and design systems.",
    },
  ];

  return (
    <div className="flex justify-center md:px-0">
      <div className="w-full max-w-[800px] p-5 bg-white rounded-lg shadow-xl border-t border-whiteBlue">
        <h3 className="text-[0.95rem] font-extrabold mb-4 border-b border-gray-300 pb-2 text-primaryDark">
          Our Work & Portfolio
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-gray-700">
          {workItems.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              {item.icon}
              <div>
                <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                <p className="text-[0.85rem] text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkDrop;
