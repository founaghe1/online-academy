import './App.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import Admin from './components/ComponentAdmin/admin/Admin';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/ComponentCoach/Dashboard/Dashboard'
import Login from './components/ComponentCoach/login/Login';
import ForgotPW from './components/ComponentCoach/ForgotPW/ForgotPW'


import Domain from './components/ComponentCoach/Domain/Domain';
import Programmation from './components/ComponentCoach/Domain/Programmation';
import Marketing from './components/ComponentCoach/Domain/Marketing';
import Design from './components/ComponentCoach/Domain/Design';
import StudentDashboard from './components/StudentDashboard/StudentDashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotificationsCoachs from './components/ComponentCoach/NotificationsCoachs/NotificationsCoachs'
import Chat from './components/ComponentCoach/Chat/Chat.jsx';

import Livraison from './components/ComponentCoach/Livraisons/Livraison';
import AjoutCours from './components/ComponentCoach/AjoutCours/AjoutCours';
function App() {
  return (
    <div className="App">
      {/* <Admin/> */}
      {/* <Dashboard  /> */}
      <StudentDashboard/>
      
      {/* <Login /> */}
      {/* <ForgotPW/> */}
      {/* <Livraison /> */}
      {/* <Chat/> */}
      {/* <ListeApprenants/> */}
      <NotificationsCoachs/>
      
      
      {/* <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Domain />} />
          <Route path="/programmation" element={<Programmation />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/design" element={<Design />} />
        </Routes>
      </BrowserRouter> */}

      {/* <Dashboard  /> */}
      {/* <Login /> */}

    

    </div>
  );
}


export default App;
