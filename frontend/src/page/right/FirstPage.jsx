import React from 'react'
import { useAuth } from '../../context/Auth'

const FirstPage = () => {

  const [auth]=useAuth()
  return (
    <div className='text-center mt-[300px] bg-slate-900'>

      <h1 className='font-extrabold text-8xl'>Welcome {auth.user.name}</h1>
      <p className='font-medium text-3xl'>Select a chat to start chatting</p>

      
    </div>
  )
}

export default FirstPage
