import React from 'react'
import User from './User'
import useGetConversation from '../../hooks/useGetConversation';

const UserContiner = () => {
  const {loading,conversation}=useGetConversation();
  return (
    <div className='overflow-auto flex flex-col rounded-lg py-2 sm:h-[350px] md:h-[390px]' style={{background:"#ffd700"}}>
      {conversation.map((conversation1,ind)=>(
        <User
         key={conversation1._id}
         conversation={conversation1}
         lastind={ind===conversation.length-1}
         />
      ))}
      {loading ?<span className='loading loading-spinner'/>: null}
      {/* // <User/> */}
    </div>
  )
}

export default UserContiner
