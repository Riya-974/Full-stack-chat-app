import mongoose from "mongoose"

const messageSchema=new mongoose.Schema({
    senderId:{
    type:mongoose.ObjectId,
    ref:"Users",
    required:true
    },

    reciverId:{
    type:mongoose.ObjectId,
    ref:"Users",
    required:true
    },


    message:{
        type:String,
        required:true
    }

},{timestamps:true})

export const Messages=mongoose.model("Messages",messageSchema)

