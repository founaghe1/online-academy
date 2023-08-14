import React from "react";
import NavBar from "../NavBar/Navbar";
import SideBar from "../SideBar/Sidebar";
import Modale from "../Cour/Modal";
import Coure from "../Cour/Cour";
import PageAccueilCoach from "../pageAccueilCoach/PageAccueilCoach";
const Dashboards = () => {
  return (
    <>
      <div className="container-fluid">
        <PageAccueilCoach />

        <Modale />
        <Coure />
      </div>
    </>
  );
};

export default Dashboards;
