'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle menu
  const pathname = usePathname();

  return (
    <header className="relative top-0 left-0 z-40 w-full flex items-center justify-between bg-white px-4 py-2 shadow-lg">
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <div className="w-auto py-1 px-4">
          <Link href="/">
            <Image
              src="/assets/logo.png"
              alt="logo"
              width={82}
              height={72}
              loading="lazy"
            />
          </Link>
        </div>

        {/* Hamburger menu */}
        <div className="lg:hidden z-50">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Links for large screens */}
        <nav
          className={`hidden lg:flex flex-1 justify-center ${
            isOpen ? 'block' : ''
          }`}
        >
          <ul className="flex items-center gap-12 text-gray-800 font-semibold">
            <li>
              <Link
                className={`${
                  pathname === '/' ? 'text-blue-600' : ''
                } hover:text-blue-600`}
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  pathname === '/service' ? 'text-blue-600' : ''
                } hover:text-blue-600`}
                href="/service"
              >
                Service
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  pathname === '/about' ? 'text-blue-600' : ''
                } hover:text-blue-600`}
                href="/about"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  pathname === '/blogs' ? 'text-blue-600' : ''
                } hover:text-blue-600`}
                href="/blogs"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  pathname === '/contact' ? 'text-blue-600' : ''
                } hover:text-blue-600`}
                href="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Contact Us button for large screens */}
        <div className="hidden lg:block py-1 px-4">
          <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
            Contact us
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`${
          isOpen ? 'flex' : 'hidden'
        } lg:hidden flex-col items-center bg-white shadow-md fixed top-0 left-0 w-full h-screen z-40`}
      >
        <ul className="flex flex-col items-center justify-center gap-8 mt-10 text-gray-800 font-semibold">
          <li>
            <Link
              className={`${
                pathname === '/' ? 'text-blue-600' : ''
              } hover:text-blue-600`}
              href="/"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`${
                pathname === '/service' ? 'text-blue-600' : ''
              } hover:text-blue-600`}
              href="/service"
              onClick={() => setIsOpen(false)}
            >
              Service
            </Link>
          </li>
          <li>
            <Link
              className={`${
                pathname === '/about' ? 'text-blue-600' : ''
              } hover:text-blue-600`}
              href="/about"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              className={`${
                pathname === '/blogs' ? 'text-blue-600' : ''
              } hover:text-blue-600`}
              href="/blogs"
              onClick={() => setIsOpen(false)}
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              className={`${
                pathname === '/contact' ? 'text-blue-600' : ''
              } hover:text-blue-600`}
              href="/contact"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Contact Us Button on Mobile Menu */}
        <div className="mt-5">
          <button
            className="bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => setIsOpen(false)}
          >
            Contact us
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
