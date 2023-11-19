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

const cardData2: Card[] = [
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
];

const Explore = () => {
  return (
    <main className="w-full">
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="flex flex-col items-center pt-20 pb-6">
          <h3 className="text-[#6D72F6] font-[700] text-xs leading-[1.125rem] tracking-[0.06rem] uppercase">
            Illuminate Your Finances
          </h3>
          <h1 className="text-center font-[800] text-[2rem] md:text-[2.5rem] leading-[3.5xl] text-[#1C1C57]">
            Explore the Biz Launch <br /> Base advantage
          </h1>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 mb-2 px-4">
          {[...cardData, ...cardData2].map((card, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-[3.29544rem] rounded-lg card">
              <Image src={card.src} alt={card.alt} width={110} height={96} />
              <h2 className="text-[#1C1C57] text-[1.43669rem] font-[800] leading-[150%] pt-[1.28rem]">
                {card.title}
              </h2>
              <p className="font-[500] text-[1.0775rem] leading-[177.778% ] text-[#73739A] text-center pt-[0.71838rem]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center flex-col md:flex-row gap-6 pb-12">
        <Button className="text-[1rem] font-[800] leading-[107.732%] text-center px-[2.4rem] py-[1.4rem]  border rounded-[0.75413rem]  bg-[#6D72F6]   hover:border-blue-500">
          Get Started
        </Button>
        <Button
          variant={"ghost"}
          className="text-[1rem] font-[800] leading-[107.732%] text-center px-[2.4rem] py-[1.4rem]  border rounded-[0.75413rem]  text-[#6D72F6] hover:border-blue-500 border"
        >
          Book a demo
        </Button>
      </div>
    </main>
  );
};

export default Explore;
