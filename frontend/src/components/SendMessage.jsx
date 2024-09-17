import React from 'react'
import { BsSend } from "react-icons/bs";

const SendMessage = () => {
  return (
    <div className='px-8 my-0'>
        <form className='w-full relative'>
        <input
					type='text'
					className='border text-sm rounded-lg block w-full py-2  px-2  text-white placeholder-white'
					placeholder='Send a message'
                    style={{background:"#301934",border:"none !important"}}
				/>
                <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3 ' >	
                    <BsSend className='text-white  '/>	</button>
        </form>
        
    </div>
  )
}

export default SendMessage
