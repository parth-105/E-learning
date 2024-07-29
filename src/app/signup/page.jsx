"use client";

import SignupCard from "@/component/SignupCard";

// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import axios from "axios";
// import SignupCard from "@/component/SignupCard";





export default function SignupPage() {
    // const router = useRouter();
    // const [user, setUser] = React.useState({
    //     email: "",
    //     password: "",
    //     username: "",
    //      subject:"",
    //      isInstructor: false
    // })
    // const [buttonDisabled, setButtonDisabled] = React.useState(false);
    // const [loading, setLoading] = React.useState(false);
    // const [isAdmin, setIsAdmin] = useState(false);
    // const [isChecked, setIsChecked] = useState(false);

    // const handleOnChange = (e) => {
    //     setIsChecked(!isChecked);
    //     console.log("Signup failed", e.target.checked);
    //     setUser({ ...user, isInstructor: e.target.checked })
    //   };

    // const handleRadioChange = (e) => {
    //     setIsAdmin(e.target.value === 'true');
    //     console.log('admin', isAdmin)
    // };
    // const onSignup = async () => {
    //     try {
    //         setLoading(true);
    //         const response = await axios.post("/api/users/signup", user);
    //     //    localStorage.setItem("e-learning-user", user);
    //         console.log("log user",user)
    //         localStorage.setItem('e-learning-user', JSON.stringify(user));
    //         console.log("Signup success", response.data);
    //         router.push("/login");

    //     } catch (error) {
    //         console.log("Signup failed", error.message);


    //     } finally {
    //         setLoading(false);
    //     }
    // }

    // useEffect(() => {
    //     if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
    //         setButtonDisabled(false);
    //     } else {
    //         setButtonDisabled(true);
    //     }
    // }, [user]);


    return (
    //     <div className="flex flex-col items-center justify-center min-h-screen py-2">
    //         <h1>{loading ? "Processing" : "Signup"}</h1>
    //         <hr />
    //         <label htmlFor="username">username</label>
    //         <input
    //             className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
    //             id="username"
    //             type="text"
    //             value={user.username}
    //             onChange={(e) => setUser({ ...user, username: e.target.value })}
    //             placeholder="username"
    //         />
    //         <label htmlFor="email">email</label>
    //         <input
    //             className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
    //             id="email"
    //             type="text"
    //             value={user.email}
    //             onChange={(e) => setUser({ ...user, email: e.target.value })}
    //             placeholder="email"
    //         />
    //         <label htmlFor="password">password</label>
    //         <input
    //             className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
    //             id="password"
    //             type="password"
    //             value={user.password}
    //             onChange={(e) => setUser({ ...user, password: e.target.value })}
    //             placeholder="password"
    //         />


    //         {/* <label>
    //             <input
    //                 type="radio"
    //                 name="isAdmin"
    //                 value="true"
    //                 checked={isAdmin}
    //                 onChange={(e) => setUser({ ...user, isinstructor: e.target.value })}
    //             />
    //             teacher
    //         </label>
    //         <label>
    //             <input
    //                 type="radio"
    //                 name="isAdmin"
    //                 value="false"
    //                 checked={!isAdmin}
    //                 onChange={(e) => setUser({ ...user, isinstructor: e.target.value })}
    //             />
    //             student
    //         </label> */}

    //         <input
    //             type="checkbox"
    //             checked={isChecked}
    //             onChange={handleOnChange}
    //         />
    //         Check me!
       

    //         {
    //     isChecked && <input
    //         className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
    //         id="subject"
    //         type="text"
    //         value={user.subject}
    //         onChange={(e) => setUser({ ...user, subject: e.target.value })}
    //         placeholder="subject"
    //     />
    // }

    //         <button
    //             onClick={onSignup}
    //             className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">{buttonDisabled ? "No signup" : "Signup"}</button>
    //         <Link href="/login">Visit login page</Link>
    //     </div >
    <SignupCard/>
    )

}