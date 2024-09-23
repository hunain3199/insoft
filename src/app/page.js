import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="px-3">
      <section
        id="home"
        className="container sm:px-0 px-5 relative overflow-hidden pt-[30px]"
      >
        <div className="mx-auto flex justify-between  items-center max-lg:flex-col">
          <div className="-mx-3  sm:-mx-4 flex flex-wrap items-center">
            <div className="w-fit px-3 sm:px-4">
              <div className="sm:mb-3 sm:mt-8  mb-2 mt-5 flex w-fit items-center gap-4 rounded-[20px] bg-[#C4C4C433] py-[10px] pl-2.5 pr-6">
                <div className="flex justify-center items-center">
                  <div className="h-5 w-5 sm:h-10 sm:w-10 rounded-full bg-[#0FACE3]"></div>
                  <p className="ml-1 sm:ml-3 text-[10px] sm:text-[12px] font-medium   md:text-lg lg:text-[18px]">
                    #1 Software company in the town!
                  </p>
                </div>
              </div>
              <div
                className=" mx-1 hero-content wow fadeInUp"
                data-wow-delay=".2s"
              >
                <h2 className=" capitalize mb-2 sm:mb-4 max-w-[500px] break-normal  text-[21px] leading-7  sm:text-[24px] font-bold  sm:text-4xl  sm:leading-snug md:text-3xl lg:text-5xl lg:leading-[1.2]">
                  Your <span className="text-[#2555BB]">Brand</span> is your{' '}
                  <span className="text-[#2555BB]">Identity</span>- Get Your{' '}
                  <br className="sm:hidden block" />
                  Digital <span className="text-[#2555BB]">Footprints </span>
                  Now!
                </h2>
                <div className="block sm:hidden lg:pt-[70px]">
                  <Image
                    loading="lazy"
                    alt="Digital Business Intelligence Solutions"
                    width={552}
                    height={452.04}
                    className="mx-auto my-3 sm:my-7 md:my-0 md:h-auto md:w-[60%] lg:w-full xl:w-full 2xl:w-full"
                    src="/assets/image.avif"
                  />
                </div>
                <p className="mb-3 sm:mb-6  w-full max-w-[535px] text-left text-[12px] sm:text-[14px] font-medium text-black/50 sm:text-lg  md:text-[18px]">
                  We have a dynamic staff of Web Developers, including Graphic
                  and Website Designers and Business Strategists focused on
                  developing customized Software Development and Design
                  Solutions that improve user experience, increase productivity,
                  and take your business to new heights.
                </p>
                <div className="flex sm:justify-start sm:items-start items-center justify-center  gap-1 sm:gap-2.5  lg:gap-5">
                  <Link
                    target="blank"
                    className=" rounded-3xl bg-[#2555BB] px-3 py-2 sm:px-2.5 sm:py-2 lg:px-5 md:py-2 font-bold  text-white lg:block text-[10px] sm:text-[12px] md:text-[17px] "
                    href="https://calendly.com/m-arslan2201/call-with-cubicus?month=2023-03"
                  >
                    Get free demo call
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden sm:block lg:pt-[70px]">
            <Image
              loading="lazy"
              alt="Digital Business Intelligence Solutions"
              width={552}
              height={452.04}
              className="mx-auto my-3 sm:my-7 md:my-0 md:h-auto md:w-[60%] lg:w-full xl:w-full 2xl:w-full"
              src="/assets/image.avif"
            />
          </div>
        </div>
      </section>
      <section className="container text-center my-4 mx-auto  sm:mt-8 lg:mb-16 sm:mb-8 ">
        <div className="flex flex-col flex-wrap items-center justify-center">
          <h2 className="text-[20px] leading-7 sm:text-[24px] font-semibold lg:text-[40px]">
            Transforming Visions into Digital Masterpieces
          </h2>
          <h1 className="my-2 md:my-2.5 lg:my-5 md:max-w-[950px] md:text-[16px] lg:text-[22px]  mx-auto   max-w-[300px]  text-[12px] sm:text-[14px] font-semibold capitalize text-[#2555BB] ">
            with our top-notch graphic designing, website development and
            blockchain services
          </h1>
          <p className="font-medium w-full md:max-w-[795px]   max-w-[250px] mx-auto text-[12px] sm:text-[14px] text-black/50 md:text-[14px] lg:text-[18px]">
            Cubicus envisions a world where technology becomes a decisive tool
            for every individual, leading to businesses thriving through
            innovation and users experiencing seamless, convenient digital
            interactions.
          </p>
        </div>
        <div className="mt-[27px] grid grid-cols-2 gap-y-2 gap-x-3 sm:gap-10 lg:gap-20 md:grid-cols-3">
          <div className="flex flex-col items-center sm:justify-center justify-start ">
            <div className="mb-2 lg:mb-7 flex h-18 w-18 md:h-[4rem] md:w-[4rem]  lg:h-24 lg:w-24 items-center justify-center rounded-full sm:bg-[#F0EEFF]">
              <Image
                loading="lazy"
                alt="Mobile App Development"
                width={36}
                height={36}
                className="w-[20px] md:w-[30px]  lg:w-auto "
                src="/assets/mobile-app-development.204eeee8.svg"
              />
            </div>
            <div className="md:h-[80px] lg:h-[100px] flex flex-col justify-start  items-center   ">
              <h4 className=" lg:mb-2.5 md:mb-1 text-[12px] sm:text-[14px] h-[30px] leading-tight   w-[70%] sm:w-full font-semibold text-[#2555BB]  lg:text-[22px]">
                Mobile App Development
              </h4>
              <p className=" max-w-[341px] text-center text-[10px] sm:text-[12px] line-clamp-3   sm:line-clamp-none text-black/50   lg:text-[18px]">
                We provide top-notch features and user-centric solutions, from
                Desktop applications to Mobile apps.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center sm:justify-center justify-start ">
            <div className="mb-2 lg:mb-7 flex h-18 w-18 md:h-[4rem] md:w-[4rem]  lg:h-24 lg:w-24 items-center justify-center rounded-full sm:bg-[#F0EEFF]">
              <Image
                loading="lazy"
                alt="Website Designing"
                width={36}
                height={36}
                className="w-[20px] md:w-[30px]  lg:w-auto "
                src="/assets/web-designing.f11baf2e.svg"
              />
            </div>
            <div className="md:h-[80px] lg:h-[100px] flex flex-col justify-start  items-center   ">
              <h4 className=" lg:mb-2.5 md:mb-1 text-[12px] sm:text-[14px] h-[30px] leading-tight   w-[70%] sm:w-full font-semibold text-[#2555BB]  lg:text-[22px]">
                Website Designing
              </h4>
              <p className=" max-w-[341px] text-center text-[10px] sm:text-[12px] line-clamp-3   sm:line-clamp-none text-black/50   lg:text-[18px]">
                We offer UX and UI design services for e-commerce platforms,
                corporate websites, and any customized website solution for your
                online business.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center sm:justify-center justify-start ">
            <div className="mb-2 lg:mb-7 flex h-18 w-18 md:h-[4rem] md:w-[4rem]  lg:h-24 lg:w-24 items-center justify-center rounded-full sm:bg-[#F0EEFF]">
              <Image
                loading="lazy"
                alt="SaaS Development"
                width={48}
                height={48}
                className="w-[20px] md:w-[30px]  lg:w-auto "
                style="color:transparent"
                src="/assets/saas.2cfc49c5.svg"
              />
            </div>
            <div className="md:h-[80px] lg:h-[100px] flex flex-col justify-start  items-center   ">
              <h4 className=" lg:mb-2.5 md:mb-1 text-[12px] sm:text-[14px] h-[30px] leading-tight   w-[70%] sm:w-full font-semibold text-[#2555BB]  lg:text-[22px]">
                SaaS Development
              </h4>
              <p className=" max-w-[341px] text-center text-[10px] sm:text-[12px] line-clamp-3   sm:line-clamp-none text-black/50   lg:text-[18px]">
                Our developers design and develop SaaS solutions that transform
                your business operations, assuring availability and massive
                scalability.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center sm:justify-center justify-start ">
            <div className="mb-2 lg:mb-7 flex h-18 w-18 md:h-[4rem] md:w-[4rem]  lg:h-24 lg:w-24 items-center justify-center rounded-full sm:bg-[#F0EEFF]">
              <Image
                loading="lazy"
                alt="Blockchain Development"
                width={48}
                height={48}
                className="w-[20px] md:w-[30px]  lg:w-auto "
                src="/assets/blockchain.1b96f84c.svg"
              />
            </div>
            <div className="md:h-[80px] lg:h-[100px] flex flex-col justify-start  items-center   ">
              <h4 className=" lg:mb-2.5 md:mb-1 text-[12px] sm:text-[14px] h-[30px] leading-tight   w-[70%] sm:w-full font-semibold text-[#2555BB]  lg:text-[22px]">
                Blockchain Development
              </h4>
              <p className=" max-w-[341px] text-center text-[10px] sm:text-[12px] line-clamp-3   sm:line-clamp-none text-black/50   lg:text-[18px]">
                Our blockchain proficiency extends from development to
                deployment, ensuring security and transparency for your
                business.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center sm:justify-center justify-start ">
            <div className="mb-2 lg:mb-7 flex h-18 w-18 md:h-[4rem] md:w-[4rem]  lg:h-24 lg:w-24 items-center justify-center rounded-full sm:bg-[#F0EEFF]">
              <Image
                loading="lazy"
                alt="E-Commerce Solutions"
                width={37}
                height={36}
                className="w-[20px] md:w-[30px]  lg:w-auto "
                src="/assets/e-commerce.70fd3f19.svg"
              />
            </div>
            <div className="md:h-[80px] lg:h-[100px] flex flex-col justify-start  items-center   ">
              <h4 className=" lg:mb-2.5 md:mb-1 text-[12px] sm:text-[14px] h-[30px] leading-tight   w-[70%] sm:w-full font-semibold text-[#2555BB]  lg:text-[22px]">
                E-Commerce Solutions
              </h4>
              <p className=" max-w-[341px] text-center text-[10px] sm:text-[12px] line-clamp-3   sm:line-clamp-none text-black/50   lg:text-[18px]">
                Our developers will transform your online store with
                cutting-edge e-commerce technology to improve your users’
                shopping experience.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center sm:justify-center justify-start ">
            <div className="mb-2 lg:mb-7 flex h-18 w-18 md:h-[4rem] md:w-[4rem]  lg:h-24 lg:w-24 items-center justify-center rounded-full sm:bg-[#F0EEFF]">
              <Image
                loading="lazy"
                alt="Graphic Designing"
                width={38}
                height={35}
                className="w-[20px] md:w-[30px]  lg:w-auto "
                src="/assets/graphic-designing.2be32fbf.svg"
              />
            </div>
            <div className="md:h-[80px] lg:h-[100px] flex flex-col justify-start  items-center   ">
              <h4 className=" lg:mb-2.5 md:mb-1 text-[12px] sm:text-[14px] h-[30px] leading-tight   w-[70%] sm:w-full font-semibold text-[#2555BB]  lg:text-[22px]">
                Graphic Designing
              </h4>
              <p className=" max-w-[341px] text-center text-[10px] sm:text-[12px] line-clamp-3   sm:line-clamp-none text-black/50   lg:text-[18px]">
                Our graphics design team promotes your brand with appealing
                visuals, brand identity, and an intuitive user interface and
                experience.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>Slider</section>
      <section className="container flex justify-center gap-16 text-start lg:py-5 ">
        <div>
          <div className="flex flex-col flex-wrap items-center justify-center ">
            <h3 className="text-center text-[24px] sm:text-[28px] font-semibold text-[#000] md:text-[28px] lg:text-[40px] ">
              Our Process
            </h3>
            <h4 className=" mt-2 text-center sm:max-w-[795px] max-w-[280px] text-[14px] font-semibold text-[#2555BB] md:text-xl">
              Strategic Digital Solutions, Seamless User Experiences
            </h4>
            <p className=" my-2   max-w-[270px] mx-auto sm:my-2.5 lg:my-5 sm:max-w-[1110px]  text-center text-[12px] sm:text-[14px] font-medium text-black/50 md:text-[16px] lg:text-[18px]">
              Cubicus believes in a collaborative team approach for web and
              graphic designing, social media marketing, digital marketing, web
              and app development, and blockchain development. Our iterative
              design and development process is designed to ensure clarity,
              trust, and customer satisfaction every step of the way. Here's how
              we bring your ideas to life.
            </p>
          </div>
          <div className="mt-2 md:mt-4 lg:mt-8 grid grid-cols-2 gap-x-4 items-start justify-center gap-y-4 md:gap-x-12 md:gap-y-8 lg:gap-16  md:grid-cols-3">
            <div className="flex flex-col items-center justify-center  ">
              <div className="mb-1.5 lg:mb-6 sm:mb-3 flex h-9 w-9 sm:h-12 sm:w-12 lg:h-16 lg:w-16 items-center justify-center rounded-[10px] lg:rounded-[20px] bg-[#FFDADC]">
                <Image
                  loading="lazy"
                  alt="Discovery"
                  width={128}
                  height={128}
                  className="h-5 w-5 lg:h-8 lg:w-8 md:h-6 md:w-6"
                  src="/assets/discovery.png"
                />
              </div>
              <h5 className="mb-1.5 sm:mb-2 lg:mb-2.5 text-[14px] md:text-[14px] lg:text-[18px] font-semibold ">
                Discovery
              </h5>
              <p className="max-h-[116px] text-[10px] max-w-[370px] line-clamp-3 sm:line-clamp-none text-center md:text-[14px] lg:text-[18px] text-black/50 ">
                We understand user requirements, visions, and goals by doing
                market research for competitors and trending tools.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center  ">
              <div className="mb-1.5 lg:mb-6 sm:mb-3 flex h-9 w-9 sm:h-12 sm:w-12 lg:h-16 lg:w-16 items-center justify-center rounded-[10px] lg:rounded-[20px] bg-[#FEF7D9]">
                <Image
                  loading="lazy"
                  alt="Design"
                  width={128}
                  height={128}
                  className="h-5 w-5 lg:h-8 lg:w-8 md:h-6 md:w-6"
                  src="/assets/design.png"
                />
              </div>
              <h5 className="mb-1.5 sm:mb-2 lg:mb-2.5 text-[14px] md:text-[14px] lg:text-[18px] font-semibold ">
                Design
              </h5>
              <p className="max-h-[116px] text-[10px] max-w-[370px] line-clamp-3 sm:line-clamp-none text-center md:text-[14px] lg:text-[18px] text-black/50 ">
                Our talented design team then ensures making a user-centric
                design for the best user experiences.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center  ">
              <div className="mb-1.5 lg:mb-6 sm:mb-3 flex h-9 w-9 sm:h-12 sm:w-12 lg:h-16 lg:w-16 items-center justify-center rounded-[10px] lg:rounded-[20px] bg-[#FFEADA]">
                <Image
                  loading="lazy"
                  alt="Development"
                  width={128}
                  height={128}
                  className="h-5 w-5 lg:h-8 lg:w-8 md:h-6 md:w-6"
                  src="/assets/development.png"
                />
              </div>
              <h5 className="mb-1.5 sm:mb-2 lg:mb-2.5 text-[14px] md:text-[14px] lg:text-[18px] font-semibold ">
                Development
              </h5>
              <p className="max-h-[116px] text-[10px] max-w-[370px] line-clamp-3 sm:line-clamp-none text-center md:text-[14px] lg:text-[18px] text-black/50 ">
                At cubicus.io, we use modern technologies to bring your project
                to life while implementing top-notch solutions that deliver
                long-lasting outcomes.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center  ">
              <div className="mb-1.5 lg:mb-6 sm:mb-3 flex h-9 w-9 sm:h-12 sm:w-12 lg:h-16 lg:w-16 items-center justify-center rounded-[10px] lg:rounded-[20px] bg-[#F3D8FF]">
                <Image
                  loading="lazy"
                  alt="Testing"
                  width={128}
                  height={128}
                  className="h-5 w-5 lg:h-8 lg:w-8 md:h-6 md:w-6"
                  src="/assets/testing.png"
                />
              </div>
              <h5 className="mb-1.5 sm:mb-2 lg:mb-2.5 text-[14px] md:text-[14px] lg:text-[18px] font-semibold ">
                Testing
              </h5>
              <p className="max-h-[116px] text-[10px] max-w-[370px] line-clamp-3 sm:line-clamp-none text-center md:text-[14px] lg:text-[18px] text-black/50 ">
                Our quality assurance team tests every aspect of the project and
                ensures that it satisfies the requirements and efficiency,
                reliability, and performance standards.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center  ">
              <div className="mb-1.5 lg:mb-6 sm:mb-3 flex h-9 w-9 sm:h-12 sm:w-12 lg:h-16 lg:w-16 items-center justify-center rounded-[10px] lg:rounded-[20px] bg-[#C9EBFE]">
                <Image
                  loading="lazy"
                  alt="Deployment"
                  width={128}
                  height={128}
                  className="h-5 w-5 lg:h-8 lg:w-8 md:h-6 md:w-6"
                  src="/assets/deployment.png"
                />
              </div>
              <h5 className="mb-1.5 sm:mb-2 lg:mb-2.5 text-[14px] md:text-[14px] lg:text-[18px] font-semibold ">
                Deployment
              </h5>
              <p className="max-h-[116px] text-[10px] max-w-[370px] line-clamp-3 sm:line-clamp-none text-center md:text-[14px] lg:text-[18px] text-black/50 ">
                The project is then deployed efficiently with our development
                team providing support to ensure a smooth transition into the
                digital landscape.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center  ">
              <div className="mb-1.5 lg:mb-6 sm:mb-3 flex h-9 w-9 sm:h-12 sm:w-12 lg:h-16 lg:w-16 items-center justify-center rounded-[10px] lg:rounded-[20px] bg-[#DEFEEA]">
                <Image
                  loading="lazy"
                  alt="Maintenance"
                  width={128}
                  height={128}
                  className="h-5 w-5 lg:h-8 lg:w-8 md:h-6 md:w-6"
                  src="/assets/maintenance.png"
                />
              </div>
              <h5 className="mb-1.5 sm:mb-2 lg:mb-2.5 text-[14px] md:text-[14px] lg:text-[18px] font-semibold ">
                Maintenance
              </h5>
              <p className="max-h-[116px] text-[10px] max-w-[370px] line-clamp-3 sm:line-clamp-none text-center md:text-[14px] lg:text-[18px] text-black/50 ">
                We offer maintenance and support to our valuable clients to
                ensure the software runs smoothly and adapts to evolving needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
