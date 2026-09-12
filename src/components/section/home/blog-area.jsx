"use client";
import axios from "axios";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BlogCardSkeleton } from "~/components/loader/skeleton-loader";
import { limitTextLength } from "~/utils/limitText";

const InsightArea = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [postList, setPostList] = useState([]);

  const targetRef = useRef(null);

  const [hasFetched, setHasFetched] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: `${process.env.BACKEND_API_BASE_URL}/api/public/blog`,
      });

      setPostList(response?.data?.data);
      setIsLoading(false);
    } catch (error) {
      // Optional: error handling here
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasFetched) {
          fetchData();
          setHasFetched(true);
        }
      },
      { threshold: 0.1 },
    );

    const currentTarget = targetRef.current; // Fix here: store current ref

    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [hasFetched]);

  return (
    <section
      ref={targetRef}
      className="w-full  py-8 lg:py-10 xl:py-10 px-5 sm:px-2"
    >
      <div className="container flex flex-col  gap-7 sm:gap-10 xl:gap-14">
        <div className="w-full flex flex-row items-center justify-center xl:justify-between">
          <h2 className="heading">Our Exclusive Insights</h2>

          <div className="hidden xl:block">
            <Link href="/blog" className="w-fit primary-btn-sm">
              Explore Insights
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {!isLoading &&
            postList?.map((post) => {
              const {
                _id,
                title,
                description,
                thumbnail = {},
                category = {},
                createdAt,
                keywords,
                slug,
              } = post;
              const postDate = moment(createdAt).format("D MMM YY");

              return (
                <Link key={_id} href={`/blog/${slug}`} className="w-full">
                  <div className="w-full">
                    <div className="w-full overflow-hidden">
                      <Image
                        title={title}
                        alt={thumbnail?.alt}
                        src={thumbnail?.url}
                        priority={true}
                        height={200}
                        width={400}
                        className="w-full h-full hover:scale-110 object-cover transition-all ease-out duration-100 hover:brightness-50"
                      />
                    </div>

                    <div className="p-4 bg-primaryLightest flex flex-col gap-3">
                      <span className="w-fit rounded-md bg-grayLight text-xs px-2.5 font-medium text-gray py-1.5 text-nowrap ">
                        {category?.name}
                      </span>
                      <h3 className="text-base font-bold text-meteoriteDark">
                        {limitTextLength(title, 75)}
                      </h3>
                      <p className="text-md text-gray first-letter:capitalize">
                        {limitTextLength(description, 70)}
                      </p>

                      <div className="flex flex-row gap-1 ">
                        {keywords?.map((tag, index) => (
                          <div
                            key={index}
                            className="px-2.5 text-xs py-1 text-white bg-black rounded-lg first-letter:capitalize"
                          >
                            {tag}
                          </div>
                        ))}{" "}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}

          {isLoading && (
            <>
              <BlogCardSkeleton />
              <BlogCardSkeleton />
              <BlogCardSkeleton />
            </>
          )}
        </div>

        <Link href="/blog" className="xl:hidden primary-btn-sm w-fit  mx-auto">
          Explore Insights
        </Link>
      </div>
    </section>
  );
};

export default InsightArea;
