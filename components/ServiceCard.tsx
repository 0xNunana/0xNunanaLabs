import { ArrowUpRightIcon } from '@heroicons/react/24/solid'
import React from 'react'
import Image from 'next/image'
import { ServiceProp } from '@/data/Servicesdata'

const ServiceCard = ({info}:{info:ServiceProp}) => {
 
  return (
    <div className={`bg-${info.bgColor} text-${info.textColor} p-7 md:p-14 border rounded-md shadow-xl hover:scale-105 hover:transition-all`}>
        <div className='flex justify-between md:text-2xl font-bold '>
            <p className='uppercase'>{info.title}</p>
            <div className='flex'>
            <ArrowUpRightIcon width='40px' className='max-sm:w-[30px]' />
            </div>
         
        </div>
        <div className='py-5 flex max-sm:justify-center '>
            <Image src={info.logo} alt='profit' width={80} height={20} className='md:w-[100px]'/>
        </div>
        <div>
            <p className='text-2xl md:text-3xl font-bold flex flex-wrap'>{info.details}</p>
        </div>
    </div>
  )
}

export default ServiceCard