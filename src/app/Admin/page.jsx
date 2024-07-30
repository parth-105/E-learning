"use client"
import VideoList from '@/component/Getallvideos'
import { ComplexNavbar } from '@/component/ProfileMenu'
import Search from '@/component/Search'
import Sidebar from '@/component/sidebar'
import { SidebarWithLogo } from '@/component/SidebarWithLogo'
import MyComponent from '@/component/uploadfile'
import { Button, Input } from '@material-tailwind/react'
import React from 'react'

function page() {
  return (

    <div className="flex h-screen">
      <div className="w-1/4 h-full hidden md:block ">
        <SidebarWithLogo />
      </div>
      <div className="w-full md:w-3/4 overflow-y-auto  justify-center h-screen scrollbar-hide ">
        <div className='sticky z-30 mb-4'>
          <ComplexNavbar />
        </div>
        <div className='overflow-y-auto  h-screen '>
        <VideoList />
        </div>
      </div>
    </div>

  )
}

export default page
