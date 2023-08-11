import React from 'react'
import NavBar from '../NavBar/Navbar'
import SideBar from '../SideBar/sidebar'
import Modale from '../Cour/Modal'
import Coure from '../Cour/Cour'
import PageAccueilCoach from '../pageAccueilCoach/PageAccueilCoach'
const dashboard = () => {
  return (
    <>
    
<<<<<<< HEAD
    <div className='container-fluid' >
    <div className='row'>
        <div className='col-2 min-vh-100 bg-white'>
            <SideBar />
        </div>
        <div className='col-10'>
            <div className='row bg-primary-subtle '>
                <NavBar />

=======
        <div className='container-fluid' >
            <div className='row'>
                <div className='col-2 min-vh-100 bg-white'>
                    <SideBar />
                </div>
                <div className='col-10'>
                    <div className='row bg-primary-subtle '>
                        <NavBar />
                        <PageAccueilCoach />

                        <Modale />
                        <Coure />
                    </div>
                </div>
>>>>>>> 775f3371ccb56ccac4894c1ba4597c74f2b0510e
            </div>
        </div>
    </>
  )
}

export default dashboard
