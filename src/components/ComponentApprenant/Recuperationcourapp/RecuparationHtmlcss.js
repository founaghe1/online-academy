import React from 'react'
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";

import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import {
  collection,
  getDocs,
  doc,
  onSnapshot,
  query,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

import { db } from "../../firebase/Firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const RecuparationHtmlcss = () => {
    const [cours, setCours] = useState([]);
    const apprenant = async () => {
      const querySnapshot = await getDocs(collection(db, "cours"));
      const data = querySnapshot.docs
        .map((doc) => ({ id: doc.id, ...doc.data() }))
        .filter((cours) => cours.SousDomaine === "htmlcss");
      setUsers(data);
    };

    useEffect(() => {
      apprenant();
    }, []);
  return (
    <>
<h1>Tache Html Css</h1>
      <div className='container'>
        <div className='row'>
          {cours.map((user, id) => {
            return (
              <div className='col-lg-4 col-md-4'>
                <div class='car mt-4 '>
                  <p key={user.id}>
                    {/* <th>{index + 1}</th> */}
                    <span>
                      <ReactPlayer
                        url={user.url}
                        controls
                        width='100%'
                        height='350px'
                      />
                    </span>
                    <p>{user.Domaine}</p>
                    <p>{user.SousDomaine}</p>
                    <p>{user.Debut}</p>
                    <p>{user.Durée}heure</p>

                    <p className='icon d-flex justify-content-center align-items-center '>
                      <div className='ms-auto'>
                        <button
                         
                          className='btn btn-primary text-left-0'
                        >
                          <FiEdit />
                        </button>

                        <button
                          className='btn btn-danger text-left-50 m-2'
                         
                        >
                          <RiDeleteBinLine />
                        </button>
                      </div>
                    </p>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        </div>
    </>
  )
}
