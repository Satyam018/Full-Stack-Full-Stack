import React from 'react'
import Sender from './Sender'
import Receiver from './Receiver'

const Messages = () => {
  return (
    <div className='h-[411px] overflow-auto background-white-200'>
      <Sender/>
      <Receiver/>
      <Sender/>
      <Receiver/>
      <Receiver/>
      <Receiver/>
      <Receiver/>
      <Sender/>
      <Sender/>
      <Sender/>
      <Sender/>
      
    </div>
  )
}

export default Messages
