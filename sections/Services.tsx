// Services.tsx
import React from 'react';
import ServiceCard from '@/components/ServiceCard';
import { ServiceInfo } from '@/data/Servicesdata';



const Services = () => {
  return (
    <div className='bg-white'>
      <div className='max-w-7xl mx-auto px-3 py-10'>
        <div className='flex gap-5 items-center py-7'>
          <div className='border border-0xblue w-10 h-5 bg-0xblue' />
          <p className='font-bold'>0xNUNANA&apos;S SERVICES</p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 pb-10'>
          {ServiceInfo.map((service) => (
            <ServiceCard key={service.id} info={service} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
