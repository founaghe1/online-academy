import './App.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import Admin from './components/ComponentAdmin/admin/Admin';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/ComponentCoach/login/Login';
import ForgotPW from './components/ComponentCoach/ForgotPW/ForgotPW'
import SideBar from './components/ComponentCoach/SideBar/Sidebar';
import Navbar from './components/ComponentCoach/NavBar/Navbar';
import Layout from './components/ComponentCoach/Layout/Layout';

// import Domain from './components/Domain/Domain';
// import Programmation from './components/Domain/Programmation';
// import Marketing from './components/Domain/Marketing';
// import Design from './components/Domain/Design';

// import Domain from './components/ComponentCoach/Domain/Coach/Domain';
// import Programmation from './components/ComponentCoach/Domain/Coach/Programmation';
// import Marketing from './components/ComponentCoach/Domain/Coach/Marketing';
// import Design from './components/ComponentCoach/Domain/Design';

// import Domain from './components/ComponentCoach/Domain/Domain';
// import Programmation from './components/ComponentCoach/Domain/Programmation';
// import Marketing from './components/ComponentCoach/Domain/Marketing';
// import Design from './components/ComponentCoach/Domain/Design';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Chat from './components/ComponentCoach/Chat/Chat.jsx';
import Livraison from './components/ComponentCoach/Livraisons/Livraison';
import AjoutCours from './components/ComponentCoach/AjoutCours/AjoutCours';

import StudentDashboard from './components/ComponentApprenant/StudentDashboard/StudentDashboard';
import Dashboards from './components/ComponentCoach/Dashboard/Dashboards';
import Domain from './components/ComponentApprenant/DomainApprnt/Domain';
import Programmation from './components/ComponentApprenant/DomainApprnt/Programmation';
import Marketing from './components/ComponentApprenant/DomainApprnt/Marketing';
import Design from './components/ComponentApprenant/DomainApprnt/Design';


function App() {
  return (
    <div className="App">
      {/* <Admin/> */}
      {/* <StudentDashboard /> */}
      
      {/* <Login /> */}

      {/* <AjoutCours /> */}

      {/* <ForgotPW/> */}
      {/* <Livraison /> */}
      {/* <Chat/> */}
      
      
      <Router>
        <Routes>
          <Route exact path="/" element={<Domain />} />
          <Route path="/programmation" element={<Programmation />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/design" element={<Design />} />
        </Routes>
      </Router>

      {/* Routes Yagouba */}

      {/* <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path="/layout" element={ <Layout />}>
            <Route path='/layout/dashboard' element={<Dashboards />} />
            <Route path='/layout/dashboard/domain' element={<Domain />} />
          </Route>
        </Routes>
      </Router> */}

      {/* <Dashboard  /> */}
      {/* <Login /> */}

    

    </div>
  );
}


export default App;
