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
            <div className="bg-white w-full md:w-full lg:w-[540px] p-4 md:p-6 lg:p-8 flex flex-col items-center justify-center gap-4 md:gap-8 shadow-xl rounded-[20px]">
              <div className="flex-col items-start gap-3">
                <h2 className="text-[#1C1C57] text-[20px] md:text-[24px] lg:text-[24px] font-extrabold leading-[36px] md:leading-[36px] lg:leading-[36px]">
                &apos;I&apos;ve never seen anything like it&apos;
                </h2>
                <p className="text-[#73739A] text-[12px] md:text-[18px] lg:text-[18px] font-medium leading-[32px] md:leading-[32px] lg:leading-[32px] pt-4">
                  In just 7 days, BizLaunchBase made my business global-ready.
                  User-friendly and hassle-free, they turned promises into
                  reality. They&apos;re not just a service; they&apos;re
                  partners in making global dreams real.
                </p>
                <div className="flex gap-3 items-center md:-ml-4 lg:-ml-6 pt-4">
                  <Image src="/image(1).png" alt="Aara Carter" width={80} height={80}  className="w-[40px] md:w-[80px]" />
                  <div className="flex flex-col">
                    <h5 className="text-[#1C1C57] text-[12px] md:text-[18px] lg:text-[18px] font-extrabold leading-[24px] md:leading-[24px] lg:leading-[24px]">
                      Aara Carter
                    </h5>
                    <p className="text-[#5F5F86] text-[12px] md:text-[18px] font-[500]">
                      Business Strategist
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Card 2 */}
            <div className="bg-white w-full md:w-full lg:w-[540px] p-4 md:p-6 lg:p-8 flex flex-col items-center justify-center gap-4 md:gap-8 shadow-xl rounded-[20px] mt-6 md:mt-0">
              <div className="flex-col items-start gap-2">
                <h2 className="text-[#1C1C57] text-[20px] md:text-[24px] lg:text-[24px] font-extrabold leading-[36px] md:leading-[36px] lg:leading-[36px]">
                &apos;This is legit the bomb&apos;
                </h2>
                <p className="text-[#73739A] text-[12px] md:text-[18px] lg:text-[18px] font-medium leading-[32px] md:leading-[32px] lg:leading-[32px] pt-4">
                  BizLaunchBase is the best choice for global ambitions. Their
                  transparency and commitment ensured an effortless journey.
                  They&apos;re not just service providers; they&apos;re reliable
                  companions dedicated to success.
                </p>
                <div className="flex gap-3 items-center md:-ml-4 lg:-ml-6 pt-4">
                  <Image src="/image(2).png" alt="Morgan Woods" width={80} height={80}  className="w-[40px] md:w-[80px]" />
                  <div className="flex flex-col">
                    <h5 className="text-[#1C1C57] text-[12px] md:text-[18px] font-[800] leading-normal">
                      Morgan Woods
                    </h5>
                    <p className="text-[#5F5F86] text-[12px] md:text-[18px] font-[500]">
                      Digital Entrepreneur
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side cards */}
          <div className="w-full md:w-1/2 space-y-4 md:space-y-6 lg:space-y-8 md:px-4 lg:px-8 justify-center mt-6 ">
            <div className="inline-flex flex-col items-start gap-4 pb-4 md:w-full lg:w-[450px]">
              <div className="flex items-center gap-2">
                <span className="md:w-[2.5rem] md:h-[0.125rem] w-[1rem] h:[0.125rem] bg-[#6D72F6] min-h-[0.125rem]"></span>
                <h3 className="text-[#6D72F6] font-[800] text-[.6rem] md:text-[0.9375rem] leading-[1.125rem] tracking-[0.06rem] uppercase ">
                  Testimonials
                </h3>
              </div>
              <h1 className="text-[#1C1C57] text-[20px] md:text-[40px] lg:text-[40px] font-extrabold md:leading-5 lg:leading-[56px]">
                Don&apos;t take our word for it, take theirs
              </h1>
              <p className="text-[#73739A] text-[12px] md:text-[18px] lg:text-[18px] font-medium leading-[32px]">
                Fans can&apos;t stop talking! Don&apos;t just take our word, let their
                excitement convince you. Join the chorus of satisfied users today!
              </p>
            </div>

            {/* Testimonial Card 3 */}
            <div className="bg-white w-full md:w-full lg:w-[540px] p-4 md:p-6 lg:p-8 flex flex-col items-center justify-center gap-4 md:gap-8 mt-6 shadow-xl rounded-[20px] ">
              <div className="flex-col items-start gap-3">
                <h2 className="text-[#1C1C57] text-[20px] md:text-[24px] lg:text-[24px] font-extrabold leading-[36px] md:leading-[36px] lg:leading-[36px]">
                &apos;This is a game-changer!&apos;
                </h2>
                <p className="text-[#73739A] text-[12px] md:text-[18px] lg:text-[18px] font-medium leading-[32px] md:leading-[32px] lg:leading-[32px] pt-4 tracking-[2]">
                  BizLaunchBase is my partner in this exhilarating global journey.
                  They break geographical shackles and unveil boundless potential.
                  If you&apos;re ready for global opportunities, BizLaunchBase is the
                  go-to partner to make your aspirations a reality!
                </p>
                <div className="flex gap-3 items-center md:-ml-4 lg:-ml-6 pt-4">
                  <Image src="/image(3).png" alt="David James" width={80} height={80} className="w-[40px] md:w-[80px]" />
                  <div className="flex flex-col">
        <h5 className="text-[#1C1C57] text-[12px] md:text-[18px] font-[800] leading-normal">
                      David James
                    </h5>
                    <p className="text-[#5F5F86] text-[12px] md:text-[18px] font-[500]">
                      Business Owner
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        
      </div>
    </main>
  );
};

export default Testimonials;
