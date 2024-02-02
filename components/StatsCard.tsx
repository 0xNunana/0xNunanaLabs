import { StatsProps } from '@/data/Statsdata'
import React from 'react'

const StatsCard = ({info}:{info:StatsProps}) => {
  return (
    <div className='flex items-center justify-center gap-4 p-3 my-1 md:my-7 lg:my-20'>
    <p className='text-0xblue font-bold text-3xl md:text-4xl lg:text-5xl'>{info.stat}</p>
    <p className='max-sm:text-sm '>{info.description}</p>
</div>
  )
}

export default StatsCard