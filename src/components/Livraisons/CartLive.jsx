import React from 'react'
import {GrView} from 'react-icons/gr'
import {FcAcceptDatabase} from 'react-icons/fc'
import img from '../../Assets/img3.webp'
import './style.css'

const CartLive = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col mt-5">
              <div className="card mb-5">
              <h5 className="card-title mt-3">Tache</h5>
              <p className="card-text">Some quick example text </p>
                <div className="card-body">
                <img src={img} className="card-img-top" width='180px' alt="..." />
                </div>
                <div className="card-Footer d-flex justify-content-between">
                    <button type="button" className="btn btn-lin btn-car"><GrView />Voir</button>
                    <button type="button" className="btn btn-lin btn-cart"><FcAcceptDatabase/>Commentaire</button>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CartLive
