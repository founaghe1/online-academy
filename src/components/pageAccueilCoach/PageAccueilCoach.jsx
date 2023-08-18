import React from 'react';
import './PageAccueilCoach.css';
import devWeb from '../../Assets/programmation.png';
import design from '../../Assets/conception-graphique.png';
import marketing from '../../Assets/digitalMarketing.png';
import { BsArrowRightSquare } from 'react-icons/bs'
import chatPersonne from "../../Assets/chatPersonne.png"


const PageAccueilCoach = () => {
  return (
    <div className='accueil'>
        <div className='row'>
            <div className='col-md-3 col-sm-12 colCard'>
                <div className='card cart1'>
                    <div className='card-img web'>
                        <p>
                            <img src={devWeb} alt="" className='modul' />
                        </p>
                    </div>
                    <div>
                        <h2>Developpement web</h2>
                        <p>0 nombre de leçon</p>
                        <div className='btnDiv mt-md-5'>
                            <button className='btn1'>
                                <BsArrowRightSquare />
                            </button>
                        </div>  
                    </div>
                </div>
            </div>
            <div className='col-md-3 col-sm-12 colCard'>
                <div className='card cart2'>
                    <div className='card-img design'>
                        <p>
                            <img src={design} alt="" className='modul' />
                        </p>
                    </div>
                    <div className='card-body'>
                        <h2>Design Graphique</h2>
                        <p>0 nombre de leçon</p>
                        <div className='btnDiv'>
                            <button className='btn2'>
                                <BsArrowRightSquare />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-md-3 col-sm-12 colCard'>
                <div className='card cart3'>
                    <div className='card-img market'>
                        <p>
                            <img src={marketing} alt="" className='modul' />
                        </p>
                    </div>
                    <div className='card-body'>
                        <h2>Marketing Desital</h2>
                        <p>0 nombre de leçon</p>
                        <div className='btnDiv mt-md-5'>
                            <button className='btn3'>
                                <BsArrowRightSquare />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-md-3 col-sm-12 px-2 shadow rounded p-3 messagesCol'>
                <div className='d-flex justify-content-around'>
                    <p className='sms fw-bold'>Quick Message </p>
                    <p className='sms fw-bold'>Messages non lit <span className='px-2 ms-3 bg-info rounded text-light'>7</span> </p>
                </div>
                

                <div className='divChat d-flex rounded-3 shadow pt-3 ps-2 mb-3'>
                    <p className='pChat rounded-circle p-2 bg-info'><img className='chatProfil rounded-circle' src={chatPersonne} alt="" width={50}/></p>
                    <div className='nomSms ps-3'>
                        <p className='nom'>Mohamed Diallo</p>
                        <p className='border rounded shadow pSMS p-2'>Bonjour tout le monde c'est mohamed sarifou Diallo</p>
                    </div>
                </div>
                <div className='divChat d-flex rounded-3 shadow pt-3 ps-2 my-3'>
                    <p className='pChat rounded-circle p-2 bg-info'><img className='chatProfil rounded-circle' src={chatPersonne} alt="" width={50}/></p>
                    <div className='nomSms ps-3'>
                        <p className='nom'>Mohamed Diallo</p>
                        <p className='border rounded shadow p-2'>@mohd.diallo</p>
                    </div>
                </div>
                <div className='divChat d-flex rounded-3 shadow pt-3 ps-2 my-3'>
                    <p className='pChat rounded-circle p-2 bg-info'><img className='chatProfil rounded-circle' src={chatPersonne} alt="" width={50}/></p>
                    <div className='nomSms ps-3'>
                        <p className='nom'>Mohamed Diallo</p>
                        <p className='border rounded shadow p-2'>Bonjour tout le monde c'est mohamed sarifou Diallo</p>
                    </div>
                </div>
                <div className='divChat d-flex rounded-3 shadow pt-3 ps-2 my-3'>
                    <p className='pChat rounded-circle p-2 bg-info'><img className='chatProfil rounded-circle' src={chatPersonne} alt="" width={50}/></p>
                    <div className='nomSms ps-3'>
                        <p className='nom'>Mohamed Diallo</p>
                        <p className='border rounded shadow p-2'>@mohd.diallo</p>
                    </div>
                </div>
                <div className='divChat d-flex rounded-3 shadow pt-3 ps-2'>
                    <p className='pChat rounded-circle p-2 bg-info'><img className='chatProfil rounded-circle' src={chatPersonne} alt="" width={50}/></p>
                    <div className='nomSms ps-3'>
                        <p className='nom'>Mohamed Diallo</p>
                        <p className='border rounded shadow p-2'>Bonjour tout le monde c'est mohamed sarifou Diallo</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PageAccueilCoach