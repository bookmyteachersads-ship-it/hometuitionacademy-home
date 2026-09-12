"use client";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import TechnologiesArea from "../home/technologies-area";

import FaqArea from "../home/faq-area";
import { limitTextLength } from "~/utils/limitText";
const Card = ({ index, review, name, designation, rating }) => {
  return (
    <div
      className={`${
        index == 1 && "md:border-x border-grayBorder"
      } w-full flex flex-col gap-4 px-5 py-1`}
    >
      <div className="text-md text-yellow-400 flex flex-row items-center gap-1">
        {Array.from(Array(rating))?.map((rate, index) => (
          <svg
            key={index}
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 576 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
          </svg>
        ))}
      </div>

      <span className="text-[15px]">{review}</span>
      <div className="flex flex-col">
        <span className="font-semibold">{name}</span>
        <span className="text-xs text-gray">{designation}</span>
      </div>
    </div>
  );
};

const ProjectCard = ({
  title = "A Dynamic eLearning Web App Hits a 65%+ Course Completion Rate",
  route = "#",
  thumbnail = "/assets/projects/dummy-project.jpeg",
  description,
}) => {
  return (
    <div className="w-full flex flex-col gap-3 sm:gap-5">
      <Image
        priority={false}
        src={thumbnail}
        width={400}
        height={400}
        className="rounded-xl w-full object-cover aspect-video"
        alt="project -title"
        quality={50}
      />

      <div>
        <h3 className="font-semibold text-black text-base sm:text-lg">
          {title}
        </h3>

        <p className="text-[13px] text-gray">
          {limitTextLength(description || "", 150)}
        </p>
      </div>

      <Link
        href={route}
        className="w-fit  hover:pl-2 transition-all duration-100 ease-linear border-l-4 border-transparent hover:border-primaryLight hover:rounded"
      >
        <span className="text-primary font-medium text-sm sm:text-md">
          Read the Case Study
        </span>
      </Link>
    </div>
  );
};

const ServiceCard = ({ index, lastIndex, route = "#", title, description }) => {
  return (
    <div
      className={`${index == 0 ? "pb-5" : "py-5"} ${
        !lastIndex && "border-b"
      } border-grayBorder w-full flex flex-col gap-4`}
    >
      {lastIndex}
      <Link href={route} className="w-fit mx-auto sm:mx-0">
        <h3 className="text-center sm:text-start border-l-0 border-l-transparent hover:border-l-4 hover:border-danger hover:pl-2 hover:rounded hover:text-danger font-bold text-base sm:text-lg text-meteoriteDark transition-all duration-100 ease-linear">
          {title}
        </h3>
      </Link>

      <p className="text-sm sm:text-base text-center sm:text-start">
        {description}
      </p>
    </div>
  );
};

