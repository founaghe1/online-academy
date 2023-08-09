import React from 'react'
import img from './img6.jpeg' 
import {GrView} from 'react-icons/gr'
import {FcAcceptDatabase} from 'react-icons/fc'
import {TbPlayerEject} from 'react-icons/tb'

const Cart = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col mt-5">
              <div className="card">
              <h5 className="card-title mt-3">Tache</h5>
              <p className="card-text">Some quick example text </p>
                <div className="card-body">
                <img src={img} className="card-img-top" alt="..." />
                </div>
                <div className="card-Footer d-flex justify-content-between align-items-center">
                    <button type="button" className="btn btn-lin btn-md btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal"><GrView />Voir</button>
                    <button type="button" className="btn btn-lin btn-md btn-outline-success"><FcAcceptDatabase/>Accepter</button>
                    <button type="button" className="btn btn-lin btn-md btn-outline-danger"><TbPlayerEject />Rejeter</button>
                </div>
              </div>
            </div>
        </div>
      </div>

        {/* <!-- Modal --> */}
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
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
