import React from 'react'
import { useAuthContext } from '../context/authcontext'
import useConversation from '../zustang/useConversation';

const Message = ({message}) => {
    const {authUser}=useAuthContext();
    const {selectedConversation}=useConversation()

    const fromMe = message.senderId ===authUser._id
    const chatclassName=fromMe? "flex-row":"flex-row-reverse";

  return (
    <div className={`my-2 mx-2 py-0.75 text-gray-5 flex ${chatclassName} gap-2`}>
    <div className="avatar w-8 h-8">
      <div className="w-8 h-8 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
      </div>
  </div>
<div className='  inline-block rounded-full rounded-tl-none' style={{maxWidth:"75%",background:"#301934"}}>
  <h3 className='text-white py-2.5  px-3.5 text-[12px]'>{message.message}</h3>
  <h3 className='item-center'>{message.createdAt}</h3>
</div>
</div>
  )
}

export default Message
