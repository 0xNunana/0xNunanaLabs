import { ArrowUpRightIcon } from '@heroicons/react/24/solid'
import React from 'react'
import Image from 'next/image'

const ServiceCard = () => {
  return (
    <div className='bg-[#b9d0e2] p-14 border rounded-tl-[30%] rounded-br-[30%] shadow-xl hover:scale-105 hover:transition-all'>
        <div className='flex justify-between items-center text-3xl font-bold'>
            <p className=''>THINKING AND DESIGN.</p>
            <ArrowUpRightIcon width='50px' />
        </div>
        <div className='py-5'>
            <Image src='/think.png' alt='profit' width={80} height={20} className='md:w-[100px]'/>
        </div>
        <div>
            <p className='text-3xl font-bold'>Branding Strategy, Art Direction, UI/UX, Motion.</p>
        </div>
    </div>
  )
}

export default ServiceCard