



import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

function BizLaunchBase() {
  return (
    
    <main className="w-full ">
    <div className="max-w-7xl mx-auto px-4">
    <div className="bg-[#6D72F6]  flex flex-col p-5 rounded-3xl">
      <div className="self-center w-full max-w-7xl mt-2 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
            <div className="items-start flex flex-col my-auto max-md:max-w-full max-md:mt-10 md:ml-12">
              <div className="items-start flex flex-col self-start">
                <h1 className="text-white text-[1.4rem] text-center sm:text-start md:text-[2.47081rem] font-[800] leading-[140%]">
                  Create your BizLaunchBase <br /> account today!
                </h1>
                <p className="text-violet-100 text-[.9rem] md:text-[1.11188rem] font-[500] leading-[179.879%] mt-6 max-md:max-w-full">
                  Seize the Future: Supercharge Your Business Journey by Creating Your BizLaunchBase Account Today! Join a Thriving Community and Elevate Your Success to New Heights.
                </p>
              </div>
              
              
              <div className="flex  flex-col md:flex-row 
             items-start w-[348px] max-w-full justify-start gap-5 mt-9 self-start ">
          <Button className="bg-[#fff] text-[#6D72F6] text-[1rem] font-[800] leading-[107.732%] text-center px-[2.4rem] py-[1.4rem] rounded-[0.75413rem] hover:bg-blue-100 w-full ">
            Get Started
          </Button>
          <Button
            variant={"ghost"}
            className="text-[#fff] border hover:border-[#6D72F6] text-[1rem] font-[800] leading-[107.732%] text-center px-[2.4rem] py-[1.4rem] rounded-[0.75413rem] w-full"
          >
            Book a demo
          </Button>
        </div>
              
            </div>
          </div>
          <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <Image
              src="/maincard.png"
              alt="hyt"
              layout="responsive"
              width={476}
              height={476}
              className="aspect-[1.13] object-cover object-center w-full overflow-hidden grow max-md:max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
    </div></main>
  );
}
export default BizLaunchBase;
