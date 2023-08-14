import React from 'react'
import NavBar from '../NavBar/Navbar'
import SideBar from '../SideBar/Sidebar'
import Modale from '../Cour/Modal'
import Coure from '../Cour/Cour'
import PageAccueilCoach from '../pageAccueilCoach/PageAccueilCoach'
const Dashboard = () => {
  return (
    <>
    
        <div className='container-fluid' >
            <div className='row'>
                <div className='col-2 min-vh-100 bg-white'>
                    <SideBar />
                </div>
                <div className='col-10'>
                    <div className='row bg-primary-subtle '>
                        <NavBar />
                        <PageAccueilCoach />

                        
                        <Coure />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Dashboard
