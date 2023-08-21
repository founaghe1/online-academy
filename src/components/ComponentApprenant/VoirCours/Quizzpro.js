import React from 'react'
import "./voirCour.css";
 const Quizzpro = () => {
  return (
    <div className='quizboost justify-content-center align-items-center mx-auto'>
      <h1 className='text-center '>Quizz Adobe Preimier Pro</h1>
      <div class='radio-input justify-content-center align-items-center mx-auto '>
        <div class='info'>
          <span class='question'>
            Vous ouvrez une séquence imbriquée afin de réduire la longueur d'un
            clip. Vous augmentez la durée totale des clips. Qu'arrive-t-il à la
            durée du nid dans la séquence principale ?
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
          <label for='value-1'>
            {" "}
            Rien, la durée du nid reste la même dans la séquence d'origine.
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
            La durée du nid change et un montage par écrasement pousse les clips
            restants à faire de la place.
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
          <label for='value-3'>
            Les clips changent de vitesse pour correspondre à la durée du nid.
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
          <label for='value-3'>
            La durée du nid change et un montage par ondulation pousse les clips
            restants à faire de la place.
          </label>
        </div>
      </div>
      <br></br>
      <div class='radio-input justify-content-center align-items-center mx-auto '>
        <div class='info'>
          <span class='question'>
            Quelle est une bonne raison d'utiliser une séquence imbriquée ?
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
            {" "}
            L'imbrication améliore les performances de lecture.
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
            L'imbrication facilite la réduction de l'encombrement dans le
            panneau Projet, ce qui permet d'économiser du temps et
            potentiellement du budget du projet.
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
            L'imbrication permet d'appliquer un seul effet à tout ce qui se
            trouve à l'intérieur du nid, comme une correction des couleurs ou un
            limiteur vidéo.
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
            L'imbrication permet à Adobe Premiere Pro d'accélérer le rendu.
          </label>
        </div>
      </div>
      <br></br>
      <div class='radio-input justify-content-center align-items-center mx-auto '>
        <div class='info'>
          <span class='question'>
            Que se passe-t-il sur votre disque dur lorsque vous créez un
            sous-clip ?
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
            Rien, car un sous-clip ne crée pas de nouveau fichier multimédia sur
            votre disque dur.
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
            Un fichier pointeur est créé sur votre disque dur.
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
          <label for='value-3'>
            {" "}
            Un nouveau master clip est créé sur votre disque dur et ajouté au
            projet.
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
          <label for='value-4'>
            Un nouveau fichier multimédia est créé à côté du média d'origine.
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
export default Quizzpro;
