"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import AwardArea from "../home/award-area";
import TechnologiesArea from "../home/technologies-area";
import { HeroEmployee } from "../../../../public/assets/our-culture";

import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { BsCheckCircleFill } from "react-icons/bs";
import Team from "~/components/common/Team";

/*
const Card = ({ index, review, name, designation, rating }) => {
  return (
    <div
      className={`${
        index == 1 && "md:border-x-[.2px] border-white"
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

      <p className="text-sm text-white">{review}</p>
      <div className="flex flex-col">
        <span className="text-md font-bold text-danger">{name}</span>
        <span className="text-sm text-grayLight">{designation}</span>
      </div>
    </div>
  );
};

const ServiceCard = ({ index, lastIndex, route = "#", title, description }) => {
  return (
    <div
      className={`${index == 0 ? "pb-5" : "py-5"} ${
        !lastIndex && "border-b"
      } border-grayLight w-full flex flex-col gap-4`}
    >
      <h3 className="text-center sm:text-start border-l-0 border-l-transparent hover:border-l-4 hover:border-danger hover:pl-2 hover:rounded hover:text-danger font-bold text-base sm:text-lg text-grayDark transition-all duration-100 ease-linear">
        {title}
      </h3>

      <p className="text-sm sm:text-base text-center sm:text-start">
        {description}
      </p>
    </div>
  );
};

const LeaderCard = ({
  position = 1,
  name = "",
  designation = "",
  voice = "",
  linkedin = "#",
  twitter = "#",
  avatar = "https://img.freepik.com/free-photo/three-people-polygraph-examiners-works-office-with-his-lie-detector-s-equipment_146671-17264.jpg?t=st=1734947336~exp=1734950936~hmac=fe2ee7873b2c6d51687ef79db95932dbddde389194bf4ab90778710d7f308f42&w=1480",
}) => {
  const isLeft = position % 2 == 0;
  return (
    <div className={`w-full`}>
      <div className="w-full flex flex-col gap-4 sm:grid sm:grid-cols-3 sm:items-center xl:gap-16">
        <div className="flex-center sm:hidden">
          <Image
            src={avatar}
            alt={name}
            height={300}
            width={300}
            quality={50}
            className="w-[40%] aspect-square rounded-full object-cover"
          />
        </div>

        {isLeft && (
          <div className="col-span-1 hidden sm:block">
            <Image
              src={avatar}
              alt={name}
              height={300}
              width={300}
              quality={50}
              className="w-full aspect-square rounded-full object-cover"
            />
          </div>
        )}

        <div className="w-full col-span-2 flex flex-col gap-3 text-center sm:text-start">
          <h2 className="font-semibold text-lg text-black capitalize">
            {name}
          </h2>
          <p className="font-medium text-grayDark text-sm">{designation}</p>
          <p className="font-medium text-black text-md">{voice}</p>

          <div className="w-full flex justify-center sm:justify-start flex-row gap-3">
            <Link href={linkedin}>
              <div className="h-10 aspect-square flex-center bg-[#0077B5] text-white rounded-full text-xl">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                </svg>
              </div>
            </Link>
            <Link href={twitter}>
              <div className="h-10 aspect-square flex-center bg-black rounded-full text-white text-xl">
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
              </div>
            </Link>
          </div>
        </div>

        {!isLeft && (
          <div className="col-span-1 hidden sm:block">
            <Image
              src="https://img.freepik.com/free-photo/three-people-polygraph-examiners-works-office-with-his-lie-detector-s-equipment_146671-17264.jpg?t=st=1734947336~exp=1734950936~hmac=fe2ee7873b2c6d51687ef79db95932dbddde389194bf4ab90778710d7f308f42&w=1480"
              alt="image-alt"
              height={300}
              width={300}
              quality={50}
              className="w-full aspect-square rounded-full object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
};
*/

const studentCenteredList = [
  "Individual Learning Needs",
  "Personalized Attention",
  "Concept Clarity",
  "Practical Understanding",
  "Confidence Building",
  "Regular Practice & Revision",
  "Continuous Academic Improvement",
];

