import React from 'react'
import useConversation from '../zustang/useConversation'
import { useSocketContext } from '../context/SocketContext';

const User = ({conversation,lastind}) => {
   const{selectedConversation,setSelectedConversation} =useConversation();

   const isSelected = selectedConversation?._id===conversation._id; 
   const {onlineUsers}=useSocketContext();

   const isOnline=onlineUsers.includes(conversation._id)
  return (
    <div>
    <div className={`w-full cursor-pointer py-[8px] px-2
        ${isSelected? "bg-yellow-600":""}`}
        onClick={()=>setSelectedConversation(conversation)}>
    <div className='flex flex-row items-center'>
        <div className={`avatar ${isOnline ? "online":""}`}>
            <div className="w-8 h-8 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
        </div>
        <div className='flex-1 flex mx-3'>
            <h1 className='text-gray-100 font-normal text-center text-[13px]'>{conversation.fullName}</h1>
        </div>
    </div>
</div>
    {!lastind  &&  <div className='my-0 py-0 h-[1px] px-2  m-2 rounded-md' style={{backgroundColor: "#ffffff"}}></div>}
{/* <div className='my-0 py-0 h-[1px] px-2  m-2 rounded-md' style={{backgroundColor: "#ffffff"}}></div> */}
</div>


  )
}

export default User