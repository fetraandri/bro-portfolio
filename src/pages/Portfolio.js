import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { ReactPhotoCollage } from "react-photo-collage";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './styles/Portfolio.css';  
import PortfolioCarousel from '../components/PortfolioCarousel';

const Portfolio = () => {
  const setting1 = {
    width: "100%", 
    height: ["250px", "170px"],
    layout: [1, 4],
    photos: [
      {
        source: "https://scontent.ftnr4-2.fna.fbcdn.net/v/t39.30808-6/459796810_836751915238969_5128367523813861865_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGhJzi2tJ7GPy3RuVNZ_x39ngG29EdzNYaeAbb0R3M1hiyRGpqrnVsu_KsIXuTH2ifpilX5mStHeu-PauhLxu1A&_nc_ohc=EkzbrSCkHQQQ7kNvgF_KNL4&_nc_zt=23&_nc_ht=scontent.ftnr4-2.fna&_nc_gid=AI-yISlerYm_9s-B2g5hAni&oh=00_AYBEe27QKbfKZBI9jGnVI4brbc-MGqiaS0iF1Cdba7ChIA&oe=66F4B053"
      },
      {
        source: "https://scontent.ftnr4-2.fna.fbcdn.net/v/t39.30808-6/460339155_840569211539921_776498756957725429_n.jpg?stp=dst-jpg_p526x296&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFnmNePY3_hVHGTZAxaKlLUJx7EekgX9monHsR6SBf2avFJZ_T7wkgGmcrDkWhX7DF1utd0f-jcSz7UXWkF9LmA&_nc_ohc=qBcSBVM_G0QQ7kNvgFV9JEt&_nc_zt=23&_nc_ht=scontent.ftnr4-2.fna&oh=00_AYD_GosAvQVVuJrz55uifV8r6yJcStTzmV_Hv2JrtWTqXA&oe=66F4B6EC"
      },
      {
        source: "https://scontent.ftnr4-2.fna.fbcdn.net/v/t39.30808-6/458285865_827944452786382_8857640499833958501_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH2cvlArf8hYrK4UCuwipzmy8uPiPRddoLLy4-I9F12gmLfjKlg7H7G1Pgu37yCh0Gy4e4q0vXVYKnAh8wiw4yR&_nc_ohc=K7PqhJxIX3oQ7kNvgHivBKX&_nc_zt=23&_nc_ht=scontent.ftnr4-2.fna&_nc_gid=A5kzepZAf1M0kLAHyEQeF-1&oh=00_AYDhHYWQDO6FYeaKq3aJQAgEZ6qq-_8Z9w8Xpr5Xv6JT5Q&oe=66F4B146"
      },
    ],
    showNumOfRemainingPhotos: true
  };

  const setting2 = {
    width: "100%",
    height: ["250px", "170px"],
    layout: [1, 2],
    photos: [
      {
        source: "https://scontent.ftnr4-2.fna.fbcdn.net/v/t39.30808-6/452263146_801222955458532_3889930526529617129_n.jpg?stp=dst-jpg_p417x417&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHpHigNI2G7iqpEeEToNniY8oV10nf26bzyhXXSd_bpvKiA56KjvaSXW2mEGy8qmG83Mzf-QJpTsfrFFuo0ubzw&_nc_ohc=5Nabc8-K2HwQ7kNvgHtkpOx&_nc_zt=23&_nc_ht=scontent.ftnr4-2.fna&_nc_gid=AP-6UY89FmEv1oH0vlO-YsN&oh=00_AYDiFeaWfMf226QB8EPJkJ3MAvycG0EoUC06Gz5GYrK_rQ&oe=66F4900C"
      },
      {
        source: "https://scontent.ftnr4-2.fna.fbcdn.net/v/t39.30808-6/452260734_801223005458527_2726456470093631058_n.jpg?stp=cp6_dst-jpg_p526x296&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFYpQs3a9ZZJr6PC3IFEwwClpAbbQLLwwGWkBttAsvDAf_6aK294hUd_WEkgPDBeRH4W9ILuDWbB7zcxL0qDrKJ&_nc_ohc=e6E00BH9eqQQ7kNvgFiWVdG&_nc_zt=23&_nc_ht=scontent.ftnr4-2.fna&_nc_gid=AP-6UY89FmEv1oH0vlO-YsN&oh=00_AYBsExEIhVuKWBnJ_6yGmiCQrUErUktisjr5GnG4fFfkSA&oe=66F482E0"
      },
      {
        source: "https://scontent.ftnr4-2.fna.fbcdn.net/v/t39.30808-6/452416368_801222965458531_5803784048948756908_n.jpg?stp=dst-jpg_s600x600&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGpb3L1o2BpVRZ9VQyrGuG8Ok4dMsieFtw6Th0yyJ4W3CpzAQduSqyKF3YXPKS4WON1qsn1YkbWZ0FSZ3LFicNx&_nc_ohc=5pdsMOZjZuEQ7kNvgGGQRSr&_nc_zt=23&_nc_ht=scontent.ftnr4-2.fna&_nc_gid=AP-6UY89FmEv1oH0vlO-YsN&oh=00_AYBdrnNof_dNLH0BTJ2XuIe7T9GRCv0W85jFHv2EZqVZIA&oe=66F480D9"
      }
    ],
    showNumOfRemainingPhotos: true
  };

  return (
    <div className="portfolio-background">
      <div className="container mt-5">
        <h1 className="text-center mb-5 portfolio-title">Mes projets et Réalisations</h1>
        
        <Row className="d-flex align-items-center section-separator">
          <Col md={6} className="fade-in-left">
            <ReactPhotoCollage {...setting1} />
          </Col>

          <Col md={6} className="fade-in-right">
            <div className="right-text">
              <h2 className="text-animation">Peinture Murale</h2>
              <p className="text-animation">Voilà l'espace de méditation de Yoga, une réalisation artistique que j'ai conçue pour "Gaïa", un centre de bien-être et de guérison.</p>
              <p className="text-animation">Ce projet reflète une atmosphère de sérénité et de paix, un environnement propice à la relaxation et à la méditation. Mon intention était de capturer l'essence de la tranquillité à travers cette œuvre, en intégrant des éléments naturels et spirituels.</p>
            </div>
          </Col>
        </Row>

        {/* Nouvelle section pour le second collage */}
        <Row className="mt-5 d-flex align-items-center section-separator">
          <Col md={6} className="fade-in-left">
            <div className="left-text">
              <h2 className="text-animation">Portrait</h2>
              <p className="text-animation">Portrait Portrait…..on revient sur les Portraits…</p>
              <p className="text-animation">Un travail en graphite de notre très belle Miss @Tsimihetygasy Jennifer …</p>
            </div>
          </Col>

          <Col md={6} className="fade-in-right">
            <ReactPhotoCollage {...setting2} />
          </Col>
        </Row>

          {/* Ton contenu existant pour les collages */}

        {/* Texte avant le carrousel */}
        <div className="mt-5 text-center">
          <p className="mb-4">
            Trois de mes activités ont été faites par notre groupe de travail  au Lycée Lecolibri Sabotsy Namehana …
            Face painting… Presentation cours de dessin (Exposition) … et Exposition d’Oeuvre ….
          </p>
          <p className="mb-4">
            Une journée pleinement positive pour la renaissance de C’ArtBON… Merci pour toutes les contributions à la réalisation de cet événement…
            (Parents d’élèves… Directions LeColibri… Équipe C’ArtBON.. Surtout aux élèves du Colibri)..
          </p>
          <p className="mb-4">
            #art #facepainting Commune Sabotsy Namehana #
          </p>
        </div>

        <PortfolioCarousel />
      </div>
    </div>
  );
};

export default Portfolio;
