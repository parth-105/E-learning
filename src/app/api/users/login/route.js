
import User from "@/model/user-model";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { connect } from "@/lib/mongo";
import Instructor from '@/model/instructor-model'

connect()

export async function POST(request){
    try {

        const reqBody = await request.json()
        const {email, password,isInstructor} = reqBody;
        console.log(reqBody);

        //check if user exists

        if(isInstructor){
            const instructor = await Instructor.findOne({email})
            if(!instructor){
                return NextResponse.json({error: "instructor does not exist"}, {status: 400})
            }
            console.log("instructor exists");

            const validPassword = await bcryptjs.compare(password, instructor.password)
            if(!validPassword){
                return NextResponse.json({error: "Invalid password"}, {status: 400})
            }
            console.log(instructor);

            const tokenData = {
                id: instructor._id,
                username: instructor.username,
                email: instructor.email
            }
            //create token
            const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {expiresIn: "1d"})
    
            const response = NextResponse.json({
                message: " instructor Login successful",
                success: true,
                Login:instructor,
            })
            response.cookies.set("e-learninigtoken", token, {
                httpOnly: true, 
                
            })
            return response;

        }
        else{
        const user = await User.findOne({email})
        if(!user){
            return NextResponse.json({error: "User does not exist"}, {status: 400})
        }
        console.log("user exists");
        
        
        //check if password is correct
        const validPassword = await bcryptjs.compare(password, user.password)
        if(!validPassword){
            return NextResponse.json({error: "Invalid password"}, {status: 400})
        }
        console.log(user);
        
        //create token data
        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email
        }
        //create token
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {expiresIn: "1d"})

        const response = NextResponse.json({
            message: "Login successful",
            success: true,
            Login:user,
        })
        response.cookies.set("e-learninigtoken", token, {
            httpOnly: true, 
            
        })
        return response;
    }

    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}