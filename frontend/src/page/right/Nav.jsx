import React from 'react'
import useConversation from '../../zustand/Conversation'
import { useSocket } from '../../context/Socket'


const Nav = () => {
  const {selectedConversation}=useConversation()
  const {getOnline}=useSocket()
  const onlineuser=(userId)=>{
    return getOnline.includes(userId)?"online":"ofline"
  }
  return (
    <div className='w-full h-[10%] bg-black '>
      <h4 className='text-white font-bold text-2xl ml-[10px] ' >{selectedConversation?.name}</h4>
      <p className='ml-[10px] text-green-900'>{onlineuser(selectedConversation?._id)}</p>
      
    </div>
  )
}

export default Nav
