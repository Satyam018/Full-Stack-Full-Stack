import React from 'react'
import { FaHandsClapping } from "react-icons/fa6";

const Signup = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-90px mx-auto'>
      <div className='w-full max-w-lg p-6'>
        <div className='flex flex-row gap-3 justify-center items-center'>
          <h1 className='text-3xl font-semibold text-center text-gray-300'>
            Welcome to <span className='text-red-600'>ChatOnline</span>
          </h1>
          <FaHandsClapping className="inline-block text-4xl" style={{ color: "#FFD700" }} />
        </div>

        <form>
          <h2 className='text-gray-400 pl-2 mt-3'>
            Please signup to get started
          </h2>

          <input type="text"  placeholder="Username" className="input input-bordered w-full h-11 text-gray-300 placeholder-gray-300 bg-gray-500 mt-3" />

          <input  type="password"  placeholder="Password" className="input input-bordered w-full h-11 text-gray-300 placeholder-gray-300 bg-gray-500 mt-3"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="input input-bordered w-full h-11 text-gray-300 placeholder-gray-300 bg-gray-500 mt-3"
          />

          <h2 className='text-gray-400 pl-2 mt-4'>
            Already have an account? <span className='text-red-600 cursor-pointer hover:underline'>Login</span>
          </h2>

          <button className='text-gray-100 w-full bg-red-600 h-11 rounded-md mt-6'>
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
