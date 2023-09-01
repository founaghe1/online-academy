import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Card from "react-bootstrap/Card";
import Programmer from "../../../Assets/programmer.png";
import Marketer from "../../../Assets/content-strategy.png";
import Designer from "../../../Assets/web-design.png";
import "./domain.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { db, storage } from "../../firebase/Firebase"; // Importez la configuration Firebase
import {
  getDocs,
  collection,
  doc,
  setDoc,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";

const Domain = () => {

  // Recuperation des domaines dans la base de donnees
  const [domaines, setDomaines] = useState([]);

  const domainesCollectionRef = collection(db, "domaines");

  const getDomaines = async () => {
    try {
      const q = query(domainesCollectionRef, orderBy("date", "asc")); // Ajoutez orderBy ici
      const data = await getDocs(q);
      const filteredData = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDomaines(filteredData);
    } catch (err) {
      console.error("Error getting documents: ", err);
    }
  };

  useEffect(() => {
    // call the function here to fetch all the user list in realtime
    getDomaines();
  }, []);
  
  return (
    <div className='container'>
      <h1>Les domaines de formation</h1>

      <div className='row'>
        {domaines.map((domaine) => (
        <div className='_kolon col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center mt-4'
          key={domaine.id}
        >
          <Link
            to={`/coach/dashboard/domain/${domaine.id}`}
            className='join d-flex right-0'
          >
            <Card
              style={{ width: "15rem" }}
              className='_grid item1 orangeclair shadow'
            >
              <div className='img_card p-4 d-flex orange'>
              {domaine.imageURL && (
                  <Card.Img
                    variant="top"
                    className="img-fluid d-flex orange"
                    src={domaine.imageURL}
                  />
                )}
              </div>
              <Card.Body>
                <Card.Title>{domaine.titre}</Card.Title>
                <Card.Text>10 sous-domaines</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Domain;
