import  Jwt from "jsonwebtoken";

export const auth=(req,res,next)=>{
    try {

        const decode=Jwt.verify(req.headers.authorization,
            process.env.JWT_SECRUT
        )


        req.user=decode
        next()
        
    } catch (error) {
        console.log(error);
        
        
    }
}