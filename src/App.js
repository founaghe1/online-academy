import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
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

import "bootstrap/dist/css/bootstrap.min.css";
import Modale from "./components/Modal";
import Coure from "./components/Cour";
import Chat from './components/Chat/Chat.jsx';

function App() {
  return (
    <div className="App">
      {/* <Admin/> */}
      {/* <Dashboard  /> */}
      {/* <Login /> */}
      {/* <ForgotPW/> */}
      {/* <PageAccueilCoach /> */}
      <Chat/>
      
      {/* <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Domain />} />
          <Route path="/sous-domaine-programmation" element={<Programmation />} />
          <Route path="/sous-domaine-marketing" element={<Marketing />} />
          <Route path="/sous-domaine-design" element={<Design />} />
        </Routes>
      </BrowserRouter> */}






      {/* <Modale /> */}
      {/* <Coure /> */}
    </div>
  );
}

export default App;
