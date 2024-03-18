'use client'
import { Bars3Icon,XMarkIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'
import React,{useState} from 'react'

const Navigation = () => {
  const [ismenuOpen,setIsMenuOpen]=useState(false)
  return (
    <header className='bg-0xblue text-white sticky top-0 backdrop-blur-md z-50 '>
<div className='max-w-7xl mx-auto py-2 flex justify-between'>
    <Link href='/' className=''>
    <Image src='/nuna.webp' alt='logo' height={40} width={120} priority className='max-sm:w-[100px]'/>
    </Link>


    <div className='flex gap-5 items-center pr-2'>
<Link href='#enquiry' className='hidden md:flex border  p-3 hover:bg-blue-500/50  cursor-pointer '>
<p className='flex flex-nowrap '>Free Consultation</p>
</Link>
{ismenuOpen && (
   <div className='hidden md:flex p-5 animate-slideLeft'>
    <ul className='flex  gap-2'>
      <Link href='#about' className='hover:bg-blue-500/50 p-2 rounded-md'>
        <li>About</li>
      </Link>
      <Link href='#projects' className='hover:bg-blue-500/50 p-2 rounded-md'>
        <li>Projects</li>
      </Link>
      <Link href='#services' className='hover:bg-blue-500/50 p-2 rounded-md'>
        <li>Services</li>
      </Link>
      <Link href='#contact' className='hover:bg-blue-500/50 p-2 rounded-md'>
        <li>Contact</li>
      </Link>
    </ul>
   </div>
)}

{ismenuOpen ? ( <XMarkIcon onClick={()=>setIsMenuOpen(false)}  width='30px' className='cursor-pointer  rounded-full  flex  justify-center bg-blue-500/70 z-20 items-center '/>):(<Bars3Icon width='30px' onClick={()=>setIsMenuOpen(true)} className='cursor-pointer '/>)}

</div>


</div>

{ismenuOpen && (
    <div className=' text-white  fixed inset-y-0 h-screen top-0 p-4 bottom-0 w-full sm:w-[50%] right-0 md:hidden bg-0xblue'>

    <div className='mt-10 py-10 animate-slideDown'>
   
        <div className='grid gap-6'>
        <Link href='#about' onClick={()=>setIsMenuOpen(false)} className='hover:bg-blue-500/50 p-3 rounded-md'>
        <p>About</p>
        </Link>
       <Link href='#projects' onClick={()=>setIsMenuOpen(false)} className='hover:bg-blue-500/50 p-3 rounded-md'>
       <p>Products</p>
       </Link>
       <Link href='#services' onClick={()=>setIsMenuOpen(false)} className='hover:bg-blue-500/50 p-3 rounded-md'>
       <p>Services</p></Link>
     
       <Link href='#contact' onClick={()=>setIsMenuOpen(false)}className='hover:bg-blue-500/50 p-3 rounded-md'>
       <p>Contact</p>
       </Link>
        </div>
      
    </div>
    </div>
)}



    </header>
  )
}

export default Navigation