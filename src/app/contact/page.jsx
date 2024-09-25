import ContactForm from "@/components/shared/contactForm";
import Portfolio from "@/components/shared/portfolio";
import Wrapper from "@/components/shared/Wrapper";
import HeadingsBar from "@/components/widgets/headingsbar";
import React from "react";

const Contact = () => {
  return (
    <Wrapper>
      <ContactForm />
      <HeadingsBar
        heading={`See Our Work`}
        paragraph={`Explore our projects showcasing the diversity, expertise,
             and commitment to excellence that defines Cubicus.io. Each project below represents
             a journey of challenges, creativity, and successful digital solutions.`}
             subHeading={`increasing your project`}
      />
      <div className="flex justify-center w-full">
      <Portfolio/>
      </div>
     
    </Wrapper>
  );
};

export default Contact;
