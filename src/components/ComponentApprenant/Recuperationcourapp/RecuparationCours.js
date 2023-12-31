/** @format */
import './recup.css'
import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../firebase/Firebase";
import "react-toastify/dist/ReactToastify.css";
import classnames from "classnames";

const RecuparationCour = () => {
  const [cours, setCours] = useState([]);
  const [courseStatus, setCourseStatus] = useState({});
  const [isStarted, setIsStarted] = useState(false);

  const apprenant = async () => {
    const querySnapshot = await getDocs(collection(db, "cours"));
    const data = querySnapshot.docs
      .map((doc) => ({ id: doc.id, ...doc.data() }))
      .filter((cours) => cours.Domaine === "Design");
    setCours(data);
  };

  useEffect(() => {
    apprenant();
  }, []);

  const startCourse = async (courseId) => {
    try {
      // Mettre à jour la date et l'heure de démarrage dans Firebase
      const courseRef = doc(db, "cours", courseId);
      await updateDoc(courseRef, {
        DateDemarrage: serverTimestamp(),
      });

      // Mettre à jour l'état local
      setCourseStatus((prevStatus) => ({
        ...prevStatus,
        [courseId]: true,
      }));
      setIsStarted(true);
    } catch (error) {
      console.error(
        "Erreur lors de la mise à jour de la date de démarrage :",
        error
      );
    }
  };

  const endCourse = async (courseId) => {
    try {
      // Mettre à jour la date et l'heure de fin dans Firebase
      const courseRef = doc(db, "cours", courseId);
      await updateDoc(courseRef, {
        DateFin: serverTimestamp(),
      });

      // Mettre à jour l'état local pour exclure le cours terminé
      setCourseStatus((prevStatus) => ({
        ...prevStatus,
        [courseId]: false,
      }));
      setIsStarted(false);

      // Exclure le cours terminé de la liste des cours à afficher
      // setCours((prevCours) => prevCours.filter((c) => c.id !== courseId));
      window.location.reload();
    } catch (error) {
      console.error("Erreur lors de la mise à jour de la date de fin :", error);
    }
  };

  return (
    <>
      <h1>Tache</h1>
      <div className='container'>
        <div className='row'>
          {cours.map((id) => {
            const courseId = id.id;
            const isCourseStarted = courseStatus[courseId] || false;
            const isCourseFinished = !isCourseStarted && id.DateFin; // Vérifie si le cours est terminé

            const courseClassName = classnames("car mt-4", {
              "disabled-course": isCourseFinished, // Applique la classe "disabled-course" si le cours est terminé
            });

            return (
              <div className='col-lg-4 col-md-4' key={courseId}>
                <div className={courseClassName}>
                  <span>
                    <ReactPlayer
                      url={id.url}
                      controls
                      width='100%'
                      height='290px'
                    />
                  </span>
                  <div className='mt-2'>
                    <h4 className='color'>{id.SousDomaine}</h4>
                    <h4 className='color'>{id.Debut}</h4>
                    <h4 className='color'>{id.Durée} heure</h4>
                  </div>

                  <p>
                    <div>
                      {isCourseStarted ? (
                        <button
                          className='btn good'
                          onClick={() => endCourse(courseId)}
                        >
                          Terminer
                        </button>
                      ) : isCourseFinished ? (
                        <p>Cours terminé.</p>
                      ) : (
                        <button
                          className='btn good'
                          onClick={() => startCourse(courseId)}
                        >
                          Démarrer
                        </button>
                      )}
                    </div>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RecuparationCour;
