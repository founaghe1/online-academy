import React, { useState } from 'react';
import "./App.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Admin from "./components/ComponentAdmin/admin/Admin";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/ComponentCoach/login/Login";
import ForgotPW from "./components/ComponentCoach/ForgotPW/ForgotPW";
import SideBar from "./components/ComponentCoach/SideBar/Sidebar";
import Navbar from "./components/ComponentCoach/NavBar/Navbar";
import Layout from "./components/ComponentCoach/Layout/Layout";

// Coach
import { BrowserRouter as Router } from "react-router-dom";
// import Domain from './components/Domain/Domain';
// import Programmation from './components/Domain/Programmation';
// import Marketing from './components/Domain/Marketing';
// import Design from './components/Domain/Design';
// import Domain from './components/ComponentCoach/Domain/Coach/Domain';
// import Programmation from './components/ComponentCoach/Domain/Coach/Programmation';
// import Marketing from './components/ComponentCoach/Domain/Coach/Marketing';
// import Design from './components/ComponentCoach/Domain/Design';

import Chat from "./components/ComponentCoach/Chat/Chat.jsx";
import Domain from "./components/ComponentCoach/Domain/Domain";
import Programmation from "./components/ComponentCoach/Domain/Programmation";
import Marketing from "./components/ComponentCoach/Domain/Marketing";
import Design from "./components/ComponentCoach/Domain/Design";
import NotificationsCoachs from "./components/ComponentCoach/NotificationsCoachs/NotificationsCoachs";
import Livraison from "./components/ComponentCoach/LivraisonCoach/Livraison";
import AjoutCours from "./components/ComponentCoach/AjoutCours/AjoutCours";
import ListeApprenants from "./components/ComponentCoach/ListeApprenants/ListeApprenants";

// Apprenants
import StudentDashboard from "./components/ComponentApprenant/StudentDashboard/StudentDashboard";
import Dashboard from "./components/ComponentCoach/Dashboard/Dashboard";
import DomainApprt from "./components/ComponentApprenant/DomainApprnt/DomainApprt";

import ProgrammationApprt from "./components/ComponentApprenant/DomainApprnt/ProgrammationApprt";
import MarketingApprt from "./components/ComponentApprenant/DomainApprnt/MarketingApprt";
import DesignApprt from "./components/ComponentApprenant/DomainApprnt/DesignApprt";

import Voirlivraison from "./components/ComponentApprenant/Livraisons/Voirlivraison";
import Error from "./Error";
import CoachsRoutes from "./components/Routes/CoachsRoutes";
import ApprenantRoutes from "./components/Routes/ApprenantRoutes";

function App() {

  const [user, setUser] = useState(null); // État de l'utilisateur (null pour non connecté)
  const [authorizedRoles, setAuthorizedRoles] = useState(['apprenant']);

  // Déterminez les itinéraires autorisés en fonction du rôle de l'utilisateur
    let userRoutes = null;
    if (authorizedRoles.includes('coach')) {
      userRoutes = <CoachsRoutes />;
    } else if (authorizedRoles.includes('apprenant')) {
      userRoutes = <ApprenantRoutes />;
    // } else if (authorizedRoles.includes('professeur')) {
    //   userRoutes = <ProfesseurRoutes />;
    // }
    }

  return (

      <Router>
        {userRoutes}
      </Router>    
    // <Router>
    //   {/* <CoachsRoutes /> */}
    //   <ApprenantRoutes />
    // </Router>
    // <div className="App">
    //   {/* <Admin/> */}
    //   {/* <Dashboard  /> */}
    //   {/* <Login /> */}
    //   {/* <StudentDashboard /> */}

    //   {/* <AjoutCours /> */}

    //   {/* <ForgotPW/> */}
    //   {/* <Livraison /> */}
    //   {/* <Voirlivraison />       */}
    //   {/* <Chat/> */}
    //   {/* <ListeApprenants/> */}
    //   {/* <NotificationsCoachs/> */}

    //   {/* <Router>
    //     <Routes>
    //       <Route exact path="/" element={<Domain />} />
    //       <Route path="/programmation" element={<Programmation />} />
    //       <Route path="/marketing" element={<Marketing />} />
    //       <Route path="/design" element={<Design />} />
    //     </Routes>
    //   </Router> */}

    //   {/* Routes Yagouba */}

    //   {/* <Router>
    //     <Routes>
    //       <Route path="/" element={<Login />} />
    //       <Route path="/forgotPW" element={<ForgotPW />} />
    //       <Route path="/dashboard" element={<Layout />}>
    //         <Route index element={<Dashboard />} />
    //         <Route path="/dashboard/domain" element={<Domain />} />
    //         <Route
    //           path="/dashboard/domain/programmation"
    //           element={<Programmation />}
    //         />
    //         <Route path="/dashboard/domain/marketing" element={<Marketing />} />
    //         <Route path="/dashboard/domain/design" element={<Design />} />
    //         <Route path="/dashboard/livraison" element={<Livraison />} />
    //         <Route path="/dashboard/list_apprenants" element={<ListeApprenants />} />
    //       </Route>
    //       <Route path="*" element={<Error />} />
    //     </Routes>
    //   </Router> */}

           

    //   {/* {/* <Dashboards  /> */}
    //   {/* <Login /> */}

    //   {/* domApprenant Component*/}
    //   {/* <DomainApprt /> */}
    // </div>
  );
}

export default App;