import Link from "next/link";
import React from "react";
import { homePageContent } from "../../../../public/db/contents.home";

const CtaArea = () => {
  const { ctaOne } = homePageContent;
  const { heading, description, action = {} } = ctaOne;
  return (
    <section className="w-full flex-center flex-col text-center gap-4 sm:gap-5 xl:gap-6 py-8 lg:py-10 xl:py-10 px-5 sm:px-2">
      <h2 className="heading ">{heading}</h2>

      <p className="text-md sm:text-lg lg:text-xl xl:text-2xl  text-black">
        {description}{" "}
      </p>
      <Link
        href={action?.route}
        className="primary-btn-md w-fit mx-auto xl:mx-0"
      >
        {action?.label}
      </Link>
    </section>
  );
};

export default CtaArea;
