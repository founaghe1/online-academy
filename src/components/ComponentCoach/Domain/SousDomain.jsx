import React, { useState, useEffect } from "react";
import "./domain.css";
import { BiEdit } from "react-icons/bi";
import { GrView } from "react-icons/gr";
import { IoMdArchive } from "react-icons/io";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useParams } from "react-router-dom";
import { db, storage } from "../../firebase/Firebase"; // Importez correctement les dépendances
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
// toast notification
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SousDomain = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Ajout des domaines dans la base de donnees
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);
  const [url, setURL] = useState();
  const [titre, setTitre] = useState();
  const [description, setDescription] = useState();

  function handleChange(e) {
    if (e.target.files[0]) setFile(e.target.files[0]);
  }

  const handleSousDomaines = async (e) => {
    e.preventDefault();
    const path = `/Assets/img/${file.name}`;
    const refs = ref(storage, path);

    uploadBytes(refs, file).then(() => {
      getDownloadURL(ref(storage, refs)).then((url) => {
        const data = url;
        setURL(data);
      });
    });

    try {
      const domaineDocRef = doc(db, "domaines", domaineId);
      const domaineDocSnapshot = await getDoc(domaineDocRef);

      if (domaineDocSnapshot.exists()) {
        const sousDomainesCollectionRef = collection(
          domaineDocRef,
          "sousDomaines"
        );

        // Vérifier si la sous-collection existe
        const sousDomainesCollectionSnapshot = await getDocs(
          sousDomainesCollectionRef
        );
        if (sousDomainesCollectionSnapshot.empty) {
          // Créer la sous-collection si elle n'existe pas
          await setDoc(
            domaineDocRef,
            { hasSousDomaines: true },
            { merge: true }
          );
        }

        // Créer le document dans la sous-collection
        await addDoc(sousDomainesCollectionRef, {
          titre,
          description,
          imageURL: url,
          date: new Date().getTime(),
        });

        // Vider les champs
        setTitre("");
        setDescription("");

        // Alert de l'ajout
        alert("Ajout de sous-domaine réussi");
        // window.location.reload();
        toast.success("Ajout sous-domaine réussi !", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        console.error("Domaine introuvable");
      }
    } catch (err) {
      console.error(err);
    }
  };

  // const [file, setFile] = useState(null);
  // const [image, setImage] = useState(null);
  // const [url, setURL] = useState();
  // const [titre, setTitre] = useState();
  // const [description, setDescription] = useState();
  // const routePrince = "/coach/dashboard/domain/";
  // const route = `${routePrince}${titre}`
  //   .toLowerCase()
  //   .normalize("NFD")
  //   .replace(/[\u0300-\u036f]/g, "")
  //   .replace(/ /g, "-");

  // const docSousDomaineRef = collection(db, "sousdomaines");

  // function handleChange(e) {
  //   if (e.target.files[0]) setFile(e.target.files[0]);
  // }

  // const handleSousDomaines = async (e) => {
  //   e.preventDefault();
  //   const path = `/Assets/img/${file.name}`;
  //   const refs = ref(storage, path);
  //   uploadBytes(refs, file).then(() => {
  //     getDownloadURL(ref(storage, refs)).then((url) => {
  //       const data = url;
  //       setURL(data);
  //     });
  //   });

  //   try {
  //     await addDoc(docSousDomaineRef, {
  //       titre,
  //       description,
  //       imageURL: url,
  //       domaineId,
  //       route,
  //       date: new Date().getTime(),
  //     });

  //     //vider les champs

  //     setTitre("");

  //     //alert de l'ajout
  //     alert("Ajout Domaine réussi");
  //     window.location.reload();
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  //   // Recuperation des sous-domaines
  //   const { domaineId } = useParams();
  // const [sousDomaines, setSousDomaines] = useState([]);

  //   useEffect(() => {
  //     const fetchSousDomaines = async () => {
  //       try {
  //         const sousDomainesCollectionRef = collection(db, 'sousdomaines');
  //         const q = query(sousDomainesCollectionRef, where('domaineId', '==', domaineId));
  //         const sousDomainesSnapshot = await getDocs(q);
  //         const sousDomainesData = sousDomainesSnapshot.docs.map((doc) => doc.data());

  //         setSousDomaines(sousDomainesData);
  //         console.log('Sous-domaines récupérés :', sousDomainesData);
  //       } catch (error) {
  //         console.error('Erreur lors de la récupération des sous-domaines :', error);
  //       }
  //     };

  //     fetchSousDomaines();
  //   }, [domaineId]);

  // Recuperation des domaines dans la base de donnees
  // const { domaineId } = useParams();
  // const [sousDomaines, setSousDomaines] = useState([]);

  // const sousdomainesCollectionRef = collection(db, "sousdomaines");

  // const getSousDomaines = async () => {
  //   try {
  //     const q = query(sousdomainesCollectionRef, where('domaineId', '==', domaineId), orderBy('date', 'asc')); // Ajoutez orderBy ici
  //     const data = await getDocs(q)
  //     const filteredData = data.docs.map((doc) => ({
  //       id: doc.id,
  //       ...doc.data(),
  //     }));
  //     setSousDomaines(filteredData);
  //   } catch (err) {
  //     console.error("Error getting documents: ", err);
  //   }
  // };

  // useEffect(() => {
  //   // call the function here to fetch all the user list in realtime
  //   getSousDomaines();
  // }, []);\

  const { domaineId } = useParams();
  const [sousDomaines, setSousDomaines] = useState([]);
  const [domaines, setDomaines] = useState([]);
  // const fetchSousDomaines = async () => {
  //   try {
  //     const domaineDocRef = doc(db, "domaines", domaineId);
  //     const domaineDocSnapshot = await getDoc(domaineDocRef);

  //     if (domaineDocSnapshot.exists()) {
  //       const sousDomainesCollectionRef = collection(domaineDocRef, "sousDomaines");
  //       const q = query(sousDomainesCollectionRef, orderBy("date", "asc"));

  //       const sousDomainesSnapshot = await getDocs(q);
  //       const sousDomainesData = sousDomainesSnapshot.docs.map((doc) =>
  //         doc.data()
  //       );

  //       setSousDomaines(sousDomainesData);
  //     } else {
  //       console.error("Domaine introuvable");
  //     }
  //   } catch (error) {
  //     console.error("Erreur lors de la récupération des données : ", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchSousDomaines();
  // }, [domaineId]);

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
    <div className="container domain">
      <h1>Sous-domaines </h1>
      <div className="join pt-3">
        <button className="add_domain rounded-3" onClick={handleShow}>
          <span>Ajouter</span>
        </button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Ajout de sous-domaine</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="add_file">
              <label htmlFor="illustration">Image du domaine :</label>
              <input
                type="file"
                id="illustration"
                name="illustration"
                accept="image/png, image/jpeg"
                onChange={handleChange}
              />
            </div>
            <div class="input-wrapper">
              <label htmlFor="name_dom">Nom du sous-domaine</label>
              <input
                type="text"
                id="name_dom"
                name="name_dom"
                placeholder="Entrer le nom du sous-domaine"
                class="name_dom"
                value={titre}
                onChange={(e) => setTitre(e.target.value)}
              />
            </div>
            <div class="input-wrapper">
              <label htmlFor="name_dom">Description du sous-domaine</label>
              <input
                type="text"
                id="name_dom"
                name="desc_dom"
                placeholder="Entrer le nom du sous-domaine"
                class="name_dom"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Annuler
            </Button>
            <Button
              variant="default"
              style={{ backgroundColor: "#8a70d6", color: "white" }}
              onClick={handleSousDomaines}
            >
              Ajouter
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      <div className="row">
        {sousDomaines.map((sousDomaine) => (
          <div
            className="_kolon col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center mt-4"
            key={sousDomaine.id}
          >
            <div className="join d-flex right-0">
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
                  <div className="row ike justify-content-center align-items-center">
                    <div className="col-4">
                      <Link
                        to={`/coach/dashboard/domain/sous-domains/${sousDomaine.id}`}
                      >
                        <GrView />
                      </Link>
                    </div>
                    <div className="col-4">
                      <BiEdit />
                    </div>
                    <div className="col-4">
                      <IoMdArchive />
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SousDomain;
