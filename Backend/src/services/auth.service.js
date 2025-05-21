import {signToken} from "../utils/helper.js"
import {conflictError} from "../utils/errorHandler.js"
import { findUserByEmail, findUserByEmailByPassword, createUser } from "../dao/user.dao.js"



export const register_user = async(name,email,password)=>{
    const user = await findUserByEmail(email)
    if(user) throw new conflictError("User Already Exists")
    const newUser = await createUser(name,email,password)
    const token = signToken({_id:newUser._id})
    return {token,user:newUser}
}


export const login_user = async(email,password)=>{
    const user = await findUserByEmailByPassword(email)
    if(!user) throw new Error("User Not Found")
    const isPasswordCorrect = await user.comparePassword(password)
    if(!isPasswordCorrect) throw new Error("Invalid Password")
    const token = signToken({_id:user._id})
    return {token,user}
}