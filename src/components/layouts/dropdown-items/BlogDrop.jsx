"use client";
import React from "react";
import {
  FaBookOpen,
  FaNewspaper,
  FaChalkboardTeacher,
  FaBullhorn,
  FaLightbulb,
  FaHandsHelping,
  FaFeatherAlt,
  FaUsersCog,
} from "react-icons/fa";

const blogItems = [
  {
    icon: <FaBookOpen className="text-primaryDark text-[1rem]" />,
    title: "Insights & Industry Trends",
    desc: "Latest happenings across tech, design, and innovation to keep you ahead.",
    hoverColor: "hover:text-primary",
  },
  {
    icon: <FaNewspaper className="text-successDark text-[1rem]" />,
    title: "Case Studies & Reports",
    desc: "Real-world projects, performance breakdowns, and client journeys.",
    hoverColor: "hover:text-success",
  },
  {
    icon: <FaChalkboardTeacher className="text-infoLight text-[1rem]" />,
    title: "Tech Tutorials & Best Practices",
    desc: "Step-by-step guides, coding techniques, and architecture decisions.",
    hoverColor: "hover:text-infoLight",
  },
  {
    icon: <FaBullhorn className="text-warningDark text-[1rem]" />,
    title: "Announcements & Updates",
    desc: "Exciting product releases, features, and internal growth stories.",
    hoverColor: "hover:text-warning",
  },
  {
    icon: <FaLightbulb className="text-dangerDark text-[1rem]" />,
    title: "Innovation & Future Vision",
    desc: "Ideas, experiments, and emerging trends reshaping digital future.",
    hoverColor: "hover:text-danger",
  },
  {
    icon: <FaHandsHelping className="text-meteoriteDark text-[1rem]" />,
    title: "Open Source & Community",
    desc: "How we give back: contributions, libraries, and dev collaborations.",
    hoverColor: "hover:text-meteorite",
  },
  {
    icon: <FaFeatherAlt className="text-primary text-[1rem]" />,
    title: "Design Thinking & UX Patterns",
    desc: "Creative journeys, UI explorations, and user-first approaches.",
    hoverColor: "hover:text-purple-600",
  },
  {
    icon: <FaUsersCog className="text-primary text-[1rem]" />,
    title: "Culture & Team Learnings",
    desc: "Inside stories of our team, process, challenges, and wins.",
    hoverColor: "hover:text-blue-500",
  },
];

const BlogDrop = () => {
  return (
<>
  <div className="flex justify-end">
        <div className="w-[750px] p-5 bg-white rounded-lg shadow-xl border-t border-whiteBlue">
      <h3 className="text-lg font-bold mb-4 border-b border-grayLight pb-2 text-primaryDark">
        From Our Blog
      </h3>
      <ul className="space-y-4 text-gray-700 grid md:grid-cols-2 gap-3">
        {blogItems.map((item, index) => (
          <li
            key={index}
            className={`flex items-start gap-4 cursor-pointer transition-colors duration-200 group ${item.hoverColor}`}
          >
            <div className="mt-1 ">{item.icon}</div>
            <div>
              <h4 className="text-[0.8rem] font-semibold mb-1 group-hover:underline">
                {item.title}
              </h4>
              <p className="text-sm leading-snug text-gray">{item.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
</>
  );
};

export default BlogDrop;
