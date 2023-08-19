import React from 'react'
// import NavBar from '../NavBar/Navbar'
// import SideBar from '../SideBar/Sidebar'
// import Modale from '../Cour/Modal'
import Coure from '../Cour/Cour'
import PageAccueilCoach from '../pageAccueilCoach/PageAccueilCoach'
const Dashboard = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {/* <div className="col-lg-2">
            <SideBar />
          </div> */}
          <div className="col-lg-12">
            <div className="row  ">
              {/* <NavBar /> */}
              <PageAccueilCoach />
              {/* <Modale /> */}
              <Coure />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Dashboard
