import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const HomeSection = () => {
  return (
    <main className="w-full " style={{ margin: "20px 0" }}>
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex flex-col items-center md:flex-row">
          <main className="w-full md:w-1/2 flex flex-col-reverse ">
            <div className="flex items-center md:justify-start justify-center gap-2">
              <span className="md:w-[2.5rem] md:h-[0.125rem] w-[1rem] h:[0.125rem] bg-[#6D72F6] min-h-[0.125rem]"></span>{" "}
              <h3 className="text-[#6D72F6] font-[800] text-[.6rem] md:text-[0.9375rem] leading-[1.125rem] tracking-[0.06rem] uppercase ">
                REACH YOUR CUSTOMERS GLOBALLY
              </h3>
            </div>
            <div className="text-center md:text-left  ">
              <h1 className="text-[rgb(28,28,87)] font-[800] text-[1.5rem] sm:text-[1rem] md:text-[2.25rem] leading-normal  md:pt-4 pt-1">
                Register Effortlessly on Stripe, PayPal, and Wise within{" "}
                <span className="text-[#6D72F6]">7 Days!</span>{" "}
              </h1>

              <p className="text-[#73739A] font-[500] text-[.9rem] md:text-[1.125rem] leading-[177.778%]  md:pt-4 pt-1">
                Boost Your Business Expansion with Our Registration Process
                Leading Payment Platforms in Just a Week
              </p>
              <div className="flex flex-col md:flex-row gap-2 pt-8">
                <Button className="bg-[#6D72F6] rounded-xl py-4 md:py-6 text-lg md:text-[1rem] text-[.9rem] border">
                  Get Started
                </Button>
                <Button
                  variant={"ghost"}
                  className="rounded-xl py-4 md:py-6 text-[.9rem] md:text-[1rem] text-[#6D72F6] hover:border-blue-500 border"
                >
                  Book a demo
                </Button>
              </div>
              <div className="flex flex-col items-center md:flex-row gap-2 pt-8">
                <Image src="/three.png" alt="der" width={108} height={47} />
                <p className="text-[#494967]  text-[.7rem] md:text-[1.01394rem] font-[400] leading-[1.35194rem]">
                  Join with{" "}
                  <span className="text-[#494967]">1200+ Startups </span>
                  and get your <br /> business started today
                </p>
              </div>
            </div>
          </main>
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <Image
              src="/Hero Image2024.png"
              alt="cd"
              width={550}
              height={600}
              className=""
            />
          </div>
        </nav>
      </div>
    </main>
  );
};

export default HomeSection;
