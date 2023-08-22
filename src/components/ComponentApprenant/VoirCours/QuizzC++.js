import React from 'react'
// import { Link } from "react-router-dom";
import "./voirCour.css";
 const QuizzC = () => {
  return (
    <div className='quizboost justify-content-center align-items-center mx-auto'>
      <h1 className='text-center '>Quizz C++</h1>
      <div class='radio-input justify-content-center align-items-center mx-auto '>
        <div class='info'>
          <span class='question'>C++ est un alias de C#</span>
          <span class='steps m-2'>1/5</span>
        </div>
        <div className='d-flex'>
          <input
            type='radio'
            id='value-1'
            name='value-radio'
            value='value-1'
            className='m-2'
          />
          <label for='value-1'>True</label>
        </div>
        <div className='d-flex'>
          <input
            type='radio'
            id='value-2'
            name='value-radio'
            value='value-2'
            className='m-2'
          />
          <label for='value-2'>False</label>
        </div>
      </div>
      <br></br>
      <div class='radio-input justify-content-center align-items-center mx-auto '>
        <div class='info'>
          <span class='question'>
            Quel type de données est utilisé pour créer une variable qui doit //
            stocker du texte ?
          </span>
          <span class='steps m-2'>2/5</span>
        </div>
        <div className='d-flex'>
          <input
            type='radio'
            id='value-1'
            name='value-radio'
            value='value-1'
            className='m-2'
          />
          <label for='value-1'>Txt</label>
        </div>
        <div className='d-flex '>
          <input
            type='radio'
            id='value-2'
            name='value-radio'
            value='value-2'
            className='m-2'
          />
          <label for='value-2'>myString</label>
        </div>
        <div className='d-flex '>
          <input
            type='radio'
            id='value-2'
            name='value-radio'
            value='value-2'
            className='m-2'
          />
          <label for='value-2'>string</label>
        </div>
        <div className='d-flex '>
          <input
            type='radio'
            id='value-2'
            name='value-radio'
            value='value-2'
            className='m-2'
          />
          <label for='value-2'>String</label>
        </div>
      </div>
      <br></br>
      <div class='radio-input justify-content-center align-items-center mx-auto '>
        <div class='info'>
          <span class='question'>
            Comment créez-vous une variable avec le nombre flottant 2.8 ?
          </span>
          <span class='steps m-2'>3/5</span>
        </div>
        <div className='d-flex'>
          <input
            type='radio'
            id='value-1'
            name='value-radio'
            value='value-1'
            className='m-2'
          />
          <label for='value-1'>double x=2.8;</label>
        </div>
        <div className='d-flex'>
          <input
            type='radio'
            id='value-2'
            name='value-radio'
            value='value-2'
            className='m-2'
          />
          <label for='value-2'>int x =2.8</label>
        </div>
        <div className='d-flex'>
          <input
            type='radio'
            id='value-3'
            name='value-radio'
            value='value-3'
            className='m-2'
          />
          <label for='value-3'>byte x = 2.8</label>
        </div>
        <div className='d-flex'>
          <input
            type='radio'
            id='value-3'
            name='value-radio'
            value='value-3'
            className='m-2'
          />
          <label for='value-4'> x = 2.8</label>
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
export default QuizzC; 
