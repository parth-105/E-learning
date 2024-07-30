
import {  NextResponse } from "next/server";
import { connect } from "@/lib/mongo";
import Video from '@/model/video-model'




connect()


export async function DELETE(request){
    try {
        const reqBody = await request.json()
        const {videoid} = reqBody

        console.log("checking", reqBody)
    
        const video = await Video.findByIdAndDelete(videoid);
            
            return NextResponse.json({
                message: "video updated successfully",
                success: true,
                video
            })

    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500})

    }
}