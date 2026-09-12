"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  explore_links,
  header_menu_data,
  quick_links,
} from "../../../public/db/navigation";
import { subscribeNewsletter } from "~/utils/api";
import { errorToast, successToast } from "~/utils/toastMessage";

export const Footer = () => {
  const [formData, setFormData] = useState({ email: "", source: "website" });
  const [loading, setLoading] = useState(false);
  const services = [
    "School Tuition",
    "College",
    "Diploma",
    "Under Graduation",
    "Post Graduation",
    "Competitive Exam",
    "Language Studies",
    "English Speaking",
    "Foreign Language",
    "Religious Studies",
    "Computer/IT",
    "Music",
    "Dance",
    "Photography/Film Making",
    "Theatre/Acting",
    "Industrial Training",
    "Tailoring / Fashion Design",
    "Special Education",
    "Art & Craft",
    "Regional Language",
  ];

  const socialLinks = [
    {
      name: "instagram",
      route: "https://www.instagram.com/hometuitionnearme_25",
      icon: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 448 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
        </svg>
      ),
    },
    {
      name: "facebook",
      route:
        "https://www.facebook.com/people/HomeTuition-NearMe/61574096812956/",
      icon: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 320 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
        </svg>
      ),
    },
    {
      name: "X",
      route: "https://x.com/HTAMumbai",
      icon: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
        </svg>
      ),
    },
    {
      name: "pintrest",
      route: "#",
      //      route: "https://in.pinterest.com/itsoftworld",
      icon: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 496 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"></path>
        </svg>
      ),
    },
    {
      name: "linkedin",
      route: "#",
      //      route: "https://www.linkedin.com/company/sg-webapp-techniques-private-limited",
      icon: (
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ),
    },
  ];

  const handleSubscribe = async (event, data) => {
    event.preventDefault();
    setLoading(true);
    try {
      const res = await subscribeNewsletter(data);
      setFormData({ email: "" });
      setLoading(false);
      successToast("Thanks for subscribing");
    } catch (error) {
      errorToast("Failed to subscribe!");
      setLoading(false);
    }
  };

  return (
    <footer className="relative  flex flex-col gap-5 sm:gap-10 w-full overflow-hidden bg-grayLight pt-12 sm:pt-16 xl:pt-20 ">
      {/* Slider Outer container */}
      <div className="relative overflow-hidden py-3">
        <div className="flex w-full space-x-2 sm:space-x-5 animate-scroll whitespace-nowrap">
          {/* Duplicate items for infinite scroll */}
          {services.map((item, index) => (
            <div
              key={index}
              className="px-[10px] sm:px-[17px] py-[8px] sm:py-[12px] bg-white rounded-full  text-gray text-[13px] sm:text-[16px] flex items-center space-x-2"
            >
              <span className="text-balance text-md sm:text-xl">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"></path>
                </svg>
              </span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* menu container  */}

      <div className="container grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 lg:gap-0 px-5 sm:px-2">
        {/* company  */}
        <div className="col-span-2 sm:col-span-1  flex flex-col gap-5 sm:gap-7">
          <Image
            alt="header-logo"
            src="/assets/hometuitionlogo.png"
            height={110}
            width={170}
            className="object-contain"
          />

          <div className="flex flex-col gap-4">
            <p className="text-md text-gray-500 ">
              At Home Tuition Academy, we believe that every student deserves
              the right teacher. Our mission is to make personalized learning
              accessible, effective, and convenient for every learner.
            </p>

            <div className="flex flex-col gap-2">
              <Link
                href="tel:+917715889123"
                className="flex flex-row items-center gap-1"
              >
                <span className="text-lg text-balance text-primary">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"></path>
                  </svg>
                </span>
                <span className="text-[13px] text-gray-600">
                  | +91 77158 89123
                </span>
              </Link>
              <Link
                target="_blank"
                href="mailto:hometuitionsnearme@gmail.com"
                className="flex flex-row items-center gap-1"
              >
                <span className="text-lg text-balance text-primary">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"></path>
                  </svg>
                </span>
                <span className="text-[13px] text-gray-600">
                  | hometuitionsnearme@gmail.com
                </span>
              </Link>
              {/* <Link
                href="mailto:rupsa.ghosh7766@gmail.com"
                className="flex flex-row items-center gap-1"
              >
                <span className="text-lg text-balance text-primary">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"></path>
                  </svg>
                </span>
                <span className="text-[13px] text-gray-600">
                  | rupsa.ghosh7766@gmail.com
                </span>
              </Link> */}
            </div>
          </div>
        </div>

        {/* navigation  */}
        <div className="flex flex-col gap-5 sm:gap-7 lg:pl-10 xl:pl-20">
          <h4 className="text-gray-700 text-md sm:text-xl font-semibold">
            Explore
          </h4>

          <ul className="flex flex-col gap-4">
            {explore_links?.map((nav, index) => {
              const { label, route, has_dropdown, sub_menus } = nav;
              return (
                <li
                  key={index}
                  className="hover:pl-1 first-letter:capitalize text-sm sm:text-md  text-gray-500 hover:text-primary transition-all duration-200 ease-in-out"
                >
                  <Link href={route}>{label}</Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* other pages  */}
        <div className="flex flex-col gap-5 sm:gap-7 sm:pl-5 xl:pl-10">
          <h4 className="text-gray-700 text-md sm:text-xl font-semibold">
            Quick links
          </h4>

          <ul className="flex flex-col gap-4">
            {quick_links?.map((nav, index) => {
              const { label, route, has_dropdown, sub_menus } = nav;
              return (
                <li
                  key={index}
                  className="hover:pl-1 first-letter:capitalize text-sm sm:text-md  text-gray-500 hover:text-primary transition-all duration-200 ease-in-out"
                >
                  <Link href={route}>{label}</Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/*  Newsletter  */}
        <div className="col-span-2 sm:col-span-1 flex flex-col gap-5 sm:gap-7">
          <h4 className="text-gray-700 text-md sm:text-xl font-semibold">
            Our Newsletter
          </h4>
          {/* input  */}
          <form
            onSubmit={(e) => handleSubscribe(e, formData)}
            className="shadow-sm rounded-full bg-white h-[60px] px-1.5 flex flex-row justify-between items-center gap-3"
          >
            <div className="flex flex-row items-center gap-2 pl-3">
              <span className="text-primary text-lg ">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"></path>
                </svg>
              </span>

              <input
                value={formData?.email ?? ""}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
                type="email"
                required
                className=" text-[14px]"
                placeholder="Business email address"
                disabled={loading}
              />
            </div>

            <button
              disabled={loading}
              className="h-[50px] w-[50px] disabled:cursor-not-allowed disabled:opacity-50 bg-primary text-white text-md text-balance  rounded-full flex-center"
            >
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </form>
          <h4 className="text-gray-700 text-md sm:text-xl font-semibold">
            Social media
          </h4>

          <ul className="flex flex-row gap-2">
            {socialLinks?.map((social, index) => (
              <li key={index}>
                <Link
                  title={social?.name}
                  target="_blank"
                  href={social?.route}
                  className="w-[50px] h-[50px] shadow-xs rounded-full bg-white text-gray-400 text-xl flex-center hover:bg-primary transition-all duration-200 ease-in-out hover:text-white"
                >
                  {social?.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* credit  */}

      <div className="text-xs sm:text-sm border-t border-grayBorder py-4 sm:py-7 text-center text-gray-400 ">
        Copyright ©2026 All rights reserved Home Tuition Academy
      </div>
    </footer>
  );
};
