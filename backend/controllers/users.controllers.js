import User from "../models/user.model.js";

export const getUsersProfile =async(req,res)=>{

    try{

        const  loggedinUser=req.user._id;

        const allUsers=await User.find({_id:{$ne:loggedinUser}}).select("-password")

        res.send(200).json(allUsers);

    }catch(error){
        console.log("Error in get users");
        res.send(500).json({error:"Internal server errors"})
    }
}