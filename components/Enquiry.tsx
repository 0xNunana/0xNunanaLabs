import React from 'react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { ArrowRightIcon, } from '@heroicons/react/24/outline'
import { EnvelopeIcon } from '@heroicons/react/24/outline'
import { enquire } from '@/actions/enquire'

const Enquiry = () => {
  return (
    <form action={enquire} className='border border-black/30 rounded-md p-[1px] flex md:grid flex-wrap scroll-mt-56' id='enquiry'>
    <select className=' p-2 md:p-4 ' name='Topic' defaultValue='Select Topic' >

      <option value="Web Development" >Web development</option>
      <option value="Mobile App Development">Mobile App development</option>
    <option value="SEO">S.E.O</option>
    <option value="Database Management">Database Management</option>
    <option value="Brand mangement">Brand Management</option>
    <option value="Advertisement">Advertisement</option>
    </select>
    {/* email */}
    <div className='gap-2 text-gray-700  p-4 flex'>
    <div className='flex flex-grow gap-2'>
    <EnvelopeIcon width='20px'/>
      
      
      <input placeholder='Enter your email address' className='w-full flex-grow pl-2 '   type="email"
              name="Email"
              id="email"/>
    </div>
     
    <button type='submit' className='flex justify-center items-center hover:scale-105 max-sm:text-gray-500  px-3'>
    <ArrowRightIcon width='30px'/>
    </button>
  
    </div>

    
  </form>
  )
}

export default Enquiry