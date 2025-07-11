import express from "express"
import { login, register, sideuser } from "../controllers/user.js"
import { auth } from "../middlewears/Auth.js"


const router=express.Router()

router.post("/register",register)
router.post("/login",login)
router.get("/user",auth,sideuser)

export default router