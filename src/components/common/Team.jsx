import React from "react";
import LeaderCard from "./LeaderCard";

const Team = () => {
  return (
    <section className="w-full py-7 sm:py-10 lg:py-16 xl:py-20 px-5  lg:px-2">
      <div className="container flex flex-col gap-10 sm:gap-12">
        <h2 className="heading text-center">
          We Are Led by The Stalwarts of Realistic Vision
        </h2>

        <div className="w-full flex flex-col gap-12 xl:gap-16">
          <LeaderCard
            name="hemant kumar"
            voice="The age of tech disruption is leading global markets towards resilient technology and sustained growth. Our goal is to help you harness the power of emerging technologies best suited to your systems. We help you unlock constant revenue and failproof productivity."
            designation="CEO"
            position={1}
          />
          <LeaderCard
            name="ankit kumar"
            voice="We lead the market with a go-getter approach. And that’s the value our teams share. We believe to truly make a difference to your systems; we need to keep ourselves upskilled and relevant. We help you fuel your growth with flexibility, collaboration and strategic innovation."
            designation="Senior Lead Architect"
            position={2}
          />
          <LeaderCard
            name="rishabh kumar"
            voice="We lead the market with a go-getter approach. And that’s the value our teams share. We believe to truly make a difference to your systems; we need to keep ourselves upskilled and relevant. We help you fuel your growth with flexibility, collaboration and strategic innovation."
            designation="System Designer"
            position={3}
          />
        </div>
      </div>
    </section>
  );
};

export default Team;
