import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Testimonials = () => {
  return (
    <main className="w-full bg-[#F7F7FC]">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-16 lg:py-20">
        {/* Left side cards */}
        <div className="flex flex-col md:flex-row md:space-x-6">
          <div className="w-full md:w-1/2 md:flex md:flex-col md:items-center md:space-y-6 md:px-4 lg:px-8 justify-center">
            {/* Testimonial Card 1 */}
            <div className="bg-white w-full md:w-full lg:w-[450px] p-4 md:p-6 lg:p-8 flex flex-col items-center justify-center gap-4 md:gap-8 shadow-xl rounded-xl">
              <div className="flex-col items-start gap-3">
                <h2 className="text-[#1C1C57] text-lg md:text-xl lg:text-[1.5rem] font-extrabold leading-[1.75rem] md:leading-[2rem] lg:leading-[2.25rem]">
                  “I&apos;ve never seen anything like it”
                </h2>
                <p className="text-[#73739A] text-base md:text-lg lg:text-[1rem] font-medium leading-6 md:leading-7 lg:leading-1 pt-4">
                  In just 7 days, BizLaunchBase made my business global-ready.
                  User-friendly and hassle-free, they turned promises into
                  reality.They&apos;re not just a service; they&apos;re
                  partners in making global dreams real.
                </p>
                <div className="flex gap-3 items-center md:-ml-4 lg:-ml-6 pt-4">
                  <Image src="/image(1).png" alt="hu" width={80} height={80} />
                  <div className="flex flex-col">
                    <h5 className="text-[#1C1C57] text-base md:text-lg lg:text-xl font-extrabold leading-[1.25rem] md:leading-[1.49938rem] lg:leading-[1.75rem]">
                      Aara Carter
                    </h5>
                    <p className="text-[#5F5F86] text-base md:text-md lg:text-lg font-medium leading-6 md:leading-7 lg:leading-1">
                      Business Strategist
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Card 2 */}
            <div className="bg-white w-full md:w-full lg:w-[450px] p-4 md:p-6 lg:p-8 flex flex-col items-center justify-center gap-4 md:gap-8 shadow-xl rounded-xl mt-2">
              <div className="flex-col items-start gap-3">
                <h2 className="text-[#1C1C57] text-lg md:text-xl lg:text-[1.5rem] font-extrabold leading-[1.75rem] md:leading-[2rem] lg:leading-[2.25rem]">
                  “This is legit the bomb”
                </h2><p className="text-[#73739A] text-base md:text-lg lg:text-[1rem] font-medium leading-6 md:leading-7 lg:leading-1 pt-4">
                  BizLaunchBase is the best choice for global ambitions. Their
                  transparency and commitment ensured an effortless journey.
                  They&apos;re not just service providers; they&apos;re reliable
                  companions dedicated to success.
                </p>
                <div className="flex gap-3 items-center md:-ml-4 lg:-ml-6 pt-4">
                  <Image src="/image(2).png" alt="hu" width={80} height={80} />
                  <div className="flex flex-col">
                    <h5 className="text-[#1C1C57] text-base md:text-lg lg:text-xl font-extrabold leading-[1.25rem] md:leading-[1.49938rem] lg:leading-[1.75rem]">
                      Morgan Woods
                    </h5>
                    <p className="text-[#73739A] text-base md:text-md lg:text-lg font-medium leading-6 md:leading-7 lg:leading-1">
                      Digital Entrepreneur
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side cards */}
          <div className="w-full md:w-1/2 space-y-4 md:space-y-6 lg:space-y-8 md:px-4 lg:px-8 justify-center mt-6">
            <div className="inline-flex flex-col items-start gap-4 pb-4 md:w-full lg:w-[450px]">
              <div className="flex items-center gap-3">
                <div className="w-6 h-0.5 bg-[#6D72F6]"></div>
                <h3 className="text-[#6D72F6] font-manrope font-extrabold text-base leading-6 tracking-wider uppercase">
                  Testimonials
                </h3>
              </div>
              <h1 className="text-[#1C1C57] text-xl md:text-2xl lg:text-[2.5rem] font-extrabold leading-7 md:leading-8 lg:leading-[3.5rem]">
                Don&apos;t take our word for it, take theirs
              </h1>
              <p className="text-[#73739A] text-base md:text-lg lg:text-xl font-medium">
                Fans can&apos;t stop talking! Don&apos;t just take our word, let
                their excitement convince you. Join the chorus of satisfied
                users today!
              </p>
            </div>

            {/* Testimonial Card 3 */}
            <div className="bg-white w-full md:w-full lg:w-[450px] p-4 md:p-6 lg:p-8 flex flex-col items-center justify-center gap-4 md:gap-8 shadow-xl rounded-xl mt-2">
              <div className="flex-col items-start gap-3">
                <h2 className="text-[#1C1C57] text-lg md:text-xl lg:text-[1.5rem] font-extrabold leading-[1.75rem] md:leading-[2rem] lg:leading-[2.25rem]">
                  “This is a game-changer!”
                </h2>
                <p className="text-[#73739A] text-base md:text-lg lg:text-[1rem] font-medium leading-6 md:leading-7 lg:leading-1 pt-4">
                  BizLaunchBase is my partner in this exhilarating global journey.
                  They break geographical shackles and unveil boundless potential.
                  If you&apos;re ready for global opportunities, BizLaunchBase is the
                  go-to partner to make your aspirations a reality!.
                </p>
                <div className="flex gap-3 items-center md:-ml-4 lg:-ml-6 pt-4">
                  <Image src="/image(3).png" alt="hu" width={80} height={80} />
                  <div className="flex flex-col">
                    <h5 className="text-[#1C1C57] text-base md:text-lg lg:text-xl font-extrabold leading-[1.25rem] md:leading-[1.49938rem] lg:leading-[1.75rem]">
                      David James
                    </h5>
                    <p className="text-[#5F5F86] text-base md:text-md lg:text-lg font-medium leading-6 md:leading-7 lg:leading-1">
                      Business Owner
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center justify-center flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 mt-8 md:mt-10">
        
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
      
    </main>
  );
};

export default Testimonials;
