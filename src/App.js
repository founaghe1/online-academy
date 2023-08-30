import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/js/bootstrap.min.js'
//import Admin from './components/ComponentAdmin/admin/Admin';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Login from './components/ComponentCoach/login/Login';
//import ForgotPW from './components/ComponentCoach/ForgotPW/ForgotPW'
//import SideBar from './components/ComponentCoach/SideBar/Sidebar';
//import Navbar from './components/ComponentCoach/NavBar/Navbar';
//import Layout from './components/ComponentCoach/Layout/Layout';

// Coach
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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


 import Voirlivraison from './components/ComponentApprenant/Livraisons/Voirlivraison';
// import ChatPage from './components/ComponentCoach/ChatPage/ChatPage';


import Modal from "./components/ComponentCoach/Cour/Modal";
import Cour from "./components/ComponentCoach/Cour/Cour";
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
import CoachsRoutes from "./components/Routes/CoachsRoutes";
import ApprenantRoutes from "./components/Routes/ApprenantRoutes";
import AdminRoutes from './components/Routes/AdminRoutes';

// import Qestion from "./components/VoirCours/Voircourphp"
function App() {

  const [user, setUser] = useState(null); // État de l'utilisateur (null pour non connecté)
  const [authorizedRoles, setAuthorizedRoles] = useState(['coach']);

  // Déterminez les itinéraires autorisés en fonction du rôle de l'utilisateur
    let userRoutes = null;
    if (authorizedRoles.includes('coach')) {
      userRoutes = <CoachsRoutes />;
    } else if (authorizedRoles.includes('apprenant')) {
      userRoutes = <ApprenantRoutes />;
    } else if (authorizedRoles.includes('admin')) {
      userRoutes = <AdminRoutes />;
    }

  return (

    <>
      <Router>
        {userRoutes}
        
        {/* <Router>
        <Routes>
          <Route exact path='/' element={<Domain />} />
          <Route path="/programmation" element={<Programmation />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/design" element={<Design />} />
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
      </Router> */}
      </Router>
    <Voirlivraison />

            
    </>

    // <div className='App'>
      // <Admin /> 
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
    //   {/* <ChatPage /> */}
      
    //   {/* <Router>
    //     <Routes>
    //       <Route exact path="/" element={<Domain />} />
    //       <Route path="/programmation" element={<Programmation />} />
    //       <Route path="/marketing" element={<Marketing />} />
    //       <Route path="/design" element={<Design />} />
    //     </Routes>
    //   </Router> */}

    //   {/* Routes Yagouba */}

      // {/* <Router>
      //   <Routes>
      //     <Route path='/' element={<Login />} />
      //     <Route path="/layout" element={ <Layout />}>
      //       <Route path='/layout/dashboard' element={<Dashboard />} />
      //       <Route path='/layout/dashboard/domain' element={<DomainApprt />} />
      //     </Route>
      //   </Routes>
      // </Router> */}

      // {/* <Dashboard  />bakelitraining */}
      // {/* <Login /> */}

      // {/* <ForgotPW/> */}
      // {/* <Livraison /> */}
      // {/* <Voirlivraison />       */}
      // {/* <Chat/> */}
      // {/* <ListeApprenants/> */}
      // {/* <NotificationsCoachs/> */}


    //   {/* nini Routes */}

       

    //   {/* <Modale />
    //   <Coure />  */}

    //   {/* <BrowserRouter>
    //   <Routes>
    //       <Route exact path='/' element={<Voirquizze />} />
    //       <Route path='/question' element={<Qestion />} />
    //     </Routes>
    //   </BrowserRouter> */}

    // </div>
  );
}

export default App;