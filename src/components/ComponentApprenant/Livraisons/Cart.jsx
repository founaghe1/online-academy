import React, {useState} from 'react'
import img from './img6.jpeg' 
import {GrView} from 'react-icons/gr'
import {FcAcceptDatabase} from 'react-icons/fc'
import {TbPlayerEject} from 'react-icons/tb'


const Cart = () => {
  return (
      <div>
          <div className="card mb-3 shadow-sm mt-4">
            <h3 className="">Tache</h3>
            <p className="">Some quick example text </p>
            <div className="">
              <img src={img} className="img-fluid mb-3" alt="..." />
          </div>
          <div className="d-flex justify-content-between mb-2">
              <div className="col-md-4 col-sm-4 d-flex justify-content-between">
                <button type="button" className="btn btn-sm btn-car"
               data-bs-toggle="modal" data-bs-target="#exampleModal"><GrView className='me-2'/>Voir</button>
              </div>
              <div className="col-md-4 col-sm-4 d-flex justify-content-between">
                <button type="button" className="btn btn-sm btn-cart"><FcAcceptDatabase className='me-2'/>Accepter</button>
              </div>
              <div className="col-md-4 col-sm-4 d-flex justify-content-between">
                <button type="button" className="btn btn-sm btn-cartt"><TbPlayerEject className='me-2'/>Rejeter</button>
              </div>
          </div>  
      </div>

        {/* <!-- Modal --> */}
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Voir Livraison</h1>
                <button type="button" class="btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <img src={img} className="card-img-top" height='550px' alt="..." />
            </div>
            <div class="modal-footer">
               
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Cart
