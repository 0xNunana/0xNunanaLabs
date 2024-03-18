'use client'
import React, { useEffect, useState } from 'react'; // Importing React and necessary hooks
import { StatsProps } from '@/data/Statsdata';
// Define the StatsCard component
const StatsCard = ({ info }: { info: StatsProps }) => {
  const [count, setCount] = useState(0); // Initialize count state with 0 using useState hook

  // useEffect hook to start the count when the component mounts
  useEffect(() => {
    // Check if count has reached the target stat value
    if (count < info.stat) {
      // Increment count after a short delay
      const timeout = setTimeout(() => {
        setCount((prevCount) => prevCount + 1); // Increment count by 1
      }, 10); // Delay in milliseconds (adjust as needed for animation speed)

      // Clean-up function to clear the timeout when the component unmounts or when count reaches the target stat value
      return () => {
        clearTimeout(timeout); // Clear the timeout
      };
    }
  }, [count, info.stat]); // Depend on count and info.stat to re-run the effect when they change

  // Render the StatsCard component
  return (
    <div className='flex items-center justify-center gap-4 p-3 my-1 md:my-7 lg:my-20'>
      <p className='text-0xblue font-bold text-3xl md:text-4xl lg:text-5xl'>{count}</p>
      <p className='max-sm:text-sm'>{info.description}</p>
    </div>
  );
};

export default StatsCard; // Export the StatsCard component
