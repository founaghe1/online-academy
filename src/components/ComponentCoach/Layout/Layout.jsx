import React from "react";
import Sidebar from "../SideBar/Sidebar";
import Navbar from "../NavBar/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 min-vh-100 bg-white">
            <Sidebar />
          </div>
          <div className="col-10">
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
