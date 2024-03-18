import ApproachCard from '@/components/ApproachCard'
import ServiceCard from '@/components/ServiceCard'
import { ApproachInfo } from '@/data/Approachdata'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import React from 'react'

const Approach = () => {
  return (
    <div className='bg-0xseo pb-10'>
        <div className='max-w-7xl mx-auto px-3 text-white'>
        <div className='flex gap-5 items-center  py-10 md:py-20'>
    <div className='border border-0xblue w-10 h-4 bg-0xblue'/>
    <p className='font-bold'>OUR APPROACH</p>
</div>

<div className='grid md:flex overflow-x-auto overflow-hidden gap-3 py-5 '>
 {ApproachInfo.map((app)=>(
    <ApproachCard info={app} key={app.id}/>
 ))}
        

</div>
<div className='border border-white/50 my-10 md:my-20'/>

<div className='grid grid-cols-2 gap-16'>
        <div className='flex items-center justify-center message animate-slideRight relative p-5 '>

        <Image src='/sandy.webp'  alt='hero image' width={500} height={500} className='w-full h-full object-cover max-sm:rounded-xl shadow-lg'/>
    </div>



    <div className='flex justify-center items-center '>
        
    <div className='relative'>
    <div className='flex gap-5 items-center py-4 md:py-7'>
    <div className='border border-0xblue w-10 h-3 lg:h-5 bg-0xblue'/>
    <p className='font-bold max-sm:text-sm'>WHAT OUR CLIENTS SAY</p>
</div>
        <p className='md:py-10 md:font-bold text-sm lg:text-4xl animate-slideLeft'>
      {"I don't know what else to say, 0xNunana Labs took my company from zero to hero with their unique design and marketing strategies"}
      </p>
    
    <div className='pt-2 md:pt-0'>
        <p className='font-semibold animate-slideLeft'>Bryte Tawiah</p>
        <p className='max-sm:text-xs text-white/50 animate-slideLeft'>CEO at <span className='  text-white'>JuxBryte Rentals</span></p>
    </div>
 

    <div className='flex gap-1 py-2 my-2'>
      <div className='px-3 py-1 border hover:bg-white hover:text-black flex justify-center items-center'>
      <ChevronLeftIcon width={35} className='max-sm:w-[20px] '/>
      </div>
<div className='px-3 py-1 border hover:bg-0xblue hover:text-white text-0xblue  flex justify-center items-center'>
<ChevronRightIcon width={35} className='max-sm:w-[20px]'/>
</div>

    </div>
    
    </div>
    </div>
  
  
</div>

        </div>
    </div>
  )
}

export default Approach