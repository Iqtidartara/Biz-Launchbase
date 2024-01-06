import React from "react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className="bg-indigo-500 flex flex-col px-5 mt-20">
      <div className="self-center w-full max-w-[1150px] mt-24 max-md:max-w-full max-md:mt-10">
        <header>
          <nav className="flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[28%] max-md:w-full max-md:ml-0">
              <div className="items-start flex flex-col max-md:mt-10">
                <div className="items-start self-stretch flex justify-between gap-3 max-md:mr-1">
                <Image
                src='/BizLaunchBase.png'
  alt="Your Alt Text"
  width={246} // Specify the width here
  height={35} // Specify the height here
/>
                </div>
                <div className="items-start self-stretch flex grow flex-col mt-6">
                  <p className="text-white text-sm font-semibold opacity-70">
                    © {new Date().getFullYear()} - BizLaunchBase - 2023
                  </p>
                  <p className="text-white text-base leading-[132.222%] mt-4">
                    42 Hilton Ave. Austin, IL 32182, <br /> New York, USA
                  </p>
                  <div className="items-start flex w-[226px] max-w-full gap-3 mt-7 self-start">
                    <Image
                      src="/mail.png"
                      className=" self-center"
                      alt="Email Icon"
                      width={22} // Specify the width here
                      height={17}
                    />
                    <p className="text-white text-base leading-[124.444%]">
                      info@bizlaunchbase.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[72%] ml-5 max-md:w-full max-md:ml-0">
              <div className="grow mt-1 max-md:max-w-full max-md:mt-10">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-[21%] max-md:w-full max-md:ml-0">
                    <div className="items-start flex grow flex-col max-md:mt-10">
                      <h2 className="justify-center text-white text-lg font-extrabold self-start">
                        Company
                      </h2>
                      <div className="items-start flex w-[95px] max-w-full grow flex-col mt-6 self-start">
                        <p className="justify-center text-gray-200 text-[14px] font-medium self-start">
                          <Link
                            href="https://privatily.com/about-us/"
                            target="_blank"
                          >
                            About us
                          </Link>
                        </p>
                        <p className="justify-center text-gray-200 text-[14px]font-medium mt-9 self-start">
                          Contact us
                        </p>
                        <p className="justify-center text-gray-200 text-[14px] font-medium mt-9 self-start">
                          Pricing
                        </p>
                        <p className="justify-center text-gray-200 text-[14px] font-medium mt-9 self-start">
                          LogIn
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="items-start flex flex-col max-md:mt-10">
                      <h2 className="justify-center text-white text-lg font-extrabold self-start">
                        Legal
                      </h2>
                      <div className="items-start flex w-[151px] max-w-full grow flex-col mt-6 self-start">
                        <p className="justify-center text-gray-200 text-base font-medium">
                          Privacy policy
                        </p>
                        <p className="justify-center text-gray-200 text-base font-medium mt-9">
                          Terms of Services
                        </p>
                        <p className="justify-center text-gray-200 text-base font-medium mt-9">
                          Terms of Use
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch w-[26%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="items-start flex flex-col max-md:mt-10">
                      <h2 className="justify-center text-white text-lg font-extrabold self-start">
                        Support
                      </h2>
                      <div className="items-start flex w-[121px] max-w-full grow flex-col mt-6 self-start">
                        <p className="justify-center text-gray-200 text-base font-medium self-start">
                          Help Center
                        </p>
                        <p className="justify-center text-gray-200 text-base font-medium mt-9">
                          Phone Support
                        </p>
                        <p className="justify-center text-gray-200 text-base font-medium mt-9 self-start">
                          Live chat
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch w-1/5 ml-5 max-md:w-full max-md:ml-0">
                    <div className="items-start flex grow flex-col max-md:mt-10">
                      <h2 className="justify-center text-white text-lg font-extrabold self-start">
                        Resources
                      </h2>
                      <div className="items-start flex w-[74px] max-w-full grow flex-col mt-6 self-start">
                        <p className="justify-center text-gray-200 text-base font-medium self-start">
                          Blog
                        </p>
                        <p  className="justify-center text-gray-200 text-base font-medium mt-9 self-start">
                          FAQs
                        </p>
                        <p className="justify-center text-gray-200 text-base font-medium mt-9 self-start">
                          Guides
                        </p>
                        <p className="text-gray-200 text-base font-medium mt-9 self-start">
                          Freebees
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <footer className="text-white text-center text-xs font-medium leading-[162.5%] mb-5">
          © {new Date().getFullYear()} - BizLaunchBase 2023
        </footer>
      </div>
    </div>
  );
}

export default Footer;