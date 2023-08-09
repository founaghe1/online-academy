import React from 'react'
import CartLive from './CartLive'

const Voirlivraison = () => {
  return (
    <>
    <div className='container-fluid'>
        <div class='d-flex justify-content-end mt-5'>
        <button type="button" class="btn btn-cart mt-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Envoyer mon travail
        </button>
    </div>
            
    {/* <!-- Modal --> */}
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Envoyer mon travail</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form action="">
              <select class="form-select shadow bg-body rounded border border-warning p-3 mt-4" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <div class="mt-4 border border-warning">
                <input type="text" class="form-control  shadow bg-body rounded p-3" id="exampleFormControlInput1" placeholder="Lien de Deploiment" />
              </div>
              <div class="mt-4">
                <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                <textarea class="form-control  shadow bg-body rounded border border-warning" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div className='d-flex justify-content-center  shadow bg-body rounded mt-4 p-4 border border-warning'>
                  <button type="button" class="btn btn-primary p-2 btn-lg"><a className='nav-link' href="#">Ajouter images</a></button>
              </div>
              <div className='mt-4 d-grid'>
            <button type="button" className="btn btn-lg btn-primary">Envoyer</button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4">
          <CartLive />
        </div>
        <div className="col-md-4">
          <CartLive />
        </div>
        <div className="col-md-4">
          <CartLive />
        </div>
      </div>
    </div>
    </>
  )
}

export default Voirlivraison
