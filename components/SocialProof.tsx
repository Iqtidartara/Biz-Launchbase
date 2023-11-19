// components/SocialProof.tsx
import React from 'react';

const SocialProof: React.FC = () => {
  return (
    <main className='w-full flex flex-col items-center justify-center mx-auto'>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 p-6 items-center justify-center max-w-[53.625rem]">
        <div className="text-center font-[800] md:text-[2.8125rem] text-[1.5rem]">
          <p className="text-[#1C1C57]">200+</p>
          <p className="text-[#53535E] font-manrope text-sm lg:text-base xl:text-lg 2xl:text-xl font-normal">Clients</p>
        </div>
        <div className="text-center font-[800] md:text-[2.8125rem] text-[1.5rem]">
          <p className="text-[#1C1C57]">1300+</p>
          <p className="text-[#53535E] text-sm lg:text-base xl:text-lg 2xl:text-xl font-normal">Companies Formed</p>
        </div>
        <div className="text-center font-[800] md:text-[2.8125rem] text-[1.5rem]">
          <p className="text-[#1C1C57]">150+</p>
          <p className="text-[#53535E] font-manrope text-sm lg:text-base xl:text-lg 2xl:text-xl font-normal">Countries Served</p>
        </div>
        <div className="text-center font-[800] md:text-[2.8125rem] text-[1.5rem]">
          <p className="text-[#1C1C57]">4+</p>
          <p className="text-[#53535E] font-manrope text-sm lg:text-base xl:text-lg 2xl:text-xl font-normal">Years of Experience</p>
        </div>
      </div>
    </main>
  );
};

export default SocialProof;
