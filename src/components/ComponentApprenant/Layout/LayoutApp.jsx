import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../StudentDashboard/sidebar/studentSidebar'
import StudentNavbar from '../StudentDashboard/Studentnavbar/StudentNavbar'

const LayoutApp = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2">
          <Sidebar />
        </div>
        <div className="col-lg-10">
          <StudentNavbar/>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default LayoutApp