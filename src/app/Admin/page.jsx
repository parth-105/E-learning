"use client"
import { ComplexNavbar } from '@/component/ProfileMenu'
import Search from '@/component/Search'
import Sidebar from '@/component/sidebar'
import { SidebarWithLogo } from '@/component/SidebarWithLogo'
import { Button, Input } from '@material-tailwind/react'
import React from 'react'

function page() {
  return (
    <div className="flex justify-between w-full h-full ">
    <SidebarWithLogo/>
    <div className='w-full flex justify-center text-black '>
      <div className='mt-8 '>
      <ComplexNavbar/>
      </div>
      </div>
  </div>
  )
}

export default page
