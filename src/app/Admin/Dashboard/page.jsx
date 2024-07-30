import InstructorVideoList from '@/component/Instructorvideo'
import { ComplexNavbar } from '@/component/ProfileMenu'
import React from 'react'

function page() {
  return (
    <div className='flex h-screen'>
      <div className=" md:w-full overflow-y-auto  justify-center h-screen scrollbar-hide ">
        <div className='sticky z-30 mb-4'>
          <ComplexNavbar />
        </div>
        <div className='overflow-y-auto  h-screen '>
        <InstructorVideoList/>
        </div>
      </div>
    </div>
  )
}

export default page
