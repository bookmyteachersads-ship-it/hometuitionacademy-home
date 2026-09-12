import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceNotFound = () => {
  return (
    <section className="bg-white">
      <div className="container min-h-screen px-6 py-12 mx-auto flex flex-col lg:flex-row justify-center lg:items-center lg:gap-12">
        <div className="wf-ull lg:w-1/2">
          <p className="text-sm font-medium text-primary">404 error</p>
          <h1 className="mt-3 text-2xl font-semibold text-meteoriteDark2 md:text-3xl">
            Page not found
          </h1>
          <p className="mt-4 text-gray">
            Sorry, the page you are looking for doesn&apos;t exist.Here are some
            helpful links:
          </p>

          <div className="flex items-center mt-6 gap-x-3">
            <Link
              href="/"
              className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto hover:bg-gray-800 bg-gray-900 hover:bg-gray-100 text-gray-200 border-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 rtl:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>

              <span>Go back</span>
            </Link>

            <Link
              href="/"
              className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-primary rounded-lg shrink-0 sm:w-auto hover:bg-primaryDark hover:bg-primary "
            >
              Take me home
            </Link>
          </div>
        </div>

        <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0">
          <Image
            height={50}
            width={150}
            className="w-full max-w-lg lg:mx-auto"
            src="/assets/pattern/404-illustration.svg"
            alt="404-illustration"
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceNotFound;
