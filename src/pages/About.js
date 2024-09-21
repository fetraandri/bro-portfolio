import React from 'react'; 
import './styles/About.css';
import Profilpro from '../pages/styles/profil/Profilpro.jpg';
import DownloadCV from '../components/DownloadCV';
import Pie from '../components/Pie';

const skillsData = [
  { name: 'Créativité', percentage: 90, colour: 'greenyellow' },
  { name: 'Ponctualité', percentage: 85, colour: 'blue' },
  { name: 'Précision', percentage: 80, colour: 'orange' },
  { name: 'Professionnalisme', percentage: 95, colour: 'purple' },
];

const About = () => {
  return (
    <div className="background-about">
      <div className="about-container">
        <div className="profile-section">
          <img src={Profilpro} alt="Profile" className="profile-image" />
          <p className="profile-name">Fetra ANDRIAMAMONJY</p>
          <p className="email">hei.fetra@gmail.com</p>
        </div>
        <div className="text-section">
          <h1>À propos de moi</h1>
          <p>
            Je suis étudiant en 3ème année chez HEI, où j'ai acquis des connaissances approfondies en INFORMATIQUE. Mes études m'ont fourni une solide base en programmation, que j'ai appliquée dans ma carrière professionnelle.
          </p>
        </div>
      </div>

      <div className="skills">
        <h2 className="skills-title">Skills</h2>
        {skillsData.map(skill => (
          <div key={skill.name} className="skill-item">
            <div className="skill-container">
              <h3 className="skill-title">{skill.name}</h3>
              <Pie percentage={skill.percentage} colour={skill.colour} />
            </div>
          </div>
        ))}
      </div>
      <DownloadCV />
    </div>
  );
};

export default About;
