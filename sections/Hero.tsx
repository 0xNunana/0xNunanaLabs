
import Enquiry from '@/components/Enquiry'
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
            <Image src='/profit.png' alt='profit' width={80} height={20} priority className='md:w-[100px]'/>
        </div>
        <p className='font-semibold text-4xl lg:text-6xl max-sm:text-center'>We help your business grow <span className='italic  text-0xblue font-normal'>exponentially.</span></p>
    <p className='py-7 md:py-10 text-gray-700 max-sm:text-center'>Like any great agency, we are only as good as the result we deliver </p>
    
    <div className='border border-gray-400 w-[80%] mt-10 max-sm:mx-auto'/>
    <div className='py-7 text-gray-700'>
        <p className=' font-semibold animate-pulse'>Get a free quote!</p>
        <p className='max-sm:text-sm'>Leave your email. We&apos;ll contact you in less than 24 hours</p>
    </div>
  
 {/* enquiry form  */}
 <Enquiry/>
    
    
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