// Logout.js
"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Logout() {
    const router = useRouter();

    useEffect(() => {
        // Remove user data from local storage
        console.log("log oit")
        localStorage.removeItem('e-learning-user');
        router.push('/login');
    }, []);

    // You can also add additional cleanup logic if needed

    return null; // Function components must return something
}
