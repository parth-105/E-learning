
import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/lib/mongo";

import User from "@/model/user-model";




connect()


export async function PUT(request){
    try {
        const reqBody = await request.json()
        const {username,avtar,userid} = reqBody

        console.log("checking", reqBody)
    
        const existingUser = await User.findById(userid);
            
        if (username && username !== existingUser.username) {
            existingUser.username = username;
          }
          if (avtar && avtar !== existingUser.avtar) {
            existingUser.avtar = avtar;
          }
                                 
    
        await existingUser.save();
            // const video = await newVideo.save()
            // console.log("videos",video);

            return NextResponse.json({
                message: "user updated successfully",
                success: true,
                existingUser
            })

    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500})

    }
}