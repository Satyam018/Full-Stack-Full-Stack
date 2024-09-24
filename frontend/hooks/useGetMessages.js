import React, { useEffect, useState } from 'react'
import useConversation from '../src/zustang/useConversation';
import toast from 'react-hot-toast';
import { set } from 'mongoose';

const useGetMessages = () => {
    const [loading,setLoading]=useState(false);
    const {messages,setMessages,selectedConversation}=useConversation()

    useEffect(()=>{
       const getMessages=async()=>{
        setLoading(true)
        try{
            const res=await fetch( `/api/messages/${selectedConversation?._id}`);
            const data=await res.json();
            if(data.error){
                throw new Error(data.error)
            }
            setMessages(data)
        }catch(err){
            toast.error(err.message)
        }finally{
            setLoading(false)
        }
       } 

      if(selectedConversation?._id) getMessages()

    },[selectedConversation?._id])
    return {loading,messages}
}

export default useGetMessages