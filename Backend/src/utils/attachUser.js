import { verifyToken } from "./helper.js";
import { findUserById } from "../dao/user.dao.js";



export const attachUser = async(req,res,next)=>{
    const token = req.cookies.accessToken
    if(!token) 
        return next()
    console.log(token)
     try{
        const decoded = verifyToken(token)
        const user = await findUserById(decoded)
        console.log(user,"user")
        if(!user) return next()
        req.user = user
        next()

     }catch(error){
        console.log(error)
        next()
     }
}