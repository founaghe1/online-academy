import React from 'react'
import img from './img6.jpeg' 
import {GrView} from 'react-icons/gr'
import {FcAcceptDatabase} from 'react-icons/fc'
import {TbPlayerEject} from 'react-icons/tb'

const Cart = () => {
  return (
      <div>
          <div className="card mt-4">
            <h3 className="">Tache</h3>
            <p className="">Some quick example text </p>
            <div className="">
            <img src={img} className="img-fluid mb-3" alt="..." />
          </div>
          <div className="d-flex justify-content-between align-items-center">
              <button type="button" className="btn btn-sm btn-car"
               data-bs-toggle="modal" data-bs-target="#exampleModal"><GrView />Voir</button>
              <button type="button" className="btn btn-sm btn-cart"><FcAcceptDatabase/>Accepter</button>
              <button type="button" className="btn btn-sm btn-cartt"><TbPlayerEject />Rejeter</button>
          </div>  
      </div>

        {/* <!-- Modal --> */}
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Voir Livraison</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
