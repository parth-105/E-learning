import mongoose, { Schema } from "mongoose";

const videoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide topic"],
    },
    discription: {
        type: String,
        required: [true, "Please provide a subject"],
        
    },
    Instructor: {
        type: Schema.Types.ObjectId,
        required: [true, "Please provide a student id"],
        ref:'Instructor'
    },
    thumbnail:{
        type: String,
        required: [true, "Please provide a thumbnail"],
    },
    videourl:{
        type: String,
        required: [true, "Please provide a videourl"],
    },
    subject:{
        type:String,
        require: [true, "Please provide a subject"],
    }
   
})

const Video = mongoose.models.Video || mongoose.model("video", videoSchema);

export default Video;