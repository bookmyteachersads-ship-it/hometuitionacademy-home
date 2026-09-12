"use client";
import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";

import ArticleCard from "~/components/common/ArticleCard";

const RelatedPost = ({
  selectedCategory,
  openId,
  heading = "Related post",
}) => {
  const [dataLoading, setDataLoading] = useState(true);
  const [blogPost, setBlogPost] = useState([]);

  // Fetch posts, optionally by category slug
  const getPost = async (categorySlug = null) => {
    setDataLoading(true);
    try {
      const response = await axios.get(
        `${process.env.BACKEND_API_BASE_URL}/api/public/blog?category=${categorySlug}&limit=4`,
      );
      setBlogPost(response?.data?.data);
      setDataLoading(false);
    } catch (error) {
      setDataLoading(false);
    }
  };

  // When selectedCategory changes, fetch posts for that category
  useEffect(() => {
    selectedCategory && getPost(selectedCategory);
  }, [selectedCategory]);
  if (blogPost?.length < 2) {
    return null;
  }
  return (
    <div className="w-full space-y-5">
      <h3 className="text-lg lg:text-xl text-dark font-bold">{heading}</h3>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
        {blogPost?.map(
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
              openId !== _id && (
                <ArticleCard
                  thumbnail={thumbnail}
                  _id={_id}
                  key={_id}
                  title={title}
                  category={category.name}
                  postDate={postDate}
                  route={`/blog/${slug}`}
                />
              )
            );
          },
        )}
      </div>
    </div>
  );
};

export default RelatedPost;
