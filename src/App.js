import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Admin from './components/admin/Admin';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard/dashboard'
import Login from './components/login/Login';
import ForgotPW from './components/ForgotPW/ForgotPW'
function App() {
  return (
    <div className="App">
      {/* <Admin/> */}
      {/* <Dashboard  /> */}
      {/* <Login /> */}
      <ForgotPW/>
    </div>
  );
}

export default App;
