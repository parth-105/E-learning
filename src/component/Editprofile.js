"use client"
import React, { useState } from 'react';
import useLocalStorage from '@/helpers/useLocalStorage.js'
import { uploadFileAndGetUrl } from '@/helpers/firebaseUtils';
import axios from 'axios';
import {useRouter} from "next/navigation";

const Editprofile = () => {
  const router = useRouter();
  const [profileimg, setprofileimg] = useState(null);
  const [username, setusername] = useState('');
  const [loading ,setloading]=useState(false)
  const [data, setData] = useLocalStorage('e-learning-user', '');
 // username,avtar,userid

  const handleThumbnailChange = (e) => {
    setprofileimg(e.target.files[0]);
    //console.log("data",data)
  };



  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      setloading(true)
      const avtar = await uploadFileAndGetUrl(profileimg);
      const response = await axios.post("/api/users/edituser", {username, userid:data._id,avtar});
      console.log("video success", response.data);
      if(response){
        setData('e-learning-user',response.data.existingUser)
        setloading(false)
        setprofileimg(null)
        setusername('')
       // router.push("/Admin")
      }

    }catch(error){
      console.log("Login failed", error.message);
    }
      
    
    
  
    // Reset form fields if needed
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-center">update profile</h2>
      <form onSubmit={handleSubmit}>
        {/* Thumbnail */}
        <div className="mb-4">
          <label htmlFor="thumbnail" className="block text-sm font-medium text-gray-700">
            profile pic
          </label>
          <input
            type="file"
            id="thumbnail"
            name="thumbnail"
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            onChange={handleThumbnailChange}
          />
        </div>

      

  

        {/* Video Topic */}
        <div className="mb-4">
          <label htmlFor="videoTopic" className="block text-sm font-medium text-gray-700">
            user name
          </label>
          <input
            type="text"
            id="videoTopic"
            name="videoTopic"
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            value={videoTopic}
            onChange={(e) => setusername(e.target.value)}
          />
        </div>



        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 px-4 mt-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
           {loading ? "loding" :"updating profile"}
        </button>
      </form>
    </div>
  );
};

export default Editprofile;
