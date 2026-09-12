import AllCaseStudy from "~/components/section/case-study";

const AboutPage = async ({ searchParams }) => {
  const { category } = await searchParams;
  return (
    <AllCaseStudy
      pageDescription="Discover the projects that define our expertise. From concept to deployment, we craft tailored digital solutions that solve real-world problems, enhance efficiency, and drive measurable results. Explore our portfolio of innovative applications, robust platforms, and transformative systems built for businesses across diverse industries."
      pageHeading="Our Work – Turning Ideas into Impactful Digital Solutions"
      selectedCategory={category}
    />
  );
};

export default AboutPage;
