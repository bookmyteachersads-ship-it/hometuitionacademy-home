"use client";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { IoMdCheckmark } from "react-icons/io";
import { BsArrowRight } from "react-icons/bs";

import Image from "next/image";
import React from "react";

import {
  Champions,
  Employee,
  HeroEmployee,
  Trengle,
  Cake,
  Employee2,
  GreatPlace,
  RadixHappy,
  FreshRoom,
  CoFounder,
  Inclusive,
  Radixweb,
  Deriving,
} from "../../../../public/assets/our-culture";

const data = [
  {
    title: " Future of Data",
    desc: " Out data Solutions are designed to build data integrity for your systems. We employ industry is best data engineering practices for warehousing and processing.",
  },
  {
    title: " Future of Automation",
    desc: " Out data Solutions are designed to build data integrity for your systems. We employ industry is best data engineering practices for warehousing and processing.",
  },
  {
    title: " Future of Sustainability",
    desc: " Out data Solutions are designed to build data integrity for your systems. We employ industry is best data engineering practices for warehousing and processing.",
  },
  {
    title: " Future of Work",
    desc: " Out data Solutions are designed to build data integrity for your systems. We employ industry is best data engineering practices for warehousing and processing.",
  },
  {
    title: " Future of Tech Ethiics",
    desc: " Out data Solutions are designed to build data integrity for your systems. We employ industry is best data engineering practices for warehousing and processing.",
  },
];

const card = [
  {
    img: Deriving,
    title:
      "Exploring Radixweb's Culture to Ensure Unbiased Opportunity for Every Talent",
    desc: "Read More",
  },
  {
    img: Inclusive,
    title: "How Radixweb Nurtures Success with an Inclusive Company Culture",
    desc: "Read More",
  },
  {
    img: Radixweb,
    title:
      "How Radixweb's Culture and Values Shape Up Next-Gen Leaders in the Organization",
    desc: "Read More",
  },
];

