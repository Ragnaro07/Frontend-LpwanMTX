import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link de react-router-dom
import logo from '../assets/img/logo.gif';
import '../assets/css/style1.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="menuNavegacion">
      <div className="hamburger" onClick={toggleMenu}>
        <span></span><span></span><span></span>
      </div>
      <div className="menu">
        <img src={logo} alt="logo empresa" className="logo" />
        <ul id="sliding_menu" className={isMenuOpen ? 'open' : ''}>
          <li><span className="close" onClick={closeMenu}>x</span></li><br />
          <li>
            <Link to="/" onClick={closeMenu}>Inicio</Link>
            <ul className="submenu">
              <li><Link to="/quienes-somos" onClick={closeMenu}>¿Quienes somos?</Link></li>
              <li><Link to="/localizacion" onClick={closeMenu}>Localización</Link></li>
            </ul>
          </li>
          <li><Link to="/smartMetering" onClick={closeMenu}>Medición inteligente</Link></li>
          <li>
            <Link to="/tecnologiasIot" onClick={closeMenu}>Tecnologías IoT</Link>
            <ul className="submenu2">
              <li><Link to="/lorawan" onClick={closeMenu}>LoRaWAN</Link></li>
              <li><Link to="/sigfox" onClick={closeMenu}>Sigfox</Link></li>
              <li><Link to="/cat-m1" onClick={closeMenu}>Cat-M1</Link></li>
              <li><Link to="/cat1" onClick={closeMenu}>Cat.1</Link></li>
            </ul>
          </li>
          <li>
            <Link to="/galeria" onClick={closeMenu}>Galeria</Link>
            <ul className="submenu3">
              <li><Link to="/galeria#seccion1" onClick={closeMenu}>Medición analoga</Link></li>
              <li><Link to="/galeria#seccion2" onClick={closeMenu}>Medición digital</Link></li>
              <li><Link to="/medicion-ultrasonica" onClick={closeMenu}>Medición ultrasonica</Link></li>
              <li><Link to="/medicion-prepago" onClick={closeMenu}>Medición Prepago</Link></li>
            </ul>
          </li>
          <li><Link to="/plataforma" onClick={closeMenu}>Plataforma</Link></li>
          <li><Link to="/simulador" onClick={closeMenu}>Simulador</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
