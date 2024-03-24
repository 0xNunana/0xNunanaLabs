import PartnerCard from '@/components/PartnerCard'
import React from 'react'
import { PartnerInfo } from '@/data/Partnerdata'

const Partners = () => {
  return (
    <div className='bg-white py-20'>
    
           <div className='flex gap-5 items-center justify-center py-7'>
    <div className='border border-0xblue w-10 h-4 bg-0xblue'/>
    <p className='font-bold'>FEATURED PARTNERS</p>
</div>
        
        <div className='flex ml-5 px-3 py-10 flex-wrap justify-center'>
          {PartnerInfo.map((partner) => (
          <PartnerCard info={partner} key={partner.id} />
        ))}
        </div>
        
        </div>
  )
}

export default Partners