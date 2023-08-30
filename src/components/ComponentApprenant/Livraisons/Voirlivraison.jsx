import React,{useState, useEffect} from "react";
import './style.css'
import CartLive from "./CartLive";


//firebase
import {db, storage} from "../../firebase/Firebase";
import {collection, addDoc} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";


const Voirlivraison = () => {
  
  const [file, setFile] = useState(null);
  const [url, setURL] = useState("");
  // const [livraisons, setLivraisons] = useState([])

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
        setFile('')
        setLien('');

        //alert de l'ajout
        alert('la livraison est passe');

      }catch(err){
        console.error(err);
      }
  }

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-end mt-5">
          <button
            type="button"
            className="btn btn-ca shadow mb-5 p-2 mt-3"
            data-bs-toggle="modal"
            data-bs-target="#mod1"
          >
            Envoyer mon travail
          </button>
        </div>

        {/* <!-- Modal --> */}
        <div
          class="modal bx-shadow fade"
          id="mod1"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <div class="modal-header shadow mb-4">
                <h1 class="modal-title" id="exampleModalLabel">
                  Envoyer mon travail
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <form action="">
                  <div className=" mb-4">
                    <select class="form-select rounded border border-warning p-3" aria-label="Default select example" name='tache'
                     value={title} onChange={(e)=> setTitle(e.target.value)}>
                      <option selected>Choisir une tâche</option>
                      <option value="Tâche 1">Tâche 1</option>
                      <option value="Tâche 2">Tâche 2</option>
                      <option value="Tâche 3">Tâche 3</option>
                    </select>
                  </div>
                  <div class="mb-4 border border-warning">
                    <input
                      type="text"
                      className="form-control  rounded p-3" 
                      value={lien} onChange={e => setLien(e.target.value)} 
                      id="exampleFormControlInput1"
                      placeholder="Lien de Deploiment"/>
                  </div>
                  <div class="mb-4">
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
                  <div className="mb-3 d-grid">
                    <button type="button" className="btn btn-lg rounded btn-send" onClick={handleLivre}> Envoyer</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
              <CartLive />
        </div>
      </div>
    </>
  );
};

export default Voirlivraison;
