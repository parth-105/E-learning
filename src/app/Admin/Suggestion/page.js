import { ListWithAvatar } from '@/component/ListWithAvatar'
import {ComplexNavbar} from '@/component/ProfileMenu'
import React from 'react'

function page() {
  return (
    <div>
      <ComplexNavbar/>
      <h1>suggestion</h1>
      <ListWithAvatar/>
    </div>
  )
}

export default page
