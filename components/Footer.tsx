import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { EnvelopeIcon,GlobeAltIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { ArrowUpCircleIcon } from '@heroicons/react/24/outline'
import Whatsapp from './Whatsapp'

const Footer = () => {
  return (
    <footer className='bg-white relative' id='contact' >
        <div className='max-w-7xl mx-auto py-20  px-5'>
        <div className='grid md:grid-cols-2 gap-4'>
<div className='grid grid-cols-3 gap-3'>
<div>
    <p className='pb-5 font-semibold'>Services</p>
    <ul className='text-gray-700 max-sm:text-sm'>
        <li>Web Development</li>
        <li>Mobile App development</li>
        <li>SEO </li>
        <li>SAAS</li>
    </ul>
</div>
<div>
    <p className='pb-5 font-semibold'>Company</p>
    <ul className='text-gray-700 max-sm:text-sm' >
        <li>About</li>
        <li>Contact</li>
        <li>Career</li>
        <li>Process</li>
    </ul>
</div>
<div>
    <p className='pb-5 font-semibold'>Socials</p>
    <ul className='max-sm:text-sm text-gray-700'>
        <li>X</li>
        <li>Facebook</li>
        <li>Instagram </li>
        <li>Github</li>
    </ul>
</div>





</div>
<div>
    <p className='pb-5 font-semibold'>SIGN UP FOR OUR NEWSLETTER</p>
    <div>
        <form className=' gap-2 text-gray-700 grid md:grid-cols-2'>
            <div className='gap-2 flex'>
            <EnvelopeIcon width='20px'/>
<input placeholder='Enter your email address' className='flex-grow'/>
            </div>
       
<p className='text-black font-semibold text-center md:text-end'>SUBSCRIBE {'-->'}</p>
        </form>
        <div className='mt-2 border-gray-400 border'/>
    </div>
</div>
<div>
    <p className='pb-5 font-semibold'>Contact Us</p>
 
    <ul className='text-gray-700 max-sm:text-sm'>
        <li className='flex gap-2 items-center'><EnvelopeIcon width='20px'/>kudayapaul@gmail.com</li>
        <li className='flex gap-2 items-center'><PhoneIcon width='20px'/> +233558669969</li>
        <li className='flex gap-2 items-center'> <Whatsapp/> +233271569815</li>
        <li className='flex gap-2 items-center'><MapPinIcon width='20px'/>  Remote</li>
    </ul>
 
</div>


<div className=' '>
    <p className='w-[200px] text-0xblue font-extrabold text-4xl'>BIGGER,BOLDER and BETTER.</p>
    <div className='text-gray-700 flex mt-10 justify-between items-center'>
    <p >&copy; 2024 by <span className='text-black font-semibold'>0xNunana</span>. All Rights Reserved.</p>
    <div className='flex gap-1 '>
        <GlobeAltIcon width='25px'/>
        <p>EN</p>
    </div>
    </div>
   
</div>


</div>

<Link href='/' className='flex justify-center items-center py-2'>
    <Image src='/nunana.png' alt='logo' height={50} width={170} priority className='max-sm:w-[100px]'/>
    </Link>

    <Link href='/' className='absolute right-8 max-sm:bottom-20 bottom-28'>
        <ArrowUpCircleIcon width='60px' color='gray'/>
    </Link>
        </div>

    </footer>
  )
}

export default Footer