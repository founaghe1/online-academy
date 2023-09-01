import React,{useEffect, useState} from "react";
import 'bootstrap/dist/js/bootstrap.min.js'
import { BiSolidShow } from "react-icons/bi";
import "./style.css";
import { db } from "../../firebase/Firebase";
import { addDoc, collection, getDocs} from "firebase/firestore";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



const CartLive = () => {
  const [show, setShow] = useState(false);
  const [shows, setShows] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handlesCloses = () => setShows(false);
  const handlesShows = () => setShows(true);


  const [cartliv, setCartliv] = useState([]);
  const [cartlivs, setCartlivs] = useState([]);
  //commentaire
  const [comment, setComment] = useState([])
  const [comments, setComments] = useState([])

  const unsubscribe = collection(db, 'livraison')

  const getLivraison = async () =>{
    try {
      const data = await getDocs(unsubscribe);
      const filteredData = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setCartliv(filteredData);
      setCartlivs(filteredData);
    } catch (err) {
      console.error("Error getting documents: ", err);
    }
  }

  useEffect(() => {
    getLivraison();
   }, []);

//ajouter commentaire
    const commentRef = collection(db, 'commentaire')
    const handleSubmit = (e) =>{
  e.preventDefault();

    addDoc(commentRef,{
      comment
    });
    setComment('');
}

    const getComment =async () =>{
      try{
      const data =await getDocs(commentRef);
          const comData = data.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          setComment(comData);
         setComments(comData);
        }catch (err) {
          console.error("Error getting documents: ", err);
        }
    }

    useEffect(() => {
      getComment();

       }, []);


  return (
    <div className="row">
        {cartliv.map((content) => (
      <div className="col-md-4">
          <div className="card mb-5 p-3 shadow hover" key={content.id}>
            <h4 className="card-title">{content.title}</h4>
            <span className="">{content.description}</span>
            <a className="nav-link mt-2 mb-3">{content.lien}</a>
            <div className="">
                {content.image && (
                    <img variant="top" className="img-fluid d-flex"
                        src={content.image}
                    />
                  )}
            </div>
            <div class="text-center d-flex justify-content-between align-items-center mt-4 mb-3">
            <div className="">
              <button type="button" className="btn text-white btn-outline-secondary d-flex justify-content-center align-items-center"
               onClick={handleShow}>
                <BiSolidShow className="me-2 text-white"/>Livrable
              </button>
            </div>
            <div className="">
              <button type="button" className="btn btn-outline-success  text-white d-flex justify-content-center align-items-center"
               onClick={handlesShows}>
                  <BiSolidShow className="me-2"/> Commentaire
              </button>
            </div>
          </div>
        </div>
      </div>
        ))}
         <Modal show={shows} onHide={handlesCloses}>
        <Modal.Header closeButton>
          <Modal.Title>Commentaire</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
              <div class="mb-4 ">
                    <form onSubmit={handleSubmit} className="d-flex ">
                    <input className="p-2 me-3 rounded"
                      value={comment}
                      onChange={e => setComment(e.target.value)}
                      placeholder="Write a comment..."
                    />
                    <button className="btn btn-success" type="submit">commenter</button>
                  </form>
              </div>
              <div className="mt-3">
                  {comments.map(commenter => (
                    <div key={commenter.id}>
                      <p>{commenter.comment}</p>
                      {/* Display additional comment details here */}
                    </div>
                  ))}
              </div>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>

        {/* modal voir image */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {cartlivs.map((contents) =>(
                   <div className="" key={contents.id}>
                    <div className="">
                    {contents.image && (
                    <img variant="top" className="img-fluid d-flex orange"
                        src={contents.image}
                    />
                  )}
                  </div>
              </div>
              ))}
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CartLive;
