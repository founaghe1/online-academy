import React from "react";
import "./StudentDashboard.css"
import Sidebar from "./sidebar/studentSidebar";
import StudentNavbar from "./Studentnavbar/StudentNavbar";
import CourCard from "./courCard/CourCard";
import ProgressCard from "./progressCard/ProgressCard";

const StudentDashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* <div className="col-lg-2">
          <Sidebar/>
        </div> */}
        <div className="col-lg-10">
          {/* <StudentNavbar/> */}
          <CourCard />
          <ProgressCard />
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
