import React from 'react'
import NavBar from '../NavBar/navbar'
import SideBar from '../SideBar/sidebar'
const dashboard = () => {
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

            </div>
        </div>
    </div>
</div>
   </>
  )
}

export default dashboard
