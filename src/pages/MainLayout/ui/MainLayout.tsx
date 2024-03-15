import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from 'widgets/navbar'

export const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}
