import React from 'react'
import { CiSearch } from "react-icons/ci";
import UserContiner from './UserContiner';
import Logout from './Logout';

const SideBar = () => {
  return (
    <div className='flex flex-col rounded-2xl'>
    <div className=' mb-4 md:w-[265px] sm:w-[220px] h-full'>
        <label className="input input-bordered flex items-center gap-2  max-w-md rounded-2xl h-10" style={{background:"#ffd700"}}>
            <CiSearch className='text-white'/>
            <input type="text" className="grow rounded-md w-full max-w-md text-[12px] text-white placeholder:text-white" placeholder="Daisy" />
        </label>
    </div>
    
    <div>
        <UserContiner/>
    </div>
    <Logout/>
</div>

  )
}

export default SideBar
