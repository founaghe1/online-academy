import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { AiOutlineSearch } from 'react-icons/ai';
import Button from 'react-bootstrap/Button';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import './ListeApprenants.css';
import firebase from 'firebase/compat/app';


const ListeApprenants = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const studentsRef = firebase.firestore().collection('students');
      const snapshot = await studentsRef.get();
      const studentData = snapshot.docs.map(doc => doc.data());
      setStudents(studentData);
    };

    fetchStudents();
  }, []);

  return (
    <>
      <div className="container">
        <h3 className="text-center mt-4">Listes des apprenants</h3>
        <div className="input-group">
          {/* ... votre champ de recherche ici */}
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
        </div>
        <br />
        <Table striped bordered hover responsive>
          <thead className="pro">
            <tr>
              <th scope="col">Profil</th>
              <th scope="col">Nom </th>
              <th scope="col">Prénom</th>
              <th scope="col">Email</th>
              <th scope="col">Domaine</th>
              <th scope="col">Durée de formation / mois</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id}>
                <th scope="row">
                  <img
                    src={student.profileImageUrl}
                    alt="avatar"
                    className="rounded-pill border border-1 img-profil"
                  />
                </th>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.domain}</td>
                <td>{student.duration}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        {/* ... vos boutons de pagination ici */}
        <div className="row mt-3 float-end">

          <div className="col-4 prev rounded text-white">

            <Button className='px-2 d-flex fw-bold align-items-center previous'> <span><IoIosArrowBack className='fs-4' /></span> <span><IoIosArrowBack className='fs-4' /></span> <span className='fs-4'></span></Button>

          </div>

          <div className="col-4  ms text-center"><span><button className='btn  px-3 mab'>1</button></span></div>

          <div className="col-4 prev rounded text-white">

            <Button className='px-2 d-flex fw-bold align-items-center next'><span className='fs-4'></span> <span><IoIosArrowForward className='fs-4' /></span> <span><IoIosArrowForward className='fs-4' /></span></Button></div>

        </div>
      </div>
    </>
  );
};

export default ListeApprenants;