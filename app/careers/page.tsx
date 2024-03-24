'use client'

import Careercard from '@/components/careercard'
import { careerData } from '@/data/Jobdata'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import React from 'react'

const CareersPage = () => {
    const path = usePathname()
   
  return (
    <div className='min-h-screen max-w-7xl  mx-auto mb-10'>

        <div className='flex gap-2 md:gap-7 p-5 flex-wrap'>
            <Link href='/careers'>
            <p>All</p>
         
            {path==='/careers' ? <div className='w-full h-[5px] border  bg-0xblue' /> : null}

       
            
      
            </Link>
            <ul className='flex gap-2 md:gap-5 relative flex-wrap'>
  {Array.from(new Set(careerData.map(career => career.team))).map((team) => (
    <Link href={`/careers/${team}`} key={team}>
      <li>{team}</li>

    </Link>
  ))}
</ul>

         
        </div>
        {careerData.map((career)=>
       
        <Careercard key={career.position} career={career} />)}
    </div>
  )
}

export default CareersPage