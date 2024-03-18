import { PartnerProps } from '@/data/Partnerdata'
import Image from 'next/image'
import React from 'react'

const PartnerCard = ({info}:{info:PartnerProps}) => {
  return (
    <div className='border border-gray-400 rounded-full h-24 w-24 lg:h-56 lg:w-56 p-5 flex justify-center items-center -ml-3'>
        <Image alt={info.alt} src={info.image} width={1000} height={1000} className='w-[50px] md:w-[100px] '/>
      </div>
  )
}

export default PartnerCard