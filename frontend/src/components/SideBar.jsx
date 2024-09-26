import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import UserContiner from "./UserContiner";
import Logout from "./Logout";
import useConversation from "../zustang/useConversation";
import useGetConversation from "../../hooks/useGetConversation";
import toast from "react-hot-toast";
import { IoIosSearch } from "react-icons/io";

const SideBar = () => {
  const [search, setSearch] = useState("");
  const {setSelectedConversation}=useConversation();
  const {conversation}=useGetConversation();

  const handleSubmit= (e)=>{
    e.preventDefault();
    if(!search)return;
    if(search.length<2){
      return toast.error('Enter at 2 charcter')
    }

    const conversation1=conversation.find((c)=>c.fullName.toLowerCase().includes(search.toLowerCase()));
    if(conversation1){
      setSelectedConversation(conversation1);
      setSearch("");
    }else toast.error("No User Found")
  }
  return (
    <div className="flex flex-col rounded-2xl">
      <div className=" mb-4 md:w-[265px] sm:w-[220px] h-full flex flex-row">
        <form onSubmit={handleSubmit} className="flex flex-row gap-2">
          <label
            className="input input-bordered flex items-center gap-2  w-[220px] rounded-2xl h-10"
            style={{ background: "#ffd700" }}
          >
            <CiSearch className="text-white" />
            <input
              type="text"
              className="grow rounded-md text-[12px] text-white placeholder:text-white"
              placeholder="Daisy"
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
            />
          </label>
          <button 
             type="submit" className="flex items-center justify-center rounded-full mt-[2px]" style={{ background: "#ffd700", width: "34px", height: "34px", padding: "0" }}>
  <IoIosSearch className="text-white" style={{ fontSize: "18px" }} />
</button>
        </form>
      </div>

      <div>
        <UserContiner />
      </div>
      <Logout />
    </div>
  );
};

export default SideBar;
