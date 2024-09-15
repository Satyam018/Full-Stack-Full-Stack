import React from 'react'
import { FaHandsClapping } from "react-icons/fa6";
const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center minw-90 mx-auto '>
        <div className='w-full p-6 justify-center items-center'>
          <div className='flex flex-row gap-3 justify-center'>
            <h1 className='text-3xl font-semibold text-center text-gray-300'>Welcome to
            <span className='text-red-600'> ChatOnline </span>
            </h1>
            <FaHandsClapping className ="inline-block text-4xl " style={{color:"#FFD700"}} />
          </div>
          <form>
          <h2 className='text  mt-5 text-gray-400 pl-2'>Please login to get started</h2>
          <input type="text" placeholder="Username" className="input input-bordered w-full max-w-lg h-11 text-gray-300 placeholder-gray-300 bg-gray-500 mt-3" />
          <input type="password" placeholder="Password" className="input input-bordered w-full max-w-lg h-11 text-gray-300 placeholder-gray-300 bg-gray-500 mt-3" />
          <h2 className='text  mt-4 text-gray-400 pl-2'>Don't have an account? <span className='text-red-600 cursor-pointer hover:underline'>Sign up</span></h2>
          <button className='text-gray-100 text-center w-full max-w-lg bg-red-600 h-11 rounded-md mt-6' >Login </button>
          </form>
        </div>
    </div>
  )
}

export default Login
