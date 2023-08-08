import React from 'react'
import {
  BsFillGridFill, BsCartFill,
  BsFillStarFill,
  BsFillCreditCard2FrontFill,
  BsPersonCircle, BsGraphUpArrow,
  BsGearFill, 
} from "react-icons/bs";
import './sidebar.css'
import logo from "../../medias/rrr.jpeg"
import image from '../../medias/dk.jpeg'
const sidebar = () => {
  return (
    <>
       <div className='fixed-top sideBar'>
                <ul className='list-unstyled text-muted'>

                    <li className='logo ms-5'>
                        <img src={logo} className='w-75 ' alt="" />
                    </li>
                    <li className='liste'>
                        <a href='/' className='nav-link active my-3' aria-current="page">
                            <BsFillGridFill className='fs-3 mb-3'/>
                            <span className='mx-2 d-none d-sm-inline fs-3'>
                                Dashboard
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href='/' className='nav-link my-3'>
                            <BsCartFill className='fs-4 mb-3'/>
                            <span className='mx-2 d-none d-sm-inline fs-4 mt-5'>
                                Domaines
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href='/' className='nav-link my-3'>
                            <BsFillStarFill className='fs-4 mb-3'/>
                            <span className='mx-2 d-none d-sm-inline fs-4 mt-5'>
                                Livraisons
                            </span>
                        </a>
                    </li>
                    <br />
                    <div class="card imgcard ms-4 border-none pb-5">
                        <img src={image} alt="" className='w-80'/> 
                        <div class="card-body rounded-3 shadow">
                            <h5 class="card-title text-center">Card title</h5>
                            <p class="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn">Go somewhere</a>
                        </div>
                    </div>
                </ul>
            </div>
      

    </>
  )
}

export default sidebar
