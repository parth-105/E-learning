

import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { connect } from "@/lib/mongo";
import User from "@/model/user-model";
import Instructor from "@/model/instructor-model";



connect()


export async function POST(request){
    try {
        const reqBody = await request.json()
        const {username, email, password,subject,isInstructor} = reqBody

        console.log("checking", reqBody)

        
            if(isInstructor)
        {
            const instructor = await Instructor.findOne({email})

            if(instructor){
                return NextResponse.json({error: "User already exists"}, {status: 400})
            }
    
            //hash password
            const salt = await bcryptjs.genSalt(10)
            const hashedPassword = await bcryptjs.hash(password, salt)
    
            const newUser = new Instructor({
                username,
                email,
                password: hashedPassword,
                isInstructor:true,
                subject: subject
            })
    
            const savedUser = await newUser.save()
            console.log("instuctor",savedUser);


            return NextResponse.json({
                message: "instructor created successfully",
                success: true,
                savedUser
            })

        
        }

      
         else
         {
        //check if user already exists
        const user = await User.findOne({email})

        if(user){
            return NextResponse.json({error: "User already exists"}, {status: 400})
        }

        //hash password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            isInstructor:reqBody.isAdmin
        })

        const savedUser = await newUser.save()
        console.log(savedUser);

        //send verification email

      

        return NextResponse.json({
            message: "User created successfully",
            success: true,
            savedUser
        })
    }
        
        


    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500})

    }
}