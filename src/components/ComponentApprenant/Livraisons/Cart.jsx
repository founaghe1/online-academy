import React,{useState,useEffect} from 'react'
import 'bootstrap/dist/js/bootstrap.min.js'
import '../../ComponentCoach/LivraisonCoach/styles.css'
import {BiSolidShow} from 'react-icons/bi'
import {FcApproval} from 'react-icons/fc'
import {TbPlayerEject} from 'react-icons/tb'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


//firebase
 import { db } from "../../firebase/Firebase";
 import { collection, getDocs} from "firebase/firestore" 




const Cart = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [cartliv, setCartliv] = useState([]);
  const [cartlivs, setCartlivs] = useState([]);
  

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



  return (
    <div className="row">
        {cartliv.map((content) => (
      <div className="col-md-4">
          <div className="card mb-5 p-3 shadow hover"  key={content.id} >
            <h4 className="card-title">{content.title}</h4>
            <span className="">{content.description}</span>
            <a className="nav-link mt-2 mb-3">{content.lien}</a>
            <div className="">
                {content.image && (
                    <img variant="top" className="img-fluid card-img-top"
                        src={content.image}
                    />
                  )}
            </div>
            <div class=" text-center d-flex justify-content-between align-items-center mt-4 mb-3">
            <div className="">
              <button type="button" onClick={handleShow} className="btn text-white btn-secondary d-flex justify-content-center align-items-center">
                <BiSolidShow className="me-2 text-white"/>voir
              </button>
            </div>
            <div className="">
              <button type="button" className="btn btn-success  text-white d-flex justify-content-center align-items-center"> 
                  <FcApproval className="me-2"/> accepter
              </button>
            </div>
            <div className="">
              <button type="button" className="btn btn-danger text-white d-flex justify-content-center align-items-center">
                  <TbPlayerEject className="me-2"/>rejeter
              </button>
            </div>
          </div>
        </div>
      </div>
    ))}
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Mon Travail</Modal.Title>
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
      </Modal>
    </div>
  );
}

export default Cart
