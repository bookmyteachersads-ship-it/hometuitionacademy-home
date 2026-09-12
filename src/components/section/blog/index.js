"use client";
import axios from "axios";
import moment from "moment";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  BlogCardSkeleton,
  FeaturedArticleSkeleton,
} from "~/components/loader/skeleton-loader";
import { useToggleQueryParam } from "~/utils/toggleQueryParam";
import { PiEmptyBold } from "react-icons/pi";
import ArticleCard from "~/components/common/ArticleCard";
import FeaturedArticleCard from "~/components/common/FeaturedArticleCard";

const AllBlogs = ({ selectedCategory = null }) => {
  const [dataLoading, setDataLoading] = useState(true); // start with false
  const [blogPost, setBlogPost] = useState({
    postList: [],
    categoryList: [],
  });
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const router = useRouter();
  const toggleQueryParam = useToggleQueryParam();

  // ✅ Fetch categories only once
  const getCategory = async () => {
    try {
      const response = await axios.get(
        `${process.env.BACKEND_API_BASE_URL}/api/public/category`,
      );
      setBlogPost((prev) => ({ ...prev, categoryList: response?.data?.data }));
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  // ✅ Fetch posts with pagination
  const getPost = async (categorySlug = null, pageNo = 1) => {
    if (!hasMore) return;

    setDataLoading(true);
    try {
      const url = categorySlug
        ? `${process.env.BACKEND_API_BASE_URL}/api/public/blog?category=${categorySlug}&page=${pageNo}`
        : `${process.env.BACKEND_API_BASE_URL}/api/public/blog?page=${pageNo}`;

      const response = await axios.get(url);
      const newPosts = response?.data?.data || [];

      if (newPosts.length === 0) {
        setHasMore(false);
      }

      setBlogPost((prev) => {
        const merged = [...prev.postList, ...newPosts];
        // remove duplicates by _id
        const uniquePosts = Array.from(
          new Map(merged.map((item) => [item._id, item])).values(),
        );
        return { ...prev, postList: uniquePosts };
      });
    } catch (error) {
      console.error("Error fetching posts:", error);
      setHasMore(false);
    } finally {
      setDataLoading(false);
    }
  };

  // ✅ IntersectionObserver for infinite scroll
  const observer = useRef();
  const lastPostRef = useCallback(
    (node) => {
      if (dataLoading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [dataLoading, hasMore],
  );

  // ✅ Initial categories load
  useEffect(() => {
    getCategory();
  }, []);

  // ✅ Reset when category changes
  useEffect(() => {
    setPage(1);
    setHasMore(true);
    setBlogPost((prev) => ({ ...prev, postList: [] }));
    getPost(selectedCategory, 1);
  }, [selectedCategory]);

  // ✅ Fetch posts when page increases
  useEffect(() => {
    if (page > 1) {
      getPost(selectedCategory, page);
    }
  }, [page]);

  const featuredPost = blogPost?.postList?.slice(0, 1)[0] || {};
  const allPost = blogPost?.postList?.slice(1);

  return (
    <section className="w-full px-5 sm:px-2 pt-[20%] sm:pt-[15%] xl:pt-[7%]">
      <div className="container flex flex-col gap-5 sm:gap-10">
        {/* ----- Header Section ----- */}
        <div className="w-full bg-slate-50 py-3 rounded-t-xl">
          <div className="flex flex-col gap-2 text-center my-2 xl:my-5 px-5 md:px-10 xl:px-[15%]">
            <h1 className="heading from-primary to-danger bg-gradient-to-tr bg-clip-text text-transparent">
              What’s Next in Education?
            </h1>
            <p className="text-xs font-me">
              Our team help students and parents stay ahead of changing academic
              trends. We provide insights into new learning methods, educational
              opportunities, exam updates, and effective study practices to
              support better learning and long-term academic success.
            </p>
          </div>
        </div>

        {/* ----- Category Tabs ----- */}
        <div className="w-full space-y-5 pb-10">
          <div className="no-scrollbar overflow-x-auto flex flex-nowrap gap-2 w-full lg:w-[80%] mx-auto">
            {[
              { _id: "all", name: "All Post", slug: "all" },
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
          </div>

          {/* ----- Posts Section ----- */}
          <div className="w-full space-y-10 lg:px-10 xl:px-20">
            {/* Featured Loader */}
            {dataLoading && blogPost.postList.length === 0 && (
              <FeaturedArticleSkeleton />
            )}

            {/* Featured Article */}
            {!dataLoading && blogPost?.postList?.length > 0 && (
              <FeaturedArticleCard
                thumbnail={featuredPost?.thumbnail}
                _id={featuredPost?._id}
                title={featuredPost?.title}
                category={featuredPost?.category?.name}
                postDate={featuredPost?.createdAt}
                route={`/blog/${featuredPost?.slug}`}
                // route={`/blog/${featuredPost?.category?.slug}/${featuredPost?.slug}`}
                description={featuredPost?.description}
              />
            )}

            {/* Grid of Articles */}
            {blogPost?.postList?.length > 1 && (
              <div className="w-full grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {allPost?.map(
                  (
                    {
                      _id,
                      title,
                      description,
                      thumbnail = {},
                      category = {},
                      createdAt,
                      slug,
                    },
                    index,
                  ) => {
                    const postDate = moment(createdAt).format("MMM DD, YYYY");
                    const isLast = index === allPost.length - 1;

                    return (
                      <div
                        ref={isLast ? lastPostRef : null}
                        key={_id}
                        className="w-full"
                      >
                        <ArticleCard
                          thumbnail={thumbnail}
                          _id={_id}
                          title={title}
                          category={category?.name}
                          postDate={postDate}
                          route={`/blog/${slug}`}
                        />
                      </div>
                    );
                  },
                )}
              </div>
            )}

            {/* Empty State */}
            {!dataLoading && blogPost?.postList?.length < 1 && (
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

            {/* Grid Skeleton Loader while fetching next pages */}
            {dataLoading && blogPost.postList.length < 1 && (
              <div className="w-full grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
                <BlogCardSkeleton />
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

export default AllBlogs;
