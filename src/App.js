import './App.css';
//import Admin from './components/ComponentAdmin/admin/Admin';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
//import Login from './components/ComponentCoach/login/Login';
//import ForgotPW from './components/ComponentCoach/ForgotPW/ForgotPW'
//import SideBar from './components/ComponentCoach/SideBar/Sidebar';
//import Navbar from './components/ComponentCoach/NavBar/Navbar';
//import Layout from './components/ComponentCoach/Layout/Layout';

// Coach
//import Domain from './components/ComponentCoach/Domain/Domain';
//import Programmation from './components/ComponentCoach/Domain/Programmation';
//import Marketing from './components/ComponentCoach/Domain/Marketing';
//import Design from './components/ComponentCoach/Domain/Design';
//import {BrowserRouter} from 'react-router-dom'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import NotificationsCoachs from './components/ComponentCoach/NotificationsCoachs/NotificationsCoachs'
// import Chat from './components/ComponentCoach/Chat/Chat.jsx';
// import Livraison from './components/ComponentCoach/LivraisonCoach/Livraison';
// import AjoutCours from './components/ComponentCoach/AjoutCours/AjoutCours';

// // Apprenants
// import StudentDashboard from './components/ComponentApprenant/StudentDashboard/StudentDashboard';
 //import Dashboards from './components/ComponentCoach/Dashboard/Dashboards';
 //import DomainApprt from './components/ComponentApprenant/DomainApprnt/DomainApprt';
// import ProgrammationApprt from './components/ComponentApprenant/DomainApprnt/ProgrammationApprt';
// import MarketingApprt from './components/ComponentApprenant/DomainApprnt/MarketingApprt';
// import DesignApprt from './components/ComponentApprenant/DomainApprnt/DesignApprt';

//import Voirlivraison from './components/ComponentApprenant/Livraisons/Voirlivraison';
import Certification from './components/Certification/Certification';
 //import Card from './components/Certification/Card';
import Html from './components/Certification/Html';
import Css from './components/Certification/Css';

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
      {/* <Card /> */}
      
      
  
      <BrowserRouter>
        <Routes >
          <Route path='/' element={<Certification />}/>
          <Route path='/html' element={<Html />}/>
          <Route path='/css' element={<Css />}/>
        </Routes>
      </BrowserRouter>
      
      {/* <Router>
        <Routes>
          <Route exact path="/" element={<Domain />} />
          <Route path="/programmation" element={<Programmation />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/design" element={<Design />} />
        </Routes>
      </Router> */}

      {/* Routes Yagouba */}

      {/* <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path="/layout" element={ <Layout />}>
            <Route path='/layout/dashboard' element={<Dashboards />} />
            <Route path='/layout/dashboard/domain' element={<DomainApprt />} />
          </Route>
        </Routes>
      </Router> */}

      {/* <Dashboard  /> */}
      {/* <Login /> */}

    

    </div>
  );
}


export default App;
