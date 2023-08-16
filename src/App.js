import './App.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import Admin from './components/ComponentAdmin/admin/Admin';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/ComponentCoach/login/Login';
import ForgotPW from './components/ComponentCoach/ForgotPW/ForgotPW'
import SideBar from './components/ComponentCoach/SideBar/Sidebar';
import Navbar from './components/ComponentCoach/NavBar/Navbar';
import Layout from './components/ComponentCoach/Layout/Layout';

// Coach
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Domain from './components/Domain/Domain';
// import Programmation from './components/Domain/Programmation';
// import Marketing from './components/Domain/Marketing';
// import Design from './components/Domain/Design';
// import Domain from './components/ComponentCoach/Domain/Coach/Domain';
// import Programmation from './components/ComponentCoach/Domain/Coach/Programmation';
// import Marketing from './components/ComponentCoach/Domain/Coach/Marketing';
// import Design from './components/ComponentCoach/Domain/Design';

import Chat from './components/ComponentCoach/Chat/Chat.jsx';
import Domain from './components/ComponentCoach/Domain/Domain';
import Programmation from './components/ComponentCoach/Domain/Programmation';
import Marketing from './components/ComponentCoach/Domain/Marketing';
import Design from './components/ComponentCoach/Domain/Design';
import NotificationsCoachs from './components/ComponentCoach/NotificationsCoachs/NotificationsCoachs'
import Livraison from './components/ComponentCoach/LivraisonCoach/Livraison';
import AjoutCours from './components/ComponentCoach/AjoutCours/AjoutCours';

// Apprenants
import StudentDashboard from './components/ComponentApprenant/StudentDashboard/StudentDashboard';
import Dashboard from './components/ComponentCoach/Dashboard/Dashboard';
import DomainApprt from './components/ComponentApprenant/DomainApprnt/DomainApprt';
import ProgrammationApprt from './components/ComponentApprenant/DomainApprnt/ProgrammationApprt';
import MarketingApprt from './components/ComponentApprenant/DomainApprnt/MarketingApprt';
import DesignApprt from './components/ComponentApprenant/DomainApprnt/DesignApprt';

import Voirlivraison from './components/ComponentApprenant/Livraisons/Voirlivraison';

function App() {
  return (
    <div className="App">
      {/* <Admin/> */}
      {/* <Dashboard  /> */}
      {/* <Login /> */}
      {/* <StudentDashboard /> */}

      {/* <AjoutCours /> */}

      {/* <ForgotPW/> */}
      {/* <Livraison /> */}
      {/* <Voirlivraison />       */}
      {/* <Chat/> */}
      {/* <ListeApprenants/> */}
      {/* <NotificationsCoachs/> */}
      
      
      {/* <Router>
        <Routes>
          <Route exact path="/" element={<Domain />} />
          <Route path="/programmation" element={<Programmation />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/design" element={<Design />} />
        </Routes>
      </Router> */}

      {/* Routes Yagouba */}

      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path="/dashboard" element={ <Layout />}>
            <Route index element={<Dashboard />} />
            <Route path='/dashboard/domain' element={<DomainApprt />} />
          </Route>
        </Routes>
        </Router>

      {/* {/* <Dashboards  /> */}
      {/* <Login /> */}

    

    </div>
  );
}


export default App;
