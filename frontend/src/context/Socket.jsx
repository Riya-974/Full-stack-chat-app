import React from "react";
import { createContext } from "react";
import { useAuth } from "./Auth";
import { useState } from "react";
import { useEffect } from "react";
import io from "socket.io-client"
import { useContext } from "react";


const SocketContext=createContext()

const SocketProvider=({children})=>{

    const [auth]=useAuth()
    const [socket, setsocket] = useState(null)
    const [getOnline, setGetOnline] = useState([])


    useEffect(() => {
     if(auth?.user){
        const socket=io("http://localhost:3005/",{
            query:{
                userid:auth.user._id
            }
       
            
        })
         setsocket(socket)

         
             socket.on("getonline",(users)=>{
                 console.log("client connected",users);
         
              setGetOnline(users)
                 
             })

             return()=>socket.close()
     }else{
        if(socket){
           return socket.close(),
            setsocket(null)
        }
     }
    }, [auth])
    
    return(
        <SocketContext.Provider value={{getOnline,socket}}>
            {children}
        </SocketContext.Provider>
    )
}


const useSocket=()=>useContext(SocketContext)
export {useSocket,SocketProvider}