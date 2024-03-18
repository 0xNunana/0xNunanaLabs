import { ArrowUpRightIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import React from 'react'

const Projects = () => {
  return (
    <div className=' ' id='projects'>
<div className='max-w-7xl mx-auto px-3 md:py-10'>

   <div className='flex gap-5 items-center justify-center py-10 md:py-20'>
    <div className='border border-0xblue w-10 h-4 bg-0xblue'/>
    <p className='font-bold'>FEATURED PROJECTS</p>
</div>

<div className='grid grid-cols-3 md:gap-2 lg:gap-3 hover:transition-all'>
<Link href='https://automobile-alpha.vercel.app/' className="col-span-1   border h-[150px] md:h-[250px] lg:h-[400px] rounded-tl-3xl  shadow-lg bg-[url('/car.webp')] bg-cover hover:scale-105  ">

</Link>

<Link href='https://road-boys.vercel.app/' className="col-span-2   border h-[150px] md:h-[250px] lg:h-[400px]   rounded-tr-3xl shadow-lg bg-[url('/road.webp')] bg-cover  hover:scale-105">

</Link>
<Link href='https://firstsummitit.com/' className="col-span-2   border h-[150px] md:h-[250px] lg:h-[400px]   rounded-md shadow-lg bg-[url('/first.webp')] bg-cover  hover:scale-105">

</Link>

<Link href='' className="col-span-1 border bg-[url('/uber.webp')] bg-cover h-[150px] md:h-[250px] lg:h-[400px] shadow-lg   hover:scale-105">

</Link>

<Link  href='https://farm-hazel.vercel.app/' className="col-span-3 border h-[150px] md:h-[250px] lg:h-[400px]   rounded-md shadow-lg bg-[url('/farm.webp')] bg-cover  hover:scale-105">

</Link>

<Link  href='https://nike-seven-gamma.vercel.app/' className="col-span-1 border rounded-md shadow-2xl bg-[url('/nike.webp')] bg-cover hover:scale-105">

</Link>

<Link href='' className="col-span-1   border h-[150px] md:h-[250px] lg:h-[400px]   rounded-md shadow-lg bg-[url('/orders.webp')] bg-cover  hover:scale-105">

</Link>
<Link href='https://car-dwom.vercel.app/' className="col-span-1   border h-[150px] md:h-[250px] lg:h-[400px]   rounded-md shadow-lg bg-[url('/rent.webp')] bg-cover hover:scale-105 ">

</Link>
<Link href='https://nunana-farms.vercel.app/' className="col-span-2 border rounded-bl-3xl  bg-[url('/consult.webp')] bg-cover h-[150px] md:h-[250px] lg:h-[400px]  shadow-lg hover:scale-105">

</Link>






</div>
<div className='flex justify-center items-center my-5 md:my-10 lg:my-20 py-5'>
    <div className='border max-sm:text-xs gap-3 flex border-0xblue p-4 text-0xblue font-semibold'>
        SEE ALL PROJECTS <ArrowUpRightIcon width='20px'/>
    </div>
</div>

</div>
    </div>
  )
}

export default Projects