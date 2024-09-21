import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './styles/Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section contact-section">
          <h4>Contactez-moi</h4>
          <p><FontAwesomeIcon icon={faEnvelope} /> Email: tahiryfitiavanaa@gmail.com</p>
          <p><FontAwesomeIcon icon={faPhone} /> Téléphone: +261 38 66 272 92<br />
                        </p>
        </div>

        <div className="footer-section">
          <h4>Suivez-moi</h4>
          <div className="social-icon">
            
            <a href="https://web.facebook.com/tahiryfitiavan" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://instagram.com/tahiryfitiavanaa" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://wa.me/0382661272" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Localisation</h4>
          <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Antananarivo, Madagascar <br /> Sabotsy/Namehana andrefantsena</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Tahiry Fitiavana. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
