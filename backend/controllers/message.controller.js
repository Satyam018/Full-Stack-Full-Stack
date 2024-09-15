import Conversation from "../models/converstion.model.js";
import Message from "../models/message.models.js";

export const sendMessage= async (req,res)=>{
   try{
        const {message}=req.body;
        const {id:receiverId}=req.params;
        const {senderId}=req.user._id

        const conversation=await Conversation.findOne({
            participants:{$all:[senderId,receiverId]}
        })
        if(!conversation){
            conversation=await Conversation.create({
                participants:[senderId,receiverId]
            })
        }

        const newMessage=new Message({
            senderId,
            receiverId,
            message    
        })

        if(newMessage){
            conversation.message.push(newMessage._id);
        }

        // await conversation.save()
        // await newMessage.save()
        await Promise.all([conversation.save(),newMessage.save()])
        res.status(201).json(newMessage);
   }catch(error){
    console.log("error in sned message")
    res.status(500).json({error:"Internal server error"});
   }
}

export const getMessage= async(req,res)=>{
    try{
        const {id:userToChartId}=req.params;
        const senderId=req.user._id;

        const conversation=await conversation.findOne({
            participants:{$all:[senderId,userToChartId]}
        }).populate("message");

        if(!conversation){
            res.status(200).json([]);
        }
        res.status(200).json(conversation.message)

    }catch(error){
        console.log("error in get message")
        res.status(500).json({error:"Internal server error"});
    }
}