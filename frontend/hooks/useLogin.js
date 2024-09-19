import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { json } from 'react-router-dom';
import { useAuthContext } from '../src/context/authcontext';

const useLogin = () => {
 const [loading,setLoading]=useState(false);

const {setAuthUser}=useAuthContext()

const login=async (username,password)=>{
    setLoading(true)
    if(!validateInputs(username,password))return;
    try{
        const res=await fetch("url",{
            method:"POST",
            headers:{"content-Type":"application/json"},
            body:JSON.stringify({username,password})
        })

        const data= await res.json();
        if(data.error){
            throw new Error(data.error);
        }
        localStorage.setItem("chat-app",Json.stringify(data))
        setAuthUser(data);

    }catch(err){
        toast.error(err.message)
    }finally{
        setLoading(false)
    }
}
return {loading,login}
}

export default useLogin

function validateInputs(userName,password){
    if(!userName,!password){
      toast.error("All fields are required");
      return false;
    }

   

    return true;
}