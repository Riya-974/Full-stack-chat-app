import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/Auth'
import useConversation from '../zustand/Conversation'
import axios from 'axios'

const Getmessage = () => {
 
    const [loading, setloading] = useState(false)
    const [auth]=useAuth()
    const {selectedConversation,message,setmessage}=useConversation()


    useEffect(() => {

        const getmsg=async()=>{
            setloading(true)
            try {
                const res=await axios.get(`http://localhost:3005/api/v1/message/get/${selectedConversation?._id}`,{
                    headers:{
                        Authorization:auth?.token
                    }
                })

                setmessage(res.data.message || [])
                setloading(false)
                
            } catch (error) {
                console.log(error);
                
                
            }
        }
        getmsg()
     
    }, [selectedConversation])

    return {message,loading}
    
}

export default Getmessage
