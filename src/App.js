import './App.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import Admin from './components/admin/Admin';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard/dashboard'
import Login from './components/login/Login';
import ForgotPW from './components/ForgotPW/ForgotPW'
import PageAccueilCoach from './components/pageAccueilCoach/PageAccueilCoach';
import 'bootstrap/dist/css/bootstrap.min.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Domain from './components/Domain/Domain';
import Programmation from './components/Domain/Programmation';
import Marketing from './components/Domain/Marketing';
import Design from './components/Domain/Design';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Modale from "./components/Cour/Modal";
import Coure from "./components/Cour/Cour";
import Voircour from "./components/VoirCours/VoirCour";
import Courcss from "./components/VoirCours/CourCss"
import Voircourjs from "./components/VoirCours/VoircourJS"
import Voircourphp from "./components/VoirCours/Voircourphp"
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
          <Route path='/sous-domaine-marketing/etude' element={<Etude />} />
          <Route path='/sous-domaine-marketing/etude' element={<Etude />} />
          <Route path='/sous-domaine-design' element={<Design />} />
          <Route
            path='/sous-domaine-programmation/html'
            element={<Voircour />}
          />
          <Route path='/sous-domaine-programmation/css' element={<Courcss />} />
          <Route
            path='/sous-domaine-programmation/js'
            element={<Voircourjs />}
          />
          <Route
            path='/sous-domaine-programmation/php'
            element={<Voircourphp />}
          />
        </Routes>
      </BrowserRouter>

      {/* <Modale />
      <Coure /> */}
    </div>
  );
}

export default App;
