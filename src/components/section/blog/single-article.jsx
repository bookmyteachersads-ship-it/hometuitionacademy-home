"use client";
import Image from "next/image";
import Breadcrumb from "~/components/common/breadcrumb";
import { slugToReadableText } from "~/utils/generate-slug";
import RelatedPost from "./related-post";
import { useState } from "react";
const SingleArticle = ({ slug, category = "", singlePost = {} }) => {
  const [isErr, setIsErr] = useState(false);
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: slugToReadableText(category), href: `/blog?category=${category}` },
    { label: slugToReadableText(slug), href: "#" },
  ];

  const { title, thumbnail = { url: "" }, content, _id } = singlePost;

  return (
    <div
      id="main-blog-container"
      className="w-full lg:w-[80%] xl:w-[60%] mx-auto flex flex-col gap-6 pt-[20%] sm:pt-[15%] xl:pt-[8%] pb-16 px-5 sm:px-10 lg:px-2"
    >
      <Breadcrumb items={breadcrumbItems} />

      <div className=" flex flex-col gap-5">
        <div className="w-full flex flex-col gap-1">
          <div className="relative w-full h-auto aspect-[16/9]">
            <Image
              fill
              src={
                isErr ? "/assets/pattern/image-placeholder.jpg" : thumbnail?.url
              }
              alt={thumbnail?.alt}
              title={thumbnail?.name}
              className="object-cover"
              sizes="100vw"
              priority
              onError={() => setIsErr(true)}
            />
          </div>
        </div>

        {/* title / description  */}
        <div className="w-full flex flex-col gap-4 ">
          <h1 className="heading first-letter:capitalize">{title}</h1>
          <div className="w-full">
            <div
              dangerouslySetInnerHTML={{ __html: content || "" }}
              id="single-articale-details"
              className="w-full break-words [overflow-wrap:anywhere]"
            />
          </div>
        </div>
      </div>

      <RelatedPost selectedCategory={category} openId={_id} />
    </div>
  );
};

export default SingleArticle;
