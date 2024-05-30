import React, { useEffect, useRef } from 'react';
import Navbar from './Navbar';
import '../assets/css/style1.css';
import MecanicoG1_6 from '../assets/img/G1.6 Mec.gif';
import MecanicoG2_5 from '../assets/img/G2.5 Mec.gif';
import MecanicoG4 from '../assets/img/G4 Mec.gif';
import MecanicoG10s from '../assets/img/G10S Mec.gif';
import DigitalG2_5 from '../assets/img/G2.5 dig.gif';
import DigitalG4 from '../assets/img/G4 Dig.gif';
import CloseIcon from '../assets/iconos/bx-x.svg'; // Actualiza con la ruta correcta de tu ícono de cierre
import Image1 from '../assets/img/G1.6 Mec.gif'; // Actualiza con la ruta correcta de tu imagen

const Galeria = () => {
  const hamburgerRef = useRef(null);
  const imagenesRef = useRef([]);
  const imagenesLightRef = useRef(null);
  const contenedorLightRef = useRef(null);

  useEffect(() => {
    const imagenes = imagenesRef.current;
    const imagenesLight = imagenesLightRef.current;
    const contenedorLight = contenedorLightRef.current;
    const hamburger1 = hamburgerRef.current;

    const aparecerImagen = (imagen) => {
      imagenesLight.src = imagen;
      contenedorLight.classList.toggle('show');
      imagenesLight.classList.toggle('showImage');
      if (hamburger1) {
        hamburger1.style.opacity = '0';
      }
    };

    imagenes.forEach((imagen) => {
      if (imagen) {
        imagen.addEventListener('click', () => {
          aparecerImagen(imagen.getAttribute('src'));
        });
      }
    });

    const handleClickOutside = (e) => {
      if (e.target !== imagenesLight) {
        contenedorLight.classList.toggle('show');
        imagenesLight.classList.toggle('showImage');
        if (hamburger1) {
          hamburger1.style.opacity = '1';
        }
      }
    };

    contenedorLight.addEventListener('click', handleClickOutside);

    // Cleanup event listeners on component unmount
    return () => {
      imagenes.forEach((imagen) => {
        if (imagen) {
          imagen.removeEventListener('click', () => {
            aparecerImagen(imagen.getAttribute('src'));
          });
        }
      });

      contenedorLight.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <Navbar />
      <header>
        <div className="contenedor-producto">
          <h1 className="titulo">Galeria de conectividad IoT</h1>
          <p className="copy">
            En Metrex contamos con variedad de productos, con los cuales se pueden utilizar diferentes tipos de tecnologías IoT.
          </p>
        </div>
      </header>
      <main>
        <section className="gallery" id="portafolio">
          <div className="contenedor">
            <h2 className="subtitulo1" id="seccion1">Medición analoga</h2>
            <div className="contenedor-galeria">
              <img ref={(el) => (imagenesRef.current[0] = el)} src={MecanicoG1_6} className="img-galeria" alt="Medidor G1.6" />
              <img ref={(el) => (imagenesRef.current[1] = el)} src={MecanicoG2_5} className="img-galeria" alt="Medidor G2.5" />
              <img ref={(el) => (imagenesRef.current[2] = el)} src={MecanicoG4} className="img-galeria" alt="Medidor G4" />
              <img ref={(el) => (imagenesRef.current[3] = el)} src={MecanicoG10s} className="img-galeria" alt="Medidor G10S" />
            </div>
          </div>
        </section>
        <section>
          <div className="contenedor">
            <h2 className="subtitulo1" id="seccion2">Medición digital</h2>
            <div className="contenedor-galeria">
              <img ref={(el) => (imagenesRef.current[4] = el)} src={DigitalG2_5} className="img-galeria" alt="Medidor G2.5" />
              <img ref={(el) => (imagenesRef.current[5] = el)} src={DigitalG4} className="img-galeria" alt="Medidor G4" />
            </div>
          </div>
        </section>
        <section ref={contenedorLightRef} className="image-light">
          <img src={CloseIcon} className="close1" alt="Icono de cierre" />
          <img ref={imagenesLightRef} className="agregar-imagen" src={Image1} alt="imagen de rod" />
        </section>
      </main>
    </div>
  );
};

export default Galeria;
