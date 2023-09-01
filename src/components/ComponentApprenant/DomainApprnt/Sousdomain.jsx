import React, { useState, useEffect } from 'react';
import Programmation from './ProgrammationApprt';
import Marketing from './MarketingApprt';
import Design from './DesignApprt';
import CourCard from '../StudentDashboard/courCard/CourCard';
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/Firebase"; // Importez correctement les dépendances
import {
  doc,
  getDocs,
  getDoc,
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  onSnapshot,
  setDoc,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";

const Sousdomain = () => {

    const { domaineId } = useParams();
    const [sousDomaines, setSousDomaines] = useState([]);
    const [domaines, setDomaines] = useState([]);

    const fetchSousDomaines = async () => {
      try {
        const domaineDocRef = doc(db, "domaines", domaineId);
        const domaineDocSnapshot = await getDoc(domaineDocRef);
  
        if (domaineDocSnapshot.exists()) {
          const sousDomainesCollectionRef = collection(
            domaineDocRef,
            "sousDomaines"
          );
          const q = query(sousDomainesCollectionRef, orderBy("date", "asc"));
  
          // Utiliser onSnapshot pour écouter les changements en temps réel
          onSnapshot(q, (snapshot) => {
            const sousDomainesData = snapshot.docs.map((doc) => doc.data());
            setSousDomaines(sousDomainesData);
          });
  
          // Retourner la fonction de désinscription pour arrêter l'écoute lorsqu'elle n'est plus nécessaire
          // return unsubscribe();
        } else {
          console.error("Domaine introuvable");
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des données : ", error);
      }
    };
  
    useEffect(() => {
      // Appeler la fonction fetchSousDomaines pour commencer l'écoute des changements
      fetchSousDomaines();
  
      // Nettoyer en désinscrivant l'écoute lorsque le composant est démonté
      return () => fetchSousDomaines();
    }, [domaineId]);

  return (
    <>
        <div className="row">
        {sousDomaines.map((sousDomaine) => (
          <div
            className="_kolon col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center mt-4"
            key={sousDomaine.id}
          >
            <div className="join d-flex right-0">
              <Link to={`/coach/dashboard/domain/sous-domains/${sousDomaine.id}`}>
                <Card
                  style={{ width: "15rem" }}
                  className="_grid item1 orangeclair shadow"
                >
                  <div className="img_card p-4 d-flex orange">
                    {sousDomaine.imageURL && (
                      <Card.Img
                        variant="top"
                        className="img-fluid"
                        src={sousDomaine.imageURL}
                      />
                    )}
                  </div>
                  <Card.Body>
                    <Card.Title>{sousDomaine.titre}</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Sousdomain