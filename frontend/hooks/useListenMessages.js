import React, { useEffect } from 'react'
import { useSocketContext } from '../src/context/SocketContext'
import useConversation from '../src/zustang/useConversation';
import { set } from 'mongoose';

const useListenMessages = () => {
 const {socket}=useSocketContext();
 const {messages,setMessages}=useConversation();

 useEffect(()=>{
    socket?.on("newMessage",(newMessage)=>{
        setMessages([...messages,newMessage])
    })
    return ()=>socket?.off("newMessage")
 },[socket,setMessages,messages])
}

export default useListenMessages
