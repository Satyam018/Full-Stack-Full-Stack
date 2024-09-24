import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const useGetConversation = () => {
  const [loading,setLoading]=useState(false);
  const [conversation,setConversation]=useState([]);

  useEffect(()=>{
    const getCOnversation=async()=>{
        setLoading(true)
        try{
            const res=await fetch('url');
            const data=res.json();
            if(data.error){
                throw new Error(data.error);
            }       
            setConversation(data)
        }catch(err){
            toast.error(err.message)
        }finally{
            setLoading(false)
        }
    }
    getCOnversation()
  },[])

  return {loading,conversation}
}

export default useGetConversation
