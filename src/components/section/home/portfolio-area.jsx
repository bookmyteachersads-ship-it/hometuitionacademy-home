import Image from "next/image";
import Link from "next/link";
import React from "react";
import { homePageContent } from "../../../../public/db/contents.home";

const PortfolioArea = () => {
  const { portfolio } = homePageContent;
  const { heading, description, action = {} } = portfolio;
  return (
    <section className="w-full flex flex-col  gap-10 xl:gap-12 py-8 lg:py-10  px-5 sm:px-2 bg-gray-50">
      <div className="container grid grid-cols-1 xl:grid-cols-3 gap-5 xl:gap-7">
        {/* content  */}
        <div className="w-full flex flex-col gap-4">
          <h2 className="heading">{heading} </h2>

          <p className="description text-sm sm:text-md xl:text-base mt-3">
            {description}
          </p>

          <div className="hidden xl:block">
            <Link
              href={action?.route}
              className="primary-btn-md w-fit mx-auto xl:mx-0 mt-3"
            >
              {action?.label}
            </Link>
          </div>
        </div>

        {/* card  */}
        <div className="xl:col-span-2 w-full flex flex-col gap-4">
          <div className="p-5 bg-primaryLightest w-full grid sm:grid-cols-3 gap-5 items-center">
            <Image
              src="/assets/projects/dummy-project.jpeg"
              alt="Picture of the author"
              width={400}
              height={400}
            />
            <div className="w-full xl:col-span-2 flex flex-col gap-3">
              <h3 className="text-lg font-bold text-meteoriteDark2">
                Solving Product Handling Challenges with a CMS for a
                Manufacturing Firm
              </h3>
              <p className="text-md">
                <span className="font-bold text-primary">4X</span> Faster
                Product Discovery
              </p>{" "}
              <p className="text-md">
                <span className="font-bold text-primary">100%</span> Faster
                Adoption Across Teams
              </p>
              <Link
                href="#"
                title="read more"
                className="text-black font-semibold text-md underline"
              >
                Read more
              </Link>
            </div>
          </div>
        </div>

        {/* <div className="xl:hidden">
          <Link
            href="/contact-us"
            className="primary-btn-md w-fit mx-auto xl:mx-0 mt-3"
          >
            View All Case Studies
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default PortfolioArea;
