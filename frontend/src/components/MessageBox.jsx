import React, { useEffect } from 'react'
import Header from './Header'
import Messages from './Messages'
import SendMessage from './SendMessage'
import WelcomeMessage from '../components/WelcomeMessage'
import useConversation from '../zustang/useConversation'



const MessageBox = () => {
  const {selectedConversation,setSelectedConversation}=useConversation();

  // useEffect(()=>{

  //   return ()=>setSelectedConversation(null)

  // },[selectedConversation])
  return (
    <div className='ml-2 h-full md:w-[460px] sm:w-[400px] rounded-2xl' style={{background:"#ffd700"}}>
      {/* <Header/>
      <div className='my-0 py-0 h-[1px] px-2  m-2 rounded-md' style={{backgroundColor: "#ffffff"}}></div>
      <Messages/>
      <SendMessage/> */}
      {!selectedConversation? (<WelcomeMessage/>):(
        <>
          <Header/>
        <div className='my-0 py-0 h-[1px] px-2  m-2 rounded-md' style={{backgroundColor: "#ffffff"}}></div>
        <Messages/>
       <SendMessage/>
        </>
      )}
      </div>
  )
}

export default MessageBox
