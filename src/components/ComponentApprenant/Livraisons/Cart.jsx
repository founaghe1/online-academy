import React,{useState} from 'react'
import '../../ComponentCoach/LivraisonCoach/styles.css'
import img from './img6.jpeg' 
import {GrView} from 'react-icons/gr'
import {FcAcceptDatabase} from 'react-icons/fc'
import {TbPlayerEject} from 'react-icons/tb'

//firebase
// import { db } from "../../firebase/Firebase";
// import { collection, getDocs} from "firebase/firestore";


// const [cartliv, setCartliv] = useState([
//   {
//     title:"",
//     subtitle:"",
//     lien:"",
//     description:"",
//     image:""
//   }
// ]);
// const unsubscribe = collection(db, 'livraison')

// const getLivraison = async () =>{
//   try {
//     const data = await getDocs(unsubscribe);
//     const filteredData = data.docs.map((doc) => ({
//       id: doc.id,
//       ...doc.data(),
//     }));

//     setCartliv(filteredData);
//   } catch (err) {
//     console.error("Error getting documents: ", err);
//   }
// }

// useEffect(() => {

//   getLivraison();

//    }, []);

const Cart = () => {
  return (
      <div>
        <div className="card mb-5 p-3 shadow hover">
        {/* {cartliv.map((content, index) => (
          <div className="" key={content.id}>
            <h3 className="card-title">{content.title}</h3>
            <p className="text">{content.subtitle}</p>
            <p className="text">{content.description}</p>
            <p className="text">{content.lien}</p>
             {content.image.map((url, index) => (
            <img key={index} src={url} alt={`Image ${index}`} />
          ))}
          </div>
        ))} */}
        
        <div class="d-flex justify-content-between mt-3 mb-3">
            <div className="col-md-4">
              <button type="button" className="btn btn-lg text-white btn-secondary d-flex justify-content-center align-items-center"
              data-bs-toggle="modal" data-bs-target="#exampleModal">
                <GrView className="me-2"/>Voir
              </button>
            </div>
            <div className="col-md-4">
              <button type="button" className="btn btn-success btn-lg text-white d-flex justify-content-center align-items-center"
               data-bs-toggle="modal" data-bs-target="#modal1">
                  <FcAcceptDatabase className="me-2"/> Accepter
              </button>
            </div>
            <div className="col-md-4">
                <button type="button" className="btn btn-lg text-white btn-secondary d-flex justify-content-center align-items-center">
                  <TbPlayerEject className='me-2'/>Rejeter</button>
            </div>
        </div>
      </div>

        {/* <!-- Modal --> */}
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Voir Livraison</h1>
                <button type="button" class="btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <img src={img} className="card-img-top" height='550px' alt="..." />
            </div>
            <div class="modal-footer">
               
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Cart
