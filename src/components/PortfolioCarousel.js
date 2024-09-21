import React from 'react';
import { Carousel, Card } from 'react-bootstrap';
import './styles/PortfolioCarousel.css';  // Assure-toi d'inclure le CSS ici

const PortfolioCarousel = () => {
  return (
    <Carousel className="mt-5 portfolio-carousel">
      <Carousel.Item>
        <Card className="carousel-card">
          <Card.Img 
            className="d-block w-100 carousel-image"
            src="https://scontent.ftnr4-2.fna.fbcdn.net/v/t39.30808-6/450248823_890018879832473_6474496149325282657_n.jpg?stp=dst-jpg_s600x600&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGSCuBSP-sEjkkq2EPmnkDNONE3TBSDH-w40TdMFIMf7BHxPABSyeNU474rTdl5xUZGZkW9uWy6elTA7VlLKpYE&_nc_ohc=mFz5UMkuLJMQ7kNvgF-Gt-Y&_nc_zt=23&_nc_ht=scontent.ftnr4-2.fna&oh=00_AYDAsIEpvlLjec8NFbzjkZEUbrevemZX3Sb7uihtwgeOyQ&oe=66F4BB4D"
            alt="Première image" 
          />
          <Card.Body>
            <Card.Title>Photo 1</Card.Title>
          </Card.Body>
        </Card>
      </Carousel.Item>

      <Carousel.Item>
        <Card className="carousel-card">
          <Card.Img 
            className="d-block w-100 carousel-image"
            src="https://scontent.ftnr4-2.fna.fbcdn.net/v/t39.30808-6/450350540_890018233165871_6676723819779347266_n.jpg?stp=dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG7BIjeyAALZbC1AOXlHMvkBnzD-n9d8EYGfMP6f13wRgwezMVq2OoG6Z-Zua0Car8zBFN3kB2eoSf9toFouf-h&_nc_ohc=_ustXAelz_wQ7kNvgGRM47y&_nc_zt=23&_nc_ht=scontent.ftnr4-2.fna&oh=00_AYD7zNa4oHmp65B3RIKoWwRYL2Wtegjg7p27axfnpoYW-Q&oe=66F4A9AB" 
            alt="Deuxième image" 
          />
          <Card.Body>
            <Card.Title>Photo 2</Card.Title>
          </Card.Body>
        </Card>
      </Carousel.Item>

      <Carousel.Item>
        <Card className="carousel-card">
          <Card.Img 
            className="d-block w-100 carousel-image"
            src="https://scontent.ftnr4-2.fna.fbcdn.net/v/t39.30808-6/450118892_890018983165796_4875553685868249403_n.jpg?stp=dst-jpg_s600x600&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFoaXjfzuCNqLuSkMd72ttkL8TCMDZHyZYvxMIwNkfJln2H1U1BrYX31QpfYK87HDbQZDXiNBIp7lX1y2QokTnc&_nc_ohc=R29W3wDbaIIQ7kNvgFNckwx&_nc_zt=23&_nc_ht=scontent.ftnr4-2.fna&oh=00_AYDwaptACVG1v9J8cbrXLWV3p8fjC_nBW-Z-u_n82deNig&oe=66F4BF9A" 
            alt="Troisième image" 
          />
          <Card.Body>
            <Card.Title>Photo 3</Card.Title>
          </Card.Body>
        </Card>
      </Carousel.Item>
    </Carousel>
  );
};

export default PortfolioCarousel;
