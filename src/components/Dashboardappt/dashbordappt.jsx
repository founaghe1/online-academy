import React from 'react'
import SideBarappt from '../SideBarappt/sidebarappt'
import NavBarappt from '../NavBarappt/navbarappt'
const dashbordappt = () => {
  return (
    <>
    
    <div className='container-fluid' >
    <div className='row'>
        <div className='col-2 min-vh-100 bg-white'>
            <SideBarappt />
        </div>
        <div className='col-10'>
            <div className='row bg-primary-subtle '>
                <NavBarappt />

            </div>
        </div>
    </div>
</div>
   </>
  )
}

export default dashbordappt
