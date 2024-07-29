import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide a name"],
        unique: true,
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
  
    isInstructor: {
        type: Boolean,
        default: false,
    },
   
})

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;