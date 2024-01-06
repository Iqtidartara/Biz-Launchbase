import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";

const Choose = () => {
  return (
    <main className="w-full ">
      <div className="max-w-[80rem] mx-auto  flex flex-col md:flex-row items-center md:gap-[200px] gap-8 px-4 py-16]">
        <div className="w-full md:w-1/2 ">
          <div className="flex items-center gap-2">
            <span className="md:-w-8 md:h-0.5 w-[1rem] h:[0.125rem] bg-[#6D72F6] min-h-[0.125rem]"></span>
            <h3 className="text-[#6D72F6] font-[800] text-[10px]   md:text-[15px] leading-normal  uppercase">
              Transparency, Trust, Triumph
            </h3>
          </div>

          <h1 className="md:text-[2.5rem] text-[1.5rem] font-[800] leading-normal text-[#1C1C57] mt-[20px]">
            Why Choose Us?
          </h1>
          <p className="text-[#73739A] text-[.9rem] md:text-[1.125rem] font-[500] leading-normal mb-6 mt-[25px]">
            In the entrepreneurial world, your choice of a partner is crucial.
            BizLaunchBase is your reliable companion, ensuring transparency,
            informed decisions, and effortless processes. We pave the way for
            your borderless business success.
          </p>
          <div className=" mt-[30px]">
            <div className="flex items-center mt-[18px] ">
              <Image
                src="/Tick.png"
                alt="check"
                width={28}
                height={28}
                className="w-[18px] md:w-[28px]"
              />
              <span className="ml-2 text-[#1C1C57]  font-[500] text-[.8rem] md:text-[1.125rem]">
                Transparent Operations
              </span>
            </div>
            <div className="flex items-center mt-[18px] ">
              <Image
                src="/Tick.png"
                alt="check"
                width={28}
                height={28}
                className="w-[18px] md:w-[28px]"
              />
              <span className="ml-2 text-[#1C1C57]  font-[500] text-[.8rem] md:text-[1.125rem]">
                Informed Decision-Making
              </span>
            </div>
            <div className="flex items-center mt-[18px] ">
              <Image
                src="/Tick.png"
                alt="check"
                width={28}
                height={28}
                className="w-[18px] md:w-[28px]"
              />
              <span className="ml-2 text-[#1C1C57]  font-[500] text-[.8rem] md:text-[1.125rem]">
                Effortless Processes
              </span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-2 py-8">
            <Button className="variantbutton  py-7 px-7 text-[1rem] font-[700] leading-[107%] tracking-[1]">
              Get Started
            </Button>
            <Button className="whitebutton  py-7 px-7 text-[1rem] font-[700] leading-[107%] tracking-[1]">
              Book a demo
            </Button>
          </div>
        </div>
        <div className="w-full h-full md:w-1/2">
          <Image
            src="/chooseus.png"
            alt="trackbusiness"
            width={512}
            height={592}
          />
        </div>
      </div>
    </main>
  );
};

export default Choose;
