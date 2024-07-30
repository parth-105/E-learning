// components/VideoList.js
"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios
import { Videocard } from '@/component/Videocard';
import useLocalStorage from '@/helpers/useLocalStorage.js';

const InstructorVideoList = () => {
  const [videos, setVideos] = useState([]);
  const [data, setData] = useLocalStorage('e-learning-user', '');

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.post('/api/videos/idvideos', {id:data._id}); // Make a GET request
        console.log("video responce",response.data.videos)
        setVideos(response.data.videos); // Update state with fetched videos
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();

    // Cleanup function (optional)
    return () => {
      // Perform any cleanup (e.g., close connections, unsubscribe, etc.)
    };
  }, []); // Empty dependency array means this effect runs once on component mount

  return (
    <div>
      <div className='flex flex-wrap justify-center'>
        {videos.map((video) => (
          <div key={video._id} className=' m-4  ' >
           <Videocard video={video}/>
            {/* Display other video details */}
          </div>
         ))
        }
      </div>
    </div>
  );
};

export default InstructorVideoList;
