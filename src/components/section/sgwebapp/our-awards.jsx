"use client";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { LuDot } from "react-icons/lu";

import Image from "next/image";
import React from "react";

import { bronzeWinner, goldWinner } from "../../../../public/assets/innovation";
import {
  Ahero,
  Ahmedabad,
  Business,
  Company,
  Development,
  Global,
  India,
  Outsouecing,
  Power,
  TopSoftware,
  Top10,
  TopIndia,
  Worldfestival,
  Itfirms,
  TopParted,
  Good,
  Selected,
} from "../../../../public/assets/our-awards";
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

const OurAwards = () => {
  return (
    <main className="bg-white text-gray-800 mt-20">
      <section className="py-16 container px-5  md:gap-4 gap-10 md:px-0 grid md:grid-cols-2 grid-cols-1 items-center">
        <div>
          <h1 className="md:text-lg text-sm  font-bold  text-primary ">
            Awards and Recognitions
          </h1>
          <p className="text-2xl md:text-3xl text-black font-bold tracking-wide py-4 md:pr-16">
            Recognized Globally for Tech Excellence.
          </p>
          <p className="text-[1rem] text-black font-medium tracking-wide md:pr-10">
            Driving business transformation through cutting-edge tech
            strategies, intelligent automation, and data engineering—where
            innovation meets measurable impact.
          </p>
          <button className="bg-primary capitalize text-white rounded-sm text-[1rem] font-medium tracking-wide py-2.5 px-5 mt-6 flex justify-center items-center gap-2 hover:gap-4">
            Let is Team Up
            <span className="text-xl">
              <LiaLongArrowAltRightSolid />
            </span>
          </button>
        </div>
        <div className="relative w-full h-96 md:h-[360px]  md:pl-36">
          <Image
            src={Ahero}
            alt="awards-hero"
            fill
            className="object-contain"
          />
        </div>
      </section>

      <section className=" bg-primary ">
        <div className="container  md:py-20 md:px-20 gap-7 px-5 py-10">
          <h1 className="text-white text-xl md:text-3xl  font-semibold  text-center">
            In League of Industry’s Top Software Partners
          </h1>
          <p className="text-white text-[1rem] font-medium tracking-wide text-center md:px-32  pt-4">
            Pioneering digital transformation for 3,000+ global enterprises. We
            propel product success through cutting-edge strategies and proven
            industry excellence—turning innovation into measurable business
            results.
          </p>
        </div>
      </section>

      <section className="md:py-20 py-10  px-5 md:px-0 bg-white container">
        <div className="grid md:grid-cols-2 items-center  gap-8  border-b border-grays pb-10 md:pb-16">
          <div className="relative w-full h-96 md:h-[430px] md:order-1 order-2 ">
            <Image
              src={Outsouecing}
              alt="outsourcing-100"
              fill
              className="object-contain md:pr-20"
            />
          </div>
          <div className=" md:order-2 order-1">
            <h2 className="md:text-3xl text-2xl font-bold text-black text-center md:text-start">
              IAOP Global Outsourcing 100® 2024
            </h2>
            <p className="text-black text-[1rem] font-medium tracking-wide leading-relaxed py-3 text-center md:text-start">
              Recognized among IAOPiss 2024 Top 100® Global Outsourcing leaders,
              we stand alongside industry giants. This prestigious accolade
              validates our proven ability to deliver exceptional software
              solutions while upholding the highest standards of quality,
              collaboration, and business integrity across diverse projects.
            </p>

            <p className="text-black text-[1rem] font-medium tracking-wide leading-relaxed py-3 text-center md:text-start">
              IAOP judges all providers mentioned on its list based on:
            </p>
            <ul className="text-black font-medium tracking-wide text-[1rem] -ml-2 space-y-2 grid md:grid-cols-2">
              <li className=" flex items-center">
                <span className="text-primary text-2xl">
                  <LuDot />
                </span>
                Sustained Excellence
              </li>
              <li className=" flex items-center">
                <span className="text-primary text-2xl">
                  <LuDot />
                </span>
                Customer References
              </li>
              <li className=" flex items-center">
                <span className="text-primary text-2xl">
                  <LuDot />
                </span>
                Innovation Programs
              </li>
              <li className=" flex items-center">
                <span className="text-primary text-2xl">
                  <LuDot />
                </span>
                Cretifications and Awards
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container px-5 md:px-0">
        <div className="grid md:grid-cols-2 items-center  border-b border-grays md:pb-14 pb-8 ">
          <div className="">
            <h2 className="md:text-3xl text-2xl font-bold text-black text-center md:text-start">
              INC. Power Partner Award 2024 – Software Development
            </h2>
            <p className="text-black text-[1rem] font-medium tracking-wide leading-relaxed py-4 text-center md:text-start">
              Creating software solutions matters—but being named a ‘Power
              Partner’ proves we deliver real impact. INC. Business Media’s 2024
              Power Partner Awards recognize us for driving tech innovation that
              fuels our clients’ market success, selected from 389 global
              contenders through rigorous evaluation.
            </p>
            <p className="text-black text-[1rem] font-medium tracking-wide leading-relaxed py-4 text-center md:text-start">
              This prestigious list identifies elite B2B partners who empower
              sustainable innovation through market-leading products and
              services—where technology meets transformational business results.
            </p>
          </div>
          <div className="relative w-full h-96 md:h-[430px]">
            <Image
              src={Power}
              alt="partners-networking"
              fill
              className="object-contain md:pl-20 mt-4 md:mt-0"
            />
          </div>
        </div>
      </section>

      <section className="md:py-20 py-10  px-5 md:px-0 bg-white container">
        <div className="grid md:grid-cols-2 items-center  gap-8  border-b border-grays pb-10 md:pb-16">
          <div className="relative w-full h-96 md:h-[430px] md:order-1 order-2 ">
            <Image
              src={bronzeWinner}
              alt="bronze-winner"
              fill
              className="object-contain md:pr-20"
            />
          </div>
          <div className=" order-1 md:order-2">
            <h2 className="md:text-3xl text-2xl font-bold text-black text-center md:text-start">
              Steevie Innovation Awards in Technology
            </h2>
            <p className="text-black text-[1rem] font-medium tracking-wide leading-relaxed py-4 text-center md:text-start">
              We are thrilled to announce that Itsoftworld has been named a
              Bronze Winner in Innovation in Technology Development (Asia
              Pacific) at the prestigious Steevie International Business
              Awards®. This esteemed, decade-old program recognizes outstanding
              business achievements and strategic excellence among global
              service providers.
            </p>
            <p className="text-black text-[1rem] font-medium tracking-wide leading-relaxed py-4 text-center md:text-start">
              Selected from 12,000+ entries across 70+ countries, this honor
              celebrates our groundbreaking work in developing TezJS—an
              open-source, PWA-ready framework crafted by TOGAF-certified
              architects.
            </p>
          </div>
        </div>
      </section>

      <section className="container px-5 md:px-0">
        <div className="grid md:grid-cols-2 items-center  border-b border-grays md:pb-14 pb-4 ">
          <div className="">
            <h2 className="md:text-3xl text-2xl font-bold text-black text-center md:text-start">
              Global Excellence in IT Consulting - Globee® Award Winner
            </h2>
            <p className="text-black text-[1rem] font-medium tracking-wide leading-relaxed py-4 text-center md:text-start">
              Itsoftworld Wins Gold at the 2022 Globee® Business Excellence
              Awards for IT Consulting Excellence We’re honored to be recognized
              as a Gold Winner in IT Consultation at the 12th Annual Globee®
              Business Excellence Awards—a premier platform celebrating global
              business achievement.
            </p>
            <p className="text-black text-[1rem] font-medium tracking-wide leading-relaxed py-4 text-center md:text-start">
              This prestigious accolade underscores our expertise in guiding
              organizations of all sizes toward sustainable growth through
              transformative technology solutions.
            </p>
          </div>
          <div className="relative w-full h-96 md:h-[430px]">
            <Image
              src={Business}
              alt="business-excellence"
              fill
              className="object-contain md:pl-20 py-4 md:py-0"
            />
          </div>
        </div>
      </section>

      <section className="md:py-20 py-10  px-5 md:px-0 bg-white container">
        <div className="grid md:grid-cols-2 items-center  gap-8  border-b border-grays pb-10 md:pb-16">
          <div className="relative w-full h-96 md:h-[370px] md:order-1 order-2 ">
            <Image
              src={goldWinner}
              alt="gold winner"
              fill
              className="object-contain md:pr-20"
            />
          </div>
          <div className=" order-1 md:order-2">
            <h2 className="md:text-3xl text-2xl font-bold text-black text-center md:text-start">
              Itsoftworld Named Most Innovative IT Company of 2024 by TITAN
              Business Awards
            </h2>
            <p className="text-black text-[1rem] font-medium tracking-wide leading-relaxed py-4 text-center md:text-start">
              We are honored to announce that Itsoftworld has been awarded Gold
              Status for Innovation in IT by the internationally acclaimed TITAN
              Business Awards – a testament to our groundbreaking work in
              redefining software development excellence.
            </p>
            <p className="text-black text-[1rem] font-medium tracking-wide leading-relaxed py-4 text-center md:text-start">
              RxWeb – Our visionary open-source framework that’s transforming
              clean-code architecture. Enterprise Impact – Empowering businesses
              across scales to achieve sustainable, ethical growth.
            </p>
          </div>
        </div>
      </section>

      <section className="container px-5 md:px-0">
        <div className="grid md:grid-cols-2 items-center  md:pb-20 pb-10 ">
          <div className="">
            <h2 className="md:text-3xl text-2xl font-bold text-black text-center md:text-start">
              Clutch’s Global Top Service Providers For 2023
            </h2>
            <p className="text-black text-[1rem] font-medium tracking-wide leading-relaxed py-4 text-center md:text-start">
              We’re proud to announce our inclusion in the Clutch 1000 – the
              platform’s most exclusive recognition, reserved for the world’s
              elite business service providers.
            </p>
            <p className="text-black text-[1rem] font-medium tracking-wide leading-relaxed py-4 text-center md:text-start">
              Service Excellence – Consistently delivering beyond expectations,
              Cutting-Edge Innovation – Leveraging advanced technologies to
              drive digital transformation, Reliable Partnerships – Building
              trust through measurable client success.
            </p>
          </div>
          <div className="relative w-full h-96 md:h-[430px]">
            <Image
              src={Global}
              alt="clutch-global"
              fill
              className="object-contain md:pl-20"
            />
          </div>
        </div>
      </section>

      <section className="md:py-20 py-10  px-5 md:px-0 bg-white container">
        <div className="grid md:grid-cols-2 items-center  gap-8  border-b border-grays pb-10 md:pb-16">
          <div className="relative w-full h-96 md:h-[430px] md:order-1 order-2 ">
            <Image
              src={Ahmedabad}
              alt="clutch-ahmedabad"
              fill
              className="object-contain md:pr-20"
            />
          </div>
          <div className=" order-1 md:order-2">
            <h2 className="md:text-3xl text-2xl font-bold text-black text-center md:text-start">
              Itsoftworld: Consecutive Clutch Champion (2018-2023) - Among the
              Worldiss Elite Software Developers
            </h2>
            <p className="text-black text-[1rem] font-medium tracking-wide leading-relaxed py-4 text-center md:text-start">
              For the sixth consecutive year, Itsoftworld has earned its place
              among Clutchiss Top Software Developers in 2023. This recognition
              underscores our proven ability to deliver market-leading software
              solutions powered by sustainable automation.
            </p>
            <p className="text-black text-[1rem] font-medium tracking-wide leading-relaxed py-4 text-center md:text-start">
              Backed by authenticated and verified customer feedback, we have
              consistently helped clients keep pace with rapid technological
              changes in the software development landscape. This track record
              has established Itsoftworld as a trusted partner that delivers
              100% client success - every time. time.
            </p>
          </div>
        </div>
      </section>

      <section className="container px-5 md:px-0">
        <div className="grid md:grid-cols-2 items-center  md:pb-20 pb-10 ">
          <div className="">
            <h2 className="md:text-3xl text-2xl font-bold text-black text-center md:text-start">
              Top Custom Software Development Companies by DesignRush
            </h2>
            <p className="text-black text-[1rem] font-medium tracking-wide leading-relaxed py-4 text-center md:text-start">
              We are honored to be ranked among the Top Custom Software
              Development Companies by DesignRush - a premier B2B platform
              linking businesses with verified tech partners.
            </p>
            <p className="text-black text-[1rem] font-medium tracking-wide leading-relaxed py-4 text-center md:text-start">
              Delivering exceptional technology solutions,Empowering clients to
              maximize digital potential, Evolving from developer to strategic
              transformation partner.
            </p>
          </div>
          <div className="relative w-full h-96 md:h-[430px]">
            <Image
              src={Company}
              alt="development-company"
              fill
              className="object-contain md:pl-20"
            />
          </div>
        </div>
      </section>

      <section className="md:py-20 py-10  px-5 md:px-0 bg-white container">
        <div className="grid md:grid-cols-2 items-center  gap-8  border-b border-grays pb-10 md:pb-16">
          <div className="relative w-full h-96 md:h-[430px] md:order-1 order-2 ">
            <Image
              src={Worldfestival}
              alt="world-festival"
              fill
              className="object-contain md:pr-20"
            />
          </div>
          <div className=" order-1 md:order-2">
            <h2 className="md:text-3xl text-2xl font-bold text-black text-center md:text-start">
              WorldFestival 2022 Startup Awards
            </h2>
            <p className="text-black text-[1rem] font-medium tracking-wide leading-relaxed py-4 text-center md:text-start">
              We are proud to announce another remarkable achievement - our
              proprietary RxWeb framework has been honored with the World
              Festival Innovation Award, ranking among the most innovative
              startups globally.
            </p>
            <p className="text-black text-[1rem] font-medium tracking-wide leading-relaxed py-4 text-center md:text-start">
              This award-winning, feature-rich open-source architecture for
              Angular and .NET Core development demonstrates our commitment to
              pushing technological boundaries. RxWeb stands out with: Built-in
              scaffolding capabilities.
            </p>
          </div>
        </div>
      </section>

      <section className="container px-5 md:px-0">
        <div className="grid md:grid-cols-2 items-center  md:pb-20 pb-10 ">
          <div className="">
            <h2 className="md:text-3xl text-2xl font-bold text-black text-center md:text-start">
              Clutch is Top IT Service Providers - Consecutive Winner from
              2018-2023
            </h2>
            <p className="text-black text-[1rem] font-medium tracking-wide leading-relaxed py-4 text-center md:text-start">
              Radixweb has been the consecutive winner from 2018-2023 for one of
              the best IT Service providers by Clutch.
            </p>
            <p className="text-black text-[1rem] font-medium tracking-wide leading-relaxed py-4 text-center md:text-start">
              Clutch recommends Radixweb as a leading IT service provider with a
              strong foothold in the IT service provider ecosystem. It
              acknowledges our consistency in delivering highly impactful,
              value-enhancing IT services and solutions powered by cutting-edge
              tech expertise and an innovative approach.
            </p>
          </div>
          <div className="relative w-full h-96 md:h-[430px]">
            <Image
              src={India}
              alt="clutch-india"
              fill
              className="object-contain md:pl-20"
            />
          </div>
        </div>
      </section>

      <section className="md:py-20 py-10  px-5 md:px-0 bg-white container">
        <div className="grid md:grid-cols-2 items-center  gap-8  border-b border-grays pb-10 md:pb-16">
          <div className="relative w-full h-96 md:h-[430px] md:order-1 order-2 ">
            <Image
              src={Development}
              alt="world-festival"
              fill
              className="object-contain md:pr-20"
            />
          </div>
          <div className=" order-1 md:order-2">
            <h2 className="md:text-3xl text-2xl font-bold text-black text-center md:text-start">
              DesignRush’s Top California Web Development Companies
            </h2>
            <p className="text-black text-[1rem] font-medium tracking-wide leading-relaxed py-4 text-center md:text-start">
              The prominent software development marketplace, DesignRush has
              named Radixweb in its Top California Web Development Companies
              list, alongside a host of popular industry names.
            </p>
            <p className="text-black text-[1rem] font-medium tracking-wide leading-relaxed py-4 text-center md:text-start">
              Radixweb has won this prestigious rank in the category of Best
              Development Firms across the state of California. This recognition
              proves that we are constantly progressing in our aim to advance
              global businesses with the best-fit use of technology.
            </p>
          </div>
        </div>
      </section>

      <section className="container px-5 md:px-0">
        <div className="grid md:grid-cols-2 items-center  md:pb-20 pb-10 ">
          <div className="">
            <h2 className="md:text-3xl text-2xl font-bold text-black text-center md:text-start">
              Clutch’s Top IT Service Providers - Consecutive Winner from
              2018-2023
            </h2>
            <p className="text-black text-[1rem] font-medium tracking-wide leading-relaxed py-4 text-center md:text-start">
              Radixweb has been the consecutive winner from 2018-2023 for one of
              the best IT Service providers by Clutch.
            </p>
            <p className="text-black text-[1rem] font-medium tracking-wide leading-relaxed py-4 text-center md:text-start">
              Clutch recommends Radixweb as a leading IT service provider with a
              strong foothold in the IT service provider ecosystem. It
              acknowledges our consistency in delivering highly impactful,
              value-enhancing IT services and solutions powered by cutting-edge
              tech expertise and an innovative approach.
            </p>
          </div>
          <div className="relative w-full h-96 md:h-[430px]">
            <Image
              src={TopIndia}
              alt="top-clutch-india"
              fill
              className="object-contain md:pl-20"
            />
          </div>
        </div>
      </section>

      <section className="md:py-20 py-10  px-5 md:px-0 bg-white container">
        <div className="grid md:grid-cols-2 items-center  gap-8  border-b border-grays pb-10 md:pb-16">
          <div className="relative w-full h-96 md:h-[430px] md:order-1 order-2 ">
            <Image
              src={Top10}
              alt="top-10"
              fill
              className="object-contain md:pr-20"
            />
          </div>
          <div className=" order-1 md:order-2">
            <h2 className="md:text-3xl text-2xl font-bold text-black text-center md:text-start">
              Findbestwebdev is Top 10
            </h2>
            <p className="text-black text-[1rem] font-medium tracking-wide leading-relaxed py-4 text-center md:text-start">
              Findbestwebdev has recognized us in one of the top most spots for
              its best custom software development companies list. This
              acknowledgement stands as a testament for our expertise in
              developing custom tech capabilities with emerging tech.
            </p>
            <p className="text-black text-[1rem] font-medium tracking-wide leading-relaxed py-4 text-center md:text-start">
              Findbestwebdev has appreciated our consistent efforts towards
              innovation and in bringing together experts in service lines of
              strategy, design, and technology to help clients enhance their
              tech capabilities.
            </p>
          </div>
        </div>
      </section>

      <section className="container px-5 md:px-0">
        <div className="grid md:grid-cols-2 items-center  md:pb-20 pb-10 ">
          <div className="">
            <h2 className="md:text-3xl text-2xl font-bold text-black text-center md:text-start">
              Techreviewer is Top 100
            </h2>
            <p className="text-black text-[1rem] font-medium tracking-wide leading-relaxed py-4 text-center md:text-start">
              Techreviewer’s ‘Top 100 Software Development Companies List’
              establishes Radixweb as agile problem solvers with in-depth
              knowledge of IT consultation and an unmatched ability to
              understand the client’s business needs.
            </p>
            <p className="text-black text-[1rem] font-medium tracking-wide leading-relaxed py-4 text-center md:text-start">
              Numerous five-star reviews, service excellence and technical
              capabilities have positioned us as a company that continually
              strives to set new benchmarks in the industry.
            </p>
          </div>
          <div className="relative w-full h-96 md:h-[430px]">
            <Image
              src={TopSoftware}
              alt="clutch-india"
              fill
              className="object-contain md:pl-20"
            />
          </div>
        </div>
      </section>

      <section className="md:py-20 py-10  px-5 md:px-0 bg-white container">
        <div className="grid md:grid-cols-2 items-center  gap-8  border-b border-grays pb-10 md:pb-16">
          <div className="relative w-full h-96 md:h-[430px] md:order-1 order-2 ">
            <Image
              src={Itfirms}
              alt="itFirms"
              fill
              className="object-contain md:pr-20"
            />
          </div>
          <div className=" order-1 md:order-2">
            <h2 className="md:text-3xl text-2xl font-bold text-black text-center md:text-start">
              Top 10 by ITFirms
            </h2>
            <p className="text-black text-[1rem] font-medium tracking-wide leading-relaxed py-4 text-center md:text-start">
              The Top 10 Web Development Companies List by ITFirms acknowledges
              Radixweb’s efforts towards building simplified, agile, high-impact
              and realistic web applications with uncompromised development
              ethics. Our processes are acclaimed as strategic and world-class,
              be it enterprise-grade software development or creation of a new
              viral app.
            </p>
            <p className="text-black text-[1rem] font-medium tracking-wide leading-relaxed py-4 text-center md:text-start">
              ITFirms has curated the list on the basis of the providers’
              reliability quotient, past performance and quality of professional
              services.
            </p>
          </div>
        </div>
      </section>

      <section className="container px-5 md:px-0">
        <div className="grid md:grid-cols-2 items-center  md:pb-20 pb-10 ">
          <div className="">
            <h2 className="md:text-3xl text-2xl font-bold text-black text-center md:text-start">
              Softwareworld is Top 100
            </h2>
            <p className="text-black text-[1rem] font-medium tracking-wide leading-relaxed py-4 text-center md:text-start">
              Softwareworld unbiasedly perceives us capable of shaping emerging
              technologies with data intelligence across our software solutions
              and has named us in its Top 100 list for Software Development
              Companies.
            </p>
            <p className="text-black text-[1rem] font-medium tracking-wide leading-relaxed py-4 text-center md:text-start">
              Our global footprint in the USA, UK, Australia, Canada, Ireland,
              Europe, Dubai, and many other countries is acknowledged and
              acclaimed by Softwareworld.
            </p>
          </div>
          <div className="relative w-full h-96 md:h-[430px]">
            <Image
              src={TopParted}
              alt="clutch-india"
              fill
              className="object-contain md:pl-20"
            />
          </div>
        </div>
      </section>

      <section className="md:py-20 py-10  px-5 md:px-0 bg-white container">
        <div className="grid md:grid-cols-2 items-center  gap-8  border-b border-grays pb-10 md:pb-16">
          <div className="relative w-full h-96 md:h-[430px] md:order-1 order-2 ">
            <Image
              src={Good}
              alt="good-firms"
              fill
              className="object-contain md:pr-20"
            />
          </div>
          <div className=" order-1 md:order-2">
            <h2 className="md:text-3xl text-2xl font-bold text-black text-center md:text-start">
              Top 100 by Goodfirms
            </h2>
            <p className="text-black text-[1rem] font-medium tracking-wide leading-relaxed py-4 text-center md:text-start">
              Goodfirms, a leading B2B US-based IT reviewer, in its Top 100 list
              for Software Development Companies accredits Radixweb with great
              business acumen along with technological insights to optimize
              organizational excellence and unprecedented growth for global
              customers.
            </p>
            <p className="text-black text-[1rem] font-medium tracking-wide leading-relaxed py-4 text-center md:text-start">
              Benchmarking success for 3000+ global customers over two decades,
              Radixweb has acquired nuanced software development expertise.
            </p>
          </div>
        </div>
      </section>

      <section className="container px-5 md:px-0">
        <div className="grid md:grid-cols-2 items-center  md:pb-20 pb-10 ">
          <div className="">
            <h2 className="md:text-3xl text-2xl font-bold text-black text-center md:text-start">
              Selected Firms is USA Top 2020 List
            </h2>
            <p className="text-black text-[1rem] font-medium tracking-wide leading-relaxed py-4 text-center md:text-start">
              SelectedFirms, a California-based eminent online platform for
              finding digital solutions, conferred a top spot to Radixweb on its
              Top Web Development Companies of USA list.
            </p>
            <p className="text-black text-[1rem] font-medium tracking-wide leading-relaxed py-4 text-center md:text-start">
              It recognizes our nuanced footprints in the rapidly evolving tech
              ecosystem with legacy modernization, mobile and web app
              development, custom app development and software re-engineering.
            </p>
          </div>
          <div className="relative w-full h-96 md:h-[430px]">
            <Image
              src={Selected}
              alt="selected-firms"
              fill
              className="object-contain md:pl-20"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary  flex flex-col items-center">
        <h2 className="md:text-3xl text-2xl font-bold mb-2 tracking-wide text-white">
          We are the certified Best!
        </h2>
        <p className="text-lg text-white font-medium tracking-wide mb-6 text-center">
          From data security to software quality and on-time delivery.
        </p>
        <button className="bg-white  text-primary rounded-sm text-[1rem] font-medium tracking-wide py-2.5 px-5 md:mt-6 mt-2 flex justify-center items-center gap-2 hover:gap-4">
          Check Our Compliances
          <span className="text-xl">
            <LiaLongArrowAltRightSolid />
          </span>
        </button>
      </section>
    </main>
  );
};

export default OurAwards;
