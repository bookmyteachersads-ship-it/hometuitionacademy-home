import AwardArea from "./award-area";
import BrandArea from "./brand-area";
import ChooseUs from "./choose-us";
import CtaArea from "./cta-area";
import FaqArea from "./faq-area";
import Hero from "./hero";
// import BlogArea from "./blog-area";
import PortfolioArea from "./portfolio-area";
import HomeServiceArea from "./service-area";
import SoftwareService from "./software-service";
import TechnologiesArea from "./technologies-area";
import TestimonialArea from "./testimonial-area";
import WorkPlace from "./work-place";
import HeroTechnologies from "./HeroTechonologies";
import ServicesPage from "./service-area2";

const HomeMain = ({ featuredServices }) => {
  return (
    <main>
      <Hero />

      <HeroTechnologies />

      <HomeServiceArea featuredServices={featuredServices} />

      {/* <ServicesPage /> */}

      {/* <BrandArea /> */}

      <AwardArea />

      {/* <SoftwareService /> */}

      {/* <TechnologiesArea /> */}

      <ChooseUs />

      <TestimonialArea />

      {/* <PortfolioArea /> */}

      <WorkPlace />

      {/* <BlogArea /> */}

      <FaqArea />

      <CtaArea />
    </main>
  );
};

export default HomeMain;
