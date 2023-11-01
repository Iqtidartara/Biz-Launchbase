import Image from 'next/image'
import React from 'react'
import { Button } from '@/components/ui/button'

const About = () => {
  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row gap-8">
        <div className='w-full  md:w-1/2'>
          <Image src='/about.png' alt='trackbussiness' width={500} height={300} />
        </div>
        <div className='w-full md:w-1/2 '>
          <div className="mb-4 ">
            <div className="flex items-center gap-2">
              <div className="w-8 h-0.5 bg-[#6D72F6]"></div>
              <h3 className="text-[#6D72F6] font-extrabold text-[15px] leading-5 tracking-wider uppercase">
                Your Success, Our Blueprint
              </h3>
            </div>
          </div>
          <h1 className='text-4xl md:text-5xl font-extrabold leading-9 text-[#1C1C57] mb-4'>
            Fast-Track Your Business <br /> in a Week
          </h1>
          <p className='text-[#73739A] text-[18px] md:text-[18px] font-medium leading-[2] mb-6'>
            At BizLaunchBase, we break down barriers for you. Our streamlined process, guided document uploads, and expert team ensure quick registration for Stripe, PayPal, Wise, and more in just 7 days. Make your global market entry a reality!
          </p>
          <div className='mb-6 leading-[2rem]'>
            <div className='flex items-center mb-2 '>
              <Image src='/Tick.png' alt='check' width={28} height={28} />
              <span className='ml-2 text-[#1C1C57] font-medium text-[18px]'>Navigate seamless US/UK registration</span>
            </div>
            <div className='flex items-center mb-2'>
              <Image src='/Tick.png' alt='check' width={28} height={28} />
              <span className='ml-2 text-[#1C1C57] font-medium text-[18px]'>Unlock Stripe, PayPal, Wise, and more in 7 days</span>
            </div>
            <div className='flex items-center'>
              <Image src='/Tick.png' alt='check' width={28} height={28} />
              <span className='ml-2 text-[#1C1C57] font-medium text-[18px]'>Simplified, user-friendly document upload</span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-2 pt-8">
            <Button className="w-full md:w-auto bg-[#6D72F6] rounded-xl py-4 md:py-6 text-lg md:text-[1rem]">
              Get Started
            </Button>
            <Button
              variant={"ghost"}
              className="w-full md:w-auto rounded-xl py-4 md:py-6 text-lg md:text-[1rem] text-[#6D72F6] hover:border-blue-500 border mt-2 md:mt-0"
            >
              Book a demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
