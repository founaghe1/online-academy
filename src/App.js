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
import Voircour from "./components/VoirCours/VoirCour";
import CourBoostrap from "./components/VoirCours/CourBoostrap";
import Voircourjs from "./components/VoirCours/VoircourJS"
import Voircourphp from "./components/VoirCours/Voircourphp"
import Voircourdiago from "./components/VoirCours/Voircourdiago"
import Voircourc from "./components/VoirCours/Voircousc++"
import Booter from "./components/VoirCours/Courbooster"
import Potoshop from "./components/VoirCours/Voircourdegiadop"
import Ulistration from "./components/VoirCours/ulistratindesi"
import PRO from "./components/VoirCours/Designpro"
import Initialisation from "./components/VoirCours/ulistratindesi"
import Analysemarche from "./components/VoirCours/VoirMarkmarche"
import Etude from "./components/VoirCours/Voircourmarketud"
import Voircourdevelop from "./components/VoirCours/Voircourmarkdevelo"
import Livraison from './components/Livraisons/Livraison';
function App() {
  return (
    <div className='App'>
      {/* <Admin/> */}
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
          <Route path='/sous-domaine-design/initia' element={<Initialisation />} />
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
        </Routes>
      </BrowserRouter>
      {/* <Modale />
      <Coure /> */}
    </div>
  );
}

export default App;
