import React from 'react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { ArrowRightIcon, } from '@heroicons/react/24/outline'
import { EnvelopeIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import StatsCard from '@/components/StatsCard'
const About = () => {
  return (
    <div className='bg-white'>
        <div className='max-w-7xl mx-auto px-3 pb-10'>

        <div className='grid md:grid-cols-2 gap-16'>
        <div className='hidden md:flex'>
        <Image src='/me.jpg' width={500} height={100} alt='hero image' className='object-cover rounded-tl-[50%] rounded-br-[50%] border shadow-lg'/>
    </div>



    <div className='flex justify-center items-center '>
        
    <div className='relative'>
    <div className='flex gap-5 items-center py-7'>
    <div className='border border-0xblue w-10 h-5 bg-0xblue'/>
    <p className='font-bold'>OUR VISION & MISSION</p>
</div>
        <p className='font-semibold text-4xl lg:text-6xl max-sm:text-center'>Unleash the full potential of businesses & transform brands for <span className='italic underline text-0xblue font-normal'>the better.</span></p>
    <p className='py-10 text-gray-700'>Like any great agency, we are only as good as the result we deliver </p>
    
    <div className='border border-gray-400 w-[80%] md:mt-10'/>
    <div className='py-7 text-gray-700'>
        <p className='max-sm:font-semibold'>Get a free quote!</p>
        <p>Leave your email. We&apos;ll contact you in less than 24 hours</p>
    </div>
 

    
    
    </div>
    </div>
  
  
</div>
<div className='grid md:grid-cols-2 lg:grid-cols-3 max-sm:divide-y-2 md:divide-x-2'>
   
  <StatsCard/>
      
  <StatsCard/>
  <StatsCard/>
</div>
<div className='max-sm:hidden border border-gray-400 '/>
        </div>
    </div>
  )
}

export default About