import React from 'react'
import useConversation from '../zustang/useConversation';

const Header = () => {
  const {selectedConversation}=useConversation();
  return (
    <div className='p-2 pl-4'>
      <h1 className='text-white  font-normal text-[15px] '>{selectedConversation.fullName}</h1>
    </div>
  )
}

export default Header
