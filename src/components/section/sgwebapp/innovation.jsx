"use client";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { BsArrowRight, BsCheckCircleFill } from "react-icons/bs";

import Image from "next/image";
import React from "react";
import {
  hero,
  bronzeWinner,
  goldWinner,
  innovation,
  rxweb,
  tezjs,
  revelaging,
} from "../../../../public/assets/innovation";
import Link from "next/link";

/*
const data = [
  {
    title: "AI-Powered Rapid Prototyping",
    desc: "Leverage pre-trained models and generative AI to cut development cycles by 60%, turning concepts into testable prototypes in days—not months.",
  },
  {
    title: "Modular Tech Stacks",
    desc: "Plug-and-play architecture with reusable microservices, APIs, and cloud-native components to scale solutions instantly without rebuilding from scratch.",
  },
  {
    title: "Automated Compliance & Testing",
    desc: "Embedded security scans and CI/CD pipelines ensure flawless, regulation-ready deployments at speed—reducing manual checks by 80%.",
  },
  {
    title: "AI for Business Automation",
    desc: " Out data Solutions are designed to build data integrity for your systems. We employ industry is best data engineering practices for warehousing and processing.",
  },
];

const Streamlining = [
  {
    title: "Internal Programs and Hackathons",
    desc: "We hold regular hackathon and upskilling sessions presided by industry’s best experts. Our experts have acquired 200+ cloud and many other relevant industry certifications.",
  },
  {
    title: "Accelerating Innovation Reach",
    desc: "We’ve placed our seniormost management resource in the key market area of North America to facilitate wider responsiveness and quick strategizing for outsourced projects.",
  },
  {
    title: "CoEs for Scalable Delivery",
    desc: "Apart from our HQ at Ekyarth, we have five strategically placed CoEs in USA, Canada, Australia and Morocco to enhance first-person collaboration with clients for prompt delivery.",
  },
];
*/

const researchDrivenList = [
  "Changing Academic Patterns",
  "Modern Learning Methods",
  "Student Psychology & Learning Behavior",
  "Digital & Technology-Based Education",
  "Skill-Oriented Training Requirements",
  "Competitive Exam Trends",
  "Career & Industry Demands",
];

const continuousInnovationList = [
  "Personalized Learning Methods",
  "Student-Centered Teaching Approaches",
  "Flexible Learning Models",
  "Practical & Activity-Based Learning",
  "One-to-One Customized Teaching",
  "Online & Hybrid Learning Solutions",
  "Performance Monitoring Techniques",
];

const modernSolutionsList = [
  "Improving Student Engagement",
  "Enhancing Teacher Matching Systems",
  "Developing Better Learning Experiences",
  "Simplifying Access to Quality Education",
  "Strengthening Communication Between Learners & Educators",
  "Creating Flexible & Convenient Learning Support",
];

const multipleCategoriesList = [
  "School & College Tuition",
  "Competitive Exam Preparation",
  "Language Learning",
  "Computer & IT Training",
  "Creative Arts & Performing Arts",
  "Professional & Industrial Training",
  "Special Education Support",
  "Skill Development Programs",
];

const technologyIntegrationList = [
  "Online Learning Support",
  "Digital Communication Tools",
  "Flexible Scheduling Systems",
  "Interactive Learning Methods",
  "Practical Skill Development",
  "Student Progress Tracking",
];

const studentImprovementList = [
  "Understanding Individual Learning Needs",
  "Improving Academic Performance",
  "Building Student Confidence",
  "Supporting Career Development",
  "Encouraging Creativity & Skill Growth",
  "Promoting Lifelong Learning",
];

const whyChooseList = [
  "Trusted Educational Experience Since 2017",
  "Research-Driven Teaching Methods",
  "Personalized Learning Solutions",
  "Flexible Home & Online Learning Support",
  "Continuous Educational Improvement",
  "Student-Centered Development Approach",
  "Practical & Result-Oriented Learning Environment",
  "Wide Network of Skilled Educators & Trainers",
];

