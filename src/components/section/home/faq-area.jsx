"use client";
import React, { useState } from "react";
import { homePageContent } from "../../../../public/db/contents.home";
const { faqs } = homePageContent;

const Accordion = ({
  isOpen = false,
  question = "question",
  answer = "answer",
}) => {
  const [open, setOpen] = useState(isOpen);
  return (
    <div
      onClick={() => setOpen(!open)}
      className={`${
        open ? "bg-primaryLightest " : ""
      }  border border-primaryLight w-full p-3 flex flex-col gap-2 transition-all duration-300 ease-in-out cursor-pointer`}
    >
      <div className="w-full flex flex-row justify-between items-center selection:bg-none">
        <h3 className="font-semibold text-meteoriteDark2 text-md sm:text-xl first-letter:capitalize selection:bg-none">
          {question}
        </h3>

        <span
          className={`${
            open && "rotate-180"
          } text-2xl text-black transition-all duration-300 ease-in-out`}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
          </svg>
        </span>
      </div>
      {open && (
        <p className="text-xs sm:text-base font-medium text-[1rem] tracking-wide text-black first-letter:capitalize selection:bg-none">
          {answer}
        </p>
      )}
    </div>
  );
};

const FaqArea = ({
  faqsList = faqs,
  heading = "Frequently Asked Questions (FAQs)",
}) => {
  return (
    <section className="w-full  py-8 lg:py-10 xl:py-10 px-5 sm:px-2">
      <div className="container flex flex-col  gap-7 sm:gap-10 xl:gap-12">
        <h2 className="heading text-center"> {heading}</h2>

        {/* list  */}

        <div className="w-full flex flex-col gap-3">
          {faqsList?.map((faq, index) => {
            const { question, answer } = faq;
            return (
              <Accordion
                key={index}
                isOpen={index == 0}
                question={question}
                answer={answer}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqArea;
