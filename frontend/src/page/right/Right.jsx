import React from 'react'
import Nav from './Nav'
import Messages from './Messages'
import Send from './Send'
import useConversation from '../../zustand/Conversation'
import FirstPage from './FirstPage'
import { FaStackExchange } from "react-icons/fa";

const Right = () => {

  const {selectedConversation,setUserList}=useConversation()
  return (
    <div className='w-[72vw] h-full bg-sky-900 flex flex-col'>

{
  <div onClick={()=>setUserList(true)} className='md:hidden flex items-center cursor-pointer'>
    <FaStackExchange />

  </div>
}

      {
        !selectedConversation?(<FirstPage/>):
        (
          <>
           <Nav/>
      <div className='flex-1 overflow-y-scroll'>
         <Messages/>
         </div>
         <div>
         <Send/>
         </div>
          </>
        )
      }
     
     
    </div>
  )
}

export default Right
