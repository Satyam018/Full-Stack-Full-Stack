import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from '../src/context/authcontext'

const useSignup = () => {
  const [loading,setLoading]=useState(false)
 const {setAuthUser}= useAuthContext()

  const signup =async({fullName,userName,password,confirmPassword})=>{
        const success=validateInputs(fullName,userName,password,confirmPassword)
        if(!success)return;
        setLoading(true)
        try{
            const res=await fetch("http://localhost:5000/api/auth/signup",{
              method:"POST",
              headers:{"content-type":"application/json"},
              body:JSON.stringify({fullName,userName,password,confirmPassword})
            })

            const data=await res.json();
            if(data.error){
              throw new Error(data.error)
            }
            localStorage.setItem("chat-user",JSON.stringify(data))
            setAuthUser(data)
            console.log(data)
        }catch(error){
          console.log(error.message)
          toast.error(error.message)
        }finally{
          setLoading(false)
        }
  }
  return {loading,signup};
}

export default useSignup


function validateInputs(fullName,userName,password,confirmPassword){
    if(!fullName,!userName,!password,!confirmPassword){
      toast.error("All fields are required");
      return false;
    }

    if(password!=confirmPassword){
      toast.error("Password does not match")
      return false;
    }

    if(password.length<6){
      toast.error('Passwords must be of at least 6 characters')
      return false;
    }
    return true;
}
