import React, { useEffect } from 'react'
import { useSocket } from '../context/Socket'
import useConversation from '../zustand/Conversation'

const Socketmessage = () => {
    const {socket}=useSocket()
    const{setmessage}=useConversation()

    
useEffect(() => {

    if(!socket) return

     const handlesubmit=(newMessage)=>{
          setmessage(newMessage)
    }

    socket.on("newMessage",handlesubmit)
  return ()=>socket.off("newMessage",handlesubmit)
 
}, [socket,setmessage])

   
  
}

export default Socketmessage
