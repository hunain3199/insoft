import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <footer className="relative z-10 bg-[#0A142F] sm:pt-20 lg:py-[60px] pb-3">
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-4  sm:gap-20 ">
          <div className="flex flex-col items-center justify-center  gap-5 sm:gap-14 text-white ">
            <Link
              className="flex w-fit items-center gap-0.5 py-3 lg:gap-2  "
              href="/"
            >
              <Image
                alt="logo"
                width={72}
                height={72}
                className="header-logo w-[100px] sm:w-full"
                src="/assets/logo.png"
              />
            </Link>
            <div class="flex w-full flex-wrap items-center justify-center gap-10 ">
              <Link class="text-[13px] sm:text-lg font-medium" href="/">
                Home
              </Link>
              <Link class="text-[13px] sm:text-lg font-medium" href="/services">
                Services
              </Link>
              <Link class="text-[13px] sm:text-lg font-medium" href="/about">
                About Us
              </Link>
              <Link class="text-[13px] sm:text-lg font-medium" href="/blogs">
                Blogs
              </Link>
              <Link class="text-[13px] sm:text-lg font-medium" href="/contact">
                Contact
              </Link>
            </div>
          </div>
          <div className="flex w-full flex-wrap items-center justify-center  gap-5 sm:gap-10">
            <div className=" p-1 sm:p-5 rounded-[20px] bg-[#F2F2F2]/10">
              <Link
                className="flex h-full w-full items-center justify-center "
                href="https://www.instagram.com/cubicusio/"
              >
                <Image
                  alt="Instagram"
                  width={24}
                  height={24}
                  src="/assets/footer/instagram.svg"
                />
              </Link>
            </div>
            <div className=" p-1 sm:p-5 rounded-[20px] bg-[#F2F2F2]/10">
              <Link
                className="flex h-full w-full items-center justify-center "
                href="https://www.instagram.com/cubicusio/"
              >
                <Image
                  alt="Facebook"
                  width={24}
                  height={24}
                  src="/assets/footer/facebook.svg"
                />
              </Link>
            </div>
            <div className=" p-1 sm:p-5 rounded-[20px] bg-[#F2F2F2]/10">
              <Link
                className="flex h-full w-full items-center justify-center "
                href="https://www.instagram.com/cubicusio/"
              >
                <Image
                  alt="Linkedin"
                  width={24}
                  height={24}
                  src="/assets/footer/linkedin.svg"
                />
              </Link>
            </div>
            <div className=" p-1 sm:p-5 rounded-[20px] bg-[#F2F2F2]/10">
              <Link
                className="flex h-full w-full items-center justify-center "
                href="https://www.instagram.com/cubicusio/"
              >
                <Image
                  alt="Twitter"
                  width={24}
                  height={24}
                  src="/assets/footer/twitter.svg"
                />
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-10 sm:gap-20 text-white/50">
            <p className="text-[12px] sm:text-lg font-medium">Copyright 2024</p>
            <div className="flex flex-wrap sm:gap-3.5 gap-1">
              <p class="text-[12px] sm:text-lg font-medium">
                Terms &amp; Condition
              </p>
              <p class="text-[12px] sm:text-lg font-medium">Privacy</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
