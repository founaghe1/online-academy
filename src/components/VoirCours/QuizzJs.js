import React from 'react'
// import { Link } from "react-router-dom";
import "./voirCour.css";
 const QuizzJs = () => {
  return (
    <div>
      <h1 className='text-center '>Quizz Javascript</h1>
      <div class='radio-input justify-content-center align-items-center mx-auto '>
        <div class='info'>
          <span class='question'>
            Où est le bon endroit pour insérer un JavaScript ?
          </span>
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
          <label for='value-1'>The body section</label>
        </div>
        <div className='d-flex'>
          <input
            type='radio'
            id='value-2'
            name='value-radio'
            value='value-2'
            className='m-2'
          />
          <label for='value-2'>
            {" "}
            Both the head section and the body section are correct
          </label>
        </div>
        <div className='d-flex'>
          <input
            type='radio'
            id='value-3'
            name='value-radio'
            value='value-3'
            className='m-2'
          />
          <label for='value-3'>The head section</label>
        </div>
      </div>
      <br></br>
      <div class='radio-input justify-content-center align-items-center mx-auto '>
        <div class='info'>
          <span class='question'>
            Le fichier JavaScript externe doit contenir la balise script
          </span>
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
          <label for='value-1'>true</label>
        </div>
        <div className='d-flex '>
          <input
            type='radio'
            id='value-2'
            name='value-radio'
            value='value-2'
            className='m-2'
          />
          <label for='value-2'>false</label>
        </div>
      </div>
      <br></br>
      <div class='radio-input justify-content-center align-items-center mx-auto '>
        <div class='info'>
          <span class='question'>
            Comment créer une fonction en JavaScript ?
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
          <label for='value-1'>function = myfunction()</label>
        </div>
        <div className='d-flex'>
          <input
            type='radio'
            id='value-2'
            name='value-radio'
            value='value-2'
            className='m-2'
          />
          <label for='value-2'>function myfunction()</label>
        </div>
        <div className='d-flex'>
          <input
            type='radio'
            id='value-3'
            name='value-radio'
            value='value-3'
            className='m-2'
          />
          <label for='value-3'>function:myfunction()</label>
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
export default QuizzJs;
