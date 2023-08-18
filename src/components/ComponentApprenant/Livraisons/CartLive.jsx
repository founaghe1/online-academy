import React from 'react'
import {GrView} from 'react-icons/gr'
import {FcAcceptDatabase} from 'react-icons/fc'
import img1 from '../../../Assets/img3.webp'
import './style.css'

const CartLive = () => {
  return (
    <div>
        <div class="card shadow-sm cart-liv mb-3">
          <div class=''>
              <h3 class="">Tache</h3>
              <p class="">Some quick example text </p>
          </div>
          <div class="">
              <img src={img1} className="img-fluid mb-3" alt="..." />
          </div>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <div className="col d-flex justify-content-between align-items-center">
            <button type="button" className="btn btn-car1 btn-sm" data-bs-toggle="modal" data-bs-target="#modal0">
                <GrView className='me-2'/>Voir</button>
            </div>
           <div className="col d-flex justify-content-between align-items-center">
           <button type="button" className="btn btn-cart1 btn-sm" data-bs-toggle="modal" data-bs-target="#modal1">
                <FcAcceptDatabase className='me-2'/>Commentaire</button>
           </div>
          </div>
        </div>
         {/* <!-- Modal --> */}
         <div class="modal fade" id="modal0" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Mon travail</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <img src={img1} className="card-img-top" height='550px' alt="..." />
                </div>
                </div>
            </div>
        </div>
         {/* <!-- Modal --> */}
         <div class="modal fade" id="modal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Mon travail</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div>
                  <h3 className="">Tache</h3>
                  <p className="">Some quick example text </p>
                  </div>
                <div class="mb-4 border border-warning">
                  <input type="text" class="form-control  rounded p-3" id="exampleFormControlInput1" 
                placeholder="Commentaire" />
              </div>
                </div>
                <div class="modal-footer"></div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default CartLive
