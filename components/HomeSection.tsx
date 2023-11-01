import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const HomeSection = () => {
  return (
    <main className="w-full " style={{ margin: "20px 0" }}>
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex flex-col items-center md:flex-row">
          <main className="w-full md:w-1/2">
          
            <div 
    className="flex items-center gap-2">
              <span className="w-[2.5rem] h-[0.125rem] bg-[#6D72F6] min-h-[0.125rem]"></span>{" "}
              <h3 className="text-[#6D72F6] font-extrabold text-xs leading-[1.125rem] tracking-[0.06rem] uppercase">
                REACH YOUR CUSTOMERS GLOBALLY
              </h3>
            </div>
            <div className="text-center md:text-left  ">
            <h1 className="text-[#1C1C57] font-extrabold text-4xl md:text-5xl md:leading-[1.3]  pt-4">
  Register Effortlessly on Stripe, PayPal, and Wise within{" "}
  <span className="text-[#6D72F6]">7 Days!</span>{" "}
</h1>

              <p className="text-[#73739A] font-manrope font-medium text-lg md:text-md leading-[2rem] pt-4">
                Boost Your Business Expansion with Our Registration Process
                Leading Payment Platforms in Just a Week
              </p>
              <div className="flex flex-col md:flex-row gap-2 pt-8">
                <Button className="bg-[#6D72F6] rounded-xl py-4 md:py-6 text-lg md:text-[1rem]">
                  Get Started
                </Button>
                <Button
                  variant={"ghost"}
                  className="rounded-xl py-4 md:py-6 text-lg md:text-[1rem] text-[#6D72F6] hover:border-blue-500 "
                >
                  Book a demo
                </Button>
              </div>
              <div className="flex flex-col items-center md:flex-row gap-2 pt-8">
                <Image src="/three.png" alt="der" width={108} height={47} />
                <p className="text-[#494967] font-manrope text-lg md:text-[1.01394rem] leading-[1.35194rem]">
                  Join with{" "}
                  <span className="text-[#494967] font-manrope font-bold text-lg md:text-[1.01394rem] leading-[1.35194rem]">
                    1200+ Startups{" "}
                  </span>
                  and get your <br /> business started today
                </p>
              </div>
            </div>
          </main>
          <div className="w-full md:w-1/2 flex items-center">
            <Image
              src="/Hero Image2024.png"
              alt="cd"
              width={550}
              height={600}
              className="w-full h-full"
            />
          </div>
        </nav>
      </div>
    </main>
  );
};

export default HomeSection;
