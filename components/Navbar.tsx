'use client'
import React, { useState } from "react";
import { Popover } from "@headlessui/react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const headerLinks = [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/features" },
    { label: "Book a demo", href: "/demo" },
    { label: "Login", href: "/login" },
  ];

  return (
    <div className="w-full bg-white   relative z-50">
      <Popover className="container mx-auto flex items-center justify-center px-4 py-5 h-28 w-full md:max-w-7xl">
        <div className="flex items-center">
          <Image
            src="/tara.png"
            width={257}
            height={35}
            alt="logo"
            className="cursor-pointer md:w-[257px] w-[157px]"
          />
        </div>

        <div className="flex-grow" />

        <div className="flex items-center sm:hidden">
          <Popover.Button
            className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="sr-only">Open menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>

        <div
          className={`absolute inset-x-0 top-0 origin-top-right transform p-2 transition ${
            menuOpen ? "md:hidden" : "hidden"
          }`}
        >
          <div className="rounded-lg text-[#646464] bg-white shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <Image src="/tara.png" width={246} height={35} alt="logo" className="cursor-pointer md:w-[257px] w-[157px]" />
                <div className="mr-2">
                  <Popover.Button
                    className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover-bg-gray-100 hover-text-gray-500 focus-outline-none focus-ring-2 focus-ring-inset focus-ring-indigo-500"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {headerLinks.map((link, index) => (
                    <Link key={index} href={link.href} passHref className="focus-outline-none focus-ring-2 focus-ring-inset focus-ring-gray-500 px-2">
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
              <div className="mt-6 flex flex-col items-center text-center gap-2">
                <Link href="/" passHref className="w-full">
                  <Button
                    className="rounded-xl bg-[#4255BD] px-4 py-6 text-md font-medium text-white md-text-xl w-full border-2 focus-outline focus-ring-2 focus-ring-inset focus-ring-gray-500"
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-8">
          <div className="hidden sm:flex items-center justify-center gap-8">
            {headerLinks.map((link, index) => (
              <Link key={index} href={link.href} passHref className="font-medium text-[1.09806rem] text-[#73739A]">
                {link.label}
              </Link>
            ))}
          </div>
          <Link href="/" passHref>
            <Button
              className="text-[1.2rem] bg-[#4255BD] text-[#fff] px-4 py-6 text-md rounded-xl"
            >
              Get Started
            </Button>
          </Link>
        </div>
      </Popover>
    </div>
  );
};

export default Navbar;
