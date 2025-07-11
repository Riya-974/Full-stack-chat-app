import http from "http"
import express from "express"
import { Server } from "socket.io"

const app=express()

const server=http.createServer(app)

const io=new Server(server,{
    cors:{
        origin:"*",
        methods:['POST' ,'GET']
    }
})

// real time chat

export const socketmessage=(reciverId)=>{
    return users[reciverId]
}

const users={}

io.on("connection",(socket)=>{
    console.log("client is online",socket.id);

    const userId=socket.handshake.query.userid
    if(userId){
        users[userId]=socket.id
        console.log("hwllo",users);
        
    }

    io.emit('getonline',Object.keys(users))



    socket.on("disconnect",()=>{
        console.log("client disconnected",socket.id);

        delete users [userId]
        io.emit("offline",Object.keys(users))
        
    })
    
})


export {io,app,server}