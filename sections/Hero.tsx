import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { ArrowRightIcon, } from '@heroicons/react/24/outline'
import { EnvelopeIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='bg-white  py-20'>
        <div className='max-w-7xl mx-auto px-3'>
<div className='grid md:grid-cols-2 gap-16'>
    <div className='flex justify-center items-center '>
    <div className='relative'>
        <div className='pb-5'>
            <Image src='/profit.png' alt='profit' width={80} height={20} className='md:w-[100px]'/>
        </div>
        <p className='font-semibold text-4xl lg:text-6xl max-sm:text-center'>We help your business grow <span className='italic underline text-0xblue font-normal'>exponentially.</span></p>
    <p className='py-7 md:py-10 text-gray-700 max-sm:text-center'>Like any great agency, we are only as good as the result we deliver </p>
    
    <div className='border border-gray-400 w-[80%] mt-10 max-sm:mx-auto'/>
    <div className='py-7 text-gray-700'>
        <p className='max-sm:font-semibold'>Get a free quote!</p>
        <p className='max-sm:text-sm'>Leave your email. We&apos;ll contact you in less than 24 hours</p>
    </div>
    <form className='border border-black/30 rounded-md p-[1px] flex flex-wrap '>
  <select className=' p-2 md:p-4 '>
    <option className='flex justify-center items-center'>
      <p className='font-extrabold text-center'>Select Topic</p> 
      <ChevronDownIcon width='30px' height='20px'/>
    </option>
    <option>Web development</option>
  </select>
  <div className='gap-2 text-gray-700 grid md:grid-cols-2 p-4 flex-grow'>
    <div className='gap-2 flex w-full '>
      <EnvelopeIcon width='20px'/>
      <input placeholder='Enter your email address' className='w-full block'   type="email"
            name="email"
            id="email"/>
    </div>
   
  </div>

  <div className='flex justify-center items-center max-sm:text-gray-500  px-3'>
  <ArrowRightIcon width='30px'/>
  </div>

  
</form>

    
    
    </div>
    </div>
  
    <div className='hidden md:flex'>
        <Image src='/me.jpg' width={500} height={100} alt='hero image' className='object-cover rounded-tl-[50%] rounded-br-[50%] border shadow-lg'/>
    </div>
</div>
        </div>
    </div>
  )
}

export default Hero