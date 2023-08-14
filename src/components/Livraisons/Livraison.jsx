import React from 'react'
import Cart from './Cart'
import './style.css'
import {IoMdNotifications} from 'react-icons/io'

const Livraison = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
        <nav class="navbar navbar-expand-lg ">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Dashboad / livraison</a>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#"><IoMdNotifications className='icon' /></a>
                    </li>
                </ul>
              </div>
            </div>
            </nav>
        </div>
        <div className="row">
            <h3 className='title'>Livraisons</h3>
            <div className="col-md-3">
                <Cart />
            </div>
            <div className="col-md-3">
                <Cart />
            </div>
            <div className="col-md-3">
                <Cart />
            </div>
            <div className="col-md-3">
                <Cart />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Livraison
