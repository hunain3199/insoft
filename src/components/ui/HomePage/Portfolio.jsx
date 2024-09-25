import React from 'react';

const Portfolio = () => {
  return (
    <section className="container items-center justify-center overflow-hidden py-5 md:py-4 lg:py-8 text-center flex flex-col">
      <h3 className="text-[24px] sm:text-[24px]  md:text-[28px] font-semibold lg:text-[40px]">
        Our Portfolio
      </h3>
      <p class="ms:text-lg text-[12px] max-w-[280px] text-center my-1.5  md:my-1 lg:my-5 sm:max-w-[1050px] text-wrap break-normal sm:text-[14px] font-medium text-black/50 md:text-[14px] lg:text-[16px]">
        Explore our projects showcasing the diversity, expertise, and commitment
        to excellence that defines Cubicus. Each project below represents a
        journey of challenges, creativity, and successful digital solutions.
      </p>
    </section>
  );
};

export default Portfolio;
