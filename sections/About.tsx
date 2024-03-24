import React from 'react'

import Image from 'next/image'
import Link from 'next/link'
const About = () => {
  return (
    <div className='bg-white' id='about'>
        <div className='max-w-7xl mx-auto px-3 pb-10'>

        <div className='grid md:grid-cols-2 gap-16'>
        <div className='hidden md:flex'>
        <Image src='/woman.webp' width={500} height={100} alt='hero image' className='object-cover rounded-tl-[50%] rounded-br-[50%] border shadow-lg'/>
    </div>



    <div className='flex justify-center items-center '>
        
    <div className='relative'>
    <div className='flex gap-5 items-center py-7'>
    <div className='border border-0xblue w-10 h-5 bg-0xblue'/>
    <p className='font-bold'>OUR VISION & MISSION</p>
</div>
        <p className='font-semibold text-4xl lg:text-6xl max-sm:text-center'>Unleash the full potential of businesses & transform brands for the <span className='italic   text-0xblue font-normal'> better.</span></p>
    <p className='py-10 md:text-lg text-gray-700'>We envision empowering businesses and transforming brands, unlocking their full potential while driving positive change and redefining industry standards. Through tailored solutions, collaboration, and a relentless pursuit of excellence, we aim to cultivate lasting relationships and deliver measurable impact, fostering innovation and inspiring positive change in the communities we serve.</p>
    
    <div className='border border-gray-400 w-[80%] '/>
    <div className='py-7 text-gray-700'>
        <Link href=''><p className='font-semibold animate-pulse'>Get a free quote!</p></Link>
        <p>Leave your email. We&apos;ll contact you in less than 24 hours</p>
    </div>
 

    
    
    </div>
    </div>
  
  
</div>


        </div>
    </div>
  )
}

export default About