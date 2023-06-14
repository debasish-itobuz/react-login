import { userModel } from "../models/userModel.js";

// Register User
export const registerUser = async (req, res, next) => {
    try {
        const {name, email, password} = req.body
        // console.log(req.body)

        const user = await userModel.create({
            name, email, password
        })

        res.status(200).json({
            status:true,
            user
        })
    } catch (error) {
        next(error)
    }
}

// Login User
export const loginUser = async (req, res, next) => {
    try {
        const {email,password} = req.body
        // console.log(req.body)
        if (!email || !password) {
            res.status(400).json({
                message:"Please Email and Password",
                success:false
            })
        }

        const user = await userModel.findOne({email})

        if(!user) {
            res.status(404).json({
                message:"User not found",
                success:false
            })
        }

        res.status(200).json({
            status:true,
            user
        })
        
    } catch (error) {
        next(error)
    }
}