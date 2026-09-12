"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const DrawerMenu = ({
  isOpen,
  close,
  data,
  themeList,
  toggleTheme,
  currentTheme,
}) => {
  const [activeDrops, setActiveDrops] = useState([]);
  const handleDropdown = (index) => {
    const updated = activeDrops?.filter((state) => state != index);
    if (!activeDrops?.includes(index)) {
      setActiveDrops((prev) => [...prev, index]);
    } else {
      setActiveDrops(updated);
    }
  };
  return (
    <section
      className={`xl:hidden fixed inset-y-0 left-0 bg-white shadow transform transition-transform duration-100 z-30 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } w-full h-screen`}
    >
      <div className="relative w-full h-full overflow-y-auto">
        <div className="flex flex-col">
          <div className="container flex flex-row items-center justify-between py-4 sm:py-6 px-5 xl:px-2">
            <Link href="/">
              <Image
                alt="header-logo"
                // src="/assets/header-logo.png"
                src="/assets/header-logo.png"
                height={120}
                width={190}
                className="w-[140px] sm:w-[180px] object-contain"
              />
            </Link>

            <button onClick={close} className="text-xl text-black text-balance">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="0"
                viewBox="0 0 15 15"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="flex flex-col container">
          <ul>
            {data?.map((menu, index) => {
              const { label, route, has_dropdown, dropdown } = menu;
              return (
                <li
                  key={index}
                  className={`flex flex-col gap-2 w-full border-b border-grayLight px-5 py-2.5`}
                >
                  <div className="w-full flex flex-row items-center justify-between">
                    <Link href={route} className="w-fit">
                      <p
                        className={`${
                          activeDrops?.includes(index)
                            ? "text-primary"
                            : "text-grayDark"
                        } font-semibold  text-lg first-letter:capitalize transition-all duration-200`}
                      >
                        {label}
                      </p>
                    </Link>

                    {has_dropdown && (
                      <span
                        onClick={() => has_dropdown && handleDropdown(index)}
                        className={`${
                          activeDrops?.includes(index)
                            ? "rotate-180 text-primary"
                            : "text-grayDark"
                        }  transition-all duration-300 text-md `}
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 512 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                        </svg>
                      </span>
                    )}
                  </div>

                  {activeDrops?.includes(index) && has_dropdown && dropdown}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DrawerMenu;
