import React from 'react'
import { IoLogOutOutline } from "react-icons/io5";
import useLogout from '../../hooks/useLogout';
const Logout = () => {
  const {loading,logout} =useLogout();
  return (
    <div className='py-2 px-1 cursor-pointer'>
      {!loading?(
        <IoLogOutOutline  className='text-red-600'
        onClick={logout}
      />
      ):(
        <span className='loading loading-spinner'></span>
      )}
    </div>
  )
}

export default Logout
