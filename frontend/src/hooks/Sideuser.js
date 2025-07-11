import React from 'react'
import { useState } from 'react'
import { useAuth } from '../context/Auth'
import { useEffect } from 'react'
import axios from 'axios'

const Sideuser = () => {
    const [user, setuser] = useState([])
    const [loading, setloading] = useState(false)
    const [auth]=useAuth()


    useEffect(() => {
     const sideuser=async()=>{
        setloading(true)
        try {

            const res=await axios.get("http://localhost:3005/api/v1/user/user",{
                headers:{
                    Authorization:auth?.token
                }
            })

            setuser(res.data.users)
            setloading(false)
            
        } catch (error) {
            console.log(error);
            
            
        }
     }
     sideuser()
    }, [])

    return [user,loading]
    
 

}

export default Sideuser
