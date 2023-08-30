import React from "react";
// import Sidebar from "../SideBar/Sidebar";
import Navbar from "../NavBar/Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "../SideBar/Sidebar";

const Layout = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2">
            <Sidebar />
          </div>
          <div className="col-lg-10">
            <div className="row bg-primary-subtle ">
              <Navbar />
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
