
import { Bars3Icon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navigation = () => {
  return (
    <nav className='bg-0xblue text-white sticky top-0 backdrop-blur-md'>
<div className='max-w-7xl mx-auto py-2 flex justify-between'>
    <Link href='/' className=''>
    <Image src='/nuna.png' alt='logo' height={40} width={120} priority className='max-sm:w-[100px]'/>
    </Link>


    <div className='flex gap-5 items-center pr-2'>
<div className='hidden md:flex border  p-3'>
<p className='flex flex-nowrap '>Free Consultation</p>
</div>

<Bars3Icon width='30px'/>
</div>


</div>



    </nav>
  )
}

export default Navigation