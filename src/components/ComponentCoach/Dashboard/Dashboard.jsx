import React from 'react'
// import NavBar from '../NavBar/Navbar'
// import SideBar from '../SideBar/Sidebar'
// import Modale from '../Cour/Modal'
import Coure from '../Cour/Cour';
import Domain from '../Domain/Domain';
import Sidebar from '../SideBar/Sidebar';


const Dashboard = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {/* <div className="col-lg-2">
            <Sidebar />
          </div> */}
          <div className="col-lg-12">
            <div className="row  ">
              {/* <NavBar /> */}
              <Domain />
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
