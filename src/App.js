import './App.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import Admin from './components/ComponentAdmin/admin/Admin';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/ComponentCoach/Dashboard/dashboard'
import Login from './components/ComponentCoach/login/Login';
import ForgotPW from './components/ComponentCoach/ForgotPW/ForgotPW'


// import Domain from './components/Domain/Domain';
// import Programmation from './components/Domain/Programmation';
// import Marketing from './components/Domain/Marketing';
// import Design from './components/Domain/Design';
import Domain from './components/ComponentCoach/Domain/Domain';
import Programmation from './components/ComponentCoach/Domain/Programmation';
import Marketing from './components/ComponentCoach/Domain/Marketing';
import Design from './components/ComponentCoach/Domain/Design';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Chat from './components/ComponentCoach/Chat/Chat.jsx';

import Livraison from './components/ComponentCoach/Livraisons/Livraison';
import ListeApprenants from './components/ComponentCoach/ListeApprenants/ListeApprenants';
function App() {
  return (
    <div className="App">
      {/* <Admin/> */}
      {/* <Dashboard  /> */}
      
      {/* <Login /> */}
      {/* <ForgotPW/> */}
      {/* <Livraison /> */}
      {/* <Chat/> */}
      <ListeApprenants/>
      
      {/* <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Domain />} />
          <Route path="/programmation" element={<Programmation />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/design" element={<Design />} />
        </Routes>
      </BrowserRouter> */}

     
    </div>
  );
}

export default App;
