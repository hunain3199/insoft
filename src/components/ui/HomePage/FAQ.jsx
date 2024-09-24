import React from 'react';

const FAQ = () => {
  return (
    <section className="container flex flex-col items-center justify-center   pb-3 sm:py-6 text-center lg:w-[1055px]">
      <h4 class=" text-[24px]  sm:text-[28px] font-semibold md:text-[28px] lg:text-[40px]">
        Frequently Asked Questions
      </h4>
      <p class=" text-[12px] max-w-[1055px] mt-1  mb-5 lg:mt-3 md:mb-10 sm:text-[16px] font-[500] text-black/50 md:text-[14px] lg:text-[18px] text-center">
        From customizing existing platforms to building bespoke solutions from
        scratch, we have helped businesses of all sizes establish a strong
        online presence, drive sales, and maximize their e-commerce potential.
        <br class="hidden lg:block" />
        Got questions? We've got answers.
      </p>
      <div className="lg:w-[840px]"></div>
    </section>
  );
};

export default FAQ;
