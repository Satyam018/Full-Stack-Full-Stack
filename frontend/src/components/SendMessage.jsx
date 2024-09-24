import React, { useState } from 'react'
import { BsSend } from "react-icons/bs";
import useSendMessage from '../../hooks/useSendMessage';

const SendMessage = () => {
  const [message,setMessage]=useState("");
  const {loading,sendMessage}=useSendMessage()

  const handleSubmit=async(e)=>{
    e.preventDefault();
    if(!message)return;

    await sendMessage(message);
    setMessage("");

  }
  return (
    <div className='px-8 my-0'>
        <form className='w-full relative' onSubmit={handleSubmit}>
        <input
					type='text'
					className='border text-sm rounded-lg block w-full py-2  px-2  text-white placeholder-white'
					placeholder='Send a message'
                    style={{background:"#301934",border:"none !important"}}
          value={message}
          onChange={(e)=>setMessage(e.target.value)}          
				/>
                <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3 ' >	
                    {loading?<span className='loading loading-spinner'></span>:<BsSend className='text-white  '/>}
                    	</button>
        </form>
        
    </div>
  )
}

export default SendMessage
