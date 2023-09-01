import React from "react";
import { BiEdit } from "react-icons/bi";
import { GrView } from "react-icons/gr";
import { IoMdArchive } from "react-icons/io";
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
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  setDoc,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";
// toast notification
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Domain = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Ajout des domaines dans la base de donnees
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);
  const [url, setURL] = useState();
  const [titre, setTitre] = useState();
  const routeLePrince = "/coach/dashboard/domain/";
  const route = `${routeLePrince}${titre}`
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ /g, "-");

  const docDomaineRef = collection(db, "domaines");

  function handleChange(e) {
    if (e.target.files[0]) setFile(e.target.files[0]);
  }

  const handleDomaines = async (e) => {
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
      await addDoc(docDomaineRef, {
        titre,
        imageURL: url,
        route,
        date: serverTimestamp(),
      });

      //vider les champs

      setTitre("");
      handleClose(); // Fermer la boîte de dialogue de modification
      //alert de l'ajout
      alert("Ajout Domaine réussi");
      // window.location.reload();
      toast.success("Ajout domaine réussi !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (err) {
      console.error(err);
    }
  };

  // // Ajout des domaines dans la base de donnees
  // const [image, setImage] = useState(null);
  // const [titre, setTitre] = useState('');
  // const routeLePrince= '/coach/dashboard/domain/';
  // const route= `${routeLePrince}${titre}`;
  // route
  // .toLowerCase()
  // .normalize("NFD")
  // .replace(/[\u0300-\u036f]/g, "")
  // .replace(/ /g, "-");

  // const handleImageChange = (e) => {
  //   if (e.target.files[0]) {
  //     setImage(e.target.files[0]);
  //   }
  // };

  // const handleImageUpload = () => {
  //   if (image && titre && route) {
  //     const uploadTask = storage.ref(`images/${image.name}`).put(image);
  //     uploadTask.on(
  //       'state_changed',
  //       null,
  //       (error) => {
  //         console.error('Erreur lors du téléchargement de l\'image :', error);
  //       },
  //       () => {
  //         // L'image a été téléchargée avec succès
  //         storage
  //           .ref('images')
  //           .child(image.name)
  //           .getDownloadURL()
  //           .then((url) => {
  //             // Enregistrez l'URL de téléchargement, le nom et la description dans Firestore
  //             db.collection('votreCollection').add({
  //               imageURL: url,
  //               titre: titre,
  //               route: route
  //             })
  //             .then(() => {
  //               console.log('Données enregistrées avec succès.');
  //             })
  //             .catch((error) => {
  //               console.error('Erreur lors de l\'enregistrement des données :', error);
  //             });
  //           });
  //       }
  //     );
  //   }
  // };

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

  // Modale Edite
  const [editModalOpen, setEditModalOpen] = useState(false);

  // État pour suivre les données de l'utilisateur en cours d'édition
  const [editingDoamine, setEditingDoamine] = useState({
    imageURL: url,
    titre: "",
  });

  // fonction pour ouvrir la fenêtre modale d'édition
  const openEditModal = (domaines) => {
    setEditingDoamine({
      imageURL: "",
      titre: "",
    });
    setEditModalOpen(true);
  };

  // fonction pour fermer la fenêtre modale d'édition
  const closeEditModal = () => {
    setEditModalOpen(false);
    setEditingDoamine({
      imageURL: "",
      titre: "",
    });
  };

  // Modifier
  const [editDomaine, setEditDomaine] = useState({
    imageURL: "",
    titre: "",
  });

  const handleEditDomaine = (domaines) => {
    setEditDomaine(domaines);
    handleShow(); // Afficher la boîte de dialogue de modification
  };

  const updateDomaines = async () => {
    const userDocRef = doc(db, "domaines", editingDoamine.id);
    try {
      await updateDoc(userDocRef, {
        imageURL: editingDoamine.url,
        titre: editingDoamine.titre,
      });

      getDomaines(); // Rafraîchir la liste des utilisateurs après la mise à jour
      closeEditModal();
      toast.success("Domaine mis à jour !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (err) {
      console.error(err);
    }
  };

  // const handleUpdateDomaine = async () => {
  //   try {
  //     if (!editDomaine) {
  //       return;
  //     }

  //     const domaineDocRef = doc(db, "domaines", editDomaine.id);
  //     await updateDoc(domaineDocRef, {
  //       // Mettez ici les champs que vous voulez mettre à jour
  //       titre: editDomaine.titre,
  //       description: editDomaine.description,
  //       imageURL: editDomaine.url,
  //       date: serverTimestamp(),
  //     });

  //     handleClose(); // Fermer la boîte de dialogue de modification
  //     alert("Domaine mis à jour avec succès");
  //     getDomaines(); // Mettez à jour la liste des domaines après la modification
  //   } catch (error) {
  //     console.error("Erreur lors de la mise à jour du domaine : ", error);
  //   }
  // };

  return (
    <div className="container domain">
      <h1>Domaines de formation</h1>
      <div className="join pt-3">
        <button className="add_domain rounded-3" onClick={handleShow}>
          <span>Ajouter</span>
        </button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Ajout de domaine</Modal.Title>
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
              <label htmlFor="name_dom"></label>
              <input
                type="text"
                id="name_dom"
                name="name_dom"
                placeholder="Entrer le nom du domaine"
                class="name_dom"
                value={titre}
                onChange={(e) => setTitre(e.target.value)}
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
              onClick={handleDomaines}
            >
              Ajouter
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      <div className="row">
        {domaines.map((domaine) => (
          <div
            className="_kolon col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center mt-4"
            key={domaine.id}
          >
            <Card
              style={{ width: "15rem" }}
              className="_grid item1 orangeclair shadow"
            >
              <div className="p-4">
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
                {/* <Card.Text>{domaine.nbre_cours} sous-domaines</Card.Text> */}

                <div className="row ike justify-content-center align-items-center">
                  <div className="col-4">
                    <Link
                      to={`/coach/dashboard/domain/${domaine.id}`}
                      className="join d-flex right-0"
                    >
                      <GrView />
                    </Link>
                  </div>
                  <div className="col-4">
                    <BiEdit onClick={() => openEditModal(domaine)} />
                  </div>
                  <div className="col-4">
                    <IoMdArchive />
                  </div>
                </div>

                {/* <Button
              variant="danger"
              // onClick={() => handleDeleteDomaine(domaine.id)}
            >
              Supprimer
            </Button> */}
              </Card.Body>
            </Card>
          </div>
        ))}
        {/* <div className="_kolon col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center mt-4">
          <Link
            to="/coach/dashboard/domain/marketing"
            className="join d-flex right-0"
          >
            <Card
              style={{ width: "15rem" }}
              className="_grid item2 violetclair shadow"
            >
              <div className="p-4">
                <Card.Img
                  variant="top"
                  className="img-fluid violet"
                  src={Marketer}
                />
              </div>
              <Card.Body>
                <Card.Title>Marketing</Card.Title>
                <Card.Text>07 sous-domaines</Card.Text>
                
              </Card.Body>
            </Card>
          </Link>
        </div>
        <div className="_kolon col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center mt-4">
          <Link
            to="/coach/dashboard/domain/design"
            className="join d-flex right-0"
          >
            <Card
              style={{ width: "15rem" }}
              className="_grid item3 blueclair shadow"
            >
              <div className="p-4">
                <Card.Img
                  variant="top"
                  className="img-fluid blue"
                  src={Designer}
                />
              </div>
              <Card.Body>
                <Card.Title>Design</Card.Title>
                <Card.Text>08 sous-domaines</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </div> */}
      </div>

      {/* Boîte de dialogue de modification */}
      <Modal show={editModalOpen} onHide={closeEditModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modifier le domaine</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Formulaire pré-rempli pour la modification */}
          {editDomaine && (
            <>
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
              <div className="input-wrapper">
                <label htmlFor="titre">Titre</label>
                <input
                  type="text"
                  id="titre"
                  name="titre"
                  className="name_dom"
                  value={editingDoamine.titre}
                  onChange={(e) =>
                    setEditingDoamine({ ...editDomaine, titre: e.target.value })
                  }
                />
              </div>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeEditModal}>
            Annuler
          </Button>
          <Button
            variant="default"
            style={{ backgroundColor: "#8a70d6", color: "white" }}
            onClick={updateDomaines}
          >
            Enregistrer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Domain;
