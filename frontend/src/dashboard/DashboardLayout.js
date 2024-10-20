import React from 'react'
import {Link,  Outlet } from 'react-router-dom'
import DashSidebar from './DashSidebar'

const DashboardLayout = () => {
  return (
    <div className='flex gap-4 flex-col md:flex-row h-auto'>
      {/* Sidebar */}
      <DashSidebar />

      {/* Content Outlet */}
      <div className="flex-1"> {/* Make sure the outlet takes the remaining space */}
        <Outlet />
      </div>
    </div>
  )
}

export default DashboardLayout