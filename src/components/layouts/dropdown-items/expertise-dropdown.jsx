"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { limitTextLength } from "~/utils/limitText";

const ExpertiseDrop = () => {
  // const [menus, setMenus] = useState([
  //   {
  //     label: "focus",
  //     route: "#",
  //     has_child: true,
  //     child: [
  //       { label: "Software Product", route: "#" },
  //       { label: "Dedicated Teams", route: "#" },
  //       { label: "Software Architecture", route: "#" },
  //       { label: "Enterprise Mobility", route: "#" },
  //       { label: "Cloud-Native Development", route: "#" },
  //       { label: "App Modernization", route: "#" },
  //       { label: "DevOPS", route: "#" },
  //     ],
  //   },
  //   {
  //     label: "solutions",
  //     route: "#",
  //     has_child: true,
  //     child: [
  //       { label: "Learning Management Systems", route: "#" },
  //       { label: "Field Services Management", route: "#" },
  //       { label: "HRMS", route: "#" },
  //       { label: "Healthcare IT", route: "#" },
  //       { label: "Web to Print", route: "#" },
  //       { label: "CRM", route: "#" },
  //       { label: "Insurance", route: "#" },
  //     ],
  //   },
  // ]);
  const [menus, setMenus] = useState([
    {
      label: "focus",
      route: "focus",
      has_child: true,
      child: [],
    },
    {
      label: "solutions",
      route: "solutions",
      has_child: true,
      child: [],
    },
    {
      label: "Service Excellence",
      route: "service-excellence",
      has_child: true,
      child: [],
    },
  ]);
  const { postListTypeWise, dataLoading, error } = useSelector(
    (state) => state.blog,
  );

  useEffect(() => {
    setMenus((prevMenus) =>
      prevMenus.map((menu) => ({
        ...menu,
        child: (postListTypeWise[menu.route] || []).map((blog) => ({
          label: blog.shortTitle || blog.title,
          route: `/blog/${blog?.slug}`,
        })),
      })),
    );
  }, []);

  return (
    <section className="w-full bg-white shadow-xl rounded-lg py-6  border-t border-blight">
      <div className="container  grid sm:grid-cols-2 xl:grid-cols-3 gap-4  px-4 md:px-0">
        {menus?.map((data, index) => {
          const { label, route, child, has_child } = data;
          return (
            <div key={index} className="w-full flex flex-col gap-3">
              <h3 className="menu-item-md">{label}</h3>
              <ul className="w-full flex flex-col gap-3 bg-grayLightest p-3">
                {child?.map((childMenu, index) => {
                  return (
                    <Link key={index} href={childMenu?.route}>
                      <li className="first-letter:capitalize text-sm md:text-sm text-gray hover:text-primary transition-all duration-200">
                        {limitTextLength(childMenu?.label, 100)}
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ExpertiseDrop;
