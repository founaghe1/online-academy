import './App.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import Admin from './components/admin/Admin';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard/dashboard'
import Login from './components/login/Login';
import ForgotPW from './components/ForgotPW/ForgotPW'
import PageAccueilCoach from './components/pageAccueilCoach/PageAccueilCoach';
import 'bootstrap/dist/css/bootstrap.min.css'
import Livraison from './components/Livraisons/Livraison';
function App() {
  return (
    <div className="App">
      {/* <Admin/> */}
      {/* <Dashboard  /> */}
      {/* <Login /> */}
      <ForgotPW/>
      {/* <PageAccueilCoach /> */}
      <Livraison />
      
    </div>
  );
}

export default App;
