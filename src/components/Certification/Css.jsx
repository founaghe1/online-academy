import React from 'react'
import imgh from '../../Assets/head-html.svg'
import imgg from '../../Assets/head-html1.svg'
import imgd from '../../Assets/head-html2.svg'

const Css = () => {
  return (
    <div>
       <div className="container">
        <div className="row">
                <div className="text-center mt-5">
                    <h3 className='text-info fw-bold'>CSS de Base</h3>
                    <div className="d-flex justify-content-between  mt-5">
                        <img src={imgd} className='img-fluid w-25' alt="" />
                        <img src={imgh} className='img-fluid w-25' alt="" />
                        <img src={imgg} className='img-fluid w-25' alt="" />
                    </div>
                </div>
            <div className="col-md-9 mb-5">
                <div className="row">
                    <div className=" mt-5">
                     
                      <div className="  fs-4 mt-5">
                            <p>Commencez le QuestionnaireVous pouvez tester votre compétences de HTML avec 
                                le Questionnaire de Online Academy.
                            </p>

                            <p>Le TesteLe teste est composé de 20 questions et il n'y a pas de limite du temps. 
                                Le teste n'est pas officiel, c'est un bon moyen de comprendre ce que vous savez et ce
                                 que vous ne savez pas sur HTML.
                            </p>
                            <p>Comptez Votre ScoreVous gagnez 5% pour chaque bonne réponse des questions avec un choix.
                                 Pour les questions qui ont quelques choix, le score est jusqu'à 5%. À la fin, votre 
                                 score total sera affiché. Le score maximum est 100%.
                            </p>
                      </div>
                    </div>
                    <div className="mt-5 shadow-sm bg-white p-3">
                       <div className="col mb-5">
                            <h3 className='mb-4 mt-3 bg-grey'><strong className='text-info'>1/20 </strong> Ouvrez l'abréviation CSS</h3>
                            <div class="form-check bg-light fs-3 mb-3 p-3">
                                <input class="form-check-input " type="radio" name="flexRadioDefault" 
                                    id="flexRadioDefault1" />
                                <label class="form-check-label" for="flexRadioDefault1">
                                Cascading Style Sheets
                                </label>
                            </div>
                            <div class="form-check bg-light fs-3 mb-3 p-3">
                                <input class="form-check-input " type="radio" name="flexRadioDefault" 
                                    id="flexRadioDefault1" />
                                <label class="form-check-label" for="flexRadioDefault1">Computer Style Sheets.</label>
                            </div>
                            <div class="form-check bg-light fs-3 mb-3 p-3">
                                <input class="form-check-input " type="radio" name="flexRadioDefault" 
                                    id="flexRadioDefault1" />
                                <label class="form-check-label" for="flexRadioDefault1">Creative Style Sheets</label>
                            </div>
                       </div>
                       <div className="col mb-5">
                            <h3 className='mb-4 mt-3 bg-grey'><strong className='text-info'>2/20 </strong>Quelle propriété voudriez-vous
                             utiliser pour créer un espace entre la bordure de l'élément et le contenu intern</h3>
                            <div class="form-check bg-light fs-3 mb-3 p-3">
                                <input class="form-check-input " type="radio" name="flexRadioDefault" 
                                    id="flexRadioDefault1" />
                                <label class="form-check-label" for="flexRadioDefault1">
                                margin
                                </label>
                            </div>
                            <div class="form-check bg-light fs-3 mb-3 p-3">
                                <input class="form-check-input " type="radio" name="flexRadioDefault" 
                                    id="flexRadioDefault1" />
                                <label class="form-check-label" for="flexRadioDefault1">padding</label>
                            </div>
                            <div class="form-check bg-light fs-3 mb-3 p-3">
                                <input class="form-check-input " type="radio" name="flexRadioDefault" 
                                    id="flexRadioDefault1" />
                                <label class="form-check-label" for="flexRadioDefault1">border</label>
                            </div>
                       </div>
                       <div className="col mb-5">
                            <h3 className='mb-4 mt-3 bg-grey'><strong className='text-info'>3/20 </strong> De quelle manière pouvez-vous ajouter CSS?</h3>
                            <div class="form-check bg-light fs-3 mb-3 p-3">
                                <input class="form-check-input " type="radio" name="flexRadioDefault" 
                                    id="flexRadioDefault1" />
                                <label class="form-check-label" for="flexRadioDefault1">
                                Style en ligne
                                </label>
                            </div>
                            <div class="form-check bg-light fs-3 mb-3 p-3">
                                <input class="form-check-input " type="radio" name="flexRadioDefault" 
                                    id="flexRadioDefault1" />
                                <label class="form-check-label" for="flexRadioDefault1">Style interne</label>
                            </div>
                            <div class="form-check bg-light fs-3 mb-3 p-3">
                                <input class="form-check-input " type="radio" name="flexRadioDefault" 
                                    id="flexRadioDefault1" />
                                <label class="form-check-label" for="flexRadioDefault1">Feuille de style externe</label>
                            </div>
                            <div class="form-check bg-light fs-3 mb-3 p-3">
                                <input class="form-check-input " type="radio" name="flexRadioDefault" 
                                    id="flexRadioDefault1" />
                                <label class="form-check-label" for="flexRadioDefault1">Tous les trois</label>
                            </div>
                       </div>
                       <div className="col mb-5">
                            <h3 className='mb-4 mt-3 bg-grey'><strong className='text-info'>4/20 </strong> Comment pouvez-vous indiquer au navigateur que
                             vous créez une section de style avec une feuille de style interne?</h3>
                            <div class="form-check bg-light fs-3 mb-3 p-3">
                                <input class="form-check-input " type="radio" name="flexRadioDefault" 
                                    id="flexRadioDefault1" />
                                <label class="form-check-label" for="flexRadioDefault1">
                                style type="text/css" /style
                                </label>
                            </div>
                            <div class="form-check bg-light fs-3 mb-3 p-3">
                                <input class="form-check-input " type="radio" name="flexRadioDefault" 
                                    id="flexRadioDefault1" />
                                <label class="form-check-label" for="flexRadioDefault1">
                                style type="css" /style
                                </label>
                            </div>
                            <div class="form-check bg-light fs-3 mb-3 p-3">
                                <input class="form-check-input " type="radio" name="flexRadioDefault" 
                                    id="flexRadioDefault1" />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    class type="css" /class
                                </label>
                            </div>
                       </div>
                       <div className="col mb-5">
                            <h3 className='mb-4 mt-3 bg-grey'><strong className='text-info'>5/20 </strong> Comment définir le style pour un élément HTML
                             spécifique avec un id de "special"?</h3>
                            <div class="form-check bg-light fs-3 mb-3 p-3">
                                <input class="form-check-input " type="radio" name="flexRadioDefault" 
                                    id="flexRadioDefault1" />
                                <label class="form-check-label" for="flexRadioDefault1">
                                #special{ }
                                </label>
                            </div>
                            <div class="form-check bg-light fs-3 mb-3 p-3">
                                <input class="form-check-input " type="radio" name="flexRadioDefault" 
                                    id="flexRadioDefault1" />
                                <label class="form-check-label" for="flexRadioDefault1">
                                .special{ }
                                    </label>
                            </div>
                            <div class="form-check bg-light fs-3 mb-3 p-3">
                                <input class="form-check-input " type="radio" name="flexRadioDefault" 
                                    id="flexRadioDefault1" />
                                <label class="form-check-label" for="flexRadioDefault1">
                                id.special{ }
                                    </label>
                            </div>
                       </div>
                       <div className="col mt-5 mb-4 text-center">
                        <button className='btn bg-success fs-2 text-white'>Valider</button>
                       </div>
                    </div>
                </div>
            </div>
            <div className="col-md-3 mb-5 mt-5">
                <div className="mt-5 border">
                    <ul className='text-center mt-5'>
                        <li className='nav-item'><a className='nav-link fs-2  mb-3' href="">Html Base</a></li>
                        <li className='nav-item'><a className='nav-link fs-2  mb-3' href="">Css Base</a></li>
                        <li className='nav-item'><a className='nav-link fs-2  mb-3' href="">React Base</a></li>
                        <li className='nav-item'><a className='nav-link fs-2  mb-3' href="">ES6 Base</a></li>
                        <li className='nav-item'><a className='nav-link fs-2  mb-3' href="">Php</a></li>
                        <li className='nav-item'><a className='nav-link fs-2  mb-3' href="">TypeSceript</a></li>
                        <li className='nav-item'><a className='nav-link fs-2  mb-3' href="">Vue.js</a></li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Css
