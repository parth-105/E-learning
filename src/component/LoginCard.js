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

   
  export function LoginCard() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        isInstructor: false
       
    })
    const [isChecked, setIsChecked] = useState(false);
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const handleOnChange = (e) => {
      setIsChecked(!isChecked);
      console.log(" cheked value", e.target.checked);
      setUser({ ...user, isInstructor: e.target.checked })
    };


    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            localStorage.setItem('e-learning-user', JSON.stringify(user));
            console.log("Login success", response.data.Login.isInstructor);
           
          if(response.data.Login.isInstructor) 
            { router.push("/Admin");}
        } catch (error) {
            console.log("Login failed", error.message);
            
        } finally{
        setLoading(false);
        }
    }

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else{
            setButtonDisabled(true);
        }
    }, [user]);



    return (
      <Card className="w-96">
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Login
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input label="Email"
             value={user.email}
             onChange={(e) => setUser({...user, email: e.target.value})}
             size="lg" />


          <Input label="Password"  
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})} 
            size="lg" />

          <div className="-ml-2.5">
            <Checkbox 
             checked={isChecked}
             onChange={handleOnChange}
             label="Login as Instructor" />
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button onClick={onLogin} variant="gradient" fullWidth>
          {loading ? "loding" :"Login"}
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Don&apos;t have an account?
            <Typography
            
              variant="small"
              color="blue-gray"
              className="ml-1 font-bold"
            >
             <Link href='/signup'>Sign up</Link> 
            </Typography>
          </Typography>
        </CardFooter>
      </Card>
    );
  }