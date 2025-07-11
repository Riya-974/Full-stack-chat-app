import React from 'react'
import Search from './Search'
import Users from './Users'
import useConversation from '../../zustand/Conversation'

const Left = () => {
  const {setUserList}=useConversation()
  return (
    <div className='w-full h-full bg-black'>


      {
        <div onClick={()=>setUserList(false)} className='md:hidden block'>
          BACK

        </div>
      }
        <Search/>
        <Users/>
      
    </div>
  )
}

export default Left
