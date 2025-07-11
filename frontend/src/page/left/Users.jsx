import React from 'react'
import User from './User'
import Sideuser from '../../hooks/Sideuser'

const Users = () => {
    const [user,loading]=Sideuser()
    console.log("user",user);
    
  return (
    <div>


        {
            user?.map((user)=>(
                <User key={user._id} user={user}/>
        ))
        }
    
    </div>
  )
}

export default Users
