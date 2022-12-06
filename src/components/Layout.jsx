import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {

  return (
    <main className='font-barlow w-full min-h-screen bg-veryDarkBlue'>
      <Sidebar />
      <Outlet />
    </main>
  )
}

export default Layout