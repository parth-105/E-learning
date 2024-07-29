import { ProfileCard } from '@/component/ProfileCard'
import { ComplexNavbar } from '@/component/ProfileMenu'
import React from 'react'

function page() {
  return (
    <div>
      <h1>profile</h1>
      <ComplexNavbar/>
      <ProfileCard/>
    </div>
  )
}

export default page
