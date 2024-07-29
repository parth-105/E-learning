"use client"
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Button,
  } from "@material-tailwind/react";
  import axios from "axios";
import React, { useEffect, useState } from "react";
import {useRouter} from "next/navigation";
import Link from "next/link";

   
  export function SignupCard() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
         subject:"",
         isInstructor: false
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const handleOnChange = (e) => {
        setIsChecked(!isChecked);
        console.log("Signup failed", e.target.checked);
        setUser({ ...user, isInstructor: e.target.checked })
      };


      const onSignup = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup", user);
        //    localStorage.setItem("e-learning-user", user);
            console.log("log user",user)
            localStorage.setItem('e-learning-user', JSON.stringify(user));
            console.log("Signup success", response.data);
            router.push("/login");

        } catch (error) {
            console.log("Signup failed", error.message);


        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);



    return (
      <Card className="w-96">
         <h1>{loading ? "Processing" : "Login"}</h1>
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Sign up
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">

        <Input label="Username"
             type="text"
             value={user.username}
             onChange={(e) => setUser({ ...user, username: e.target.value })}
             size="lg" />

          <Input label="Email"
             value={user.email}
             onChange={(e) => setUser({...user, email: e.target.value})}
             size="lg" />


          <Input label="Password" 
           type="password" 
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})} 
            size="lg" />

            {
                isChecked && <Input label="subject" 
                type="text" 
                value={user.subject}
                onChange={(e) => setUser({ ...user, subject: e.target.value })}
                 size="lg" />
            }

          <div className="-ml-2.5">
            <Checkbox 
             checked={isChecked}
             onChange={handleOnChange}
             label="Singup as Instructor" />
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button onClick={onSignup} variant="gradient" fullWidth>
            {loading ? "loding" :"Signup"}
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Don&apos;t have an account?
            <Typography
              variant="small"
              color="blue-gray"
              className="ml-1 font-bold"
            >
            <Link href='/login'>Login</Link>  
            </Typography>
          </Typography>
        </CardFooter>
      </Card>
    );
  }

  export default SignupCard