import { homePageContent } from "../../../../public/db/contents.home";
import ServicesPage from "./service-area2";

const Card = ({ data }) => {
  const { icon, name, description } = data;
  return (
    <div
      className={`bg-primaryLightest h-full w-full p-5 sm:p-8 flex flex-col gap-5`}
    >
      <span className="text-[2.5rem] text-primary opacity-90">{icon}</span>

      <h3 className="text-2xl font-bold text-meteoriteDark capitalize">
        {name}
      </h3>

      <p className="text-md text-gray-600 text-meteoriteDark">{description}</p>
    </div>
  );
};
const HomeServiceArea = ({ featuredServices }) => {
  const { heading, description = [] } = homePageContent?.services;
  return (
    <div className="w-full py-8  bg-white flex flex-col gap-8 xl:gap-16">
      <div className="container px-5 sm:px-2">
        <div className="text-center xl:px-5">
          <h2 className="heading">{heading} </h2>

          <p className="description text-[1rem] font-medium tracking-wide md:px-20  pt-2 md:pt-6 text-meteoriteDark2">
            {description}
          </p>
        </div>
      </div>

      {/* <div className="container px-5 sm:px-2 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {serviceList?.map((data, index) => (
          <div key={index} className="h-full">
            <Card data={data} />
          </div>
        ))}
      </div> */}

      <ServicesPage featuredServices={featuredServices} />
    </div>
  );
};

export default HomeServiceArea;
