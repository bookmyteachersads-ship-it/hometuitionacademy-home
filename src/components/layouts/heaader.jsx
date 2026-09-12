"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ServiceDrop from "./dropdown-items/service-dropdown";
import ExpertiseDrop from "./dropdown-items/expertise-dropdown";
import DrawerMenu from "./drarwer-menu";
import BlogDrop from "./dropdown-items/BlogDrop";
import { usePathname } from "next/navigation";
import TechnologiesDrop from "./dropdown-items/TechnologiesDrop";
import WorkDrop from "./dropdown-items/WorkDrop";
import AboutDrop from "./dropdown-items/AboutDrop";
import WhySgweppDrop from "./dropdown-items/WhySgweppDrop";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchBlogsByCategories,
  fetchBlogsByTypes,
} from "~/lib/redux/slices/blog-slice";
import { fetchServicesByCategories } from "~/lib/redux/slices/menu-slice";

export const Header = ({ currentTheme = "", toggleTheme }) => {
  const [currentDropdown, setCurrentDropdown] = useState({
    element: null,
    status: false,
    index: null,
  });
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();

  const header_menu_data = [
    {
      has_dropdown: true,
      label: "Services",
      route: "#",
      dropdown: <ServiceDrop />,
    },
    {
      has_dropdown: true,
      label: "Expertise",
      route: "#",
      dropdown: <ExpertiseDrop />,
    },
    // {
    //   has_dropdown: true,
    //   label: "Technologies",
    //   route: "#",
    //   dropdown: <TechnologiesDrop />,
    // },
    {
      has_dropdown: true,
      label: "Why Home Tuition Academy",
      route: "#",
      dropdown: <WhySgweppDrop />,
    },
    // {
    //   label: "Work",
    //   route: "/our-work",
    // },
    {
      // has_dropdown: true,
      label: "Blog",
      route: "/blog",
      // dropdown: <BlogDrop />,
    },
    // {
    // has_dropdown: true,
    // label: "Case Studies",
    // route: "/case-studies",
    // dropdown: <BlogDrop />,
    // },
    {
      // has_dropdown: true,
      label: "About",
      route: "/about-us",
      // dropdown: <AboutDrop />,
    },
  ];

  useEffect(() => {
    setIsOpen(false);
    setCurrentDropdown({ element: null, status: false, index: null });
  }, [path]);

  const dispatch = useDispatch();

  // fetching post list by type filter
  useEffect(() => {
    dispatch(
      fetchBlogsByTypes({
        types: ["focus", "solutions", "service-excellence"],
        filters: { limit: 6 },
      }),
    );
  }, [dispatch]);

  // fetching post list by type filter
  useEffect(() => {
    dispatch(
      fetchBlogsByCategories({
        categories: [
          "frontend-technologies",
          "data-infrastructure",
          "backend-cloud",
          "mobile-app-development",
        ],
        filters: { limit: 6 },
      }),
    );
  }, [dispatch]);

  // get service list cat wise

  useEffect(() => {
    const categorySlugs = [
      "home-tuition-for-competitive-exam",
      "home-tuition-for-post-graduation",
      "home-tuition-for-under-graduation",
      "home-tuition-for-diploma",
      "home-tuition-for-college",
      "home-tuition-for-school-tuition"
    ];
    dispatch(fetchServicesByCategories({ categories: categorySlugs }));
  }, [dispatch]);

  return (
    <>
      <DrawerMenu
        data={header_menu_data}
        isOpen={isOpen}
        close={() => setIsOpen(false)}
        toggleTheme={toggleTheme}
        currentTheme={currentTheme}
      />
      <header
        onMouseLeave={() =>
          setCurrentDropdown({ element: null, status: false, index: null })
        }
        className="flex flex-col "
      >
        <div className=" border-b border-whiteBlue bg-white">
          <div className="container flex flex-row items-center justify-between py-5 sm:py-6 xl:py-0 px-5 xl:px-2 ">
            <Link href="/">
              <Image
                alt="header-logo"
                src="/assets/hometuitionlogo.png"
                height={120}
                width={190}
                className="w-[120px] sm:w-[170px]"
              />
            </Link>

            <nav className="hidden xl:flex flex-row items-center gap-5 ">
              <ul className="flex flex-row items-center">
                {header_menu_data.map((nav, index) => {
                  const { label, route = "#", has_dropdown, dropdown } = nav;
                  const isActiveDropdown =
                    currentDropdown.index === index && currentDropdown.status;

                  return (
                    <li
                      key={index}
                      onMouseEnter={() =>
                        setCurrentDropdown({
                          element: dropdown,
                          status: true,
                          index: index,
                        })
                      }
                      className="group relative cursor-pointer px-4 py-6 text-[14px] font-semibold text-dark hover:text-primary transition-all duration-300 ease-in-out"
                    >
                      <Link href={route} className="flex items-center gap-1">
                        <span className="text-xs">{label}</span>
                        <span
                          className={`transition-transform duration-300 ${
                            isActiveDropdown ? "rotate-180" : "rotate-0"
                          } ${dropdown ? "inline-block" : "hidden"}`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <Link href="/contact-us" className="primary-btn-sm">
                Contact us
              </Link>
            </nav>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden text-xl text-black"
              aria-label="Toggle menu"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 20 20"
                aria-hidden="true"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {currentDropdown.status && currentDropdown.element && (
          <div className="hidden xl:block container transition-all duration-300 ease-in-out">
            <div className="pt-2">{currentDropdown.element}</div>
          </div>
        )}
      </header>
    </>
  );
};
