import React from 'react'
import { Table } from 'react-bootstrap'
import './ListeApprenants.css'
const ListeApprenants = () => {
  return (
    <>
    <h3 className='text-center mt-4'>
        Listes des apprenants
    </h3>
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
                src="https://avatars.dicebear.com/v2/female/4d8f28b9248062aa4fb70f47654d4640.svg"
                alt="profil"
                className="rounded-pill border border-1 img-profil"
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
                src="https://avatars.dicebear.com/v2/female/4d8f28b9248062aa4fb70f47654d4640.svg"
                alt="profil"
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
                src="https://avatars.dicebear.com/v2/female/4d8f28b9248062aa4fb70f47654d4640.svg"
                alt="profil"
                className="rounded-pill border border-1 img-profil"
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
                src="https://avatars.dicebear.com/v2/female/4d8f28b9248062aa4fb70f47654d4640.svg"
                alt="profil"
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
                src="https://avatars.dicebear.com/v2/female/4d8f28b9248062aa4fb70f47654d4640.svg"
                alt="profil"
                className="rounded-pill border border-1 img-profil"
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
                src="https://avatars.dicebear.com/v2/female/4d8f28b9248062aa4fb70f47654d4640.svg"
                alt="profil"
                className="rounded-pill border border-1 img-profil"
              />
            </th>

            <td>Baba Thiam</td>
            <td>babathiam@gmail.com</td>
            <td>Programmation</td>
            <td>5mois</td>
          </tr>
        </tbody>
      </Table>
    </>
  )
}

export default ListeApprenants
