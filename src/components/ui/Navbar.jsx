'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from './button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle menu
  const pathname = usePathname();

  return (
    <header className="sticky top-0 left-0 z-40 w-full bg-white px-4 py-2 shadow-lg">
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <div className="w-auto py-1 px-4">
          <Link href="/">
            <Image
              loading="lazy"
              src="/assets/logo.png"
              alt="logo"
              width={82}
              height={72}
            />
          </Link>
        </div>

        {/* Hamburger menu */}
        <div className="lg:hidden z-50">
          <Button onClick={() => setIsOpen(!isOpen)}>
            <Image
              src="/assets/hamburger.svg"
              width={24}
              height={24}
              loading="lazy"
            />
          </Button>
        </div>

        {/* Links for large screens */}
        <nav className="hidden lg:flex flex-1 justify-center">
          <ul className="flex items-center gap-12 text-s[#637381] font-semibold">
            <li>
              <Link
                className={`${
                  pathname === '/' ? 'text-[#2555BB]' : ''
                } hover:text-[#2555BB]`}
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  pathname === '/service' ? 'text-[#2555BB]' : ''
                } hover:text-[#2555BB]`}
                href="/service"
              >
                Service
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  pathname === '/about' ? 'text-[#2555BB]' : ''
                } hover:text-[#2555BB]`}
                href="/about"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  pathname === '/blogs' ? 'text-[#2555BB]' : ''
                } hover:text-[#2555BB]`}
                href="/blogs"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  pathname === '/contact' ? 'text-[#2555BB]' : ''
                } hover:text-[#2555BB]`}
                href="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
          <Button>
            Login
          </Button>
        </nav>

        {/* Contact Us button for large screens */}
        <div className="hidden lg:block py-1 px-4">
          <Link
            href="contact"
            className="bg-[#2555bb] text-white font-bold py-2 px-4 rounded-full"
          >
            Contact us
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`${
          isOpen
            ? 'opacity-100 translate-y-0 visible' // Show navbar
            : 'opacity-0 translate-y-2 invisible' // Hide navbar
        } 
  lg:invisible absolute left-1/2 transform -translate-x-1/2 z-30 w-full max-w-[400px] 
  sm:max-w-[540px] md:max-w-[720px] rounded border-[.5px] border-[#637381] 
  border-opacity-50 bg-white px-6 py-4 top-full 
  transition-all duration-300 ease-in-out`}
      >
        <ul className="block px-3 text-[#637381]">
          {/* Contact Us Button on Mobile Menu */}
          <div className="block mb-3  ">
            <Link
              href="contact"
              className="bg-[#2555bb] text-white px-2  -mx-3 py-[8px] text-[12px] font-bold rounded-3xl "
              onClick={() => setIsOpen(false)}
            >
              Contact us
            </Link>
          </div>
          <li className="relative">
            <Link
              className={`flex py-2 text-[16px] font-bold hover:text-[#2555BB] ${
                pathname === '/' ? 'text-[#2555BB]' : ''
              }`}
              href="/"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="relative">
            <Link
              className={`flex py-2 text-[16px] font-bold hover:text-[#2555BB] ${
                pathname === '/service' ? 'text-[#2555BB]' : ''
              }`}
              href="/service"
              onClick={() => setIsOpen(false)}
            >
              Service
            </Link>
          </li>
          <li className="relative">
            <Link
              className={`flex py-2 text-[16px] font-bold hover:text-[#2555BB] ${
                pathname === '/about' ? 'text-[#2555BB]' : ''
              }`}
              href="/about"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
          </li>
          <li className="relative">
            <Link
              className={`flex py-2 text-[16px] font-bold hover:text-[#2555BB] ${
                pathname === '/blogs' ? 'text-[#2555BB]' : ''
              }`}
              href="/blogs"
              onClick={() => setIsOpen(false)}
            >
              Blogs
            </Link>
          </li>
          <li className="relative">
            <Link
              className={`flex py-2 text-[16px] font-bold hover:text-[#2555BB] ${
                pathname === '/contact' ? 'text-[#2555BB]' : ''
              }`}
              href="/contact"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
          <div className="block lg:hidden">
            <div>
              <p className="text-[14px] font-bold text-dark">Follow us on</p>
              <div class="flex items-center justify-start gap-2 py-5">
                <Image
                  alt="social-icon"
                  loading="lazy"
                  width={40}
                  height={40}
                  src="/assets/facebook.png"
                />
                <Image
                  alt="social-icon"
                  loading="lazy"
                  width={40}
                  height={40}
                  src="/assets/instagram.png"
                />
                <Image
                  alt="social-icon"
                  loading="lazy"
                  width={40}
                  height={40}
                  src="/assets/linkedin.png"
                />
                <Image
                  alt="social-icon"
                  loading="lazy"
                  width={40}
                  height={40}
                  src="/assets/twitter.png"
                />
              </div>
            </div>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