const teacherMatchingList = [
  "Class & Academic Level",
  "Board & Curriculum",
  "Subject Requirements",
  "Learning Style & Comfort",
  "Preferred Timings",
  "Nearby Locality",
  "Budget & Learning Goals",
];

const understandingRequirementsList = [
  "Academic Background",
  "Current Performance",
  "Strengths & Weaknesses",
  "Learning Challenges",
  "Educational Goals",
];

const customizedPlanningList = [
  "Subject-Wise Strategies",
  "Concept-Based Learning",
  "Revision Schedules",
  "Practice Sessions",
  "Exam Preparation Techniques",
];

const interactiveLearningList = [
  "Active Student Participation",
  "Doubt Solving Sessions",
  "Practical Understanding",
  "Communication & Interaction",
  "Flexible Teaching Methods",
];

const performanceMonitoringList = [
  "Regular Progress Tracking",
  "Performance Analysis",
  "Continuous Feedback",
  "Improvement Planning",
  "Motivation & Confidence Building",
];

const practicalMethodsList = [
  "Theoretical Understanding",
  "Practical Application",
  "Activity-Based Learning",
  "Skill Development Techniques",
  "Exam-Oriented Preparation",
  "Creative & Analytical Thinking",
];

const flexibleSolutionsList = [
  "Home Tuition Services",
  "Online Learning Sessions",
  "Flexible Timings",
  "Customized Course Structures",
  "Beginner to Advanced Learning Support",
  "Individual & Group Learning Options",
];

const multiCategoryList = [
  "School & College Tuition",
  "Competitive Exam Coaching",
  "Language Learning",
  "Computer & IT Training",
  "Music, Dance & Creative Arts",
  "Professional & Skill Development Courses",
  "Special Education Support",
];

const qualityCommitmentList = [
  "Providing Trusted & Qualified Educators",
  "Delivering Personalized Learning Experiences",
  "Supporting Academic & Skill Development",
  "Creating Positive Learning Environments",
  "Encouraging Confidence & Independent Thinking",
  "Promoting Consistent Growth & Success",
];

const whyWorksList = [
  "Student-Focused Learning Approach",
  "Personalized One-to-One Attention",
  "Experienced & Supportive Educators",
  "Flexible & Convenient Learning Options",
  "Practical & Result-Oriented Teaching",
  "Continuous Progress Monitoring",
  "Strong Academic & Skill Development Focus",
  "Trusted Educational Support Since 2017",
];

