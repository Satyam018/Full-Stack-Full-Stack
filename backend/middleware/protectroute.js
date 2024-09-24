import  jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute= async(req,res,next)=>{
    try{
            const token=req.cookies.jwt;
            const token1=req.cookies.hello;
            console.log("token",token)
            console.log("token1",token1)
            console.log(req.cookies)
            if(!token){
                return res.status(401).json({error:"No token provided"})
            }

            const decoded=jwt.verify(token,process.env.JWT_SECRET_KEY);

            if(!decoded){
                return res.status(401).json({error:"Invalid token provided"})

            }

            const user=await User.findById(decoded.userId).select("-password");
            if(!user){
                return res.status(401).json({error:"User Not Found"})
            }

            req.user=user

            next();

    }catch(error){
        console.log("Error in protectedRoute",error.message)
        res.status(500).json({error:"Internal server error"})
    }
}

export default protectRoute