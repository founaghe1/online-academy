import React from 'react'
import { Table } from 'react-bootstrap'
import { AiOutlineSearch } from "react-icons/ai";
import Button from 'react-bootstrap/Button';

import './ListeApprenants.css'
const ListeApprenants = () => {
  return (
    <>
      <div className='container'>
        <h3 className='text-center mt-4'>
          Listes des apprenants
        </h3>
        <div class="input-group">
          <span class="input-group-text" id="basic-addon1">
            <AiOutlineSearch className="fs-4 fw-bold search-icon" />
          </span>
          <input
            type="search"
            class="form-control"
            placeholder="Recherche"
            aria-label="Recherche"
            aria-describedby="basic-addon1"
          />
        </div>
        <br />
        <Table striped bordered hover responsive>
          <thead className='pro'>
            <tr>
              <th scope="col">Profil</th>
              <th scope="col">Nom et Prénom</th>
              <th scope="col">Email</th>
              <th scope="col">Domaine</th>
              <th scope="col">Durée de formation / mois</th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <img
                  src="https://api.dicebear.com/6.x/adventurer/svg?seed=Angel"
                  alt="avatar" className="rounded-pill border border-1 img-profil"
                />


              </th>
              <td>Saliou Thioune</td>
              <td>saliouthioune@gmail.com</td>
              <td>Programmation</td>
              <td>3mois</td>

            </tr>
            <tr>
              <th scope="row">
                <img
                  src="https://api.dicebear.com/6.x/adventurer/svg?seed=Max"
                  alt="avatar"
                  className="rounded-pill border border-1 img-profil"
                />



              </th>
              <td>Nini Senghor</td>
              <td>ninisenghor@gmail.com</td>
              <td>Marketing Digital</td>
              <td>6mois</td>

            </tr>
            <tr>
              <th scope="row">
                <img
                  src="https://api.dicebear.com/6.x/adventurer/svg?seed=Angel"
                  alt="avatar" className="rounded-pill border border-1 img-profil"
                />


              </th>
              <td>Sarifou Diallo</td>
              <td>sarifoudiallo@gmail.com</td>
              <td>Design</td>
              <td>9mois</td>
            </tr>
            <tr>
              <th scope='row'>
                <img
                  src="https://api.dicebear.com/6.x/adventurer/svg?seed=Max"
                  alt="avatar"
                  className="rounded-pill border border-1 img-profil"
                />
              </th>

              <td>Yacine Diop</td>
              <td>yacinediop@gmail.com</td>
              <td>Bureautique</td>
              <td>5mois</td>
            </tr>
            <tr>
              <th scope='row'>
                <img
                  src="https://api.dicebear.com/6.x/adventurer/svg?seed=Angel"
                  alt="avatar" className="rounded-pill border border-1 img-profil"
                />


              </th>

              <td>Yagouba Ba</td>
              <td>yagoubaba@gmail.com</td>
              <td>Design</td>
              <td>5mois</td>
            </tr>
            <tr>
              <th scope='row'>
                <img
                  src="https://api.dicebear.com/6.x/adventurer/svg?seed=Angel"
                  alt="avatar" className="rounded-pill border border-1 img-profil"
                />


              </th>

              <td>Baba Thiam</td>
              <td>babathiam@gmail.com</td>
              <td>Programmation</td>
              <td>5mois</td>
            </tr>
          </tbody>

        </Table>
        <div className="row mt-3 float-end">
      <div className="col-4 prev rounded text-white">   
         <Button variant="primary">prev</Button>
         </div>
        <div className="col-4 pt-3 ms text-center">1</div>
        <div className="col-4 prev rounded text-white">   
         <Button variant="primary">next</Button></div>
      </div>
      </div>
    
    </>
  )
}

export default ListeApprenants
