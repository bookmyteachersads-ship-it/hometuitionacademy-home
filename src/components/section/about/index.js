"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import AwardArea from "../home/award-area";
import TechnologiesArea from "../home/technologies-area";
import Team from "~/components/common/Team";
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
const AboutMain = () => {
  const facts = [
    {
      count: "9+",
      text: "Years in Business",
    },
    {
      count: "20000+",
      text: "Expert Teachers",
    },

    {
      count: "6000+",
      text: "Successful Students",
    },
  ];

  const [edge, setEdge] = useState({
    list: [
      {
        icon: (
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            ></path>
          </svg>
        ),
        title: "Personalized Learning",
        description:
          "Every student has unique learning needs. We help students find suitable tutors based on their class, board, subjects, learning goals, and preferred mode of learning. Personalized attention helps students understand concepts clearly and learn at their own pace.",
      },
      {
        icon: (
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.97308 18H14.0269C14.1589 16.7984 14.7721 15.8065 15.7676 14.7226C15.8797 14.6006 16.5988 13.8564 16.6841 13.7501C17.5318 12.6931 18 11.385 18 10C18 6.68629 15.3137 4 12 4C8.68629 4 6 6.68629 6 10C6 11.3843 6.46774 12.6917 7.31462 13.7484C7.40004 13.855 8.12081 14.6012 8.23154 14.7218C9.22766 15.8064 9.84103 16.7984 9.97308 18ZM14 20H10V21H14V20ZM5.75395 14.9992C4.65645 13.6297 4 11.8915 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10C20 11.8925 19.3428 13.6315 18.2443 15.0014C17.624 15.7748 16 17 16 18.5V21C16 22.1046 15.1046 23 14 23H10C8.89543 23 8 22.1046 8 21V18.5C8 17 6.37458 15.7736 5.75395 14.9992ZM13 10.0048H15.5L11 16.0048V12.0048H8.5L13 6V10.0048Z"></path>
          </svg>
        ),
        title: "Academic Excellence",
        description:
          "Strong fundamentals lead to better academic performance. Our tutors focus on concept clarity, regular practice, doubt-solving, revision, and exam preparation to help students improve their understanding and achieve their academic goals.",
      },
      {
        icon: (
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
            <path d="M16 2v4"></path>
            <path d="M3 10h18"></path>
            <path d="M8 2v4"></path>
            <path d="M17 14h-6"></path>
            <path d="M13 18H7"></path>
            <path d="M7 14h.01"></path>
            <path d="M17 18h.01"></path>
          </svg>
        ),
        title: "Student Confidence",
        description:
          "Learning is more effective when students feel confident. With individual attention, interactive teaching, continuous guidance, and supportive tutors, students can overcome learning challenges and become more confident in their studies.",
      },
      {
        icon: (
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 1v3H1V1zM1 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zm14 12v3h-5v-3zm-5-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zM6 8v7H1V8zM1 7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zm14-6v7h-5V1zm-5-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"></path>
          </svg>
        ),
        title: "Parent–Tutor Collaboration",
        description:
          "A successful learning journey requires coordination between students, parents, and tutors. We encourage clear communication and regular feedback so parents can stay informed about their child’s progress and learning requirements.",
      },
    ],
    id: 0,
  });

  const reviews = [
    {
      name: "Biju Saiman",
      designation: "CEO",
      avatar: "",
      rating: 5,
      review:
        "Education has the power to change lives. Our commitment is to connect every student with the right tutor and the right opportunities for success.",
    },

    {
      name: "Santosh Chalke",
      designation: "Senior Manager",
      avatar: "",
      rating: 5,
      review:
        "Personalized learning and dedicated support are at the heart of everything we do. Every student deserves guidance tailored to their unique goals.",
    },
    {
      name: "Amit Girdharwal",
      designation: "Senior Developer",
      avatar: "",
      rating: 5,
      review:
        "Technology should make learning more accessible. We build solutions that simplify tutor discovery and create a seamless educational experience.",
    },
  ];

  const features = [
    {
      title: "Careful Tutor Selection",
      description:
        "We help students find tutors based on their class, board, subjects, learning requirements, and preferred learning mode. Our structured selection process helps identify tutors who are suitable for the student's specific academic needs.",
    },
    {
      title: "Personalized Learning Approach",
      description:
        "Every student has different learning requirements. Our home and online tuition approach enables tutors to focus on individual strengths, weaknesses, learning pace, and academic goals for a more personalized learning experience.",
    },
    {
      title: "Subject & Curriculum Expertise",
      description:
        "Students can find tuition support across school classes, boards, subjects, competitive examinations, and higher education. Tutors can be matched according to the required subject, curriculum, and level of study.",
    },
    {
      title: "Continuous Learning Support",
      description:
        "Learning does not stop after a single class. Tutors support students through concept explanation, doubt-solving, practice, revision, assignments, and exam preparation to encourage consistent academic progress.",
    },
    {
      title: "Parent–Tutor Coordination",
      description:
        "Effective communication between parents, students, and tutors contributes to a better learning experience. We encourage clear coordination regarding learning requirements, class schedules, academic challenges, and student progress.",
    },
    {
      title: "Focus on Student Outcomes",
      description:
        "Our goal is not simply to arrange tuition it is to support meaningful learning. By combining personalized attention, suitable tutors, structured learning, and continuous academic support, Home Tuition Academy strives to help students become more confident and successful learners.",
    },
  ];

  return (
    <main className="w-full  pt-[20%] sm:pt-[15%] xl:pt-[9%] pb-16">
      {/* hero  */}
      <section className="small-container flex flex-col gap-4 lg:gap-5 px-5 sm:px-2">
        <h1 className="font-semibold text-grayBorder text-xl sm:text-3xl">
          About Home Tuition Academy
        </h1>

        <h1 className="font-extrabold text-grayDark text-[2rem] sm:text-[2.5rem] lg:text-[3rem] xl:text-[3.2rem] leading-tight">
          Your First Choice for{" "}
          <span className="from-primary to-danger bg-gradient-to-tr bg-clip-text text-transparent">
            Premium Home
          </span>{" "}
          &amp; Private Education
        </h1>

        <Image
          src="/assets/about/aboutus_hero.png"
          height={200}
          width={900}
          alt="about hero image"
          quality={50}
          className="w-full h-auto mt-2"
        />

        <div className="flex flex-col gap-4 font-medium text-grayDark text-base sm:text-lg text-center lg:px-16 xl:px-28 lg:mt-8 my-6">
          <p>
            At Home Tuition Academy, we believe every student deserves
            personalized guidance, focused attention, and the right mentor to
            unlock their true potential. We specialize in connecting students
            with highly qualified private tutors carefully matched to their
            academic goals, learning style, and curriculum requirements.
          </p>
          <p>
            From CBSE, ICSE, IB &amp; IGCSE to competitive exam preparation
            including JEE, NEET, and advanced English Communication &amp;
            Personality Development, we provide result-oriented learning
            experiences designed for excellence.
          </p>
          <p>
            Whether you prefer home tuition or online private sessions, our
            platform ensures flexible, convenient, and high-quality education
            tailored to every learner’s pace. With experienced educators,
            customized teaching methods, and one-on-one attention, we help
            students build confidence, improve performance, and achieve lasting
            academic success.
          </p>
        </div>

        <div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-4">
          <div className="w-full flex flex-col sm:grid grid-cols-2 sm:gap-10 xl:flex xl:flex-col xl:gap-4 xl:pr-20">
            <Image
              src="/assets/about/Tech Intelligence That Fosters Sustained Growth.png"
              height={300}
              width={200}
              alt="about hero image"
              quality={50}
              className="w-full h-auto "
            />

            <p className="font-semibold text-md xl:text-base first-letter:text-2xl first-letter:text-primary leading-normal">
              Since 2017, Home Tuition Academy has been providing trusted,
              personalized, and result-oriented home tuition services across
              Mumbai, Navi Mumbai, Thane, and Ghodbunder Road. With decades of
              experience in the education industry, Home Tuition Academy focuses
              on helping students find the most suitable and qualified tutors
              according to their academic needs, learning style, board, class,
              and subject requirements.
            </p>
          </div>

          <div className="w-full flex flex-col gap-5 sm:gap-8 lg:gap-10 p-7 sm:p-10 bg-primaryLightest rounded-xl">
            <h2 className="heading-sm text-grayDark">
              Expert Guidance That Accelerates Student Success
            </h2>

            <div className="flex flex-col gap-3">
              <p className="text-sm sm:text-base text-grayDark">
                At Home Tuition Academy, we connect students with experienced
                tutors who provide personalised, one-to-one academic support
                tailored to their learning needs. Every student has a different
                pace, learning style, and academic goal, which is why our tutors
                focus on building strong fundamentals, clearing concepts, and
                developing confidence through focused guidance. <br /> <br />
                Our tutors support students across CBSE, ICSE, SSC, IGCSE, IB,
                and other academic curricula, helping them stay consistent with
                their studies and better prepared for examinations. From regular
                school support and homework assistance to board exam preparation
                and subject-specific tutoring, we make learning more structured,
                focused, and effective.
                <br />
                With the right tutor and a personalised approach, students can
                overcome learning gaps, strengthen their understanding, and make
                steady academic progress.
              </p>

              <Link
                href="/contact-us"
                className="text-sm font-semibold text-primary flex flex-row items-center gap-1 hover:gap-2 transition-all duration-100 ease-in-out"
              >
                Ask For a Consultation{" "}
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
      </section>

      {/* fact area  */}
      <section className="w-full  bg-black  py-7 sm:py-12 lg:py-16 my-10 xl:my-16">
        <div className="small-container grid sm:grid-cols-4 gap-5 sm:gap-0">
          {facts?.map((fact, index) => (
            <div
              key={index}
              className={`${
                index !== facts?.length - 1 && "sm:border-r border-grayBorder"
              } w-full px-5 sm:px-7  flex-center flex-col text-center gap-1 sm:gap-3`}
            >
              <h3 className="font-extrabold text-[2.3rem] sm:text-[2.5rem] bg-gradient-to-r from-primary  to-danger inline-block text-transparent bg-clip-text">
                {fact?.count}
              </h3>

              <p className="text-sm font-medium text-white">{fact?.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="small-container px-5 sm:px-2">
        <div className="w-full grid sm:grid-cols-2 gap-4 xl:gap-10">
          <div className="w-full flex flex-col gap-4">
            <h2 className="heading-sm">
              Cultivating a Better Learning Journey
            </h2>
            <p className="text-sm sm:text-base text-grayDark">
              At Home Tuition Academy, we believe every student learns
              differently. Our personalized tuition approach connects students
              with the right tutors, subjects, and learning methods to build
              strong academic foundations, improve performance, and develop
              confidence for long-term success.
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
                className="w-full py-5 border-b border-grayLight  cursor-pointer flex flex-col gap-5"
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
                  <p className="text-sm sm:text-md text-grayDark">
                    {item?.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* review  */}
      <section className="w-full  bg-black  py-7 sm:py-12 lg:py-16 my-10 xl:my-16">
        <div className="small-container ">
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
      </section>

      {/* service  */}
      <div className="px-5 sm:px-2 py-12 lg:py-10">
        <div className="small-container flex flex-col gap-16">
          <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-5 xl:gap-7">
            <div className="w-full flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-bold text-black text-center sm:text-start">
                Ensuring Quality in Every Learning Journey
              </h2>

              <p className="description text-sm sm:text-md xl:text-base mt-3 text-center sm:text-start">
                At Home Tuition Academy, quality learning is at the heart of
                everything we do. We focus on connecting students with suitable
                tutors, supporting personalized learning, and maintaining a
                structured approach to tuition that helps students build strong
                concepts, improve academic performance, and achieve their
                learning goals.
              </p>
            </div>

            <div className="flex flex-col">
              {features?.map((service, index) => {
                const { title, description } = service;
                return (
                  <ServiceCard
                    key={index}
                    title={title}
                    description={description}
                    index={index}
                    lastIndex={features?.length - 1 === index}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <AwardArea />

      {/* CTA : 1  */}
      <section className="w-full py-5 sm:py-14 xl:py-20 px-5 lg:px-0">
        <div className="small-container rounded-2xl xl:rounded-3xl flex-center text-center flex-col gap-5 bg-primaryLightest border border-primaryLight py-12 px-7 sm:px-10 lg:px-16">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold leading-[1.3]">
            We are empowering students with personalised learning, expert
            tutors, and the right guidance to achieve their academic goals.
          </h2>

          <Link
            href="/contact-us"
            className="primary-btn-md w-fit mx-auto xl:mx-0 sm:mt-6"
          >
            Find the Right Tutor →
          </Link>
        </div>
      </section>

      <div className="small-container py-7 sm:py-10 lg:py-16 xl:py-20 px-5  lg:px-2">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 md:items-center">
          <div className="text-center sm:text-start">
            <h2 className="heading-sm">Find the Right Tutor →</h2>
          </div>
          <div className="flex flex-col gap-4 items-center md:pl-5 md:border-l border-grayBorder">
            <p className="text-sm sm:text-base text-black text-center sm:text-start">
              At Home Tuition Academy, we believe every student learns
              differently. Our personalised home tuition connects students with
              experienced tutors who understand their individual learning needs,
              academic goals, and pace. From strengthening fundamentals to
              preparing for school and board examinations, our tutors provide
              focused one-to-one guidance designed to build clarity, confidence,
              and consistency.
            </p>

            <p>
              With support across CBSE, ICSE, SSC, IGCSE, IB, and other academic
              curricula, students receive structured learning tailored to their
              requirements. Our commitment to quality tutoring, regular
              guidance, and student-focused learning helps turn academic
              challenges into measurable progress—while giving parents
              confidence that their child is receiving the right support at
              every stage.
            </p>
          </div>
        </div>
      </div>

      {/* <div className="small-container py-5 lg:py-0 px-5  lg:px-2">
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
              </div>{" "}
              <div className="w-full flex flex-row items-center gap-3">
                <div className="bg-primaryLight rounded-full p-[3px]">
                  <div className="bg-primary rounded-full p-[3px]" />
                </div>
                <span className="text-sm sm:text-md text-black">
                  90% Trained in Emerging Technology
                </span>
              </div>{" "}
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
      </div> */}

      {/* leader  */}
      {/* <Team /> */}

      {/* <TechnologiesArea heading="Explore Our Advanced Tech Stack" /> */}
      {/* CTA : 02  */}
      <section className="w-full px-5 lg:px-0 mt-4">
        <div className="small-container rounded-2xl xl:rounded-3xl flex-center text-center flex-col gap-5  bg-primaryLightest border border-primaryLight py-12 px-7 sm:px-10 lg:px-16">
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
    </main>
  );
};

export default AboutMain;
