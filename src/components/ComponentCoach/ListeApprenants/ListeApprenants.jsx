import React from 'react'
import { Table } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useState, useEffect } from "react";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import {
  collection,
  getDocs,
  doc,
  onSnapshot,
  query,
} from "firebase/firestore";

import { db } from "../../Firebase/Firebase";

const ListApprenants = () => {
  const [Apprenant, setApprenant] = useState([]);
  const [users, setUsers] = useState([]);
  const [usersList, setUsersList] = useState([]);
  
  const usersCollectionRef = collection(db, "users");
  const getUsersList = async () => {
    try {
      const data = await getDocs(usersCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsersList(filteredData);
    } catch (err) {
      console.error("Error getting documents: ", err);
    }
  };

  useEffect(() => {
    // call the function here to fetch all the user list in realtime
    getUsersList();
  }, []);

  // filter
  const [filterName, setFilterName] = useState("");
  //  const [selectedStatus, setSelectedStatus] = useState("Tout");
  //  const [selectedDomaine, setSelectedDomaine] = useState("Domaine");

  // paginnation
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5; // Nombre d'utilisateurs par page

  useEffect(() => {
    Apprenantlist();
  }, []);

  const Apprenantlist = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    const data = querySnapshot.docs
      .map((doc) => ({ id: doc.id, ...doc.data() }))
      .filter((users) => users.status === "Apprenant");
    setUsers(data);
  };

  useEffect(() => {
    Apprenantlist();
  }, []);

  const filteredApprenant = users
    .filter((user) => {
      const nameMatch = user.prenom
        .toLowerCase()
        .includes(filterName.toLowerCase());



      return nameMatch;
    })
    .slice((currentPage - 1) * usersPerPage, currentPage * usersPerPage);


  const countApprenant = usersList.filter(
    (user) => user.status === "Apprenant"
  ).length;
  return (
    <>
      <div className='container'>
        <h3 className='text-center mt-4'>Listes des Apprenants</h3><br />
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
            {filteredApprenant.map((Apprenant) => (
              <tr key={Apprenant.id}>
                <th scope='row'>
                  <img
                    src={Apprenant.profileImageUrl}
                    alt='avatar'
                    className='rounded-pill border border-1 img-profil'
                  />
                </th>
                <td>{Apprenant.prenom}</td>
                <td>{Apprenant.nom}</td>
                <td>{Apprenant.email}</td>
                <td>{Apprenant.phone}</td>
                <td>{Apprenant.domaine}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className='row mt-3 float-end'>
          <div className='pagination d-flex justify-content-end pt-2 pb-5'>
            <button
              className='btn btnPrecedn shadow d-flex justify-content-center align-items-center'
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              <BiSolidLeftArrow />
              <BiSolidLeftArrow />
            </button>
            <span className='fw-bold d-flex justify-content-center align-items-center px-3  nbrPages rounded text-light mx-1'>
              {currentPage}
            </span>
            <button
              className='btn btn-secondary btnSuiv shadow d-flex justify-content-center align-items-center'
              disabled={filteredApprenant.length < usersPerPage}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              <BiSolidRightArrow />
              <BiSolidRightArrow />
            </button>
          </div>
        
        </div>
      </div>
    </>
  );
}
export default ListApprenants;