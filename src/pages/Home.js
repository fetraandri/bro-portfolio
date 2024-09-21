import React from 'react';
import './styles/Home.css'; 
import tahiry from '../assets/tahiry.png';

const Home = () => {
  return (
    <div className="container-fluid home-container">
      <div className="row h-100">
        <div className="col-md-6 d-flex justify-content-center align-items-center image-container">
          <img src={tahiry} alt="tahiry" className="img-fluid" />
        </div>

        <div className="col-md-6 d-flex flex-column justify-content-center align-items-start text-content">
          <h2>Je m'appelle Tahiry ANDRIAMAMONJY, </h2>
          <p>"Je suis un artiste polyvalent, dédié à l'exploration des différentes formes d'art. Mon expertise en dessin me permet de créer des œuvres uniques et captivantes. En tant que spécialiste de la peinture murale, je transforme les espaces avec des créations originales. Ma passion pour l'art me pousse à fusionner créativité et expression visuelle. Chaque projet que j'entreprends est une occasion d'inspirer et d'élever l'expérience artistique."</p>          

        </div>
      </div>
    </div>
  );
};

export default Home;
