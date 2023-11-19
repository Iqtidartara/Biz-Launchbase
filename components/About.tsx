import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row gap-8">
        <div className="w-full  md:w-1/2 flex items-center justify-center">
          <Image
            src="/about.png"
            alt="trackbussiness"
            width={500}
            height={300}
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center">
          <div className="mb-4 ">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="md:-w-8 md:h-0.5 w-[1rem] h:[0.125rem] bg-[#6D72F6] min-h-[0.125rem]"></span>
              <h3 className="text-[#6D72F6] font-[800] text-[10px]   md:text-[15px] leading-normal  uppercase">
                Your Success, Our Blueprint
              </h3>
            </div>
          </div>
          <h1 className="text-[1.5rem] md:text-[2.5rem]  font-[800] text-[#1C1C57] mb-4">
            Fast-Track Your Business <br /> in a Week
          </h1>
          <p className="text-[#73739A] text-[.9rem] md:text-[1.125rem] font-[500] leading-normal mb-6">
            At BizLaunchBase, we break down barriers for you. Our streamlined
            process, guided document uploads, and expert team ensure quick
            registration for Stripe, PayPal, Wise, and more in just 7 days. Make
            your global market entry a reality!
          </p>
          <div className="mb-6 leading-[2rem]">
            <div className="flex items-center ">
              <Image src="/Tick.png" alt="check" width={28} height={28} className="w-[18px] md:w-[28px]" />
              <span className="ml-2 text-[#1C1C57] font-[500] text-[.8rem] md:text-[1.125rem]">
                Navigate seamless US/UK registration
              </span>
            </div>
            <div className="flex items-center mb-2">
              <Image src="/Tick.png" alt="check" width={28} height={28} className="w-[18px] md:w-[28px]"/>
              <span className="ml-2 text-[#1C1C57] font-[500] text-[.8rem] md:text-[1.125rem]">
                Unlock Stripe, PayPal, Wise, and more in 7 days
              </span>
            </div>
            <div className="flex items-center">
              <Image src="/Tick.png" alt="check" width={28} height={28} className="w-[18px] md:w-[28px]" />
              <span className="ml-2 text-[#1C1C57] font-[500] text-[.8rem] md:text-[1.125rem]">
                Simplified, user-friendly document upload
              </span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-2 py-[1.88rem]">
          <Button className="bg-[#6D72F6] rounded-xl py-4 md:py-6 text-lg md:text-[1rem] text-[.9rem] border">
                  Get Started
                </Button>
                <Button
                  variant={"ghost"}
                  className="rounded-xl py-4 md:py-6 text-[.9rem] md:text-[1rem] text-[#6D72F6] hover:border-blue-500 border "
                >
                  Book a demo
                </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
