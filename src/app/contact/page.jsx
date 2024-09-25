import ContactForm from '@/components/shared/contactForm';
import Portfolio from '@/components/shared/portfolio';
import Wrapper from '@/components/shared/Wrapper';

const Contact = () => {
  return (
    <Wrapper>
      <div className="mb-[10px] sm:mb-[20px] md:mb-[20px]">
        <h1 className="text-center text-[18px] sm:text-[24px]  md:text-[28px] font-bold capitalize leading-[120%] lg:text-[48px]">
          Contact us
        </h1>
        <p className="my-1 sm:my-3.5 text-center text-[12px] md:text-[14px] lg:text-[18px] font-medium max-w-[80%] mx-auto  leading-[160%] tracking-[0.36px]">
          Ready to transform your business? Contact our Experts Now!
        </p>
      </div>
      <ContactForm />
      <div className="container items-center justify-center overflow-hidden pt-5 md:pt-4 lg:pt-8 text-center flex flex-col">
        <h2 className="text-[24px] sm:text-[24px]  md:text-[28px] font-semibold lg:text-[40px]">
          See Our Work
        </h2>
        <p class="ms:text-lg text-[12px] max-w-[280px] text-center my-1.5  md:my-1 lg:my-5 sm:max-w-[1050px] text-wrap break-normal sm:text-[14px] font-medium md:text-[14px] lg:text-[16px]">
          Explore our projects showcasing the diversity, expertise, and
          commitment to excellence that defines Cubicus.io. Each project below
          represents a journey of challenges, creativity, and successful digital
          solutions.
        </p>
      </div>
      <div className="flex justify-center w-full">
        <Portfolio />
      </div>
    </Wrapper>
  );
};

export default Contact;
