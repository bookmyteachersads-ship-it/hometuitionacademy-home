"use client";
import Image from "next/image";
import RelatedPost from "../blog/related-post";
import { useState } from "react";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";
const SingleStudyArticle = ({ slug, category = "", singlePost = {} }) => {
  const [isErr, setIsErr] = useState(false);

  const {
    title,
    thumbnail = { url: "" },
    content,
    _id,
    description,
    // category,
  } = singlePost;

  return (
    <div className="w-full">
      <div className="w-full space-y-10  pb-16">
        <div className="w-full  px-5 xl:px-0 pb-10 xl:pb-24 rounded-bl-[10px] lg:rounded-b-[50px]  pt-[20%] sm:pt-[15%] xl:pt-[8%] bg-primaryLightest ">
          <div className="container grid lg:grid-cols-2 items-center gap-10">
            <div className="w-full flex flex-col gap-4">
              <Link
                href="/case-studies"
                className="w-fit px-3 py-2 inline-flex items-center gap-1 hover:gap-2 transition-all rounded-tl-xl text-xs font-medium text-white bg-primary"
              >
                <BiArrowBack /> Back
              </Link>
              <div className="w-fit text-xs text-gray whitespace-nowrap">
                <Link href="/case-studies" className="text-primary">
                  CASE STUDY
                </Link>{" "}
                | in {singlePost?.category?.name}
              </div>
              <h1 className="heading first-letter:capitalize">{title}</h1>
              <p className="text-sm text-gray first-letter:capitalize">
                {description}
              </p>
            </div>
            <Image
              alt={thumbnail?.alt}
              title={thumbnail?.name}
              src={
                isErr ? "/assets/pattern/image-placeholder.jpg" : thumbnail?.url
              }
              className="w-full aspect-video rounded-t-3xl object-cover md:rounded-lg md:rounded-tr-[50px] bg-primaryLight"
              height={200}
              width={400}
              priority
              onError={() => setIsErr(true)}
            />
          </div>
        </div>

        <div
          id="main-blog-container"
          className="w-full lg:w-[80%] xl:w-[45%] mx-auto flex flex-col gap-6  px-5 sm:px-10 lg:px-2"
        >
          <div
            dangerouslySetInnerHTML={{ __html: content || "" }}
            id="single-articale-details"
          />

          <RelatedPost
            heading="Related Case Study"
            selectedCategory={category}
            openId={_id}
          />
        </div>
      </div>
    </div>
  );
};

export default SingleStudyArticle;
