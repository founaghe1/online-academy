import React from 'react'
// import { Link } from "react-router-dom";
import "./voirCour.css";
 const QuizzMarketinDigital = () => {
  return (
    <div className='quizboost justify-content-center align-items-center mx-auto'>
      <h1 className='text-center '>Quizz Marketing Digital</h1>
      <div class='radio-input justify-content-center align-items-center mx-auto '>
        <div class='info'>
          <span class='question'>
            Pensez-vous que vos concurrents en termes de référencement naturel
            sont forcément les mêmes que « dans la vraie vie » ?
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
            Quel est l’élément indispensable à soigner pour optimiser le
            positionnement de sa page web/son article de blog dans les résultats
            de Google ?
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
          <label for='value-1'>
            L’image qui s’affiche quand on partage ma page web sur les réseaux
            sociaux
          </label>
        </div>
        <div className='d-flex '>
          <input
            type='radio'
            id='value-2'
            name='value-radio'
            value='value-2'
            className='m-2'
          />
          <label for='value-2'>
            {" "}
            La balise titre de ma page web ou de mon article de blog
          </label>
        </div>
        <div className='d-flex '>
          <input
            type='radio'
            id='value-2'
            name='value-radio'
            value='value-2'
            className='m-2'
          />
          <label for='value-2'>
            {" "}
            La balise titre de ma page web ou de mon article de blog
          </label>
        </div>
      </div>
      <br></br>
      <div class='radio-input justify-content-center align-items-center mx-auto '>
        <div class='info'>
          <span class='question'>
            Quelle levier d’acquisition en ligne est le plus rentable sur
            plusieurs années ?
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
          <label for='value-1'>
            {" "}
            Les publicités Google Ads « achat de mots-clés »
          </label>
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
            Le référencement naturel (résultats naturels)
          </label>
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
export default QuizzMarketinDigital;
