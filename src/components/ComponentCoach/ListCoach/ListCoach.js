import React from 'react'
import { Table } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useState, useEffect } from "react";
import "./listCoach.css";
import Form from "react-bootstrap/Form";

import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import {
  collection,
  getDocs,
  doc,
  onSnapshot,
  query,
} from "firebase/firestore";

import { db } from "../../firebase/Firebase";

const ListCoach = () => {
  const [coach, setCoach] = useState([]);
  const [users, setUsers] = useState([]);
  const [usersList, setUsersList] = useState([]);

  // filter
  const [filterName, setFilterName] = useState("");
  const [selectedDomaine, setSelectedDomaine] = useState("Domaine");

  // paginnation
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5; // Nombre d'utilisateurs par page

  useEffect(() => {
    coachlist();
  }, []);

  const coachlist = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    const data = querySnapshot.docs
      .map((doc) => ({ id: doc.id, ...doc.data() }))
      .filter((users) => users.status === "Coach");
    setUsers(data);
  };

  useEffect(() => {
    coachlist();
  }, []);

  const filteredUsers = users
    .filter((user) => {
      const nameMatch = user.prenom
        .toLowerCase()
        .includes(filterName.toLowerCase());

      const domaineMatch =
        selectedDomaine === "Domaine" ||
        user.domaine.toLowerCase() === selectedDomaine.toLowerCase();
      return nameMatch && domaineMatch;
    })
    .slice((currentPage - 1) * usersPerPage, currentPage * usersPerPage);



  return (
    <>
      <div className='container'>
        <h3 className='text-center mt-4'>Listes des Coachs</h3>
        <br />
        <div className='d-flex justify-content-between'>
          <div class='input-group'>
            <span class='input-group-text' id='basic-addon1'>
              <AiOutlineSearch className='fs-4 fw-bold search-icon' />
            </span>
            <input
              type='search'
              class='form-control'
              placeholder='Recherche'
              aria-label='Recherche'
              aria-describedby='basic-addon1'
              value={filterName}
              onChange={(e) => setFilterName(e.target.value)}
            />
          </div>
          <br />
          <div className=''>
            <Form.Select
              className="shadow-lg selec"
              aria-label="Default select example"
              value={selectedDomaine}
              onChange={(e) => setSelectedDomaine(e.target.value)}
            >
              <option value="Domaine">Domaines</option>
              <option value="Programmation">Programmation</option>
              <option value="Marketing">Marketing Digital</option>
              <option value="Design">Design</option>
            </Form.Select>
          </div>
        </div>
        <br />
        <br />
        <Table striped bordered hover responsive>
          <thead className='pro'>
            <tr>
              {/* <th scope='col'>id</th> */}
              <th scope='col'>Photo</th>
              <th scope='col'> Prénom</th>
              <th scope='col'>Nom</th>
              <th scope='col'>Email</th>
              <th scope='col'>Téléphone</th>
              <th scope='col'>Domaine</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={index}>
                <th scope='row'>
                  <img
                    src={user.profileImageUrl}
                    alt='avatar'
                    className='rounded-pill border border-1 img-profil'
                  />
                </th>
                <td>{user.prenom}</td>
                <td>{user.nom}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.domaine}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className='row mt-3 float-end'>
          <div className='pagination d-flex justify-content-end pt-2 pb-5'>
            <button
              className='btn butte btnPrecedn shadow d-flex justify-content-center align-items-center '
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              <BiSolidLeftArrow />
              <BiSolidLeftArrow />
            </button>
            <span className='fw-bold bu d-flex justify-content-center align-items-center px-3  nbrPages rounded text-light mx-1'>
              {currentPage}
            </span>
            <button
              className='btn  butte btnSuiv shadow d-flex justify-content-center align-items-center '
              disabled={filteredUsers.length < usersPerPage}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              <BiSolidRightArrow />
              <BiSolidRightArrow />
            </button>
          </div>
          {/* <div className='col-4 prev rounded text-white'>
             <Button
               className='px-2 d-flex fw-bold align-items-center previous'
               disabled={currentPage === 1}
               onClick={() => setCurrentPage(currentPage - 1)}
             >
               <span>
                 <IoIosArrowBack className='fs-4' />
               </span>
               <span>
                 <IoIosArrowBack className='fs-4' />
               </span>
               <span className='fs-4'></span>
             </Button>
           </div>
           <div className='col-4  ms text-center'>
             <span>
               <button
                 className='btn  px-3 mab'
                 disabled={currentPage === 1}
                 onClick={() => setCurrentPage(currentPage - 1)}
               >
                 1
               </button>
             </span>
           </div>
           <div className='col-4 prev rounded text-white'>
             <Button
               className='px-2 d-flex fw-bold align-items-center next'
               disabled={filteredUsers.length < usersPerPage}
               onClick={() => setCurrentPage(currentPage + 1)}
             >
               <span className='fs-4'></span>
               <span>
                 <IoIosArrowForward className='fs-4' />
               </span>
               <span>
                 <IoIosArrowForward className='fs-4' />
               </span>
             </Button>
           </div> */}
        </div>
      </div>
    </>
  );
}
export default ListCoach;
