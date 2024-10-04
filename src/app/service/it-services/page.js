import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/Elements/tabs";
import Image from "next/image";
import Link from "next/link";
import { itServiceData } from "@/components/ui/HomePage/data";
import Wrapper from "@/components/shared/Wrapper";
import { Button } from "@/components/ui/Elements/button";
const ItServices = () => {
  return (
    <Wrapper>
      {" "}
      <section className="pb-5 lg:pb-28 pt-[30px]">
        {" "}
        <div className="flex flex-col items-center justify-center">
          {" "}
          <h1 className="text-center text-[20px] sm:text-[28px] font-bold capitalize sm:leading-[120%] md:text-[48px]">
            {" "}
            IT Services{" "}
          </h1>{" "}
          <div className="max-w-[1050px] my-2 sm:mt-0">
            {" "}
            <p className="sm:my-3.5 text-center text-[12px] sm:text-[14px] font-medium leading-tight sm:leading-[160%] tracking-[0.36px] md:text-[18px]">
              {" "}
              Cubicus.io envisions a world where technology becomes a decisive
              tool for every individual, leading to businesses thriving through
              innovation and users experiencing seamless, convenient digital
              interactions.{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
        <section className="justify-center items-center mx-auto">
          {" "}
          <Tabs defaultValue="mobileApp">
            {" "}
            {/* TabsList for tab navigation */}{" "}
            <TabsList
              className={`h-fit flex overflow-x-auto p-1 whitespace-nowrap flex-wrap scroll-smooth scrollbar-custom`}
            >
              {" "}
              {Object.keys(itServiceData).map((key) => (
                <TabsTrigger
                  key={key}
                  value={key}
                  className="text-[12px] sm:text-[16px]"
                >
                  {" "}
                  {key.charAt(0).toUpperCase() + key.slice(1)}{" "}
                </TabsTrigger>
              ))}{" "}
            </TabsList>{" "}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4  place-content-center xl:gap-y-12 xl:gap-x-10 xl:mt-5  w-full">
              {" "}
              {/* TabsContent for each tab's content */}{" "}
              {Object.entries(itServiceData).map(([key, services]) =>
                services.map((service) => (
                  <TabsContent key={key} value={key}>
                    {" "}
                    <div
                      key={service.id}
                      className="w-full  rounded-[25px] sm:rounded-[35px] flex flex-col justify-evenly items-start bg-white p-3 sm:p-5  lg:p-7 xl:p-8  duration-500    hover:shadow-2xl max-w-[610px] "
                    >
                      {" "}
                      <div className="mb-2 flex h-[40px] w-[40px] md:h-[50px] lg:h-[70px] md:w-[50px] lg:w-[70px] items-center justify-center rounded-full bg-[#F0EEFF]">
                        {" "}
                        <Image
                          alt="icon"
                          loading="lazy"
                          width={94}
                          height={100}
                          className="lg:h-[32px] lg:w-[36px] md:h-[30px] md:w-[30px] w-[20px] h-[20px]"
                          src={service.src}
                        />{" "}
                      </div>{" "}
                      <div className="lg:mx-0 ml-2 flex justify-center items-center">
                        {" "}
                        <h2 className="text-[14px] md:text-[16px] lg:text-[18px] xl:text-[24px] font-[600]">
                          {" "}
                          {service.name}{" "}
                        </h2>{" "}
                      </div>{" "}
                      <div className="mb-2 min-h-[50px] sm:min-h-[100px] md:min-h-[93px] lg:min-h-[140px]">
                        {" "}
                        <p className="break-normal text-[10px] sm:text-[12px] text-gray-400 md:text-[14px] lg:text-[18px] md:max-w-[470px] font-medium">
                          {" "}
                          {service.info}{" "}
                        </p>{" "}
                      </div>{" "}
                      <Link
                        href="/contact"
                        className="text-[10px] lg:text-[16px] xl:text-[18px]"
                      >
                        {" "}
                        <Button>Connect now</Button>{" "}
                      </Link>{" "}
                    </div>{" "}
                  </TabsContent>
                ))
              )}{" "}
            </div>{" "}
          </Tabs>{" "}
        </section>{" "}
      </section>{" "}
    </Wrapper>
  );
};
export default ItServices;
