import React, { useState } from 'react'
import useConversation from '../src/zustang/useConversation'
import toast from 'react-hot-toast'


const useSendMessage = () => {
  const [loading,setLoading]=useState(false)
  const {messages,setMessages,selectedConversation}=useConversation()
  const sendMessage=async(message)=>{
    setLoading(true)
    try{
        console.log(selectedConversation?._id)
        const res=await fetch(`/api/messages/sent/${selectedConversation?._id}`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({message})
        })
        const data= await res.json()
        if(data.error){
            throw new Error(data.error)
        }
        setMessages([...messages,data])
    }catch(err){
        toast.error(err.message)
    }finally{
        setLoading(false)
    }
  }
  return {loading,sendMessage}
}

export default useSendMessage
