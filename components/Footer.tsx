import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className='' >
        <div className='max-w-7xl mx-auto py-10  px-3'>
        <div className='grid md:grid-cols-2 gap-4'>
<div className='grid grid-cols-3'>
<div>Works</div>
<div>Company</div>
<div>Social</div>
</div>
<div>contact us</div>
<div className='font-extrabold text-4xl '>
    <p className='w-[200px] text-0xblue'>BIGGER,BOLDER and BETTER.</p>
   
</div>
<Link href='/' className='flex justify-end'>
    <Image src='/nunana.png' alt='logo' height={50} width={170} priority/>
    </Link>

</div>
        </div>

    </footer>
  )
}

export default Footer