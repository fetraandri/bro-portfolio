import React from 'react';
import ContactForm from '../components/Contact/ContactForm';
import { SocialIcon } from 'react-social-icons';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; 
import './styles/Contact.css';

const Contact = () => {
  return (
    <div className="backgroundContact">
      <div className="contact-page">
        <div className="contact-info">
          <h1 className="contact-title">Mon Contact</h1>
          <p className="contact-details">N'hésitez pas à me contacter pour toute question ou demande d'information.</p>
          <p className="contact-details"><FaPhone /> Téléphone : +261 38 66 272 92</p>
          <p className="contact-details"><FaEnvelope /> Email : tahiryfitiavanaa@gmail.com</p>
          <p className="contact-details"><FaMapMarkerAlt /> Lieu : Antananarivo, Madagascar, Iadiambola Sabotsy Namehana</p>
        </div>
        <div className="contact-form-container">
          <ContactForm />
          <div className="social_icon_contact">
            <SocialIcon url="https://facebook.com/tahiryfitiavan" target="_blank" className="mx-2" />
            <SocialIcon url="https://instagram.com/tahiryfitiavanaa" target="_blank" className="mx-2" />
            <SocialIcon url="https://wa.me/0382661272" target="_blank" className="mx-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
