import Image from 'next/image';
import UltimateServiceCard from './Cards/UltimateServiceCard';
import { ultimateServices } from './data';

const UltimateServicesSection = () => {
  return (
    <section className="container ">
      <div className="mt-2 sm:mt-6 mb-2 text-center">
        <h3 className="text-[20px] sm:text-[28px] font-bold md:text-[24px] lg:text-[40px]">
          Ultimate Services for your <br className="lg:block hidden" />{' '}
          Businesses
        </h3>
        <p className="max-w-[270px] sm:max-w-full mx-auto lg:mt-3 text-[12px] sm:text-[14px] font-medium text-black/50 md:text-[14px] lg:text-[18px]">
          Discover the power of our comprehensive suite of digital services at
          Cubicus.io
        </p>
      </div>
      <div className="flex w-full flex-col-reverse items-center justify-center lg:flex-row">
        <div className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-2 lg:gap-x-3 md:gap-x-6 sm:gap-y-5 xl:w-[60%]">
          {ultimateServices.map((service, index) => (
            <UltimateServiceCard
              key={index}
              title={service.title}
              description={service.description}
              imgSrc={service.imgSrc}
            />
          ))}
        </div>
        <div className="flex w-[80%] sm:h-full sm:w-full justify-center lg:justify-end xl:w-[40%]">
          <Image
            alt="ultimate"
            loading="lazy"
            width={567}
            height={567}
            className="lg:w-auto md:w-[300px]"
            src="/assets/ultimate.avif"
          />
        </div>
      </div>
      <div className="mx-auto flex w-[83%] sm:text-[14px] items-center justify-center md:w-full md:items-start lg:justify-start">
        <a
          className="mt:2 sm:mt-5 rounded-full bg-[#2555BB] px-3 lg:px-7 sm:px-5 sm:py-2.5 py-1.5 text-[10px] sm:text-xs font-bold capitalize text-white lg:block lg:text-lg"
          href="/contact"
        >
          contact us
        </a>
      </div>
    </section>
  );
};

export default UltimateServicesSection;
