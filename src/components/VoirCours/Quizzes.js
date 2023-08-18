import React from 'react'
import { Link } from "react-router-dom";
import "./voirCour.css";
 const Quizzes = () => {
  return (
    <div>
      <h1 className='text-center '>Quizz Html Css</h1>
      <div class='radio-input justify-content-center align-items-center mx-auto '>
        <div class='info'>
          <span class='question'>Que signifie HTML ?</span>
          <span class='steps'>1/5</span>
        </div>
        <div className='d-flex'>
          <input
            type='radio'
            id='value-1'
            name='value-radio'
            value='value-1'
            className='m-2'
          />
          <label for='value-1'>Home Toll Markup Language</label>
        </div>
        <div className='d-flex'>
          <input
            type='radio'
            id='value-2'
            name='value-radio'
            value='value-2'
            className='m-2'
          />
          <label for='value-2'>Hyper Text Markup language</label>
        </div>
        <div className='d-flex'>
          <input
            type='radio'
            id='value-3'
            name='value-radio'
            value='value-3'
            className='m-2'
          />
          <label for='value-3'>Hyperlinks and text Markup Language</label>
        </div>
      </div>
      <br></br>
      <div class='radio-input justify-content-center align-items-center mx-auto '>
        <div class='info'>
          <span class='question'>Que signifie CSS ?</span>
          <span class='steps'>2/5</span>
        </div>
        <div className='d-flex'>
          <input
            type='radio'
            id='value-1'
            name='value-radio'
            value='value-1'
            className='m-2'
          />
          <label for='value-1'>Cascading Style sheets</label>
        </div>
        <div className='d-flex '>
          <input
            type='radio'
            id='value-2'
            name='value-radio'
            value='value-2'
            className='m-2'
          />
          <label for='value-2'>Colorful Style Sheets</label>
        </div>
        <div className='d-flex '>
          <input
            type='radio'
            id='value-2'
            name='value-radio'
            value='value-2'
            className='m-2'
          />
          <label for='value-2'>Creative Style Sheets</label>
        </div>
      </div>
      <br></br>
      <div class='radio-input justify-content-center align-items-center mx-auto '>
        <div class='info'>
          <span class='question'>
            Dans un document HTML, où se trouve le bon endroit pour faire
            référence à une feuille de style externe ?
          </span>
          <span class='steps'>3/5</span>
        </div>
        <div className='d-flex'>
          <input
            type='radio'
            id='value-1'
            name='value-radio'
            value='value-1'
            className='m-2'
          />
          <label for='value-1'>At the end of the document</label>
        </div>
        <div className='d-flex'>
          <input
            type='radio'
            id='value-2'
            name='value-radio'
            value='value-2'
            className='m-2'
          />
          <label for='value-2'>In the head section</label>
        </div>
        <div className='d-flex'>
          <input
            type='radio'
            id='value-3'
            name='value-radio'
            value='value-3'
            className='m-2'
          />
          <label for='value-3'>In the body section</label>
        </div>
      </div>
      <br></br>
      <div className='text-center'>
        <button type='button ' className='btn but '>
          Valider
        </button>
      </div>
    </div>
  );
}
export default Quizzes;
