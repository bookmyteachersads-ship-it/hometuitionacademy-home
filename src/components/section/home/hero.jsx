"use client";
import Image from "next/image";
import Link from "next/link";
// import Lottie from "lottie-react";
import { homePageContent } from "../../../../public/db/contents.home";
// import HeroAnimation from "../../../../public/assets/heo-animation.json";
const Hero = () => {
  const { hero } = homePageContent;
  const { heading, description, action = {} } = hero;
  return (
    <section className="relative overflow-hidden w-full pt-[25%] sm:pt-[20%] xl:pt-[7%]">
      <div className="container grid gap-4 xl:gap-0 xl:grid-cols-2 px-5 sm:px-2 items-center">
        <div className="w-full flex flex-col gap-6 text-center xl:text-start">
          <h1 className="text-[1.8rem] sm:text-[1.5rem] xl:text-[2.5rem] text-meteoriteDark2 font-bold leading-[1.2]">
            {heading}
          </h1>

          <p className="text-sm font-medium tracking-wide text-meteoriteDark">
            {description}
          </p>

          <Link
            href={action?.route}
            className="primary-btn-sm  w-fit mx-auto xl:mx-0"
          >
            {action?.label}{" "}
          </Link>
        </div>
        <div className="">
          <Image
            alt="hero-image-Itsoftworld"
            title="Itsoftworld"
            height={400}
            width={400}
            src="/assets/hero.png"
            className="mx-auto w-[95%] sm:w-[60%] xl:w-[80%]  bg-cover"
          />
        </div>
        {/* <Lottie
          animationData={HeroAnimation}
          loop={true}     
          className="mx-auto w-[90%] sm:w-[60%] xl:w-[80%]"
        /> */}
      </div>
    </section>
  );
};

export default Hero;
