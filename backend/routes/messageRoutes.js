import express from "express"
import { getmsg, sendmessage } from "../controllers/message.js"
import { auth } from "../middlewears/Auth.js"

const router=express.Router()

router.post("/send/:id", auth,sendmessage)
router.get("/get/:id", auth,getmsg)


export default router