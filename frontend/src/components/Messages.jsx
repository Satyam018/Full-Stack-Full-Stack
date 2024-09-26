import React, { useEffect, useRef } from 'react'
import useGetMessages from '../../hooks/useGetMessages'
import Message from './Message';
import Sender from './Sender.jsx'
import Receiver from './Receiver.jsx'

const Messages = () => {
  const {loading,messages}=useGetMessages();
  const lastmessageRef=useRef();
  useEffect(()=>{
    setTimeout(() => {
      lastmessageRef.current?.scrollIntoView({behaviour:"smooth"});
    }, 100);
  },[messages])
  return (
    <div className='h-[438px] overflow-auto background-white-200'>
      {!loading && messages.length===0 &&(
        <p className='text-center'>Send a message to start the conversation</p>
      )}
    
      {console.log(messages.length)}
      {!loading && messages.length>0 && messages.map((message)=>(
        <div key={message._id}
        ref={lastmessageRef}>
          <Message key={message._id} message={message}/>
        </div>
        // <Sender/>
      ))}
       {/* <Receiver/> */}
    </div>
  )
}

export default Messages
