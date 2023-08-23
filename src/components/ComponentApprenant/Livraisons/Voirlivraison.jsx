import React,{useState} from "react";
import './style.css'
import CartLive from "./CartLive";
import { db } from "../../firebase/Firebase";

//firebase



const Voirlivraison = () => {

  const [title, setTitle] = useState('');     
  const [subtitle, setSubtitle] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);

  const imageSelect = e => {
    const selectImages = Array.from(e.target.files); 
    setImages(selectImages);
};


const ajoutImage = () => {
  const uploadPromises = images.map(image => {
    const uploadTask = db.ref(`images/${image.name}`).put(image);
    return uploadTask;
  })

  Promise.all(uploadPromises)
      .then(results => {
        const downloadUrlPromises = results.map(result =>
          result.ref.getDownloadURL()
        );
        return Promise.all(downloadUrlPromises);
      })
      .then(urls => {
        setImageUrls(urls);
        return db.collection('livraison').add({
          title,
          subtitle,
          description,
          imageUrls: urls,
        });
      })
      .catch(error => {
        console.error('Error uploading content: ', error);
      });
    };

  
  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-end mt-5">
          <button
            type="button"
            className="btn btn-cart shadow mb-5 mt-3"
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
                  {/* <select
                    class="form-select shadow rounded border border-warning p-3 mb-4"
                    aria-label="Default select example"
                  >
                    <option selected>Selectionner une tache</option>
                    <option value="1">Tache 1</option>
                    <option value="2">tache 2</option>
                    <option value="3">Tache 3</option>
                  </select> */}
                  <div className="shadow rounded border border-warning p-3 mb-4">
                    <input className="form-control" type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="entrer le titre" />
                  </div>
                  <div className="shadow rounded border border-warning p-3 mb-4">
                    <input className="form-control" type="text" value={subtitle} onChange={e => setSubtitle(e.target.value)} placeholder="entrer le titre" />
                  </div>
                  <div class="mb-4 border border-warning">
                    <input
                      type="text"
                      className="form-control  shadow  rounded p-3" value={imageUrls} onChange={e => setImageUrls(e.target.value)} 
                      id="exampleFormControlInput1"
                      placeholder="Lien de Deploiment"/>
                  </div>
                  <div class="mb-4">
                    <textarea value={description}
                      className="form-control  shadow rounded border border-warning"
                      onChange={e => setDescription(e.target.value)}
                      placeholder="Description"
                      rows="3"
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-center  shadow bg-body rounded mb-5 p-4 border border-warning">
                    <input type="file" multiple onChange={imageSelect} placeholder="Ajouter Images"/>
                    {/* <button type="button"className="btn btn-cap rounded p-2 btn-lg">Ajouter Images</button> */}
                    <div className="cap p-4">

                    </div>
                  </div>
                  <div className="mb-3 d-grid">
                    <button type="button" className="btn btn-lg rounded btn-send" onClick={ajoutImage}> Envoyer</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <CartLive />
          </div>
          <div className="col-md-3">
            <CartLive />
          </div>
          <div className="col-md-3">
            <CartLive />
          </div>
          <div className="col-md-3">
            <CartLive />
          </div>
        </div>
      </div>
    </>
  );
};

export default Voirlivraison;
