
import { ListWithAvatar } from '@/component/ListWithAvatar'
import { StudentNavbar } from '@/component/StudentNavbar'
import React from 'react'

function page() {
  return (
    <div>
      <StudentNavbar/>
      <h1>suggestion</h1>
      <ListWithAvatar/>
    </div>
  )
}

export default page;

