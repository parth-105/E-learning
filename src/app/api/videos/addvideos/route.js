
import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/lib/mongo";
import Video from '@/model/video-model'
import Instructor from "@/model/instructor-model";



connect()


export async function POST(request){
    try {
        const reqBody = await request.json()
        const {name, discription, instructor,thumbnail,videourl,subject} = reqBody

        console.log("checking", reqBody)
    
    
            const newVideo = new Video({
                name,
                discription,
                instructor,
                thumbnail,
                videourl,
                subject
            })
    
            const video = await newVideo.save()
            console.log("videos",video);


            await Instructor.findByIdAndUpdate(
                instructor,
                { $push: { video: video._id } },
                { new: true }
              )

            return NextResponse.json({
                message: "instructor created successfully",
                success: true,
                video
            })

    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500})

    }
}