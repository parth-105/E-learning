import mongoose, { Schema } from "mongoose";

const instructorSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide instructor name"],
    },
    subject: {
        type: String,
        required: [true, "Please provide a subject"],
        
    },
    email: {
        type: String,
        required: [true, "Please provide a email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
    },
    avtar:{
        type:String,
        default:'/default.png'
    },
    video:{
        type:[String]
    },
    isInstructor: {
        type: Boolean,
        default: true,
    },
   
})

const Instructor = mongoose.models.Instructor || mongoose.model("Instructor", instructorSchema);

export default Instructor;