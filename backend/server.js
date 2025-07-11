import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { db } from "./db.js"
import userRoutes from "./routes/userRoutes.js"
import messageRoutes from "./routes/messageRoutes.js"
import { app ,server} from "./socketio.js"
dotenv.config({})




//middlewears
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    return res.json({ message:"CHAT APP"})
})

db()


//user

app.use("/api/v1/user",userRoutes)

// message
app.use("/api/v1/message",messageRoutes)

const port=process.env.PORT

server.listen(port,()=>console.log(`server is running on ${port}`))



