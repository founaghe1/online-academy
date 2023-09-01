import React,{useEffect, useState} from "react";
import 'bootstrap/dist/js/bootstrap.min.js'
import { BiSolidShow } from "react-icons/bi";
import "./style.css";
import { db } from "../../firebase/Firebase";
import { addDoc, collection, getDocs} from "firebase/firestore";

const CartLive = () => {

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
               data-bs-toggle="modal" data-bs-target="#modal0">
                <BiSolidShow className="me-2 text-white"/>Livrable
              </button>
            </div>
            <div className="">
              <button type="button" className="btn btn-outline-success  text-white d-flex justify-content-center align-items-center"
               data-bs-toggle="modal" data-bs-target="#modal1">
                  <BiSolidShow className="me-2"/> Commentaire
              </button>
            </div>
          </div>
        </div>
      </div>
        ))}
        

      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="modal0"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Mon travail
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
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
            </div>
            <div class="modal-footer"></div>
          </div>
        </div>
      </div>
      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="modal1"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Mon travail
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div>
                <h3 className="">Tache</h3>
                <p className="">Some quick example text </p>
              </div>
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
            </div>
            <div class="modal-footer"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartLive;
