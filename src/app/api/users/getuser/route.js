
import User from "@/model/user-model";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { connect } from "@/lib/mongo";
import Instructor from '@/model/instructor-model'
import User from "@/model/user-model";

connect()

export async function POST(request){
    try {

        const reqBody = await request.json()
        const {isInstructor , id} = reqBody;
        console.log(reqBody);


        if(isInstructor){
            const instructor = await Instructor.findOne({email})
            if(!instructor){
                return NextResponse.json({error: "instructor does not exist"}, {status: 400})
            }
            console.log("instructor exists");
            
    
            return NextResponse.json({
                message: " instructor  successful",
                success: true,
                Login:instructor,
            })        

        }
        else{
        const user = await User.findOne({email})
        if(!user){
            return NextResponse.json({error: "User does not exist"}, {status: 400})
        }
        console.log("user exists");
            
        //create token data

        return NextResponse.json({
            message: "Login successful",
            success: true,
            Login:user,
        })
      
    }

    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}