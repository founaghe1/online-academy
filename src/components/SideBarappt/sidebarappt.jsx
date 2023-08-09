import React from 'react'
import {
  BsFillGridFill, BsFillSendFill, BsFillBagFill,
 
} from "react-icons/bs"; 
import {PiChatsCircleFill} from 'react-icons/pi'
import {GrDomain} from 'react-icons/gr'
import './sidebarappt.css'
import logo from "../../medias/logo.jpeg"
import dk from '../../medias/dk.jpeg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const sidebarappt = () => {
  return (
    <>
    <div className='fixed-top sideBar'>
             <ul className='list-unstyled text-muted '>

                 <li className='logo ms-5'>
                     <img src={logo} className='lo ' alt="" />
                 </li>
                 <li className='liste  '>
                     <a href='/' className='nav-link active my-3' aria-current="page">
                         <BsFillGridFill className='fs-3 mb-3'/>
                         <span className='mx-2 d-none d-sm-inline fs-3'>
                             Dashboard
                         </span>
                     </a>
                 </li>
                 <li className=''>
                     <a href='/' className='nav-link my-3'>
                         <BsFillBagFill className='fs-4 mb-3'/>
                         <span className='mx-2 d-none d-sm-inline fs-4 mt-5'>
                             Domaines
                         </span>
                     </a>
                 </li>
                 <li className=''>
                     <a href='/' className='nav-link my-3'>
                         <BsFillSendFill className='fs-4 mb-3'/>
                         <span className='mx-2 d-none d-sm-inline fs-4 mt-5'>
                             Mes livraisons
                         </span>
                     </a>
                 </li>
                 <li className=''>
                     <a href='/' className='nav-link my-3'>
                         <PiChatsCircleFill className='fs-4 mb-3'/>
                         <span className='mx-2 d-none d-sm-inline fs-4 mt-5'>
                            Chats
                         </span>
                     </a>
                 </li>
                 {/* <li>
                     <a href='/' className='nav-link my-3'>
                         <PiStudentFill className='fs-4 mb-3'/>
                         <span className='mx-2 d-none d-sm-inline fs-4 mt-5'>
                             Apprenants
                         </span>
                     </a>
                 </li> */}
                 <br />
                
                 {/* <Card style={{ width: '18rem' }}>
      <Card.Img   src={dk} alt="" className='w-80 '/> 

      <Card.Body>
        <Card.Title>Online Academy</Card.Title>
        <Card.Text>
          princesse
        </Card.Text>
        <Button variant="primary justify-content-center align-items-center">valider</Button>
      </Card.Body>
    </Card> */}
             </ul>
         </div>
   

 </>
  )
}

export default sidebarappt
