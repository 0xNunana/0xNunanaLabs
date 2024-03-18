import React from 'react'
import Image from 'next/image'
import { ApproachProps } from '@/data/Approachdata'

const ApproachCard = ({info}:{info:ApproachProps}) => {
  return (
    <div>
   <div className='border border-gray-600 p-5 animate-scaleUp'>
  
  <div className='flex gap-1 items-center  '>
  <div className='border border-0xblue w-2 rounded-full h-2 bg-0xblue'/>
  <p className='text-xs md:text-sm font-semibold uppercase'>{info.id}</p>
</div>

<div className='flex justify-center items-center'>
 <Image src={info.image} alt={`logo ${info.id}`} height={200} width={500}/>
</div>


      </div>
      <p className='font-semibold md:text-2xl py-2 md:py-5'>{info.title}</p>
      <p className='text-xs md:text-sm text-white/50'>{info.description}</p>
 </div>
  )
}

export default ApproachCard