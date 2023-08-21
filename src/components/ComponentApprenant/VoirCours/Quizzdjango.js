import React from 'react'
// import { Link } from "react-router-dom";
import "./voirCour.css";

const Quizzdjango = () => {
  return (
    <div className='quizboost justify-content-center align-items-center mx-auto'>
      <h1 className='text-center '>Quizz Django</h1>
      <div class='radio-input justify-content-center align-items-center mx-auto '>
        <div class='info'>
          <span class='question'>
            Quelle est la syntaxe correcte pour créer un projet Django ?
          </span>
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
          <label for='value-1'>django-admin startproject my_tennis_club</label>
        </div>
        <div className='d-flex'>
          <input
            type='radio'
            id='value-2'
            name='value-radio'
            value='value-2'
            className='m-2'
          />
          <label for='value-2'>django start my_tennis_club</label>
        </div>
        <div className='d-flex'>
          <input
            type='radio'
            id='value-3'
            name='value-radio'
            value='value-3'
            className='m-2'
          />
          <label for='value-3'> py manage.py start-django my_tennis_club</label>
        </div>
      </div>
      <br></br>
      <div class='radio-input justify-content-center align-items-center mx-auto '>
        <div class='info'>
          <span class='question'>
            Quelle est la syntaxe correcte pour démarrer un serveur de
            développement Django sur votre ordinateur ?
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
          <label for='value-1'>py manage.py startserver</label>
        </div>
        <div className='d-flex '>
          <input
            type='radio'
            id='value-2'
            name='value-radio'
            value='value-2'
            className='m-2'
          />
          <label for='value-2'>py manage.py runserver</label>
        </div>
        <div className='d-flex '>
          <input
            type='radio'
            id='value-2'
            name='value-radio'
            value='value-2'
            className='m-2'
          />
          <label for='value-2'>py manage.py run</label>
        </div>
      </div>
      <br></br>
      <div class='radio-input justify-content-center align-items-center mx-auto '>
        <div class='info'>
          <span class='question'>Dans quelle langue Django est-il écrit ?</span>
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
          <label for='value-1'>Java</label>
        </div>
        <div className='d-flex'>
          <input
            type='radio'
            id='value-2'
            name='value-radio'
            value='value-2'
            className='m-2'
          />
          <label for='value-2'>Phyton</label>
        </div>
        <div className='d-flex'>
          <input
            type='radio'
            id='value-3'
            name='value-radio'
            value='value-3'
            className='m-2'
          />
          <label for='value-3'>C</label>
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
export default Quizzdjango;