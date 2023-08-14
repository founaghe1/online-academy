import React from 'react'

const CastLien = () => {
  return (
    <div>
         <div className="card mt-4">
            <h5 className="">Tache</h5>
            <p className="">Some quick example text </p>
            <div className="">
            < />
          </div>
          <div className="d-flex justify-content-between align-items-center">
              <button type="button" className="btn btn-sm btn-car"
               data-bs-toggle="modal" data-bs-target="#exampleModal"><GrView />Voir</button>
              <button type="button" className="btn btn-sm btn-cart"><FcAcceptDatabase/>Accepter</button>
              <button type="button" className="btn btn-sm btn-cartt"><TbPlayerEject />Rejeter</button>
          </div>  
      </div>
    </div>
  )
}

export default CastLien
