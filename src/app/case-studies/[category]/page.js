import AllBlogs from "~/components/section/blog";

const BlogPage = ({ params }) => {
  const { category } = params;
  return <AllBlogs selectedCategory={category} />;
};

export default BlogPage;
