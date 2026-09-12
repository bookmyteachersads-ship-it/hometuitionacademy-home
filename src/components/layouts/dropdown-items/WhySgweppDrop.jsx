"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

const whyRadixItems = [
  {
    title: "Our Vision & Mission",
    desc: "Guided by purpose, driven by excellence",
    href: "/why-hometuition/our-vision",
    icon: "https://d2ms8rpfqc4h24.cloudfront.net/our_vision_and_mission_902dd85d25.svg",
  },
  {
    title: "Innovation & R&D",
    desc: "Advancing personalized learning methods",
    href: "/why-hometuition/innovation",
    icon: "https://d2ms8rpfqc4h24.cloudfront.net/innovation_and_r_and_d_0b50dd7d5a.svg",
  },
  // {
  //   title: "Global Impact & Partnerships",
  //   desc: "Expanding horizons, building together",
  //   href: "/why-hometuition/partners",
  //   icon: "https://d2ms8rpfqc4h24.cloudfront.net/global_impact_and_partnerships_ac3b2639c1.svg",
  // },
  {
    title: "Our Talent Network",
    desc: "Experienced educators, trainers & mentors",
    href: "/why-hometuition/talent-development",
    icon: "https://d2ms8rpfqc4h24.cloudfront.net/talent_and_training_117686b201.svg",
  },
  {
    title: "Our Approach & Methodology",
    desc: "Precision in process, perfection in execution",
    href: "/why-hometuition/our-approach",
    icon: "https://d2ms8rpfqc4h24.cloudfront.net/our_approach_and_methodology_f32d61066c.svg",
  },
  // {
  //   title: "Awards & Certifications",
  //   desc: "Recognized for excellence, certified for trust",
  //   href: "/why-hometuition/our-awards",
  //   icon: "https://d2ms8rpfqc4h24.cloudfront.net/awards_and_certifications_89ff2bac11.svg",
  // },
  // {
  //   title: "Leadership & Culture",
  //   desc: "Visionary leadership, people-first culture",
  //   href: "/why-hometuition/our-culture",
  //   icon: "https://d2ms8rpfqc4h24.cloudfront.net/leadership_and_culture_411bf3eda2.svg",
  // },
];

const WhySgweppDrop = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-end">
      <div className=" w-[700px] bg-white shadow-lg rounded-lg p-5  border-t border-whiteBlue">
        <p className="text-base font-medium px-4 py-2  flex  items-center gap-2">
          Why Home Tuition Academy
          <span className="text-primary text-xl">
            <LiaLongArrowAltRightSolid />
          </span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
          {whyRadixItems.map(({ title, desc, href, icon }, index) => (
            <Link
              href={href}
              key={index}
              className="flex items-start gap-3 hover:bg-primaryLightest p-3 rounded-lg transition"
            >
              {/* <div className="p-2 rounded bg-primaryLightest">
                <Image src={icon} alt={title} width={24} height={24} />
              </div> */}
              <div>
                <p className="text-sm font-semibold text-gray-800">{title}</p>
                <p className="text-xs text-gray-600">{desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhySgweppDrop;
