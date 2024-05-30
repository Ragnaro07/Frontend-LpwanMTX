import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Tecnologias from './components/Tecnologias';
import SmartMetering from './components/SmartMetering';
import Galeria from './components/Galeria';
import Simulador from './components/Simulador';
import Plataforma from './components/Plataforma';
import './assets/css/style1.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/tecnologiasIot" element={<Tecnologias />} />
        <Route path="/smartMetering" element={<SmartMetering />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/simulador" element={<Simulador />} />
        <Route path="/plataforma" element={<Plataforma />} />
      </Routes>
    </Router>
  );
}

export default App;
