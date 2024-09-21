import React from 'react';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './styles/Portfolio.css';  

const Portfolio = () => {
  return (
    <div className="portfolio-background">
      <div className="container mt-5">
        <h1 className="text-center mb-5 portfolio-title">Mes projets et Réalisation</h1>
        
        <Row className="d-flex align-items-center">
          <Col md={6} className="fade-in-left">
            <div className="left-text">
              <h2 className="text-animation">Peinture Murale</h2>
              <p className="text-animation">Voilà l'espace de méditation de Yoga, une réalisation artistique que j'ai conçue pour "Gaïa", un centre de bien-être et de guérison.</p>
              <p className="text-animation">Ce projet reflète une atmosphère de sérénité et de paix, un environnement propice à la relaxation et à la méditation. Mon intention était de capturer l'essence de la tranquillité à travers cette œuvre, en intégrant des éléments naturels et spirituels.</p>
            </div>
          </Col>

          <Col md={6} className="fade-in-right">
            <div className="right-image text-center">
              <img 
                src="https://scontent.ftnr4-2.fna.fbcdn.net/v/t39.30808-6/459796810_836751915238969_5128367523813861865_n.jpg?stp=dst-jpg_s720x720&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGhJzi2tJ7GPy3RuVNZ_x39ngG29EdzNYaeAbb0R3M1hiyRGpqrnVsu_KsIXuTH2ifpilX5mStHeu-PauhLxu1A&_nc_ohc=EkzbrSCkHQQQ7kNvgF_KNL4&_nc_zt=23&_nc_ht=scontent.ftnr4-2.fna&oh=00_AYAHBVVYU9LNyzD9p505KyC9S9o0Wm5GirYXBQKmUY048w&oe=66F47813" 
                alt="Image de projet"
                className="img-fluid animate-image"
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Portfolio;
