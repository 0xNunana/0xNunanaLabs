'use client'


import React, { useEffect } from 'react';
import { careerData } from '@/data/Jobdata';
import Careercard from '@/components/careercard';
import Link from 'next/link';
import { usePathname,useParams } from 'next/navigation';

const SlugPage = () => {
  const path = usePathname();
  const params = useParams<{slug:string}>()
  useEffect(()=>{

  },[])
console.log('Para',params.slug)
  return (
    <div className='min-h-screen max-w-7xl  mx-auto mb-10 '>
      <div className='flex gap-2 md:gap-5 p-5 flex-wrap'>
        <Link href='/careers'>
          <p>All</p>
          
        </Link>
        <ul className='flex flex-wrap gap-2 md:gap-5'>
          {Array.from(new Set(careerData.map(career => career.team))).map((team) => (
            <Link href={`/careers/${team}`} key={team}>
              <li>{team}</li>
              {path === `/careers/${team}` ? <div className='w-full h-[5px] border hover:animate-slideRight bg-0xblue' /> : null}
            </Link>
          ))}
        </ul>
      </div>

{careerData.map((career) => {
  
    if (career.team === params.slug) {
      return (
        <>
       
              <Careercard career={career} key={career.position}/>
        </>
 
      );
    } else {
      // If the job doesn't belong to Engineering team, return null
      return null;
    }
  })}
      

    </div>
  );
};

export default SlugPage;
