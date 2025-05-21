import { cookieOptions } from "../config/config.js"
import wrapAsync from "../utils/tryCatchWrapper.js"
import { register_user, login_user } from "../services/auth.service.js"






export const registerUser = wrapAsync( async(req,res)=>{
    const {name,email,password} = req.body
    const {token,user} = await register_user(name,email,password)
    req.user = user
    res.cookie("accessToken",token,cookieOptions)
    res.status(200).json({message : "registeration successfull"})
})

export const loginUser = wrapAsync( async(req,res)=>{
    const {email,password} = req.body
    const {token,user} = await login_user(email,password)
    req.user = user
    res.cookie("accessToken",token,cookieOptions)
    res.status(200).json({message : "login successfull"})
})

export const logoutUser = wrapAsync( async(req,res)=>{
    res.clearCookie("accessToken",cookieOptions)
    res.status(200).json({message : "logout successfull"})
})

export const get_current_user = wrapAsync( async (req, res) => {
    res.status(200).json({user:req.user})
})