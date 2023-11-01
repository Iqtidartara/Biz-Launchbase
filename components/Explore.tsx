import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

// Define an interface for the card data
interface Card {
  src: string;
  alt: string;
  title: string;
  description: string;
}

const cardData: Card[] = [
  {
    src: "/Icon.png",
    alt: "icon",
    title: "Secure payments",
    description: "Lock in your transactions with us—your payments, always safe and sound.",
  },
  {
    src: "/Icon(1).png",
    alt: "icon",
    title: "No hidden fees",
    description: "Bid farewell to surprises and hidden costs—what you see is precisely what you get, always.",
  },
  {
    src: "/Icon(2).png",
    alt: "icon",
    title: "World class support",
    description: "We've got your back, every step of the way in the global business landscape with our support.",
  },
 
];
const cardData2 :Card[]=[
    {
        src: "/Icon(3).png",
        alt: "icon",
        title: "Quick delivery",
        description: "Efficient processes ensure fast US company formation and Stripe account setup, saving you time and hassle.",
      },
      {
        src: "/Icon(4).png",
        alt: "icon",
        title: "We accept all countries",
        description: "Entrepreneurs worldwide can access our services, regardless of location, language.",
      },
      {
        src: "/Icon(5).png",
        alt: "icon",
        title: "Competitive prices",
        description: "High-quality services offered at affordable rates, while ensuring exceptional value.",
      },
]

const Explore = () => {
  return (
    <main className="w-full">
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="flex flex-col items-center w-full pt-20 pb-6">
          <h3 className="text-[#6D72F6] font-bold text-xs leading-[1.125rem] tracking-[0.06rem] uppercase">
            Illuminate Your Finances
          </h3>
          <h1 className="text-center  font-bold text-[2.5rem] leading-[3.5xl] text-[#1C1C57]">
            Explore the Biz Launch <br /> Base advantage
          </h1>
        </div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mt-6  mb-2 px-4">
          {cardData.map((card, index) => (
            <div key={index} className="w-full md:w-[368px] p-4 md:p-8 flex flex-col items-center justify-center gap-2 md:gap-5 self-stretch bg-white shadow-2xl rounded-2xl card">
              <Image src={card.src} alt={card.alt} width={110} height={96} />
              <h2 className="text-indigo-900 text-xl md:text-2xl font-bold leading-[1.25] md:leading-[1.75] tracking-wide">
                {card.title}
              </h2>
              <p className=" font-medium text-[17px] leading-[1.91556rem] text-[#73739A] text-center">
                {card.description}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-6 mt-6  mb-2 px-4">
          {cardData2.map((card, index) => (
            <div key={index} className="w-full md:w-[368px] p-4 md:p-8 flex flex-col items-center justify-center gap-2 md:gap-3 self-stretch bg-white shadow-xl rounded-2xl card">
              <Image src={card.src} alt={card.alt} width={110} height={96} />
              <h2 className="text-indigo-900 text-xl md:text-2xl font-bold leading-[1.25] md:leading-[1.75] tracking-wide">
                {card.title}
              </h2>
              <p className=" font-medium text-[17px] leading-[1.91556rem] text-[#73739A] text-center">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center flex-col md:flex-row gap-6  pb-12">
          <Button className="bg-[#6D72F6] rounded-xl py-4 md:py-6 text-lg md:text-[1rem] hover:border-blue-500 border">
            Get Started
          </Button>
          <Button
            variant={"ghost"}
            className="rounded-xl py-4 md:py-6 text-lg md:text-[1rem] text-[#6D72F6] hover:border-blue-500 border"
          >
            Book a demo
          </Button>
        </div>
    </main>
  );
};

export default Explore;
