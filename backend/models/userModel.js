import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Enter Your Name"],
        maxLength:[10,'Name cannot exceed 10 characters']
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validator:[validator.isEmail, "Please Enter a valid Email"]
    },
    password:{
        type:String,
        required:[true, "Please enter your password"],
        minLength: 8
    }
})

export const userModel = mongoose.model('User', userSchema)
