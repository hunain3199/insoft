import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/Elements/accordion';

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
      <div className="lg:w-[840px]">
        <Accordion type="single" collapsible>
          <AccordionItem
            value="item-1"
            className="border-b-0 mb-6 bg-white py-3 px-8 rounded-3xl"
          >
            <AccordionTrigger className="text-primary hover:no-underline">
              What services does Cubicus.io offer?
            </AccordionTrigger>
            <AccordionContent className="text-justify">
              Cubicus.io offers a wide range of services including mobile app
              development, website designing, SaaS development, blockchain
              development, e-commerce solutions, digital marketing and graphic
              designing.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem
            value="item-1"
            className="border-b-0 mb-6 bg-white py-3 px-8 rounded-3xl"
          >
            <AccordionTrigger className="text-primary hover:no-underline">
              How experienced is Cubicus.io in software development?
            </AccordionTrigger>
            <AccordionContent className="text-justify">
              With over five years of experience in the industry, Cubicus.io has
              a team of skilled professionals who are experts in their
              respective fields, ensuring top-notch quality andreliability in
              all our projects.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem
            value="item-1"
            className="border-b-0 mb-6 bg-white py-3 px-8 rounded-3xl"
          >
            <AccordionTrigger className="text-primary hover:no-underline">
              Can Cubicus.io handle custom software development projects?
            </AccordionTrigger>
            <AccordionContent className="text-justify">
              Yes, Cubicus.io specializes in custom software development
              tailored to the unique needs and requirements of each client. From
              concept to deployment, we work closely withour clients to deliver
              bespoke solutions that drive success.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem
            value="item-1"
            className="border-b-0 mb-6 bg-white py-3 px-8 rounded-3xl"
          >
            <AccordionTrigger className="text-primary hover:no-underline">
              What technologies does Cubicus.io work with?
            </AccordionTrigger>
            <AccordionContent className="text-justify">
              Cubicus.io leverages a wide array of cutting-edge technologies
              including but not limited to React.js, Vue.js, WordPress, Magento,
              Swift, Python, Java, and many more to deliver innovative and
              scalable solutions.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
