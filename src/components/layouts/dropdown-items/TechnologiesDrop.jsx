"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaReact } from "react-icons/fa";
import { useSelector } from "react-redux";
import { limitTextLength } from "~/utils/limitText";

const TechnologiesDrop = () => {
  const [menus, setMenus] = useState([
    {
      label: "Frontend Technologies",
      slug: "frontend-technologies",
      child: [],
    },
    {
      label: "Backend & Cloud",
      slug: "backend-cloud",
      child: [],
    },

    {
      label: "Mobile App Development",
      slug: "mobile-app-development",
      child: [],
    },
    {
      label: "Data & Infrastructure",
      slug: "data-infrastructure",
      child: [],
    },
  ]);
  const { menusByCategory, dataLoading, error } = useSelector(
    (state) => state.blog,
  );
  useEffect(() => {
    if (!menusByCategory || Object.keys(menusByCategory).length === 0) return;

    setMenus((prevMenus) =>
      prevMenus.map((menu) => ({
        ...menu,
        child: (menusByCategory[menu.slug] || []).map((blog) => ({
          label: blog.shortTitle || blog.title,
          route: `/blog/${blog?.slug}`,
        })),
      })),
    );
  }, [menusByCategory]);

  return (
    <div className="w-full p-8 bg-white rounded-xl shadow-xl border-t border-whiteBlue grid md:grid-cols-4 grid-cols-1 gap-8">
      {menus?.map(({ label, slug, child }, index) => {
        return (
          <div key={index}>
            <h4 className="text-[0.9rem] font-bold mb-5 border-b border-primaryLight pb-3 text-dark">
              {label}
            </h4>
            <ul className="space-y-4 text-gray-700 text-sm md:text-sm">
              {child?.map((post, index) => {
                return (
                  <li key={index}>
                    <Link
                      href={post?.route}
                      className="flex items-center gap-3 hover:text-primary cursor-pointer transition-colors"
                    >
                      {/* <FaReact className="text-primary" />{" "} */}
                      {limitTextLength(post?.label, 50)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default TechnologiesDrop;
