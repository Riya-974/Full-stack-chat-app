import React from 'react'
import Left from './left/Left'
import Right from './right/Right'
import useConversation from '../zustand/Conversation'

const Home = () => {

  const {selectedConversation,userList}=useConversation()
  return (
    <div className=' w-full h-full  flex'>
      <div className={`w-full md:w-1/2 ${selectedConversation && !userList?'md:block hidden':"block"}`}>
        <Left/>
      </div>

      <div className={`w-full md:w-2/3 ${selectedConversation?"block":" hidden md:block"}`}>
        <Right/>
      </div>
    </div>
  )
}

export default Home
