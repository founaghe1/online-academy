import React,{useEffect, useState} from "react";
import 'bootstrap/dist/js/bootstrap.min.js'
import './style.css'
import CartLive from "./CartLive";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


//firebase
import {db, storage} from "../../firebase/Firebase";
import {collection, addDoc, getDocs} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";


const Voirlivraison = () => {
  const [show, setShow] = useState(false);
  const [livraison, setLivraison] = useState('')

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const [file, setFile] = useState(null);
  const [url, setURL] = useState("");

  const [title, setTitle] = useState('');     
  const [description, setDescription] = useState('');
  const [lien, setLien] = useState([]);

  const docImageRef = collection(db, 'livraison');

//ajout image sue le storage
  function handleChange(e) {
    if (e.target.files[0])
        setFile(e.target.files[0]);
  }
//ajouter les info sur le firestore
  const handleLivre = async (e) =>{
    e.preventDefault();

    try{
        const path = `/images/${file.name}`;
        const refs =  ref(storage, path);
        uploadBytes(refs, file).then(() =>{
          getDownloadURL(ref(storage, refs)).then((url) =>{
            addDoc(docImageRef, {
              title,
              description,
              lien,
              image : url
      
            })
            // const data = url;
            // setURL(data)
          })
        })   

      //vider les champs
        setTitle('');
        setDescription('');
        setFile(null)
        setLien('');

        //alert de l'ajout
        alert('la livraison est passe');

      }catch(err){
        console.error(err);
      }
  }

  const getLivraison =async () =>{
    try{
    const data = await getDocs(docImageRef);
        const livData = data.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setLivraison(livData);
        setLivraison(livData);
      }catch (err) {
        console.error("Error getting documents: ", err);
      }
  }

  useEffect(() => {
    getLivraison();

     }, []);
  // useEffect(() =>{
  //   handleLivre()
  // },[])

  return (
    <>
     <div className="d-flex justify-content-end mt-5">
     <Button className="btn btn-ca shadow mb-5 p-2 mt-3" variant="primary" onClick={handleShow}>
     Envoyer mon travail
      </Button>
     </div>
      
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton className="cart-liv">
          <Modal.Title>Envoyer Mon Travail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form action="">
                  <div className=" mb-4">
                    <select className="form-select rounded border border-warning p-3" aria-label="Default select example" name='tache'
                     value={title} onChange={(e)=> setTitle(e.target.value)}>
                      <option selected>Choisir une tâche</option>
                      <option value="Tâche 1">Tâche 1</option>
                      <option value="Tâche 2">Tâche 2</option>
                      <option value="Tâche 3">Tâche 3</option>
                    </select>
                  </div>
                  <div className="mb-4 border border-warning">
                    <input
                      type="text"
                      className="form-control  rounded p-3" 
                      value={lien} onChange={e => setLien(e.target.value)} 
                      id="exampleFormControlInput1"
                      placeholder="Lien de Deploiment"/>
                  </div>
                  <div className="mb-4">
                    <textarea value={description}
                      className="form-control rounded border border-warning"
                      onChange={e => setDescription(e.target.value)}
                      placeholder="Description"
                      rows="3"
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-center  bg-body rounded mb-5 p-4 border border-warning">
                      <input type="file" className="border border-danger rounded p-3" multiple onChange={handleChange} placeholder="Ajouter Images"/>
                  </div>
                  <div className="d-grid">
                    <button type="button" className="btn btn-lg rounded btn-send" onClick={handleLivre}> Envoyer</button>
                  </div>
                </form>
        </Modal.Body>
        
      </Modal>
      <div className="container">
        <div className="row">
              <CartLive />
        </div>
      </div>
    </>
  );
};

export default Voirlivraison;
