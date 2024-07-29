// Sidebar.js
import Link from 'next/link';
import React from 'react';

function Sidebar() {    
  return (
    <div className="bg-gray-200 h-screen w-64 p-4">
      {/* Your sidebar content */}
      <Link href={`/Admin/Profile`}> <p className="text-gray-700  mb-10 ">Profile</p></Link>
      <Link href={`/Admin/Dashboard`}><p className="text-gray-700 mb-10  cursor-pointer ">Dashboard</p></Link>
      <Link href={`/Admin/Create-video`}><p className="text-gray-700 mb-10  cursor-pointer ">create video</p></Link>
      <Link href={`/Admin/Suggestion`}><p className="text-gray-700 mb-10  cursor-pointer ">suggestion</p></Link>
      {/* Add more menu items as needed */}
    </div>
  );
}

export default Sidebar;
