import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/Elements/tabs';
import Image from 'next/image';
import React from 'react';
import { portfolioData } from '../ui/HomePage/data';

const Portfolio = () => {
  return (
    <section className="justify-center items-center mx-auto">
      <Tabs defaultValue="mobileApp">
        <TabsList
          className={`grid grid-cols-2 h-fit md:flex md:flex-wrap p-1 gap-5`}
        >
          {Object.keys(portfolioData).map((key) => (
            <TabsTrigger
              key={key}
              value={key}
              className="text-[12px] sm:text-[16px]"
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </TabsTrigger>
          ))}
        </TabsList>

        {Object.entries(portfolioData).map(([key, { paragraph, images }]) => (
          <TabsContent
            key={key}
            value={key}
            className="flex flex-col flex-wrap items-center justify-center"
          >
            <p className="sm:mt-3.5 mt-1 md:max-w-[850px]  lg:max-w-[930px] sm:pb-10 break-normal pb-5 sm:text-[14px] text-[12px] font-medium  text-black/50  md:text-[14px] lg:text-[18px]">
              {paragraph}
            </p>
            <div className="sm:grid md:gap-[40px] gap-x-[25px] gap-y-[20px] sm:gap-[20px] justify-center sm:grid-cols-3 flex flex-wrap  items-center">
              {images.map((img) => (
                <Image
                  key={img.id}
                  src={img.src}
                  alt={img.alt}
                  className="sm:h-auto sm:!w-full rounded-xl w-[120px]   md:h-[220px] lg:h-[400px]"
                  height={300}
                  width={300}
                />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};

export default Portfolio;
