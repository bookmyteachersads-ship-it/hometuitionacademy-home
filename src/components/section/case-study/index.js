"use client";
import axios from "axios";
import moment from "moment";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BlogCardSkeleton } from "~/components/loader/skeleton-loader";
import { useToggleQueryParam } from "~/utils/toggleQueryParam";
import { PiEmptyBold } from "react-icons/pi";
import ArticleCard from "~/components/common/ArticleCard";
const AllCaseStudy = ({
  selectedCategory = null,
  pageHeading = "Case Studies – Real Projects, Real Impact",
  pageDescription = " Explore how we’ve helped businesses solve complex challenges through innovative technology solutions. From idea to execution, our case studies showcase proven results, measurable success, and the expertise we bring to every project.",
}) => {
  const [dataLoading, setDataLoading] = useState(true);
  const [blogPost, setBlogPost] = useState({
    postList: [],
    categoryList: [],
  });

  const router = useRouter();

  const toggleQueryParam = useToggleQueryParam();

  // Fetch categories only once
  const getCategory = async () => {
    try {
      const response = await axios.get(
        `${process.env.BACKEND_API_BASE_URL}/api/public/category`
      );
      setBlogPost((prev) => ({ ...prev, categoryList: response?.data?.data }));
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  // Fetch posts, optionally by category slug
  const getPost = async (categorySlug = null) => {
    setDataLoading(true);
    try {
      const url = categorySlug
        ? `${process.env.BACKEND_API_BASE_URL}/api/public/blog?category=${categorySlug}`
        : `${process.env.BACKEND_API_BASE_URL}/api/public/blog`;
      const response = await axios.get(url, {
        params: {
          type: "case-studies",
        },
      });
      setBlogPost((prev) => ({ ...prev, postList: response?.data?.data }));
      setDataLoading(false);
    } catch (error) {
      setBlogPost((prev) => ({ ...prev, postList: [] }));
      setDataLoading(false);
    }
  };

  const allPost = blogPost?.postList || [];
  useEffect(() => {
    getCategory();
  }, []);

  // When selectedCategory changes, fetch posts for that category
  useEffect(() => {
    getPost(selectedCategory);
  }, [selectedCategory]);

  return (
    <section className="w-full px-5 sm:px-2 pt-[20%] sm:pt-[15%] xl:pt-[7%]">
      <div className="container flex flex-col gap-5 sm:gap-10">
        <div className="w-full bg-slate-50 py-3 rounded-t-xl px-5 md:px-10">
          <div className="flex flex-col gap-2 text-center my-2 xl:my-5 xl:px-[15%]">
            <h1 className="heading from-primary to-danger bg-gradient-to-tr bg-clip-text text-transparent">
              {pageHeading}
            </h1>
            <p className="text-xs font-me">{pageDescription}</p>
          </div>
        </div>

        <div className="w-full space-y-5 pb-10">
          {/* { TODO : category of case study only / - } */}
          {/* <div className="no-scrollbar overflow-x-auto flex flex-nowrap gap-2 w-full lg:w-[80%] mx-auto">
            {[
              { _id: "jwgu3teueduyefduyw", name: "All Post", slug: "all" },
              ...blogPost?.categoryList,
            ]?.map(({ _id, name, slug }, index) => (
              <button
                key={_id || index}
                onClick={() =>
                  toggleQueryParam("category", encodeURIComponent(slug))
                }
                className={`px-4 py-2 border text-[13px] first-letter:capitalize flex-shrink-0 ${
                  slug === selectedCategory
                    ? "bg-primary text-white"
                    : "bg-white text-gray border-grayLight font-semibold tracking-wide"
                }`}
              >
                {name}
              </button>
            ))}
          </div> */}

          <div className="w-full space-y-10 lg:px-10 xl:px-20">
            {/* if data available - GRID */}

            {!dataLoading && allPost?.length > 0 && (
              <div className="w-full grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {allPost?.map(
                  ({
                    _id,
                    title,
                    description,
                    thumbnail = {},
                    category = {},
                    createdAt,
                    slug,
                  }) => {
                    const postDate = moment(createdAt).format("MMM DD, YYYY");
                    return (
                      <ArticleCard
                        isCat={false}
                        thumbnail={thumbnail}
                        _id={_id}
                        key={_id}
                        title={title}
                        category={category.name}
                        postDate={postDate}
                        route={`/case-studies/${category?.slug}/${slug}`}
                      />
                    );
                  }
                )}
              </div>
            )}

            {/* if not data  */}

            {!dataLoading && allPost?.length < 1 && (
              <div className="flex-center flex-col gap-2 py-10">
                <div className="bg-primaryLight text-3xl animate-pulse p-5 rounded-3xl text-primary">
                  <PiEmptyBold />
                </div>
                <span className="font-bold text-gray text-lg">
                  Oops! Nothing to See Here
                </span>
                <span className="text-xs text-gray">
                  It looks like the content you&apos;re looking for has moved or
                  doesn&apos;t exist. Please check your spelling or try another
                  search.
                </span>
              </div>
            )}

            {/* if loading  */}

            {dataLoading && (
              <div className="w-full grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
                <BlogCardSkeleton />
                <BlogCardSkeleton />
                <BlogCardSkeleton />
                <BlogCardSkeleton />
                <BlogCardSkeleton />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllCaseStudy;
