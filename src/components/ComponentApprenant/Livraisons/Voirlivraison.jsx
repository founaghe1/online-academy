import React from 'react'
import CartLive from './CartLive'

const Voirlivraison = () => {
  return (
    <>
    <div className='container-fluid'>
        <div className='d-flex justify-content-end'>
          <button  className="btn btn-sm btn-ca shadow mb-5 mt-5" data-bs-toggle="modal" 
            data-bs-target="#mod1">
                  Envoyer mon travail
          </button>
        </div>
    {/* <!-- Modal --> */}
    <div class="modal bx-shadow fade" id="mod1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header shadow mb-4">
            <h1 class="modal-title" id="exampleModalLabel">Envoyer mon travail</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form action="">
              <select class="form-select shadow rounded border border-warning p-3 mb-4" 
                aria-label="Default select example">
                <option selected>Selectionner une tache</option>
                <option value="1">Tache 1</option>
                <option value="2">tache 2</option>
                <option value="3">Tache 3</option>
              </select>
              <div class="mb-4 border border-warning">
                <input type="text" class="form-control  shadow  rounded p-3" id="exampleFormControlInput1" placeholder="Lien de Deploiment" />
              </div>
              <div class="mb-4">
                <textarea class="form-control  shadow rounded border border-warning" placeholder='Description' id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div className='d-flex justify-content-center  shadow bg-body rounded mb-5 p-4 border border-warning'>
              <input type="file" accept='image/*' 
                    placeholder='Ajouter Images' className=' rounded' multiple/>
                  <div className="cap p-4"></div>
              </div>
              <div className='col mb-3'>
                  <button type="button" className="btn btn-lg rounded  btn-send">Envoyer</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <CartLive />
        </div>
        <div className="col-md-3">
          <CartLive />
        </div>
        <div className="col-md-3">
          <CartLive />
        </div>
        <div className="col-md-3">
          <CartLive />
        </div>
      </div>
    </div>
    </>
  )
}

export default Voirlivraison