const MethodologyCard = ({ title, description }) => {
  return (
    <div className="w-full flex flex-col gap-1 sm:gap-2 p-3 sm:p-4 border-t-2 border-primaryLight">
      <h3 className="text-xl sm:text-2xl font-semibold">{title}</h3>
      <p className="description text-sm sm:text-md xl:text-base mt-3">
        {description}
      </p>
    </div>
  );
};
const SingleService = ({
  serviceDetails = {},
  preText = "",
  postText = "",
  heading,
  subHeading,
  description,
}) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2.35,
          slidesToScroll: 1,
        },
      },
    ],
    arrows: false,
  };

  const facts = [
    {
      count: "91.2%",
      text: "Average Client Experience Ratio",
    },
    {
      count: "8/10",
      text: "Times Recommended for Quality Execution",
    },
    {
      count: "88%",
      text: "Trust Index© Score for Tech Projects",
    },
  ];

  const {
    action = {},
    reviews = [],
    clients = [],
    projects = [],
    service = {},
    strategy = {},
    faqs = [],
    promotion = {},
    projectHeading,
  } = serviceDetails;

  const { feature = {} } = strategy;

  return (
    <section className="w-full min-h-screen ">
      {/* hero  */}
      <div className="px-5 sm:px-2 pt-[40%] sm:pt-[20%] xl:pt-[15%] 2xl:pt-[18%] bg-primaryLightest pb-12 lg:pb-16">
        <div className="mx-auto w-full sm:w-[90%] lg:w-[85%] xl:w-[65%] flex flex-col gap-16">
          <div className="w-full flex-center flex-col gap-3 text-center">
            <h1 className="text-[2rem] sm:text-[2.3rem] lg:text-[2.7rem] text-meteoriteDark2 font-bold leading-[1.25] capitalize">
              {heading}
            </h1>

            <h2 className="font-bold text-sm sm:text-base text-black">
              {subHeading}
            </h2>
            <p className="text-sm sm:text-base text-black">{description}</p>

            <Link
              href={action?.route || "/contact-us"}
              className="primary-btn-md w-fit mx-auto xl:mx-0 mt-6"
            >
              {action?.label + " →" || "Contact us →"}
            </Link>
          </div>

          {/* reviews  */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0">
            {reviews?.map((data, index) => {
              const { review, rating, designation, name } = data;
              return (
                <Card
                  index={index}
                  review={review}
                  designation={designation}
                  name={name}
                  rating={rating}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* brands  */}
      <div className="mx-auto w-full sm:w-[90%] lg:w-[85%] xl:w-[65%] py-10">
        <Slider
          {...settings}
          className="outline-none rounded-full  overflow-hidden"
        >
          {[
            ...clients,
            ...clients,
            ...clients,
            ...clients,
            ...clients,
            ...clients,
          ]?.map((data, index) => (
            <div key={index} className="px-1 sm:px-3 outline-none">
              <div className="capitalize rounded-full px-3 sm:px-5 py-4 font-semibold bg-primaryLightest outline-none text-md sm:text-lg text-primary flex-center flex-row gap-2">
                <Image
                  src={data?.logo?.url}
                  height={50}
                  width={50}
                  quality={50}
                  priority={true}
                  alt="ghjk"
                  title={data?.name}
                  className="h-[30px] object-contain"
                />

                <span>{data?.name}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* promote  */}
      <div className="mx-auto w-full sm:w-[90%] lg:w-[85%] xl:w-[65%] py-5 px-5 md:px-0">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="text-center sm:text-start">
            <h2 className="heading">{promotion?.title}</h2>
          </div>
          <div className="flex items-center md:pl-5 md:border-l border-grayBorder">
            <p className="text-sm sm:text-base text-black text-center sm:text-start">
              {promotion?.description}
            </p>
          </div>
        </div>
      </div>

      {/* project - area  */}
      <div className="mx-auto w-full sm:w-[90%] lg:w-[85%] xl:w-[65%] py-16 px-5 md:px-0">
        <div className="w-full flex flex-col gap-5 sm:gap-10 lg:gap-14">
          {/* <h2 className="text-black heading text-center ">
            {projectHeading || "Our Standout Projects"}
          </h2> */}
          <div className="w-full grid sm:grid-cols-2 gap-5">
            {projects?.map((project) => {
              const { _id, title, slug, description, thumbnail } = project;
              return (
                <ProjectCard
                  title={title}
                  route={slug || "#"}
                  thumbnail={thumbnail?.url}
                  key={_id}
                  description={description}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* services area  */}
      <div className="bg-primaryLightest px-5 sm:px-2 py-12 lg:py-16">
        <div className="mx-auto w-full sm:w-[90%] lg:w-[85%] xl:w-[65%] flex flex-col gap-16">
          <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-5 xl:gap-7">
            <div className="w-full flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-bold text-black text-center sm:text-start">
                {service?.heading}
              </h2>

              <p className="description text-sm sm:text-md xl:text-base mt-3 text-center sm:text-start">
                {service?.description}
              </p>
            </div>

            <div className="flex flex-col">
              {service?.serviceList?.map((service, index) => {
                const { title, description, route } = service;
                return (
                  <ServiceCard
                    key={index}
                    title={title}
                    description={description}
                    route={route}
                    index={index}
                    lastIndex={index === service?.serviceList?.length - 1}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* <TechnologiesArea heading="Tech Expertise of Our People Tested Across 4200+ Projects" /> */}

      {/* Methodologies area  */}
      {/* <section className="bg-primaryLightest px-5 sm:px-2 py-12 lg:py-16">
        <div className="mx-auto w-full sm:w-[90%] lg:w-[85%] xl:w-[65%]">
          <div className="w-full flex flex-col gap-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="w-full flex flex-col gap-3">
                <h2 className="text-2xl sm:text-3xl font-bold text-black">
                  {strategy?.heading}
                </h2>

                <p className="description text-sm sm:text-md xl:text-base mt-3">
                  {strategy?.description}
                </p>
              </div>

              {strategy?.heroImage?.url && (
                <Image
                  priority={false}
                  src={strategy?.heroImage?.url}
                  alt="hjk"
                  height={200}
                  width={300}
                  className="w-full xl:w-[80%] rounded-l-xl rounded-tr-xl rounded-br-[100px]"
                />
              )}
            </div>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-y-4 sm:gap-y-2 gap-x-4 xl:gap-x-16">
              {strategy?.strategyList?.map((method, index) => (
                <MethodologyCard
                  key={index}
                  title={method?.title}
                  description={method?.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA : 1  */}
      {/* <section className="w-full py-5 sm:py-14 xl:py-20 px-5 lg:px-0">
        <div className="mx-auto rounded-2xl xl:rounded-3xl flex-center text-center flex-col gap-5 w-full sm:w-[90%] lg:w-[85%] xl:w-[65%] bg-primaryLightest border border-primaryLight py-12 px-7 sm:px-10 lg:px-16">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold leading-[1.3]">
            Solve Customer Problems and Take Your Business to The Next Level
            with The Right Solutions Tailored to Your Requirements!
          </h2>

          <Link
            href="/contact-us"
            className="primary-btn-md w-fit mx-auto xl:mx-0 sm:mt-6"
          >
            Bring Maximum Value to Your Business →
          </Link>
        </div>
      </section> */}

      {/* choose it soft world */}
      {/* <div className="bg-grayLightest px-5 sm:px-2 py-12 lg:py-16">
        <div className="mx-auto w-full sm:w-[90%] lg:w-[85%] xl:w-[65%] flex flex-col gap-16">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5 xl:gap-7">
            <div className="w-full flex flex-col gap-4">
              <h2 className="text-3xl font-bold text-black">
                {feature?.heading}
              </h2>

              <p className="description text-sm sm:text-md xl:text-base mt-3">
                {feature?.description}
              </p>

              {feature?.heroImage?.url && (
                <Image
                  alt={feature?.heading}
                  priority={false}
                  src={feature?.heroImage?.url}
                  height={200}
                  width={300}
                  className="w-full rounded-l-xl rounded-tr-xl rounded-br-[20%]"
                />
              )}
            </div>

            <div className="flex flex-col">
              {feature?.featureList?.map((reason, index) => {
                const { title, description, route } = reason;
                return (
                  <ServiceCard
                    key={index}
                    title={title}
                    description={description}
                    route={route}
                    index={index}
                    lastIndex={feature?.featureList?.length - 1 === index}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div> */}

      {/* fact - area  */}
      {/* <section className="w-full mx-auto sm:w-[80%] lg:w-[70%] xl:w-[65%]  px-5 sm:px-2 py-5 sm:py-12 lg:py-16">
        <div className="w-full grid sm:grid-cols-3">
          {facts?.map((fact, index) => (
            <div
              key={index}
              className={`${
                index == 1 && "sm:border-x border-grayBorder"
              } w-full px-5 sm:px-7 py-4 flex flex-col xl:flex-row items-center gap-1 sm:gap-3 xl:gap-4`}
            >
              <h3 className="font-extrabold text-[2.3rem] sm:text-[2.5rem] bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                {fact?.count}
              </h3>

              <p className="text-sm font-medium text-center xl:text-start">
                {fact?.text}
              </p>
            </div>
          ))}
        </div>
      </section> */}

      {/* blogs  */}
      {/* <div className="bg-grayLightest px-5 sm:px-2 py-12 lg:py-16">
        <div className="mx-auto w-full sm:w-[90%] lg:w-[85%] xl:w-[65%]">
          <div className="w-full flex flex-col gap-5 sm:gap-10 lg:gap-14">
            <h2 className="text-black heading text-center ">
              Latest Insights on Web Application Development
            </h2>
            <div className="w-full grid sm:grid-cols-2 gap-5">
              <ProjectCard />
              <ProjectCard title="Advanced Healthcare Research Enabled by a Modernized Web App" />
            </div>
          </div>
        </div>
      </div> */}

      <FaqArea
        faqsList={faqs}
        heading="Frequently Asked Questions on Web App Development"
      />

      {/* CTA : 02  */}
      <section className="w-full py-5 sm:py-14 xl:py-20 px-5 lg:px-0">
        <div className="mx-auto rounded-2xl xl:rounded-3xl flex-center text-center flex-col gap-5 w-full sm:w-[90%] lg:w-[85%] xl:w-[65%] bg-primaryLightest border border-primaryLight py-12 px-7 sm:px-10 lg:px-16">
          <h2 className="text-2xl font-semibold">Get in Touch</h2>

          <p className="text-sm sm:text-md">
            We&apos;d love to hear about your child&apos;s learning goals and
            explore how we can build a brighter academic future together.
          </p>

          <Link
            href="/contact-us"
            className="primary-btn-md w-fit mx-auto xl:mx-0 sm:mt-6"
          >
            Let&apos;s Discuss Your Idea →
          </Link>
        </div>
      </section>
    </section>
  );
};

export default SingleService;
