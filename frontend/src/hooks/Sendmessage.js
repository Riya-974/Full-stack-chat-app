import React, { useState } from 'react'
import { useAuth } from '../context/Auth'
import useConversation from '../zustand/Conversation'
import axios from 'axios'

const Sendmessage = () => {
    const [loading, setloading] = useState(false)
    const [auth]=useAuth()
    const {selectedConversation,message,setmessage}=useConversation()


    const sendmsg=async({messages})=>{
        setloading(true)
        try {
            const res=await axios.post(`http://localhost:3005/api/v1/message/send/${selectedConversation?._id}`,{message:messages},{
                headers:{
                    Authorization:auth?.token
                }
            })

            setmessage([...message,res.data.newMessage])
            setloading(false)
            
        } catch (error) {
            console.log(error);
            
            
        }
    }

    return{sendmsg,loading}

}

export default Sendmessage
