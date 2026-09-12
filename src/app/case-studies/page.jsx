import AllCaseStudy from "~/components/section/case-study";

const AllCaseStudiesPage = async ({ searchParams }) => {
  const { category } = await searchParams;
  return <AllCaseStudy selectedCategory={category} />;
};

export default AllCaseStudiesPage;
