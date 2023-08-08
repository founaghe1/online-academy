import React from 'react'
import { BsSearch, BsSliders,  } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import {PiPencilSimpleLineDuotone} from "react-icons/pi"
import avatar from "../../medias/avatar.jpg"
import './navbar.css'

const navbar = () => {
  return (
    <>
      <nav class="navbar bg-white">
                <div class="container-fluid ">
                    <form className='navForm d-flex'>
                        <div className='me-5 '> 
                            <h1>Dashboard</h1>
                        </div>
                        <div class="input-group recherche shadow rounded-5">

                            <span class="input-group-text bg-white rounded-start-4" id="basic-addon1">
                                <BsSearch />
                            </span>
                            <input type="text" class="form-control " placeholder="Search..." />
                            <span class="input-group-text rounded-end-4 bg-white" id="basic-addon1">
                                <BsSliders />
                            </span>
                        </div>
                    </form>
                    <ul class="ms-auto list-unstyled  d-flex align-items-center navList">
                        <li>
                            <a href="/">
                                <IoMdNotificationsOutline className='fs-4 text-black' />
                            </a>
                        </li>
                        <li >
                            <div className='d-flex align-items-center'>
                                <img src={avatar} class="rounded-4 " alt="" width="50" />
                                <p className='d-none d-sm-inline'>
                                    <br />
                                    <span>Bb Yacine</span>
                                    <br />
                                    <span>ydk@gmail.com</span>
                                </p>
                                <div class="dropdown d-lg-none d-md-none">
                                    <a class="btn dropdown-toggle fs-4" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {/* <BsCaretDownFill/> */}
                                    </a>

                                    <ul class="dropdown-menu dropdown-menu-end">
                                        <li><a class="dropdown-item" href="/">Bb Yacine</a></li>
                                        <li><a class="dropdown-item" href="/">ydk@gmail.com</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="/">
                                <PiPencilSimpleLineDuotone className='fs-4 text-black' />
                            </a>
                        </li>

                    </ul>
                </div>
            </nav >
    </>
  )
}

export default navbar
