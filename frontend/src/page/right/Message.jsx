import React from 'react'
import { useAuth } from '../../context/Auth'

const Message = ({message}) => {
  const [auth]=useAuth()


  //time
  const time=new Date(message.createdAt).toLocaleTimeString([],{
    hour:"2-digit",
    minute:"2-digit",
    hour12:true
  })

  const itsme=message.senderId===auth?.user._id
  const chat=itsme?"chat-start":"chat-end"
  const color=itsme?"bg-pink-800":"bg-yellow-900"
  const align=itsme?"justify-start":'justify-end'
  return (
    <div>
<div className={`chat ${chat} `}>

      <div className={`chat-bubble ${color}`}>{message.message}.</div>
  
</div>

<div className={`chat-footer ${align} flex opacity-60 gap-2`}>
  <span>{time}</span>

  {
    itsme && message.seen &&(
      <span>Seen</span>
    )
  }
</div>

    </div>
  )
}

export default Message
