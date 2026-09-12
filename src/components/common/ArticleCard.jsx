"use state";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { limitTextLength } from "~/utils/limitText";

const ArticleCard = ({
  title,
  description,
  thumbnail = {},
  category,
  createdAt,
  slug,
  route = "#",
  postDate,
  _id,
  isCat = true,
}) => {
  const [isErr, setIsErr] = useState(false);

  return (
    <Link key={_id} href={route} className="w-full ">
      <div className="w-full">
        <div className="w-full overflow-hidden">
          <Image
            title={title}
            alt={thumbnail?.alt || title}
            src={
              isErr ? "/assets/pattern/image-placeholder.jpg" : thumbnail?.url
            }
            height={200}
            width={400}
            className="w-full aspect-video bg-grayLight hover:scale-105 object-cover transition-all ease-in-out duration-300"
            placeholder="blur"
            loading="lazy"
            onError={() => setIsErr(true)}
            blurDataURL="/assets/pattern/image-placeholder.jpg"
          />
        </div>

        <div className="p-3 flex border border-grayLight flex-col gap-3">
          {isCat && (
            <div className="w-fit text-xs text-gray whitespace-nowrap">
              <span className="text-primary">ARTICLE</span> | in {category}
            </div>
          )}
          <h3 className="text-md font-bold text-meteoriteDark hover:text-primary first-letter:capitalize">
            {limitTextLength(title, 55)}
          </h3>
          <div className="w-full flex flex-row items-center justify-between">
            {/* <div className="flex flex-row items-center gap-2">
                              <div className="w-10 h-10 bg-primaryLight rounded-full"></div>
                              <span className="text-gray font-medium text-sm">
                                Sourav
                              </span>
                            </div> */}
            <span className="text-gray font-medium text-xs">{postDate}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
