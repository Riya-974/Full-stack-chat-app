import mongoose from 'mongoose'


const conversationSchema=new mongoose.Schema({
    participants:[{
        type:mongoose.ObjectId,
        ref:"Users",
        required:true,
    }],
     message:[{
        type:mongoose.ObjectId,
        ref:"Messages",
        
    }],
},{timestamps:true})

export const Conversations=mongoose.model("Conversations",conversationSchema)