const OurApproach = () => {
  const facts = [
    {
      count: "9+",
      text: "Years in Business",
    },
    {
      count: "20000+",
      text: "Expert Teachers",
    },
    // {
    //   count: "7400+",
    //   text: "Satisfied Clients",
    // },
    {
      count: "6000+",
      text: "Successful Students",
    },
  ];

  return (
    <main className="w-full pt-[16%] sm:pt-[12%] xl:pt-[7%] pb-16">
      {/* Hero Section */}
      <section className="container flex flex-col gap-4 lg:gap-5 px-5 sm:px-2">
        <section className="py-16 md:gap-4 gap-10 md:px-0 grid md:grid-cols-2 grid-cols-1 items-center">
          <div>
            <h1 className="md:text-lg text-sm font-bold text-primary">
              Our Approach &amp; Methodology
            </h1>
            <p className="text-2xl md:text-3xl text-black font-bold tracking-wide py-4 md:pr-16">
              Personalized, Practical &amp; Student-Centered Learning Since 2017
            </p>
            <p className="text-[1rem] text-black font-medium tracking-wide md:pr-10 leading-relaxed">
              At Home Tuition Academy, our approach is focused on understanding
              every learner’s unique academic level, learning style, goals,
              strengths, and improvement areas. We believe that every student
              learns differently, which is why we provide personalized
              one-to-one learning solutions designed to create better
              understanding, confidence, performance, and long-term growth.
            </p>
            <Link
              href="/contact-us"
              className="primary-btn-sm mt-6 gap-2 w-fit mx-auto xl:mx-0 flex items-center"
            >
              Get Personalized Learning Support
              <span className="text-xl">
                <LiaLongArrowAltRightSolid />
              </span>
            </Link>
          </div>
          <div className="relative w-full h-96 md:h-[360px] md:pl-36">
            <Image
              src="/assets/our-approach/Transforming Your Tech Innovation Strategy.png"
              alt="hero-approach"
              fill
              className="object-contain"
            />
          </div>
        </section>

        {/* Approach Cards Grid */}
        <div className="w-full grid md:grid-cols-2 gap-8 py-8">
          {/* Card 1: Student-Centered Learning Approach */}
          <div className="bg-white border border-grayBorder rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col gap-4">
            <h2 className="text-xl sm:text-2xl font-bold text-black border-b border-grayBorder pb-3">
              Student-Centered Learning Approach
            </h2>
            <p className="text-sm text-grayDark font-medium">
              Our teaching methodology focuses on:
            </p>
            <ul className="space-y-2 text-sm sm:text-base text-gray-800">
              {studentCenteredList.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-primary text-sm flex-shrink-0">
                    <BsCheckCircleFill />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2: Personalized Teacher Matching Process */}
          <div className="bg-white border border-grayBorder rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col gap-4">
            <h2 className="text-xl sm:text-2xl font-bold text-black border-b border-grayBorder pb-3">
              Personalized Teacher Matching Process
            </h2>
            <p className="text-sm text-grayDark font-medium">
              We carefully match students with suitable tutors and trainers
              based on:
            </p>
            <ul className="space-y-2 text-sm sm:text-base text-gray-800">
              {teacherMatchingList.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-primary text-sm flex-shrink-0">
                    <BsCheckCircleFill />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 3: Step-by-Step Learning Methodology */}
          <div className="bg-white border border-grayBorder rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col gap-4">
            <h2 className="text-xl sm:text-2xl font-bold text-black border-b border-grayBorder pb-3">
              Step-by-Step Learning Methodology
            </h2>
            <p className="text-sm text-grayDark font-medium">
              Understanding Student Requirements — We first analyze the
              student’s:
            </p>
            <ul className="space-y-2 text-sm sm:text-base text-gray-800">
              {understandingRequirementsList.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-primary text-sm flex-shrink-0">
                    <BsCheckCircleFill />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 4: Customized Learning Planning */}
          <div className="bg-white border border-grayBorder rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col gap-4">
            <h2 className="text-xl sm:text-2xl font-bold text-black border-b border-grayBorder pb-3">
              Customized Learning Planning
            </h2>
            <p className="text-sm text-grayDark font-medium">
              Our educators create personalized learning plans that include:
            </p>
            <ul className="space-y-2 text-sm sm:text-base text-gray-800">
              {customizedPlanningList.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-primary text-sm flex-shrink-0">
                    <BsCheckCircleFill />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 5: One-to-One Interactive Learning */}
          <div className="bg-white border border-grayBorder rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col gap-4">
            <h2 className="text-xl sm:text-2xl font-bold text-black border-b border-grayBorder pb-3">
              One-to-One Interactive Learning
            </h2>
            <p className="text-sm text-grayDark font-medium">We encourage:</p>
            <ul className="space-y-2 text-sm sm:text-base text-gray-800">
              {interactiveLearningList.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-primary text-sm flex-shrink-0">
                    <BsCheckCircleFill />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 6: Performance Monitoring & Improvement */}
          <div className="bg-white border border-grayBorder rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col gap-4">
            <h2 className="text-xl sm:text-2xl font-bold text-black border-b border-grayBorder pb-3">
              Performance Monitoring &amp; Improvement
            </h2>
            <p className="text-sm text-grayDark font-medium">
              Our approach includes:
            </p>
            <ul className="space-y-2 text-sm sm:text-base text-gray-800">
              {performanceMonitoringList.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-primary text-sm flex-shrink-0">
                    <BsCheckCircleFill />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 7: Practical & Result-Oriented Teaching Methods */}
          <div className="bg-white border border-grayBorder rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col gap-4">
            <h2 className="text-xl sm:text-2xl font-bold text-black border-b border-grayBorder pb-3">
              Practical &amp; Result-Oriented Teaching Methods
            </h2>
            <p className="text-sm text-grayDark font-medium">
              Our methodology combines:
            </p>
            <ul className="space-y-2 text-sm sm:text-base text-gray-800">
              {practicalMethodsList.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-primary text-sm flex-shrink-0">
                    <BsCheckCircleFill />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 8: Flexible Learning Solutions */}
          <div className="bg-white border border-grayBorder rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col gap-4">
            <h2 className="text-xl sm:text-2xl font-bold text-black border-b border-grayBorder pb-3">
              Flexible Learning Solutions
            </h2>
            <p className="text-sm text-grayDark font-medium">We provide:</p>
            <ul className="space-y-2 text-sm sm:text-base text-gray-800">
              {flexibleSolutionsList.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-primary text-sm flex-shrink-0">
                    <BsCheckCircleFill />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 9: Multi-Category Learning Expertise */}
          <div className="bg-white border border-grayBorder rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col gap-4">
            <h2 className="text-xl sm:text-2xl font-bold text-black border-b border-grayBorder pb-3">
              Multi-Category Learning Expertise
            </h2>
            <p className="text-sm text-grayDark font-medium">
              Our approach supports:
            </p>
            <ul className="space-y-2 text-sm sm:text-base text-gray-800">
              {multiCategoryList.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-primary text-sm flex-shrink-0">
                    <BsCheckCircleFill />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 10: Our Commitment to Quality Learning */}
          <div className="bg-white border border-grayBorder rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col gap-4">
            <h2 className="text-xl sm:text-2xl font-bold text-black border-b border-grayBorder pb-3">
              Our Commitment to Quality Learning
            </h2>
            <p className="text-sm text-grayDark font-medium">
              We are committed to:
            </p>
            <ul className="space-y-2 text-sm sm:text-base text-gray-800">
              {qualityCommitmentList.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-primary text-sm flex-shrink-0">
                    <BsCheckCircleFill />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Why Our Methodology Works? */}
        <div className="w-full bg-primaryLightest border border-primaryLight rounded-2xl p-8 sm:p-12 my-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-black border-b border-primaryLight pb-4 mb-6">
            Why Our Methodology Works?
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {whyWorksList.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="text-primary text-lg flex-shrink-0">
                  <BsCheckCircleFill />
                </span>
                <span className="font-semibold text-gray-800 text-sm sm:text-base">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* fact area */}
      <section className="w-full bg-black py-7 sm:py-12 lg:py-16 my-10 xl:my-16">
        <div className="container grid sm:grid-cols-4 grid-cols-2 gap-5 sm:gap-0">
          {facts?.map((fact, index) => (
            <div
              key={index}
              className={`${
                index !== facts?.length - 1 && "sm:border-r border-grayBorder"
              } w-full flex-center flex-col text-center gap-1 sm:gap-3`}
            >
              <h3 className="font-extrabold text-[2.3rem] sm:text-[2.5rem] bg-gradient-to-r from-primary to-danger inline-block text-transparent bg-clip-text">
                {fact?.count}
              </h3>

              <p className="text-sm font-medium text-white">{fact?.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA : 02 */}
      <section className="w-full px-5 lg:px-0 mt-4">
        <div className="container rounded-2xl xl:rounded-3xl flex-center text-center flex-col gap-5 bg-primaryLightest border border-primaryLight py-12 px-7 sm:px-10 lg:px-16">
          <h2 className="text-2xl font-semibold">Get in Touch</h2>

          <p className="text-sm sm:text-md">
            We’d love to hear about your child&apos;s learning goals and explore
            how we can build a brighter academic future together.
          </p>

          <Link
            href="/contact-us"
            className="primary-btn-md w-fit mx-auto xl:mx-0 sm:mt-6"
          >
            Connect with a Teacher →
          </Link>
        </div>
      </section>

      {/*
      <p className="font-medium text-grayDark text-base sm:text-lg text-center lg:px-16 xl:px-28 lg:mt-10">
        Seamlessly transition to cutting-edge tech with investments that drive
        real revenue growth.
      </p>

      <div className="w-full py-7 sm:py-10 lg:py-16 xl:py-20">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="text-center sm:text-start">
            <h2 className="heading-sm">
              Consistently Adding Value to Diverse Industries
            </h2>
          </div>
          <div className="flex items-center md:pl-5 md:border-l border-grayBorder">
            <p className="text-sm sm:text-base text-black text-center sm:text-start">
              Since 2015, Itsoftworld has delivered proven software solutions
              across industries—trusted by startups, SMBs, and enterprises
              alike. Our recognized expertise in Technology Development &
              Innovation drives digital success for businesses at every scale.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-4">
        <div className="w-full flex flex-col sm:grid grid-cols-2 sm:gap-10 xl:flex xl:flex-col xl:gap-4 xl:pr-20">
          <Image
            src="/assets/our-approach/Tech Intelligence That Fosters Sustained Growth.webp"
            height={300}
            width={200}
            alt="about hero image"
            quality={50}
            className="w-full h-auto "
          />

          <p className="font-semibold text-md xl:text-base first-letter:text-xl first-letter:text-primary leading-normal">
            Our goal is to arm fast-moving businesses with relevant emerging
            technologies that give them an edge over their competition. We
            also build tailored capabilities for our clients to harness the
            power of these technologies. Our clients treat us as an innovation
            center’, unquestionably trusting our tech consultation and
            strategies to craft resilient solutions.
          </p>
        </div>

        <div className="w-full flex flex-col gap-5 sm:gap-8 lg:gap-10 sm:p-10 bg-primaryLightest rounded-xl">
          <h2 className="heading-sm text-grayDark">
            Expert Guidance That Accelerates Student Success
          </h2>

          <div className="flex flex-col gap-3">
            <p className="text-sm sm:text-base text-grayDark">
              For decades, we’ve empowered the global IT landscape,
              transforming businesses with cutting-edge tech innovation.
              Serving 3,000+ clients worldwide, we’ve redefined processes,
              amplified ROI, and turned ideas into growth—backed by deep
              expertise and end-to-end execution. We don’t just deliver
              solutions; we engineer success for every stakeholder.
              <br />
              <br />
              Our clients trust our IT consulting expertise because we deliver
              measurable value at every step. From flawless project execution
              to sustainable tech solutions, we partner closely with
              businesses to overcome their unique challenges—turning obstacles
              into opportunities for growth.
            </p>

            <Link
              href="/contact-us"
              className="text-sm font-semibold text-primary flex flex-row items-center gap-1 hover:gap-2 transition-all duration-100 ease-in-out"
            >
              Ask For a Consultation
              <span className="text-2xl mt-[1px]">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path>
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>

      <section className="container px-5 sm:px-2">
        <div className="w-full grid sm:grid-cols-2 gap-4 xl:gap-10">
          <div className="w-full flex flex-col gap-4">
            <h2 className="heading-sm">Cultivating Our Performance Edge</h2>
            <p className="text-sm sm:text-base text-grayDark font-medium tracking-wide">
              The future of tech is here—and we harness its power to transform
              businesses, amplify capabilities, and redefine digital ecosystems.
            </p>
          </div>
          <div className="w-full flex flex-col">
            {edge?.list?.map((item, index) => (
              <div
                onClick={() =>
                  setEdge((prev) => ({
                    ...prev,
                    id: prev.id == index ? null : index,
                  }))
                }
                key={index}
                className="w-full py-5 border-b border-grayLight cursor-pointer flex flex-col gap-5"
              >
                <div className="w-full flex flex-row items-center justify-between">
                  <div className="flex flex-row items-center gap-3">
                    <span className="text-primary text-xl lg:text-2xl">
                      {item?.icon}
                    </span>

                    <h3
                      className={`${
                        edge?.id === index ? "text-primary" : "text-grayDark"
                      } text-md sm:text-base lg:text-lg font-semibold capitalize transition-all duration-200 ease-linear`}
                    >
                      {item?.title}
                    </h3>
                  </div>
                  <span
                    className={`${
                      edge?.id === index
                        ? "text-primary rotate-180"
                        : "text-grayDark"
                    } text-lg sm:text-xl transition-all duration-200 ease-linear`}
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
                </div>

                {edge?.id == index && (
                  <p className="text-sm sm:text-md text-grayDark font-medium tracking-wide">
                    {item?.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <AwardArea />

      <section className="w-full py-5 sm:py-14 xl:py-20 px-5 lg:px-0">
        <div className="container rounded-2xl xl:rounded-3xl flex-center text-center flex-col gap-5 bg-primaryLightest border border-primaryLight py-12 px-7 sm:px-10 lg:px-16">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold leading-[1.3]">
            We are consciously leading the tech community from disruption to
            sustainable growth.
          </h2>

          <Link
            href="/contact-us"
            className="primary-btn-md w-fit mx-auto xl:mx-0 sm:mt-6"
          >
            Let’s Tell You How →
          </Link>
        </div>
      </section>

      <div className="container py-7 sm:py-10 lg:py-16 xl:py-20 px-5 lg:px-2">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 md:items-center">
          <div className="text-center sm:text-start">
            <h2 className="heading-sm">
              Consistently Actualizing Seamless Global Delivery
            </h2>
          </div>
          <div className="flex items-center md:pl-5 md:border-l border-grayBorder">
            <p className="text-sm sm:text-base text-black text-center sm:text-start">
              Itsoftworld is a global leader in custom enterprise software,
              offshore development, and IT consulting, serving 3,000+ clients
              across 25+ countries. With five strategic offices worldwide—plus
              our HQ—we deliver seamless tech integration and measurable
              business value through a dedicated team of experts.
            </p>
          </div>
        </div>
      </div>

      <div className="container py-5 lg:py-0 px-5 lg:px-2">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 md:items-center sm:gap-8 lg:gap-10 xl:gap-16">
          <Image
            src="/assets/about/Consistently Actualizing Seamless Global Delivery.webp"
            alt="image-alt"
            height={200}
            width={300}
            quality={50}
            className="w-full h-auto rounded-xl xl:rounded-2xl"
          />

          <div className="flex flex-col gap-3">
            <h2 className="text-md sm:text-base text-black">
              Explore a brief anatomy of our resources:
            </h2>

            <div className="w-full flex flex-col gap-2">
              <div className="w-full flex flex-row items-center gap-3">
                <div className="bg-primaryLight rounded-full p-[3px]">
                  <div className="bg-primary rounded-full p-[3px]" />
                </div>
                <span className="text-sm sm:text-md text-black">
                  85% Seniors and Mid-level Experts
                </span>
              </div>
              <div className="w-full flex flex-row items-center gap-3">
                <div className="bg-primaryLight rounded-full p-[3px]">
                  <div className="bg-primary rounded-full p-[3px]" />
                </div>
                <span className="text-sm sm:text-md text-black">
                  70% with us for 5+ Years
                </span>
              </div>
              <div className="w-full flex flex-row items-center gap-3">
                <div className="bg-primaryLight rounded-full p-[3px]">
                  <div className="bg-primary rounded-full p-[3px]" />
                </div>
                <span className="text-sm sm:text-md text-black">
                  90% Trained in Emerging Technology
                </span>
              </div>
              <div className="w-full flex flex-row items-center gap-3">
                <div className="bg-primaryLight rounded-full p-[3px]">
                  <div className="bg-primary rounded-full p-[3px]" />
                </div>
                <span className="text-sm sm:text-md text-black">
                  Senior Most Consulting Resource Stationed in North America
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      */}
    </main>
  );
};

export default OurApproach;
