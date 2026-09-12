import AllBlogs from "~/components/section/blog";

const BlogPage = async ({ searchParams }) => {
  const { category } = await searchParams;
  return <AllBlogs selectedCategory={category} />;
};

export default BlogPage;
