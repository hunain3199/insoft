'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from './Elements/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/Elements/dropdown-menu';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/Elements/accordion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle menu
  const pathname = usePathname();

  return (
    <header className="sticky top-0 left-0 z-40 w-full bg-white shadow-lg">
      <div className="items-start justify-end w-full bg-primary hidden lg:flex px-8">
        <div class="flex items-center justify-start gap-2">
          <Link href="/">
            <Image
              alt="social-icon"
              loading="lazy"
              width={40}
              height={40}
              src="/assets/facebook.png"
            />
          </Link>
          <Link href="/">
            <Image
              alt="social-icon"
              loading="lazy"
              width={40}
              height={40}
              src="/assets/instagram.png"
            />
          </Link>
          <Link href="/">
            <Image
              alt="social-icon"
              loading="lazy"
              width={40}
              height={40}
              src="/assets/linkedin.png"
            />
          </Link>
          <Link href="/">
            <Image
              alt="social-icon"
              loading="lazy"
              width={40}
              height={40}
              src="/assets/twitter.png"
            />
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-between w-full px-4 py-2 ">
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
          <button onClick={() => setIsOpen(!isOpen)}>
            <Image
              src="/assets/hamburger.svg"
              width={24}
              height={24}
              loading="lazy"
            />
          </button>
        </div>

        {/* Links for large screens */}
        <nav className="hidden lg:flex flex-1 justify-center">
          <ul className="text-muted-foreground flex items-center gap-12 text-s[#637381] font-semibold">
            <li>
              <Link
                className={`${
                  pathname === '/' ? 'text-[#212B36]' : ''
                } hover:text-[#212B36]`}
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={`${
                    pathname.startsWith('/service') ? 'text-[#212B36]' : ''
                  } hover:text-[#212B36]`}
                >
                  Services
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link href="/service/it-services">IT Services</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/service/institute-services">
                      Institute Services
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/service/co-working-space">
                      Co-Working Space
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li>
              <Link
                className={`${
                  pathname === '/about' ? 'text-[#212B36]' : ''
                } hover:text-[#212B36]`}
                href="/about"
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                className={`${
                  pathname === '/contact' ? 'text-[#212B36]' : ''
                } hover:text-[#212B36]`}
                href="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Contact Us button for large screens */}
        <div className="hidden lg:block py-1 px-4">
          <Link href="contact">
            <Button>Contact us</Button>
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
        <ul className="block px-3 text-muted-foreground">
          {/* Contact Us Button on Mobile Menu */}
          <div className="block mb-3  ">
            <Link href="contact" onClick={() => setIsOpen(false)}>
              <Button>Contact us</Button>
            </Link>
          </div>
          <li className="relative">
            <Link
              className={`flex py-2 text-[16px] font-bold hover:text-[#212B36] ${
                pathname === '/' ? 'text-[#212B36]' : ''
              }`}
              href="/"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="relative">
            <Accordion type="single" collapsible>
              <AccordionItem value="services" className="border-b-0">
                <AccordionTrigger
                  className={`flex py-0 text-[16px] font-bold hover:text-[#212B36] hover:no-underline ${
                    pathname.startsWith('/service')
                      ? 'text-[#212B36]'
                      : 'text-muted-foreground'
                  }`}
                >
                  Services
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col space-y-2">
                    <Link href="/service/it-services">IT Services</Link>
                    <Link href="/service/institute-services">
                      Institute Services
                    </Link>
                    <Link href="/service/co-working-space">
                      Co-Working Space
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>
          <li className="relative">
            <Link
              className={`flex py-2 text-[16px] font-bold hover:text-[#212B36] ${
                pathname === '/about' ? 'text-[#212B36]' : ''
              }`}
              href="/about"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
          </li>

          <li className="relative">
            <Link
              className={`flex py-2 text-[16px] font-bold hover:text-[#212B36] ${
                pathname === '/contact' ? 'text-[#212B36]' : ''
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
                <Link href="/">
                  <Image
                    alt="social-icon"
                    loading="lazy"
                    width={40}
                    height={40}
                    src="/assets/facebook.png"
                  />
                </Link>
                <Link href="/">
                  <Image
                    alt="social-icon"
                    loading="lazy"
                    width={40}
                    height={40}
                    src="/assets/instagram.png"
                  />
                </Link>
                <Link href="/">
                  <Image
                    alt="social-icon"
                    loading="lazy"
                    width={40}
                    height={40}
                    src="/assets/linkedin.png"
                  />
                </Link>
                <Link href="/">
                  <Image
                    alt="social-icon"
                    loading="lazy"
                    width={40}
                    height={40}
                    src="/assets/twitter.png"
                  />
                </Link>
              </div>
            </div>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
