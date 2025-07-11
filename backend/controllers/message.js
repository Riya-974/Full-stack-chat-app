import { Conversations } from "../models/conversation.js"
import { Messages } from "../models/message.js"
import { io, socketmessage } from "../socketio.js"


export const sendmessage=async(req,res)=>{
  try {

    const {message}=req.body
    const senderId=req.user._id
    const {id:reciverId}=req.params


    let conversation=await Conversations.findOne({
      participants:{$all:[senderId,reciverId]}
    })

    if(!conversation){
      conversation=await Conversations.create({
        participants:[senderId,reciverId]
      })
    }

    const newMessage=new Messages({
      senderId,
      reciverId,
      message
    })

    if(newMessage){
      await newMessage.save()
      conversation.message.push(newMessage._id)
      await conversation.save()



      const socketmsg=socketmessage(reciverId)

      if(socketmsg){
        io.to (socketmsg).emit("newMessage",newMessage)
      }
    }


    res.json({newMessage})

    
  } catch (error) {
    console.log(error);
    
    
  }
}
// get message

export const getmsg=async(req,res)=>{
    try {
        
        const senderId=req.user._id
        const {id:reciverId}=req.params


        const conversation=await Conversations.findOne({
            participants:{$all:[senderId,reciverId]}
        }).populate("message")

        if(!conversation){
            return res.json([])
        }


        const message=conversation.message

        res.json({message})
    } catch (error) {
        console.log(error);
        
        
    }
}

