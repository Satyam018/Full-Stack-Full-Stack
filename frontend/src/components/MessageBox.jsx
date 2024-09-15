import React from 'react'
import Header from './Header'
import Messages from './Messages'


const MessageBox = () => {
  return (
    <div className='ml-2 h-full md:w-[460px] sm:w-[400px] rounded-2xl' style={{background:"#ffd700"}}>
      <Header/>
      <div className='my-0 py-0 h-[1px] px-2  m-2 rounded-md' style={{backgroundColor: "#ffffff"}}></div>
      <Messages/>
      </div>
  )
}

export default MessageBox
