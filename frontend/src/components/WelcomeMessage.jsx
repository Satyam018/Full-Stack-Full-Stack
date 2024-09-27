import React from 'react'
import { FaHandsClapping } from 'react-icons/fa6'

const WelcomeMessage = () => {
  return (
    <div className='ml-20 h-full md:w-[445px] sm:w-[400px] rounded-2xl flex flex-col justify-center items-center text-red-600'>
        <h1 className='text-[25px] font-semibold text-center text-white'>Welcome to ChatOnline  </h1> 
        <div className='flex gap-2'><h2 className='text-[20px] font-semibold text-center text-white py-1'>say  Hi...  </h2>
            <FaHandsClapping className ="inline-block text-4xl text-red-600" />
        </div>
  </div>
  )
}

export default WelcomeMessage
