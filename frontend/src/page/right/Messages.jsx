import React, { useEffect, useRef } from 'react'
import Message from './Message'
import Getmessage from '../../hooks/Getmessage'
import Socketmessage from '../../hooks/Socketmessage'


const Messages = () => {
  const {message}=Getmessage()
  console.log("message",message);
  Socketmessage()
  const bottomRef =useRef(null)


  useEffect(() => {
   bottomRef.current?.scrollIntoView({
    behavior:"smooth"
   })
  }, [message])
  


  
  return (
    <div>
      {
        message.length===0?(<div className='font-bold text-3xl text-center mt-[300px]'>SAY HII</div>):
        (
          message?.map((message)=>(
            <Message key={message._id} message={message}/>
          ))
        )
      }


      
        <div ref={bottomRef}/>
        
      
      
    </div>
  )
}

export default Messages
