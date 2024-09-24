import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generatetoken.js";


export const signup= async (req,res)=>{
    try{
        const{fullName,userName,password,confirmPassword}=req.body;
        if(password !== confirmPassword){
            return res.status(400).json({error:"Passwords does not match"})
        }
        console.log(userName)
        const user=await User.findOne({"userName":userName});

        if(user){
            return res.status(400).json({error:"Username exits"})
        }

        // Hash password here
        const salt= await bcryptjs.genSalt(10);
        const hashedPassword=await bcryptjs.hash(password,salt)

        // profilepic
        const boyProfilePic=`https://avatar.iran.liara.run/public/boy?username=${userName}`
        const girlProfilePic= `https://avatar.iran.liara.run/public/girl?username=?${userName}`

        const gender="male";
        const newUser=new User({
            fullName,
            userName,
            password:hashedPassword,
            gender,
            profilepic: gender==="male"? boyProfilePic :girlProfilePic

        })
        if(newUser){

            // generate JWT
             generateTokenAndSetCookie(newUser._id,res);

            await newUser.save();


            res.status(201).json({
            _id:newUser._id,
            fullName:newUser.fullName,
            userName: newUser.userName,
            profilepic: newUser.profilepic
            })
        }else{
        res.send(201).json({error:"Invalid User"});
     }
    }catch(error){
        console.log(`Error in signup ${error}`)
        res.status(500).json({error:"Internal server error"})
    }
}




export const login= async (req,res)=>{
    
    try{
        const {userName,password}=req.body;
        const user=await User.findOne({"userName":userName});
        console.log(userName,password)
        const isPasswordCorrect=await bcryptjs.compare(password,user?.password||"");
        console.log(user,isPasswordCorrect)
        if(!user||!isPasswordCorrect){
            return res.status(400).json({error:"Invalid credentail"})
        }

        generateTokenAndSetCookie(user._id,res);

        res.status(200).json({
            _id:user._id,
            fullName:user.fullName,
            username: user.userName,
            profilepic: user.profilepic
            });

    }catch(error){
        console.log(`Error in login ${error}`)
        res.status(500).json({error:"Internal server error"})
    }

}


export const logout=(req,res)=>{
        try{
                res.cookie("jwt","",{maxAge:0});
                res.status(200).json({"message":"Logged Out Successfully"})

        }catch(error){
            console.log(`Error in logout ${error}`)
            res.status(500).json({error:"Internal server error"})  
        }    
}       