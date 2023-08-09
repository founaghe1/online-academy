import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Domain from './components/Domain/Coach/Domain';
import Programmation from './components/Domain/Coach/Programmation';
import Marketing from './components/Domain/Coach/Marketing';
import Design from './components/Domain/Coach/Design';
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
