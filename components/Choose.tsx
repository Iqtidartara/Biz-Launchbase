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
              <div className="w-9 h-0.5 bg-[#6D72F6]"></div>
              <h3 className="text-[#6D72F6] font-extrabold text-[16px] leading-5 tracking-wider uppercase">
                Transparency, Trust, Triumph
              </h3>
            </div>
          </div>
          <h1 className="text-[40px] md:text-5xl font-extrabold leading-9 text-[#1C1C57] mb-4 md:mt-6">
            Why Choose Us?
          </h1>
          <p className="text-[#73739A] text-[18px] md:text-[18px] font-medium leading-[2] md:mt-6 mb-6">
            In the entrepreneurial world, your choice of a partner is crucial.
            BizLaunchBase is your reliable companion, ensuring transparency,
            informed decisions, and effortless processes. We pave the way for
            your borderless business success.
          </p>
          <div className="mb-6 leading-[2rem]">
            <div className="flex items-center mb-2 ">
              <Image src="/Tick.png" alt="check" width={28} height={28} />
              <span className="ml-2 text-[#1C1C57] text-[18px] font-medium">Transparent Operations</span>
            </div>
            <div className="flex items-center mb-2">
              <Image src="/Tick.png" alt="check" width={28} height={28} />
              <span className="ml-2 text-[#1C1C57] text-[18px] font-medium">Informed Decision-Making</span>
            </div>
            <div className="flex items-center">
              <Image src="/Tick.png" alt="check" width={28} height={28} />
              <span className="ml-2 text-[#1C1C57] text-[18px] font-medium">Effortless Processes</span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-2 pt-8">
            <Button className="w-full md:w-auto bg-[#6D72F6] rounded-xl py-4 md:py-6 text-lg md:text-[1rem]">
              Get Started
            </Button>
            <Button
              variant={"ghost"}
              className="w-full md:w-auto rounded-xl py-4 md:py-6 text-lg md:text-[1rem] text-[#6D72F6] hover:border-blue-500 border"
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
