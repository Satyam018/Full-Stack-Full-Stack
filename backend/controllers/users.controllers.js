import User from "../models/user.model.js";

export const getUsersProfile =async(req,res)=>{

    try{

        const  loggedinUser=req.user._id;
        console.log(loggedinUser)
        console.log(loggedinUser)
        const allUsers=await User.find({_id:{$ne:loggedinUser}}).select("-password")

        res.status(200).json(allUsers);

    }catch(error){
        console.log("Error in get users");
        res.status(500).json({error:"Internal server errors"})
    }
}