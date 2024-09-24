import React from 'react'
import useGetMessages from '../../hooks/useGetMessages'
import Message from './Message';

const Messages = () => {
  const {loading,messages}=useGetMessages();
  return (
    <div className='h-[368px] overflow-auto background-white-200'>
      {/* <Sender/>
      <Receiver/>
      <Sender/>
      <Receiver/>
      <Receiver/>
      <Receiver/>
      <Receiver/>
      <Sender/>
      <Sender/>
      <Sender/>
      <Sender/> */}
      {!loading && messages.length===0 &&(
        <p className='text-center'>Send a message to start the conversation</p>
      )}
      {!loading && messages.length>0 && messages.map((message)=>{
        <Message key={message._id} message={message}/>
      })}
    </div>
  )
}

export default Messages