const OurCulture = () => {
  return (
    <main className="bg-white text-gray-800 mt-20">
      <section className="py-16 container px-5  md:gap-4 gap-10 md:px-0 grid md:grid-cols-2 grid-cols-1 items-center">
        <div>
          <h1 className="md:text-lg text-sm  font-bold  text-primary ">
            Our Culture
          </h1>
          <p className="text-2xl md:text-3xl text-black font-bold tracking-wide py-4 md:pr-16">
            Rewiring Your Approach towards Tech Innovation
          </p>
          <p className="text-[1rem] text-black font-medium tracking-wide md:pr-10">
            Building trust by fostering debate and navigating dissent. Helping
            businesses reach goals with humanized tech strategies.
          </p>
          <button className="bg-primary capitalize text-white rounded-sm text-[1rem] font-medium tracking-wide py-2.5 px-5 mt-6 flex justify-center items-center gap-2 hover:gap-4">
            Experience True Tech Integrity
            <span className="text-xl">
              <LiaLongArrowAltRightSolid />
            </span>
          </button>
        </div>
        <div className="relative w-full h-96 md:h-[360px]  md:pl-36">
          <Image
            src={HeroEmployee}
            alt="hero-employee"
            fill
            className="object-contain"
          />
        </div>
      </section>

      <section className=" bg-primary ">
        <div className="container  md:py-20 md:px-20 gap-7 px-5 py-10">
          <h1 className="text-white text-xl md:text-3xl  font-semibold  text-center">
            Constantly Advancing Responsible Tech Practice
          </h1>
          <p className="text-white text-[1rem] font-medium tracking-wide text-center md:px-32  pt-4">
            Led by visionaries, we thrive on integrating diverse capabilities in
            product engineering and AI automation to foster a fair and
            independent space for tech innovation.
          </p>
        </div>
      </section>

      <section className="py-16 container px-5  md:gap-4 gap-10 md:px-0 grid md:grid-cols-2 grid-cols-1 items-center">
        <div>
          <h1 className="text-2xl md:text-3xl text-black font-bold tracking-wide py-4 md:pr-16">
            Redefining Progress in Technology
          </h1>
          <p className="text-[1rem] text-black font-medium tracking-wide md:pr-10">
            We are governed by a set of core values – from fair practices to
            transparent development protocols, maintaining high standards of
            business conduct to building a high-performant, cross-functional
            team. We inspire businesses to move beyond the status-quo.
          </p>
          <p className="text-[1rem] text-black font-medium tracking-wide md:pr-10">
            We optimize processes and help enterprises build ground for
            innovation.
          </p>
          <button className="bg-primary capitalize text-white rounded-sm text-[1rem] font-medium tracking-wide py-2.5 px-5 mt-6 flex justify-center items-center gap-2 hover:gap-4">
            Ask for a Strategy Call
            <span className="text-xl">
              <LiaLongArrowAltRightSolid />
            </span>
          </button>
        </div>
        <div className="relative w-full h-96 md:h-[360px]  md:pl-36">
          <Image
            src={Trengle}
            alt="hero-employee"
            fill
            className="object-contain"
          />
        </div>
      </section>

      <section className="px-5 md:px-10 md:py-20 py-10">
        <div className="bg-primaryDark py-10 md:py-20 rounded-3xl px-5">
          <h1 className="text-xl md:text-3xl font-bold tracking-wide text-center text-white py-3 px-4">
            Our Team - Our Strength
          </h1>
          <div className="grid md:grid-cols-3 md:gap-5  container">
            <div className="relative w-full h-96 md:h-80 ">
              <Image
                src={Employee}
                alt="hero-employee"
                fill
                className="object-contain"
              />
            </div>{" "}
            <div className="relative w-full h-96 md:h-80 ">
              <Image
                src={Cake}
                alt="hero-employee"
                fill
                className="object-contain"
              />
            </div>{" "}
            <div className="relative w-full h-96 md:h-80 ">
              <Image
                src={Champions}
                alt="hero-employee"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container px-5 md:px-0">
        <div className="grid md:grid-cols-2 items-center  border-b border-grays md:pb-14 pb-8 ">
          <div className="">
            <h2 className="md:text-3xl text-2xl font-bold text-black text-center md:text-start">
              The Way We Deliver Value
            </h2>
            <p className="text-black text-[1rem] font-medium tracking-wide leading-relaxed py-4 text-center md:text-start">
              We aren’t just software partners; we are catalysts of business
              transformation.
            </p>
            <p className="text-black text-[1rem] font-medium tracking-wide leading-relaxed py-4 text-center md:text-start">
              We help you define criterion for transparent decision making,
              anchor business decisions on qualitative analysis and encourage
              analysis of views that are contradictory to leadership beliefs.
            </p>
            <p className="text-black text-[1rem] font-medium tracking-wide leading-relaxed p-4 text-center md:text-start border border-grays bg-whiteBlue rounded-md">
              We evaluate the impact of pursuing business opportunities and
              establish strong processes for quality outcomes.
            </p>
          </div>
          <div className="relative w-full h-96 md:h-[470px] mt-8">
            <Image
              src={Employee2}
              alt="second-employee-group"
              fill
              className="md:object-contain bg-cover md:pl-20 "
            />
          </div>
        </div>
      </section>

      <section className="container px-5 md:px-0">
        <div className="grid md:grid-cols-2 items-center  border-b border-grays md:pb-14 pb-4 ">
          <div className="relative w-full h-96 md:h-[470px] order-2 md:order-1 mt-8 md:mt-16">
            <Image
              src={GreatPlace}
              alt="great-place-group"
              fill
              className="md:object-contain bg-cover pb-6 md:pr-20 "
            />
          </div>
          <div className=" order-1 md:order-2">
            <h2 className="md:text-3xl text-2xl font-bold text-black text-center md:text-start mt-8">
              Advancing Unconscious Bias – Our Commitment to DEI
            </h2>
            <p className="text-black text-[1rem] font-medium tracking-wide leading-relaxed py-4 text-center md:text-start">
              <a className="text-primary font-semibold underline cursor-pointer">
                DEI forms our foundation
              </a>{" "}
              that acknowledges different identities and experiences.
            </p>
            <p className="text-black text-[1rem] font-medium tracking-wide leading-relaxed py-4 text-center md:text-start">
              As a <strong>Great Place to Work®</strong> organization, we
              believe diverse perspectives enrich our decision-making and
              problem-solving aptitudes, making us more responsive to client
              needs.
            </p>
            <p className="text-black text-[1rem] font-medium tracking-wide leading-relaxed p-4 text-center md:text-start border border-grays bg-whiteBlue rounded-md">
              We offer equal opportunities in career advancement, welcome
              differently abled talent with respect.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 container px-5  md:gap-4 gap-10 md:px-0 grid md:grid-cols-2 grid-cols-1 items-center">
        <div>
          <h1 className="md:text-lg text-sm  font-bold  text-primary ">
            Building a Digital Fortress
          </h1>
          <p className="text-2xl md:text-3xl text-black font-bold tracking-wide py-4 md:pr-16">
            With Women at The Forefront
          </p>
          <p className="text-[1rem] text-black font-medium tracking-wide md:pr-10">
            We stand our group on building a gender-neutral workforce with a
            standard 26% female employee ration in our teams.
          </p>
          <ul className="text-black font-medium tracking-wide text-[1rem]  space-y-2 mt-4">
            <li className=" flex items-center gap-2">
              <span className="text-primary text-xl">
                <IoMdCheckmark />
              </span>
              Equal leadership development and skill-building
            </li>
            <li className=" flex items-center gap-2">
              <span className="text-primary text-xl">
                <IoMdCheckmark />
              </span>
              Flexible schedules for seamless for work-file in tegration
            </li>
            <li className=" flex items-center gap-2">
              <span className="text-primary text-xl">
                <IoMdCheckmark />
              </span>
              Inclusive operational policies and merit-based growth
            </li>
          </ul>
          <button className="bg-primary capitalize text-white rounded-sm text-[1rem] font-medium tracking-wide py-2.5 px-5 mt-6 flex justify-center items-center gap-2 hover:gap-4">
            Experience True Tech Integrity
            <span className="text-xl">
              <LiaLongArrowAltRightSolid />
            </span>
          </button>
        </div>
        <div className="relative w-full h-96 md:h-[470px]  md:pl-36">
          <Image
            src={RadixHappy}
            alt="hero-employee"
            fill
            className="bg-cover md:object-contain"
          />
        </div>
      </section>

      <section className="bg-whiteBlue">
        <div className="py-10 container px-5">
          <div className="grid md:grid-cols-2 items-center md:gap-20 gap-10 ">
            <div className=" order-2 md:order-1">
              <h1 className="text-black font-bold text-xl md:text-3xl tracking-wide pb-10">
                Providing a Progressive and Impartial Workplace
              </h1>
              <div className="relative w-full   md:h-96 h-72 rounded-sm rounded-br-[100px]">
                <Image
                  src={FreshRoom}
                  alt="Sustainability"
                  fill
                  className="bg-cover rounded-sm rounded-br-[100px]"
                />
              </div>
            </div>
            <div className=" overflow-y-auto no-scrollbar  order-21 md:order-2">
              <div className="h-[500px]">
                {data.map(({ title, desc }, index) => {
                  return (
                    <div key={index} className="pt-5 border-b border-whiteBlue">
                      <h2 className="text-[1.1rem]  font-semibold text-black  hover:text-primary tracking-wide mb-3 flex items-center gap-2 hover:gap-3">
                        <span className="text-primary text-xl ">
                          {" "}
                          <BsArrowRight />
                        </span>
                        {title}
                      </h2>
                      <p className="text-black text-[0.9rem]  font-medium tracking-wide pb-5 pl-7">
                        {desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container px-5 md:px-0 mt-10">
        <div className="grid md:grid-cols-2 items-center   md:pb-14 pb-8 ">
          <div className="">
            <h2 className="md:text-3xl text-2xl font-bold text-black text-center md:text-start">
              Leaders at Radixweb
            </h2>
            <p className="text-black text-[1rem] font-medium tracking-wide leading-relaxed py-4 text-center md:text-start">
              They aren’t just a management team; they are mentors in every
              capacity— integrating deeply humanizing values in every aspect of
              our organizational culture.
            </p>
            <p className="text-black text-[1rem] font-medium tracking-wide leading-relaxed py-4 text-center md:text-start">
              <a
                className="text-primary underline cursor-pointer"
                href="#"
                title="Our leaders"
              >
                Our leaders
              </a>{" "}
              constantly strive to build a frontline that’s determined to
              advance the global tech community.
            </p>
            <p className="text-black text-[1rem] font-medium tracking-wide leading-relaxed p-4 text-center md:text-start border border-grays bg-whiteBlue rounded-md">
              We thrive in a culture where people can be themselves at work,
              generating a strong team spirit.
            </p>
          </div>
          <div className="relative w-full h-96 md:h-[470px] mt-8">
            <Image
              src={CoFounder}
              alt="co-founder"
              fill
              className="md:object-contain bg-cover md:pl-20 "
            />
          </div>
        </div>
      </section>

      <section className=" container px-5 pt-8 pb-16">
        <div className="grid md:grid-cols-3 gap-6">
          {card.map(({ img, title, desc }, index) => {
            return (
              <div key={index} className="border border-grays rounded-md ">
                <div className="w-full ">
                  <Image alt={img} width={1000} height={100} src={img}  className="rounded-t-md bg-cover"/>
                </div>
               <div className="p-5">
                <p className="text-black text-[1rem] font-bold tracking-wide">{title}</p>
                <p className="pt-4 text-primary font-bold text-[1rem] tracking-wide cursor-pointer">{desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-20 bg-primary  flex flex-col items-center">
        <h2 className="md:text-3xl text-2xl font-bold mb-2 tracking-wide text-white">
          Our Way of Doing Business?
        </h2>
        <p className="text-lg text-white font-medium tracking-wide mb-6 text-center px-5">
          Being respomsible for innovation in every way.
        </p>
        <button className="bg-white  text-primary rounded-sm text-[1rem] font-medium tracking-wide py-2.5 px-5 md:mt-6 mt-2 flex justify-center items-center gap-2 hover:gap-4">
          Read Our Mission Statement
          <span className="text-xl">
            <LiaLongArrowAltRightSolid />
          </span>
        </button>
      </section>
    </main>
  );
};

export default OurCulture;