const Innovation = () => {
  return (
    <main className="bg-white text-gray-800 mt-20">
      {/* Hero Section */}
      <section className="py-16 container px-5 md:gap-4 gap-10 md:px-0 grid md:grid-cols-2 grid-cols-1 items-center">
        <div>
          <h1 className="md:text-lg text-sm font-bold text-primary">
            Innovation, Research &amp; Development
          </h1>
          <p className="text-2xl md:text-3xl text-black font-bold tracking-wide py-4 md:pr-16">
            Advancing Personalized Learning Through Innovation Since 2017
          </p>
          <p className="text-[1rem] text-black font-medium tracking-wide md:pr-10 leading-relaxed">
            At Home Tuition Academy, we continuously focus on innovation,
            research, and development to improve the quality of personalized
            education and learning experiences. Our goal is to understand
            evolving educational trends, student learning patterns, teaching
            methodologies, and skill development requirements to provide modern,
            flexible, and result-oriented learning solutions.
          </p>

          <Link
            href="/contact-us"
            className="primary-btn-sm mt-4 gap-2 w-fit mx-auto xl:mx-0 flex items-center"
          >
            Connect With Expert Tutors
            <span className="text-xl">
              <LiaLongArrowAltRightSolid />
            </span>
          </Link>
        </div>
        <div className="relative w-full h-96 md:h-96 md:pl-10">
          <Image src={hero} alt="hero" fill className="object-contain" />
        </div>
      </section>

      {/* Grid of Sections */}
      <section className="container px-5 md:px-0 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Section 2: Research-Driven Learning Approach */}
          <div className="bg-white border border-grayBorder rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col gap-4">
            <h2 className="text-xl sm:text-2xl font-bold text-black border-b border-grayBorder pb-3">
              Research-Driven Learning Approach
            </h2>
            <p className="text-sm text-grayDark font-medium">
              We believe education must continuously evolve according to:
            </p>
            <ul className="space-y-2 text-sm sm:text-base text-gray-800">
              {researchDrivenList.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-primary text-sm flex-shrink-0">
                    <BsCheckCircleFill />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3: Continuous Educational Innovation */}
          <div className="bg-white border border-grayBorder rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col gap-4">
            <h2 className="text-xl sm:text-2xl font-bold text-black border-b border-grayBorder pb-3">
              Continuous Educational Innovation
            </h2>
            <p className="text-sm text-grayDark font-medium">
              We regularly work on:
            </p>
            <ul className="space-y-2 text-sm sm:text-base text-gray-800">
              {continuousInnovationList.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-primary text-sm flex-shrink-0">
                    <BsCheckCircleFill />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4: Development of Modern Learning Solutions */}
          <div className="bg-white border border-grayBorder rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col gap-4">
            <h2 className="text-xl sm:text-2xl font-bold text-black border-b border-grayBorder pb-3">
              Development of Modern Learning Solutions
            </h2>
            <p className="text-sm text-grayDark font-medium">
              Our research and development initiatives focus on:
            </p>
            <ul className="space-y-2 text-sm sm:text-base text-gray-800">
              {modernSolutionsList.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-primary text-sm flex-shrink-0">
                    <BsCheckCircleFill />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 5: Innovation Across Multiple Learning Categories */}
          <div className="bg-white border border-grayBorder rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col gap-4">
            <h2 className="text-xl sm:text-2xl font-bold text-black border-b border-grayBorder pb-3">
              Innovation Across Multiple Learning Categories
            </h2>
            <p className="text-sm text-grayDark font-medium">
              We continuously improve learning solutions for:
            </p>
            <ul className="grid sm:grid-cols-2 gap-2 text-sm sm:text-base text-gray-800">
              {multipleCategoriesList.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-primary text-sm flex-shrink-0">
                    <BsCheckCircleFill />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 6: Technology & Learning Integration */}
          <div className="bg-white border border-grayBorder rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col gap-4">
            <h2 className="text-xl sm:text-2xl font-bold text-black border-b border-grayBorder pb-3">
              Technology &amp; Learning Integration
            </h2>
            <p className="text-sm text-grayDark font-medium">
              We aim to combine traditional teaching values with modern educational practices through:
            </p>
            <ul className="space-y-2 text-sm sm:text-base text-gray-800">
              {technologyIntegrationList.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-primary text-sm flex-shrink-0">
                    <BsCheckCircleFill />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 7: Student-Focused Research & Improvement */}
          <div className="bg-white border border-grayBorder rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col gap-4">
            <h2 className="text-xl sm:text-2xl font-bold text-black border-b border-grayBorder pb-3">
              Student-Focused Research &amp; Improvement
            </h2>
            <p className="text-sm text-grayDark font-medium">
              Our innovation strategy focuses on:
            </p>
            <ul className="space-y-2 text-sm sm:text-base text-gray-800">
              {studentImprovementList.map((item, index) => (
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
      </section>

      {/* Section 8: Our Commitment to Educational Growth */}
      <section className="container px-5 md:px-0 py-6">
        <div className="bg-primary text-white rounded-2xl p-8 sm:p-12 flex flex-col gap-4 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Our Commitment to Educational Growth
          </h2>
          <p className="text-white text-base sm:text-lg leading-relaxed">
            At Home Tuition Academy, innovation is not only about technology — it
            is about continuously improving the way students learn and educators
            teach. We remain committed to developing effective, personalized,
            and future-focused learning solutions that support students,
            parents, and learners across all age groups and educational
            backgrounds.
          </p>
        </div>
      </section>

      {/* Section 9: Why Choose Our Learning Approach? */}
      <section className="container px-5 md:px-0 py-6">
        <div className="bg-primaryLightest border border-primaryLight rounded-2xl p-8 sm:p-12 flex flex-col gap-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-black border-b border-primaryLight pb-4">
            Why Choose Our Learning Approach?
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {whyChooseList.map((item, index) => (
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

      {/* Bottom CTA */}
      <section className="py-16 bg-primary flex flex-col items-center mt-10">
        <h2 className="md:text-3xl text-2xl font-bold mb-2 tracking-wide text-white text-center">
          Advancing Learning Through Continuous Innovation
        </h2>
        <p className="text-lg text-white font-medium tracking-wide mb-6 text-center max-w-2xl px-4">
          Experience personalized, result-oriented home and private education
          tailored to every student’s learning needs.
        </p>

        <Link
          href="/contact-us"
          className="primary-btn-sm mt-4 gap-2 !bg-white !text-primary w-fit mx-auto xl:mx-0 flex items-center font-bold"
        >
          Book a Free Demo Class
          <span className="text-xl">
            <LiaLongArrowAltRightSolid />
          </span>
        </Link>
      </section>

      {/*
      <section className=" bg-primary ">
        <div className="container md:py-20 md:px-20 gap-7 px-5 py-10">
          <h1 className="text-white text-xl md:text-3xl font-semibold text-center">
            From Vision to Reality – Faster
          </h1>
          <p className="text-white text-[1rem] font-medium tracking-wide text-center md:px-36 pt-4">
            Partnering with cutting-edge technologies—AI, ML, IoT, blockchain—we
            redefine possibilities. By breaking conventional boundaries, we set
            new benchmarks for innovation in agile, forward-thinking ecosystems.
          </p>
        </div>
      </section>

      <section className="py-20 px-5 md:px-0 bg-white container">
        <div className="grid md:grid-cols-2 items-center gap-8 ">
          <div className="relative w-full h-96 md:h-[470px] order-2">
            <Image
              src={revelaging}
              alt="revelaging"
              fill
              className="object-contain"
            />
          </div>
          <div className=" md:order-2 order-1">
            <h2 className="md:text-3xl text-2xl font-bold text-black text-center md:text-start">
              Leveraging Applied Research for Co-creation
            </h2>
            <p className="text-black text-[1rem] font-medium tracking-wide leading-relaxed py-4 text-center md:text-start">
              Our innovation labs bring together cross-functional experts who
              apply rigorous research methodologies in an independent
              environment to explore cutting-edge technologies and their
              business implications.
            </p>
            <p className="text-black text-[1rem] font-medium tracking-wide leading-relaxed text-center md:text-start">
              We bridge clients and partners to harness advancements in AI,
              quantum computing, data engineering, hybrid cloud, and security.
              Through strategic Centers of Excellence, we tackle complex global
              challenges with aligned, distributed teams.
            </p>
          </div>
        </div>

        <div className="bg-primary rounded-md md:rounded-br-[100px] flex flex-col items-center justify-center md:py-20 py-5 px-4 md:mt-20 mt-10">
          <h1 className="md:text-3xl text-xl font-bold text-white text-center">
            Want Data to Validate Tech Innovation?
          </h1>
          <p className="text-white text-center text-[1.1rem] font-medium tracking-wide py-4 md:px-36">
            Relentless iteration powered by data. We align R&D with real-world
            feedback to build flawless software solutions.
          </p>

          <Link
            href="/contact-us"
            className="primary-btn-sm mt-4 gap-2 !bg-white !text-primary w-fit mx-auto xl:mx-0"
          >
            Get Fail-proof Tech Strategies
            <span className="text-xl">
              <LiaLongArrowAltRightSolid />
            </span>
          </Link>
        </div>
      </section>

      <section className="py-10 container px-5">
        <div className="grid md:grid-cols-2 items-center md:gap-20 gap-10 ">
          <div className="md:pr-14">
            <h1 className="text-black font-bold text-xl md:text-3xl tracking-wide pb-10">
              Innovation Accelerators: From Idea to Impact at Speed
            </h1>
            <div className="relative w-full md:h-72 h-96 rounded-sm rounded-br-[100px]">
              <Image
                src={innovation}
                alt="innovation"
                fill
                className="bg-cover rounded-sm rounded-br-[100px]"
              />
            </div>
          </div>
          <div className=" overflow-y-auto no-scrollbar ">
            <div className="h-[450px]">
              {data.map(({ title, desc }, index) => {
                return (
                  <div key={index} className="pt-5 border-b border-whiteBlue">
                    <h2 className="text-[1.1rem] font-semibold text-black hover:text-primary tracking-wide mb-3 flex items-center gap-2 hover:gap-3">
                      <span className="text-primary text-xl ">
                        <BsArrowRight />
                      </span>
                      {title}
                    </h2>
                    <p className="text-black text-[0.9rem] font-medium tracking-wide pb-5 pl-7">
                      {desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-0 bg-white container ">
        <div className="bg-primaryLight rounded-md md:rounded-br-[100px] flex flex-col items-center justify-center md:py-16 py-5 ">
          <h1 className="md:text-3xl text-xl font-semibold text-black md:px-56 text-center tracking-wide ">
            Empower Software Projects with Deep Industry R&amp;D
          </h1>

          <Link
            href="/contact-us"
            className="primary-btn-sm mt-4 gap-2 w-fit mx-auto xl:mx-0"
          >
            Where Are You Stuck?
            <span className="text-xl">
              <LiaLongArrowAltRightSolid />
            </span>
          </Link>
        </div>
      </section>

      <section className="container px-5 md:px-36 pb-10 md:pb-20">
        <h1 className="text-center font-bold text-black text-2xl md:text-3xl tracking-wide">
          Streamlining The Impact of Purpose-driven Innovation
        </h1>
        <div>
          {Streamlining.map(({ title, desc }, index) => {
            return (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center md:gap-20 gap-3 md:space-y-10 border-grays ${
                  index === 2 ? "" : "border-b pb-10"
                }`}
              >
                <h2 className="text-primary font-semibold text-2xl tracking-wide md:w-4/12 pt-6">
                  {title}
                </h2>
                <p className="text-black font-medium tracking-wide text-[1rem] md:w-8/12">
                  {desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>
      */}
    </main>
  );
};

export default Innovation;
