"use client";
import SingleService from "./single-service";

const AllServices = () => {
  return (
    <div className="page-wrapper">
      {/* top banner  */}

      <section className="w-full h-[70vh] top-0 flex items-center bg-[url('/assets/bg/service-bg.jpg')] bg-cover"></section>
      <div className="container ">
        <SingleService />
      </div>
    </div>
  );
};

export default AllServices;
