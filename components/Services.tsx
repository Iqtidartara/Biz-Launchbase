import React from "react";

const serviceData = [
  {
    number: "01",
    title: "Get Started",
    description:
      "Unleash global possibilities in one click—embark on a seamless journey with BizLaunchBase, where accessing top-tier services is just the beginning.",
  },
  {
    number: "02",
    title: "Upload Document",
    description:
      "Streamline your path to global success effortlessly upload necessary docs guided by expert instructions. Expanding your business has never been more straightforward.",
  },
  {
    number: "03",
    title: "Enjoy!",
    description:
      "Relax and witness the transformation with BizLaunchBase. Gain hassle-free access to Stripe, PayPal, Wise, and more—a rewarding global business journey awaits.",
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
              className="w-full md:w-[368px] p-4 md:p-8 flex flex-col items-start gap-2 md:gap-5 self-stretch bg-white shadow-xl rounded-3xl hover:cursor-pointer hover:scale-105 transform transition-transform"
            >
              <h1 className="text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-t from-blue-200 to-indigo-500 font-bold">
                {service.number}
              </h1>
              <h2 className="text-[#1C1C57] text-xl md:text-2xl font-bold leading-[1.25] md:leading-[1.75] tracking-wide">
                {service.title}
              </h2>
              <p className="text-[#73739A] text-sm md:text-lg font-medium leading-[1.75] md:leading-[2] tracking-tight">
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
