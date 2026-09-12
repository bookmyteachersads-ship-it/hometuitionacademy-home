"use client";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { LuDot } from "react-icons/lu";

import Image from "next/image";
import React from "react";

import {
  Phero,
  Dprogramming,
  Microsoft,
  Ncommerce,
  Pnetworking,
  Zoho,
  Bpartners,
} from "../../../../public/assets/parters";
const Ndata = [
  {
    icon: "25+",
    desc: "Yeaars of Digital Engineering & Innovation",
  },
  {
    icon: "3000+",
    desc: "Clients Across Startups and Fortune 500s",
  },
  {
    icon: "30+",
    desc: "Global Locations Served",
  },
  {
    icon: "98%",
    desc: "Net Client Satisfaction Ratio Across Projects",
  },
];

const Partners = () => {
  return (
    <main className="bg-white text-gray-800 mt-20">
      <section className="py-16 container px-5  md:gap-4 gap-10 md:px-0 grid md:grid-cols-2 grid-cols-1 items-center">
        <div>
          <h1 className="md:text-lg text-sm  font-bold  text-primary ">
            Our Partners
          </h1>
          <p className="text-2xl md:text-3xl text-black font-bold tracking-wide py-4 md:pr-16">
            Redefining Tech Efficiencies
          </p>
          <p className="text-[1rem] text-black font-medium tracking-wide md:pr-10">
            Delivering unique value to clients across diverse industries.
          </p>
          <button className="bg-primary capitalize text-white rounded-sm text-[1rem] font-medium tracking-wide py-2.5 px-5 mt-6 flex justify-center items-center gap-2 hover:gap-4">
            Reimagine Tech Capabilities
            <span className="text-xl">
              <LiaLongArrowAltRightSolid />
            </span>
          </button>
        </div>
        <div className="relative w-full h-96 md:h-[360px]  md:pl-36">
          <Image
            src={Phero}
            alt="partner-hero"
            fill
            className="object-contain"
          />
        </div>
      </section>

      <section className=" bg-primary ">
        <div className="container  md:py-20 md:px-20 gap-7 px-5 py-10">
          <h1 className="text-white text-xl md:text-3xl  font-semibold  text-center">
            Partners In Advancing Tech Capabilities
          </h1>
          <p className="text-white text-[1rem] font-medium tracking-wide text-center md:px-32  pt-4">
            Building a strong partner ecosystem to drive accelerated growth.
            Expanding expertise with multiple hyperscale and specialized
            certifications.
          </p>
        </div>
      </section>

      <section className="md:py-20 py-10  px-5 md:px-0 bg-white container">
        <div className="grid md:grid-cols-2 items-center  gap-8  border-b border-grays pb-10 md:pb-16">
          <div className="relative w-full h-96 md:h-[380px]">
            <Image
              src={Microsoft}
              alt="revelaging"
              fill
              className="object-contain md:pr-20"
            />
          </div>
          <div className="">
            <h2 className="md:text-3xl text-2xl font-bold text-black text-center md:text-start">
              Microsoft Solutions Partner
            </h2>
            <p className="text-black text-[1rem] font-medium tracking-wide leading-relaxed py-4 text-center md:text-start">
              Itsoftworld is a certified Microsoft Solutions Partner in Digital
              App & Innovation (Azure), after a rigorous assessment of our
              technical expertise in meeting ‘Microsoft Standards’ and solving
              complex challenges with Azure. This certification validates our
              capabilities in:
            </p>
            <ul className="text-black font-medium tracking-wide text-[1rem] -ml-2 space-y-2">
              <li className=" flex items-center">
                <span className="text-primary text-2xl">
                  <LuDot />
                </span>
                Designing cloud solutions with a DevOps approach
              </li>
              <li className=" flex items-center">
                <span className="text-primary text-2xl">
                  <LuDot />
                </span>
                Excelling in cloud application development and modernization
              </li>
              <li className=" flex items-center">
                <span className="text-primary text-2xl">
                  <LuDot />
                </span>
                Managing applications across multi-cloud environments
              </li>
              <li className=" flex items-center">
                <span className="text-primary text-2xl">
                  <LuDot />
                </span>
                Supporting hyper-scale cloud infrastructures
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container px-5 md:px-0">
        <div className="grid md:grid-cols-2 items-center  border-b border-grays md:pb-14 pb-4 ">
          <div className="">
            <h2 className="md:text-3xl text-2xl font-bold text-black text-center md:text-start">
              Certified AWS Partner
            </h2>
            <p className="text-black text-[1rem] font-medium tracking-wide leading-relaxed py-4 text-center md:text-start">
              We ensure secure and optimized cloud environments aligned with
              industry best standards. Our expertise includes:
            </p>
            <ul className="text-black font-medium tracking-wide text-[1rem] -ml-2 space-y-2">
              <li className=" flex items-center">
                <span className="text-primary text-2xl">
                  <LuDot />
                </span>
                Leveraging well-architected AWS tools
              </li>
              <li className=" flex items-center">
                <span className="text-primary text-2xl">
                  <LuDot />
                </span>
                Accelerating cloud-native transformations
              </li>
              <li className=" flex items-center">
                <span className="text-primary text-2xl">
                  <LuDot />
                </span>
                Optimizing continuous testing of digital solutions
              </li>
              <li className=" flex items-center">
                <span className="text-primary text-2xl">
                  <LuDot />
                </span>
                Managing data with full integrity and compliance
              </li>
              <li className=" flex items-center">
                <span className="text-primary text-2xl">
                  <LuDot />
                </span>
                Safeguarding against sensitive data breaches
              </li>
            </ul>
          </div>
          <div className="relative w-full h-96 md:h-[370px]">
            <Image
              src={Pnetworking}
              alt="partners-networking"
              fill
              className="object-contain md:pl-20"
            />
          </div>
        </div>
      </section>

      <section className="md:py-20 py-10  px-5 md:px-0 bg-white container">
        <div className="grid md:grid-cols-2 items-center  gap-8  border-b border-grays pb-10 md:pb-16">
          <div className="relative w-full h-96 md:h-[380px] md:order-1 order-2 ">
            <Image
              src={Dprogramming}
              alt="developer-programming"
              fill
              className="object-contain md:pr-20"
            />
          </div>
          <div className=" order-1 md:order-2">
            <h2 className="md:text-3xl text-2xl font-bold text-black text-center md:text-start">
              iOS Developer Program Partner
            </h2>
            <p className="text-black text-[1rem] font-medium tracking-wide leading-relaxed py-4 text-center md:text-start">
              Radixweb holds the iOS Developer Program Partnership certification
              making us an integral part of the iOS development database.
              Adhering to Apple’s standards, we have certified abilities in
              meeting complex project requirements.
            </p>
            <ul className="text-black font-medium tracking-wide text-[1rem] -ml-2 space-y-2">
              <li className=" flex items-center">
                <span className="text-primary text-2xl">
                  <LuDot />
                </span>
                Develop, distribute and support iOS apps leveraging resources
              </li>
              <li className=" flex items-center">
                <span className="text-primary text-2xl">
                  <LuDot />
                </span>
                Seamlessly integrate latest beta and apple technologies into
                apps
              </li>
              <li className=" flex items-center">
                <span className="text-primary text-2xl">
                  <LuDot />
                </span>
                Thoroughly test apps with TestFlight before release
              </li>
              <li className=" flex items-center">
                <span className="text-primary text-2xl">
                  <LuDot />
                </span>
                Leverage code-level support to resolve bugs
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container px-5 md:px-0">
        <div className="grid md:grid-cols-2 items-center  border-b border-grays md:pb-14 pb-4 ">
          <div className="">
            <h2 className="md:text-3xl text-2xl font-bold text-black text-center md:text-start">
              Benefits of Partnering with Technology Company
            </h2>
            <p className="text-black text-[1rem] font-medium tracking-wide leading-relaxed py-4 text-center md:text-start">
              Partnering unlocks growth, innovation, and efficiency. Access
              expertise, cutting-edge tech, and shared resources to accelerate
              success. Reduce costs, mitigate risks, and expand market reach
              through collaboration. Gain competitive advantages, scalability,
              and faster problem-solving. Together, drive value, enhance
              capabilities, and achieve sustainable business excellence through
              trusted, long-term alliances.
            </p>
            <ul className="text-black font-medium tracking-wide text-[1rem] -ml-2 space-y-2">
              <li className=" flex items-center">
                <span className="text-primary text-2xl">
                  <LuDot />
                </span>
                Building integrated marketing solutions to boost business
                storefronts
              </li>
              <li className=" flex items-center">
                <span className="text-primary text-2xl">
                  <LuDot />
                </span>
                Early adoption of Kentico upgrades, novelty development kits for
                building custom capabilities
              </li>
              <li className=" flex items-center">
                <span className="text-primary text-2xl">
                  <LuDot />
                </span>
                Quick access of tech support and training from Kentico community
              </li>
            </ul>
          </div>
          <div className="relative w-full h-96 md:h-[370px]">
            <Image
              src={Bpartners}
              alt="bronze-partners"
              fill
              className="object-contain md:pl-20"
            />
          </div>
        </div>
      </section>

      <section className="md:py-20 py-10  px-5 md:px-0 bg-white container">
        <div className="grid md:grid-cols-2 items-center  gap-8  border-b border-grays pb-10 md:pb-16">
          <div className="relative w-full h-96 md:h-[380px] md:order-1 order-2 ">
            <Image
              src={Ncommerce}
              alt="nop-commerce"
              fill
              className="object-contain md:pr-20"
            />
          </div>
          <div className=" order-1 md:order-2">
            <h2 className="md:text-3xl text-2xl font-bold text-black text-center md:text-start">
              E-Commerce Partnership
            </h2>
            <p className="text-black text-[1rem] font-medium tracking-wide leading-relaxed py-4 text-center md:text-start">
              An eCommerce partnership drives mutual growth by combining your
              platform’s reach with our tech expertise. Boost sales with
              seamless integrations, AI-driven personalization, and scalable
              solutions. Reduce costs, enhance customer experience, and expand
              market presence. Together, we optimize performance, streamline
              operations, and unlock new revenue streams in the competitive
              digital marketplace.
            </p>
            <ul className="text-black font-medium tracking-wide text-[1rem] -ml-2 space-y-2">
              <li className=" flex items-center">
                <span className="text-primary text-2xl">
                  <LuDot />
                </span>
                Tech competent eCommerce systems with custom capabilities under
                the guidance of nop commerce community
              </li>
              <li className=" flex items-center">
                <span className="text-primary text-2xl">
                  <LuDot />
                </span>
                Enhance user experience with intuitive backend and seamless
                frontend capabilities
              </li>
              <li className=" flex items-center">
                <span className="text-primary text-2xl">
                  <LuDot />
                </span>
                Attend privileged training programs and adopt iterations faster
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container px-5 md:px-0">
        <div className="grid md:grid-cols-2 items-center  md:pb-20 pb-10 ">
          <div className="">
            <h2 className="md:text-3xl text-2xl font-bold text-black text-center md:text-start">
              Zoho Partnership
            </h2>
            <p className="text-black text-[1rem] font-medium tracking-wide leading-relaxed py-4 text-center md:text-start">
              As a certified Zoho partner, we help businesses maximize Zoho’s
              powerful suite—from CRM to finance and automation. Our expertise
              ensures seamless implementation, customization, and integration,
              boosting efficiency and growth. Leverage Zoho’s tools with our
              guidance to streamline operations, enhance productivity, and drive
              data-driven success. Partner with us to unlock Zoho’s full
              potential.
            </p>
            <ul className="text-black font-medium tracking-wide text-[1rem] -ml-2 space-y-2">
              <li className=" flex items-center">
                <span className="text-primary text-2xl">
                  <LuDot />
                </span>
                Automate and boost sales processes
              </li>
              <li className=" flex items-center">
                <span className="text-primary text-2xl">
                  <LuDot />
                </span>
                Create efficient and cost-effective lead management systems
              </li>
              <li className=" flex items-center">
                <span className="text-primary text-2xl">
                  <LuDot />
                </span>
                Seamlessly integrate custom ZOHO products and custom workflows
              </li>
              <li className=" flex items-center">
                <span className="text-primary text-2xl">
                  <LuDot />
                </span>
                Foster collaboration across all platforms
              </li>
            </ul>
          </div>
          <div className="relative w-full h-96 md:h-[370px]">
            <Image
              src={Zoho}
              alt="zoho"
              fill
              className="object-contain md:pl-20"
            />
          </div>
        </div>
      </section>

      <section className="bg-grayLight py-10 md:py-20">
        <h2 className="text-2xl md:text-3xl text-black font-bold tracking-wide  text-center  mb-2">
          Other Prominent
        </h2>
        <p className="text-[1rem] text-center text-black font-medium tracking-wide md:py-4 py-2 md:px-72 px-5">
          A host of other industry acknowledgements that confirm our credibility
          in consistent service offerings, solution security and adherence to
          industry’s best standards and practices.
        </p>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-6 container pt-10 ">
          {Ndata.map(({ icon, desc }, index) => {
            return (
              <div
                key={index}
                className={`border-grays px-5
    ${index % 2 === 0 ? "border-r" : ""}
    ${index === Ndata?.length - 1 ? "md:border-none" : "md:border-r"}`}
              >
                <h1 className="text-center font-bold text-3xl md:text-4xl pb-6 text-primary">
                  {icon}
                </h1>
                <p className="text-center text-[1rem] font-medium tracking-wide text-black">
                  {desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-20 bg-primary  flex flex-col items-center">
        <h2 className="md:text-3xl text-2xl font-bold mb-2 tracking-wide text-white">
          Share Your Concerns
        </h2>
        <p className="text-lg text-white font-medium tracking-wide mb-6 text-center">
          Experience our credibility in adhering to industry’s best standards.
        </p>
        <button className="bg-white  text-primary rounded-sm text-[1rem] font-medium tracking-wide py-2.5 px-5 md:mt-6 mt-2 flex justify-center items-center gap-2 hover:gap-4">
          Let is Co-create What You Need
          <span className="text-xl">
            <LiaLongArrowAltRightSolid />
          </span>
        </button>
      </section>
    </main>
  );
};

export default Partners;
