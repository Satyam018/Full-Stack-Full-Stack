import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    fullName:{
        type:String,
        require:true
    },
    userName:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
        minlength:6
    },
    gender:{
        type:String,
        required: true,
        enum:["male","female"]
    },
    profilepic:{
        type:String,
        default:""
    }
},{timestamps:true});

const User=mongoose.model("User",userSchema);

export default User;