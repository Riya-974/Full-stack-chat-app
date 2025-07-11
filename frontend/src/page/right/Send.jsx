import React, { useState } from 'react'
import Sendmessage from '../../hooks/Sendmessage'

const Send = () => {

  const {sendmsg}=Sendmessage()
  const [messages, setmessages] = useState()

  const onSubmitHandeler=async(e)=>{
    e.preventDefault()
    try {

      await sendmsg({messages})
      setmessages("")
      
    } catch (error) {
      console.log(error);
      
      
    }
  }
  return (
   <form onSubmit={onSubmitHandeler}>
    <input type="text" onChange={(e)=>setmessages(e.target.value)} value={messages}placeholder='Type' className='rounded-2xl  w-[90%] p-[10px] m-[20px]'/>
   </form>
  )
}

export default Send
