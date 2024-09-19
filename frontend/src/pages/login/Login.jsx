import React, { useState } from "react";
import { FaHandsClapping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useLogin from "../../../hooks/useLogin";
const Login = () => {

  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");

  const {loading,login}=useLogin();
  const handlesubmit=async(e)=>{
    e.preventDefault();
    await login(username,password)
  }
  return (
    <div className="flex flex-col items-center justify-center minw-90 mx-auto ">
      <div className="w-full p-6 justify-center items-center">
        <div className="flex flex-row gap-3 justify-center">
          <h1 className="text-3xl font-semibold text-center text-gray-300">
            Welcome to
            <span className="text-red-600"> ChatOnline </span>
          </h1>
          <FaHandsClapping
            className="inline-block text-4xl "
            style={{ color: "#FFD700" }}
          />
        </div>
        <form onSubmit={handlesubmit}>
          <h2 className="text  mt-5 text-gray-400 pl-2">
            Please login to get started
          </h2>
          <input
            type="text"
            placeholder="Username"
            className="input input-bordered w-full max-w-lg h-11 text-gray-300 placeholder-gray-300 bg-gray-500 mt-3"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
        />
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full max-w-lg h-11 text-gray-300 placeholder-gray-300 bg-gray-500 mt-3"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <h2 className="text  mt-4 text-gray-400 pl-2">
            Don't have an account?{" "}
            <Link to="/signup">
              <span className="text-red-600 cursor-pointer hover:underline">
                Sign up
              </span>
            </Link>
          </h2>
          <button className="text-gray-100 text-center w-full max-w-lg bg-red-600 h-11 rounded-md mt-6"
          disabled={loading}>
            {loading?<span className="loading loading-spinner"/>:"Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
