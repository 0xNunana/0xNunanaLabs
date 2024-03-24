import { JobProps } from '@/data/Jobdata'
import React from 'react'

const Careercard = ({career}:{career:JobProps}) => {
  return (
    <div className='p-5 m-3 bg-white rounded-md space-y-7 shadow-xl'>
    {/* Render job details */}
    <div>
    <div className='p-2 flex justify-between items-center flex-wrap'>
    <p className='text-3xl font-semibold'>{career.position}</p>
    <button className='bg-0xblue rounded-full px-5 py-2 max-sm:w-full text-white font-semibold transition-colors delay-100 hover:bg-0xblue/80'>Apply now</button>
    </div>
    <ul className='flex gap-5 flex-wrap'>
        {career.details.map((detail,i)=>(
            <li key={i} className='px-2 md:px-5 py-2 transition delay-100 rounded-full border shadow-md border-0xblue hover:bg-0xblue hover:text-white flex-wrap flex items-center'>{detail}</li>
        ))}
    </ul>
    </div>
    <hr/>
  

    <p className='pb-3 '>{career.description}</p>
    {/* You can render additional details if needed */}
  </div>
  )
}

export default Careercard