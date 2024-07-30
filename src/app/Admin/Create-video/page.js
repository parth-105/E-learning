import { ComplexNavbar } from '@/component/ProfileMenu'
import VideoUploadForm from '@/component/VideoUploadForm'
import React from 'react'

function page() {
  return (
    <div>
      <h1>create video</h1>
      <ComplexNavbar/>
      <div className="min-h-screen flex items-center justify-center">
      <VideoUploadForm />
    </div>
    </div>
  )
}

export default page
