import mongoose from "mongoose"


export const db=()=>{
    try {

        mongoose.connect(process.env.MONGO_URL,{
            dbName:"App_Chat_3"
        })

        console.log("mongodb is connected");
        
        
    } catch (error) {
        console.log(error);
        
        
    }
}