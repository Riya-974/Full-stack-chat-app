import  Jwt from "jsonwebtoken"
import { Users } from "../models/user.js"
import bcrypt from "bcrypt"

 
export const register=async(req,res)=>{

    try {

         const {name,username,password,confirmpassword}=req.body

    if(!name || !username || !password || !confirmpassword){
        return res.json({message:"All fileds are required", success:false})
    }

    if(password !== confirmpassword){
        return res.json({message:"password dose't matched", success:false})
    }

    let user= await Users.findOne({username})
    if(user){
        return res.json({message:"This usernsme already exist", success:false})
    }

    const hashpass=await bcrypt.hash(password,10)

    user=await Users.create({
        name,
        username,
        password:hashpass,
        confirmpassword
    })

    res.json({message:"Register successfully",user,success:true})
        
    } catch (error) {
        console.log(error);
        
        
    }
   
}




export const login=async(req,res)=>{
    try {

        const {username,password}=req.body

        if(!username || !password) {
        return res.json({message:"All fileds are required", success:false})
    }


    const user=await Users.findOne({username})

    if(!user){
        return res.json({message:"Username wrong", success:false})
    }


    const matchpass=await bcrypt.compare(password,user.password)

    if(!matchpass){
        return res.json({message:"Password is wrong", success:false})
    }

    const token=Jwt.sign({_id:user.id},process.env.JWT_SECRUT,{
        expiresIn:"999d"
    })

    res.json({message:`Welcome ${user.name}`,
        user:{

            name:user.name,
            username:user.username,
            _id:user.id


        }
            
        
        
        ,token,success:true})
        
    } catch (error) {
        console.log(error);
        
        
    }
}



// side

export const sideuser=async(req,res)=>{
    try {

        const loggeduser=req.user._id

        const users=await  Users.find({_id:{$ne:loggeduser}}).select("-password")
        res.json({users})
        
    } catch (error) {
        console.log(error);
        
        
    }
}




