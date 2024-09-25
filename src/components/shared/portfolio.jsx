import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import React from "react";

const Portfolio = () => {
  const portfolioImg = [
    {
      id: 1,
      src: '/assets/portfolio/mobile-app/hair-product-ecommerce-app-mockup.png',
      alt: 'Ecommerce Mobile App mockup',
      type: 'mobileApp',
    },
    {
      id: 2, // Changed to a unique ID
      src: '/assets/portfolio/mobile-app/hair-product-ecommerce-app-mockup.png',
      alt: 'Ecommerce Mobile App mockup',
      type: 'mobileApp',
    },
    {
      id: 3, // Changed to a unique ID
      src: '/assets/portfolio/mobile-app/travel-ecommerce-app-mockup.png',
      alt: 'Ecommerce Mobile App mockup',
      type: 'webDesign',
    },
    {
      id: 4, // Changed to a unique ID
      src: '/assets/portfolio/mobile-app/hair-product-ecommerce-app-mockup.png',
      alt: 'Ecommerce Mobile App mockup',
      type: 'mobileApp',
    },
  ];

  return (
    <section className=" justify-center items-center mx-auto">
      <Tabs defaultValue="mobileApp" >
        <TabsList className={
           `
           grid grid-cols-2 h-fit
           md:flex md:flex-wrap
           p-1 `
        }>
          <TabsTrigger value="mobileApp">Mobile app</TabsTrigger>
          <TabsTrigger value="webdesign">Web Design</TabsTrigger>
          <TabsTrigger value="saas">SaaS</TabsTrigger>
          <TabsTrigger value="blockchain">Blockchain</TabsTrigger>
          <TabsTrigger value="e-commerce">E-commerce</TabsTrigger>
          <TabsTrigger value="graphicDesign">Graphic Design</TabsTrigger>
        </TabsList>

        <TabsContent value="mobileApp">
          <p className="my-2 max-w-[270px] mx-auto sm:my-2.5 lg:my-5 sm:max-w-[1110px] text-center text-[12px] sm:text-[14px] font-medium text-black/50 md:text-[16px] lg:text-[18px]">
            Our mobile application development portfolio highlights our
            proficiency in developing user-friendly, high-quality, and intuitive
            mobile apps across multiple platforms, including Android and iOS.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
          {portfolioImg
            .filter((img) => img.type === 'mobileApp')
            .map((img) => (
              <Image
                key={img.id} // Added unique key prop
                src={img.src}
                alt={img.alt}
                height={300}
                width={300}
              />
            ))}

          </div>
         
        </TabsContent>

        <TabsContent value="webdesign">
        <p className="my-2 max-w-[270px] mx-auto sm:my-2.5 lg:my-5 sm:max-w-[1110px] text-center text-[12px] sm:text-[14px] font-medium text-black/50 md:text-[16px] lg:text-[18px]">
            Our mobile application development portfolio highlights our
            proficiency in developing user-friendly, high-quality, and intuitive
            mobile apps across multiple platforms, including Android and iOS.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
          {portfolioImg
            .filter((img) => img.type === 'webDesign')
            .map((img) => (
              <Image
                key={img.id} // Added unique key prop
                src={img.src}
                alt={img.alt}
                height={300}
                width={300}
              />
            ))}

          </div>
        </TabsContent>
        <TabsContent value="saas"> <p className="my-2 max-w-[270px] mx-auto sm:my-2.5 lg:my-5 sm:max-w-[1110px] text-center text-[12px] sm:text-[14px] font-medium text-black/50 md:text-[16px] lg:text-[18px]">
            Our mobile application development portfolio highlights our
            proficiency in developing user-friendly, high-quality, and intuitive
            mobile apps across multiple platforms, including Android and iOS.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
          {portfolioImg
            .filter((img) => img.type === 'mobileApp')
            .map((img) => (
              <Image
                key={img.id} // Added unique key prop
                src={img.src}
                alt={img.alt}
                height={300}
                width={300}
              />
            ))}

          </div></TabsContent>
        <TabsContent value="blockchain">
        <p className="my-2 max-w-[270px] mx-auto sm:my-2.5 lg:my-5 sm:max-w-[1110px] text-center text-[12px] sm:text-[14px] font-medium text-black/50 md:text-[16px] lg:text-[18px]">
            Our mobile application development portfolio highlights our
            proficiency in developing user-friendly, high-quality, and intuitive
            mobile apps across multiple platforms, including Android and iOS.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
          {portfolioImg
            .filter((img) => img.type === 'mobileApp')
            .map((img) => (
              <Image
                key={img.id} // Added unique key prop
                src={img.src}
                alt={img.alt}
                height={300}
                width={300}
              />
            ))}

          </div>
        </TabsContent>
        <TabsContent value="e-commerce">
        <p className="my-2 max-w-[270px] mx-auto sm:my-2.5 lg:my-5 sm:max-w-[1110px] text-center text-[12px] sm:text-[14px] font-medium text-black/50 md:text-[16px] lg:text-[18px]">
            Our mobile application development portfolio highlights our
            proficiency in developing user-friendly, high-quality, and intuitive
            mobile apps across multiple platforms, including Android and iOS.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
          {portfolioImg
            .filter((img) => img.type === 'mobileApp')
            .map((img) => (
              <Image
                key={img.id} // Added unique key prop
                src={img.src}
                alt={img.alt}
                height={300}
                width={300}
              />
            ))}

          </div>
        </TabsContent>
        <TabsContent value="graphicDesign">
        <p className="my-2 max-w-[270px] mx-auto sm:my-2.5 lg:my-5 sm:max-w-[1110px] text-center text-[12px] sm:text-[14px] font-medium text-black/50 md:text-[16px] lg:text-[18px]">
            Our mobile application development portfolio highlights our
            proficiency in developing user-friendly, high-quality, and intuitive
            mobile apps across multiple platforms, including Android and iOS.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
          {portfolioImg
            .filter((img) => img.type === 'mobileApp')
            .map((img) => (
              <Image
                key={img.id} // Added unique key prop
                src={img.src}
                alt={img.alt}
                height={300}
                width={300}
              />
            ))}

          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default Portfolio;
