
import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/lib/mongo";
import Video from '@/model/video-model'

connect()


export async function POST(request){
    try {

        const reqBody = await request.json()
        const {id} = reqBody

        console.log("id",id)
      
        const videos = await Video.find({
            instructor:id});

            return NextResponse.json({
                message: "video get successfully",
                success: true,
                videos
            })

    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500})

    }
}