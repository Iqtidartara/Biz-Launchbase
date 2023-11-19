import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";

const Choose = () => {
  return (
    <main className="w-full ">
      <div className="max-w-7xl mx-auto  flex flex-col-reverse md:flex-row items-center gap-8 px-4">
        <div className="w-full md:w-1/2 ">
          <div className="mb-4">
            <div className="flex items-center gap-2">
            <span className="md:-w-8 md:h-0.5 w-[1rem] h:[0.125rem] bg-[#6D72F6] min-h-[0.125rem]"></span>
            <h3 className="text-[#6D72F6] font-[800] text-[10px]   md:text-[15px] leading-normal  uppercase">
                Transparency, Trust, Triumph
              </h3>
            </div>
          </div>
          <h1 className="md:text-[2.5rem] text-[1.5rem] font-[800] leading-normal text-[#1C1C57] ">
            Why Choose Us?
          </h1>
          <p className="text-[#73739A] text-[.9rem] md:text-[1.125rem] font-[500] leading-normal mb-6">
            In the entrepreneurial world, your choice of a partner is crucial.
            BizLaunchBase is your reliable companion, ensuring transparency,
            informed decisions, and effortless processes. We pave the way for
            your borderless business success.
          </p>
          <div className="mb-6 leading-[2rem]">
            <div className="flex items-center mb-2 ">
              <Image src="/Tick.png" alt="check" width={28} height={28} className="w-[18px] md:w-[28px]" />
              <span className="ml-2 text-[#1C1C57]  font-[500] text-[.8rem] md:text-[1.125rem]">Transparent Operations</span>
            </div>
            <div className="flex items-center mb-2">
              <Image src="/Tick.png" alt="check" width={28} height={28}  className="w-[18px] md:w-[28px]"/>
              <span className="ml-2 text-[#1C1C57]  font-[500] text-[.8rem] md:text-[1.125rem]">Informed Decision-Making</span>
            </div>
            <div className="flex items-center">
              <Image src="/Tick.png" alt="check" width={28} height={28} className="w-[18px] md:w-[28px]" />
              <span className="ml-2 text-[#1C1C57]  font-[500] text-[.8rem] md:text-[1.125rem]">Effortless Processes</span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-2 py-8">
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
        <div className="w-full h-full md:w-1/2   sm:my-20 sm:pt-16">
          <Image
            src="/choose.png"
            alt="trackbusiness"
            width={500}
            height={300}
          />
        </div>
      </div>
    </main>
  );
};

export default Choose;
