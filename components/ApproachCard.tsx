import React from 'react'
import Image from 'next/image'
import { ApproachProps } from '@/data/Approachdata'

const ApproachCard = ({info}:{info:ApproachProps}) => {
  return (
    <div className=' '>
   <div className='border border-gray-600 p-5 animate-scaleUp '>
  
  <div className='flex gap-1 items-center  '>
  <div className='border border-0xblue w-2 rounded-full h-2 bg-0xblue'/>
  <p className='hidden md:flex text-xs md:text-sm font-semibold uppercase'>{info.id}</p>
  <p className='text-xs md:text-sm font-semibold uppercase md:hidden'>{info.title}</p>
</div>

<div className='flex justify-center items-center'>
 <Image src={info.image} alt={`logo ${info.id}`} width={200} height={200} className='w-[100px] h-[100px] md:w-[300px] md:h-[300px]'/>
</div>


      </div>
      <p className='hidden md:flex font-semibold md:text-2xl py-2 md:py-5'>{info.title}</p>
      <p className='hidden md:flex md:text-sm text-white/50'>{info.description}</p>
      <p className=' text-sm text-white/50 pt-2 pb-5 text-center md:hidden'>{info.description}</p>
 </div>
  )
}

export default ApproachCard