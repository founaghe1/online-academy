import './App.css';
import 'bootstrap/dist/js/bootstrap.min.js'
// import Admin from './components/admin/Admin';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard/dashboard'
import Login from './components/login/Login';
import ForgotPW from './components/ForgotPW/ForgotPW'
import PageAccueilCoach from './components/pageAccueilCoach/PageAccueilCoach';
import 'bootstrap/dist/css/bootstrap.min.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Domain from './components/ComponentApprenant/Domain';
import Programmation from './components/ComponentApprenant/Programmation';
import Marketing from './components/ComponentApprenant/Marketing';
import Design from './components/ComponentApprenant/Design';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Modale from "./components/Cour/Modal";
import Coure from "./components/Cour/Cour";
import Voircour from "./components/ComponentApprenant/VoirCours/VoirCour";
import CourBoostrap from "./components/ComponentApprenant/VoirCours/CourBoostrap";
import Voircourjs from "./components/ComponentApprenant/VoirCours/VoircourJS"
import Voircourphp from "./components/ComponentApprenant/VoirCours/Voircourphp"
import Voircourdiago from "./components/ComponentApprenant/VoirCours/Voircourdiago"
import Voircourc from "./components/ComponentApprenant/VoirCours/Voircousc++"
import Booter from "./components/ComponentApprenant/VoirCours/Courbooster";
import Potoshop from "./components/ComponentApprenant/VoirCours/Voircourdegiadop";
import Ulistration from "./components/ComponentApprenant/VoirCours/ulistratindesi";
import PRO from "./components/ComponentApprenant/VoirCours/Designpro";
import Initialisation from "./components/ComponentApprenant/VoirCours/ulistratindesi";
import Analysemarche from "./components/ComponentApprenant/VoirCours/VoirMarkmarche";
import Etude from "./components/ComponentApprenant/VoirCours/Voircourmarketud";
import Voircourdevelop from "./components/ComponentApprenant/VoirCours/Voircourmarkdevelo";
// import Livraison from './components/Livraisons/Livraison';
import Quizzes from "./components/ComponentApprenant/VoirCours/Quizzes";
import QuizzBoostrap from "./components/ComponentApprenant/VoirCours/QuizzBoostrap";
import QuizzJs from "./components/ComponentApprenant/VoirCours/QuizzJs";
import QuizzPhp from "./components/ComponentApprenant/VoirCours/QuizzPhp";
import Quizzdjango from "./components/ComponentApprenant/VoirCours/Quizzdjango";
import QuizzC from "./components/ComponentApprenant/VoirCours/QuizzC++";
import QuizzMarketinDigital from "./components/ComponentApprenant/VoirCours/QuizzMarketinDigital";
import Quizzresauxsocia from "./components/ComponentApprenant/VoirCours/Quizzresauxsocia";
import QuizzBooter from "./components/ComponentApprenant/VoirCours/QuizzBooter";
import QuizzPhotos from "./components/ComponentApprenant/VoirCours/QuizzPhotos";
import Quizzullustrator from "./components/ComponentApprenant/VoirCours/Quizzullustrator";
import Quizzinitialisation from "./components/ComponentApprenant/VoirCours/Quizzinitialisation";
import Quizzpro from "./components/ComponentApprenant/VoirCours/Quizzpro";

// import Qestion from "./components/VoirCours/Voircourphp"
function App() {
  return (
    <div className='App'>
      {/* <Admin /> */}
      {/* <Dashboard  /> */}
      {/* <Login /> */}
      {/* <ForgotPW/> */}
      {/* <PageAccueilCoach /> */}
      {/* <Livraison /> */}
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Domain />} />
          <Route
            path='/sous-domaine-programmation'
            element={<Programmation />}
          />
          <Route path='/sous-domaine-marketing' element={<Marketing />} />
          <Route
            path='/sous-domaine-marketing/developpement'
            element={<Voircourdevelop />}
          />
          <Route path='/sous-domaine-marketing/booter' element={<Booter />} />
          <Route path='/sous-domaine-marketing/etude' element={<Etude />} />
          <Route path='/sous-domaine-design' element={<Design />} />
          <Route path='/sous-domaine-design/photo' element={<Potoshop />} />
          <Route path='/sous-domaine-design/ulis' element={<Ulistration />} />
          <Route path='/sous-domaine-design/pro' element={<PRO />} />
          <Route
            path='/sous-domaine-design/initia'
            element={<Initialisation />}
          />
          <Route
            path='/sous-domaine-programmation/html/css'
            element={<Voircour />}
          />
          <Route
            path='/sous-domaine-programmation/boostrap'
            element={<CourBoostrap />}
          />
          <Route
            path='/sous-domaine-programmation/js'
            element={<Voircourjs />}
          />
          <Route
            path='/sous-domaine-programmation/php'
            element={<Voircourphp />}
          />
          <Route
            path='/sous-domaine-programmation/diago'
            element={<Voircourdiago />}
          />
          <Route path='/sous-domaine-programmation/c' element={<Voircourc />} />
          <Route path='/question' element={<Quizzes />} />
          <Route path='/quiss' element={<QuizzBoostrap />} />
          <Route path='/javascrip' element={<QuizzJs />} />
          <Route path='/php' element={<QuizzPhp />} />
          <Route path='/django' element={<Quizzdjango />} />
          <Route path='/c++' element={<QuizzC />} />
          <Route path='/digital' element={<QuizzMarketinDigital />} />
          <Route path='/resaux' element={<Quizzresauxsocia />} />
          <Route path='/booter' element={<QuizzBooter />} />
          <Route path='/photo' element={<QuizzPhotos />} />
          <Route path='/ullustrator' element={<Quizzullustrator />} />
          <Route path='/initialisation' element={<Quizzinitialisation />} />
          <Route path='/pro' element={<Quizzpro />} />
        </Routes>
      </BrowserRouter>
      {/* <Modale />
      <Coure />  */}

      
    </div>
  );
}

export default App;
