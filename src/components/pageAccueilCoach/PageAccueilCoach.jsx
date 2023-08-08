import React from 'react';
import './PageAccueilCoach.css';
import devWeb from '../../Assets/programmation.png';
import design from '../../Assets/conception-graphique.png';
import marketing from '../../Assets/digital-marketing.png';
import { BsArrowRightSquare } from 'react-icons/bs'


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
            <div className='col-md-3 col-sm-12 px-2 shadow rounded'>
                <p className='sms'>Quick Message <span className='ms-5 smsNonLi'>Messages non lit</span> <span className='ms-5 nbr'>5</span> </p>
                <div>
                    <p></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PageAccueilCoach