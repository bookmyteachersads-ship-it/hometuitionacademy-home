"use client";
import React from "react";
import {
  FaProjectDiagram,
  FaLaptopCode,
  FaMobileAlt,
  FaPaintBrush,
  FaChartLine,
  FaCloud,
  FaLock,
  FaRobot,
  FaDatabase,
  FaServer,
} from "react-icons/fa";

const workAreas = [
  {
    icon: FaProjectDiagram,
    iconClass: "text-infoLight",
    title: "Enterprise Solutions:",
    titleClass: "text-primary",
    description:
      "Scalable platforms tailored for high-growth organizations across finance, health, and education.",
  },
  {
    icon: FaLaptopCode,
    iconClass: "text-success",
    title: "Web Applications:",
    titleClass: "text-successDark",
    description:
      "Dynamic and responsive apps using React, Next.js, and other modern tech stacks.",
  },
  {
    icon: FaMobileAlt,
    iconClass: "text-warning",
    title: "Mobile Development:",
    titleClass: "text-warningDark",
    description:
      "Cross-platform solutions using Flutter, React Native, and native SDKs.",
  },
  {
    icon: FaPaintBrush,
    iconClass: "text-danger",
    title: "UI/UX Design:",
    titleClass: "text-dangerDark",
    description:
      "Human-centered designs focusing on accessibility, aesthetics, and conversion.",
  },
  {
    icon: FaChartLine,
    iconClass: "text-meteorite",
    title: "Digital Marketing:",
    titleClass: "text-meteoriteDark",
    description:
      "SEO, SEM, content strategy, and brand growth to boost global reach.",
  },
  {
    icon: FaCloud,
    iconClass: "text-primaryLight",
    title: "Cloud & DevOps:",
    titleClass: "text-primary",
    description:
      "Scalable CI/CD pipelines, cloud hosting, infrastructure automation, and monitoring.",
  },
  {
    icon: FaLock,
    iconClass: "text-purple-500",
    title: "Cybersecurity:",
    titleClass: "text-purple-700",
    description:
      "Comprehensive security solutions including threat detection, encryption, and compliance.",
  },
  {
    icon: FaRobot,
    iconClass: "text-indigo-500",
    title: "AI & Automation:",
    titleClass: "text-indigo-700",
    description:
      "Implementing machine learning, AI-driven analytics, and process automation to improve efficiency.",
  },
  {
    icon: FaDatabase,
    iconClass: "text-teal-600",
    title: "Database Management:",
    titleClass: "text-teal-800",
    description:
      "Design and optimization of relational and NoSQL databases ensuring data integrity and speed.",
  },
  {
    icon: FaServer,
    iconClass: "text-gray-700",
    title: "Infrastructure Management:",
    titleClass: "text-gray-900",
    description:
      "Robust server architecture, cloud infrastructure scaling, and performance tuning.",
  },
];

const WorkDrop = () => {
  return (
  <>
    <div className="flex justify-end">
          <div className="p-5 w-[800px] bg-white rounded-lg shadow-xl border-t border-whiteBlue">
      <h3 className="text-[0.9rem] font-extrabold mb-4 border-b border-grayLight pb-2 text-primaryDark">
        Our Work Areas
      </h3>

      <ul className="grid md:grid-cols-2 gap-x-10 gap-y-6 text-gray-700 text-sm  md:text-sm leading-[1.65]">
        {workAreas.map(({ icon: Icon, iconClass, title, titleClass, description }, idx) => (
          <li key={idx} className="flex items-start gap-4">
            <Icon className={`${iconClass} text-xl mt-1`} />
            <span>
              <strong className={titleClass}>{title}</strong> {description}
            </span>
          </li>
        ))}
      </ul>
    </div>
    </div>
  </>
  );
};

export default WorkDrop;
