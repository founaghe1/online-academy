import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../../Assets/cert-html.webp'
import img2 from '../../Assets/cert-css.webp'
import img3 from '../../Assets/cert-js.webp'
import img4 from '../../Assets/cert-php.webp'
import img5 from '../../Assets/cert-angu.webp'
import img6 from '../../Assets/cert-react.webp'
import img7 from '../../Assets/cert-sass.webp'
import img8 from '../../Assets/cert-ts.webp'
import img9 from '../../Assets/cert-v.webp'


const Card = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
            <div className="col-md-3 mt-4">
              <Link to='/html'>
                <div className="card shadow d-grid gap-2 justify-content-center align-items-center p-3">
                    <img src={img1} alt="" />

                    <h3>Html Base</h3>
                </div>
                </Link>
            </div>
            <div className="col-md-3 mt-4">
           <Link to='/css'>
                <div className="card shadow d-grid gap-2 justify-content-center align-items-center p-3">
                  <img src={img2} alt="" />
                    <h3>Css Base</h3>
                </div>
           </Link>
            </div>
            <div className="col-md-3 mt-4">
            <div className="card shadow d-grid gap-2 justify-content-center align-items-center p-3">
            <img src={img3} alt="" /> 
                    <h3>Es6 Base</h3>
                </div>
            </div>
            <div className="col-md-3 mt-4">
              <div className="card shadow d-grid gap-2 justify-content-center align-items-center p-3">
                <img src={img4} alt="" /> 
                    <h3>Php Base</h3>
                </div>
            </div>
            <div className="col-md-3 mt-4">
              <div className="card shadow d-grid gap-2 justify-content-center align-items-center p-3">
                <img src={img5} alt="" /> 
                    <h3>Angular </h3>
                </div>
            </div>
            <div className="col-md-3 mt-4">
              <div className="card shadow d-grid gap-2 justify-content-center align-items-center p-3">
                <img src={img6} alt="" /> 
                    <h3>React </h3>
                </div>
            </div>
            <div className="col-md-3 mt-4">
              <div className="card shadow d-grid gap-2 justify-content-center align-items-center p-3">
                <img src={img8} alt="" /> 
                    <h3>TypeScript de Base</h3>
                </div>
            </div>
            <div className="col-md-3 mt-4">
              <div className="card shadow d-grid gap-2 justify-content-center align-items-center p-3">
                <img src={img9} alt="" /> 
                    <h3>Vue.js </h3>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Card
