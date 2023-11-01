// components/SocialProof.tsx
import React from 'react';

const SocialProof: React.FC = () => {
  return (
    <main className='w-full'>
    <div className=" mx-auto max-w-7xl flex flex-col gap-6 p-6 items-center justify-center lg:flex-row md:flex-row lg:gap-10 lg:pb-10">
      <div className="text-center font-manrope font-extrabold text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
        <p className="text-[#1C1C57]">200+</p>
        <p className="text-[#53535E] font-manrope text-sm lg:text-base xl:text-lg 2xl:text-xl font-normal">Clients</p>
      </div>
      <div className="text-center font-manrope font-extrabold text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
        <p className="text-[#1C1C57]">1300+</p>
        <p className="text-[#53535E] font-manrope text-sm lg:text-base xl:text-lg 2xl:text-xl font-normal">Companies Formed</p>
      </div>
      <div className="text-center font-manrope font-extrabold text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
        <p className="text-[#1C1C57]">150+</p>
        <p className="text-[#53535E] font-manrope text-sm lg:text-base xl:text-lg 2xl:text-xl font-normal">Countries Served</p>
      </div>
      <div className="text-center font-manrope font-extrabold text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
        <p className="text-[#1C1C57]">4+</p>
        <p className="text-[#53535E] font-manrope text-sm lg:text-base xl:text-lg 2xl:text-xl font-normal">Years of Experience</p>
      </div>
    </div>
    </main>
  );
};

export default SocialProof;
