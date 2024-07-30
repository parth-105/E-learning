
import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/lib/mongo";
import Video from '@/model/video-model'
import Instructor from "@/model/instructor-model";



connect()


export async function PUT(request){
    try {
        const reqBody = await request.json()
        const {name, discription,thumbnail,videourl,subject,videoid} = reqBody

        console.log("checking", reqBody)
    
        const video = await Video.findById(videoid);
            
        video.name = name,
        video.discription= discription, 
        video.thumbnail= thumbnail,
        video.videourl = videourl,
        video.subject =  subject
            
    
       await video.save();
            // const video = await newVideo.save()
            // console.log("videos",video);

            return NextResponse.json({
                message: "video updated successfully",
                success: true,
                video
            })

    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500})

    }
}