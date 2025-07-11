import React from 'react'
import useConversation from '../../zustand/Conversation'

const User = ({user}) => {

  const {selectedConversation,setSelectedConversation}=useConversation()

  const selected=selectedConversation?._id===user._id
  return (
    <div className={`w-[80%] h-[10%] hover:bg-sky-600 rounded-2xl mt-[15px] cursor-pointer ${selected? "bg-sky-500":" bg-sky-800"}`}
    onClick={()=>{setSelectedConversation(user)}}
    >
        <h3 className='font-bold p-[10px] text-2xl outline-black  '>{user?.name}</h3>
      
    </div>
  )
}

export default User
