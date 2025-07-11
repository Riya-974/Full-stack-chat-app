import mongoose from "mongoose"

const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    username:{type:String, required:true, unique:true},
    password:{type:String,required:true},
    confirmpassword:{type:String,required:true}

},{timestamps:true})

export const Users=mongoose.model("Users",userSchema)