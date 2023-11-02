import React from "react";

const serviceData = [
  {
    number: "01",
    title: "Get Started",
    description:
      "Unleash global possibilities in one click—embark on a seamless easy journey with BizLaunchBase, where accessing top-tier services is just the beginning.",
  },
  {
    number: "02",
    title: "Upload Document",
    description:
      "Your path to global success for effortlessly upload necessary docs guided by our expert’s  instructions. Expanding your business has never been more straight forward.",
  },
  {
    number: "03",
    title: "Enjoy!",
    description:
      "Witness the transformation with BizLaunchBase and gain hassle-free access to Stripe, PayPal, Wise, and more—a rewarding global business journey awaits.",
  },
];

const Services = () => {
  return (
    <main className="w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-indigo-600 rounded-[20px] pt-8 pb-20 md:pb-96 flex items-center justify-center">
          <h1 className="text-white text-center text-2xl md:text-4xl lg:text-5xl font-bold leading-[1] md:leading-[1] lg:leading-[1.5]">
            Get Your Company <br /> Registered In 3 Simple Steps
          </h1>
        </div>
        {/* cards */}
        <section className="flex flex-col md:flex-row justify-center gap-6 mt-6 md:-mt-72 mb-2 px-4">
          {serviceData.map((service, index) => (
            <div
              key={index}
              className="w-full md:w-[368px] p-[30px] md:[30px] flex flex-col items-start gap-2 md:gap-5
             self-stretch bg-white shadow-xl rounded-[23.3px] hover:cursor-pointer hover:scale-105 transform transition-transform"
            >
              <h1 className="text-[54px] md:text-[54px] bg-clip-text text-transparent bg-gradient-to-t from-blue-200 to-indigo-500 font-extrabold tracking-[-1.2]">
                {service.number}
              </h1>
              <h2 className="text-[#1C1C57] text-[24px] md:text-[24px] font-extrabold leading-[28px] md:leading-[28px] tracking-[-1.2]">
                {service.title}
              </h2>
              <p className="text-[#73739A] text-[18px] md:text-[18px] font-medium leading-[32px]] md:leading-[32px] tracking-[.1]">
                {service.description}
              </p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
};

export default Services;
