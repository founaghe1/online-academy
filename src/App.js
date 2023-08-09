import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Domain from './components/Domain/Apprenant/Domain';
import Programmation from './components/Domain/Apprenant/Programmation';
import Marketing from './components/Domain/Apprenant/Marketing';
import Design from './components/Domain/Apprenant/Design';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Domain />} />
          <Route path="/sous-domaine-programmation" element={<Programmation />} />
          <Route path="/sous-domaine-marketing" element={<Marketing />} />
          <Route path="/sous-domaine-design" element={<Design />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
