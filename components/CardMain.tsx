import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const CardMain = () => {
  return (
    <div className="w-full bg-[#FFF] md:py-32 py-8">
      <main className="mx-auto max-w-[75rem] bg-[#6D72F6] rounded-[1.46225rem] flex flex-col md:flex-row items-center justify-between">
        {/* content div */}
        <div className="w-full md:w-1/2 md:ml-20 ml-0 flex flex-col  px-4 py-12">
          <h1 className="md:text-[2.47081rem] text-[2rem] font-[800] md:leading-[140%] leading-normal text-[#FFF]">
            Create your BizLaunchBase account today!
          </h1>
          <p className="text-[.9rem] md:text-[1.11188rem] font-[500] leading-normal md:leading-[179.879%] text-[#ECECF6]">
            Seize the Future: Supercharge Your Business Journey by Creating Your
            BizLaunchBase Account Today! Join a Thriving Community and Elevate
            Your Success to New Heights.
          </p>

          <div className="flex flex-col md:flex-row gap-2 py-8">
            <Button className="whitebutton  py-7 px-7 text-[1rem] font-[700] leading-[107%] tracking-[1]">
              Get Started
            </Button>
            <Button className="bg-transparent py-7 px-7 text-[1rem] font-[700] leading-[107%] tracking-[1] border">
              Book a demo
            </Button>
          </div>
        </div>
        {/* image div */}
        <div className="w-full md:w-1/2 flex items-end justify-end rounded-[1.46225rem]">
          <Image
          src="/maincard2.png"
          alt="Image" 
          width={476}
          height={631.86}/>
        </div>
      </main>
    </div>
  );
};

export default CardMain;
