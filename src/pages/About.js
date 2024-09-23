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
          <p className="profile-name">Tahiry ANDRIAMAMONJY</p>
        </div>
        <div className="text-section">
          <h1>À propos de moi</h1>
          <p>
          Je suis un artiste passionné, spécialisé dans la peinture murale, où j’exprime ma créativité à travers des œuvres uniques et captivantes. Mon parcours en tant qu'enseignant de dessin dans plusieurs écoles m'a permis de transmettre mon savoir-faire et d'inspirer de jeunes talents. J'ai eu l'opportunité de réaliser des projets artistiques variés, notamment des fresques murales pour des espaces publics et privés. En parallèle, je me consacre à la création de portraits sur commande, mettant en avant mon souci du détail et ma sensibilité artistique. Ma maîtrise des techniques picturales me permet d'explorer des styles variés tout en conservant mon propre univers. Chaque œuvre est pour moi une aventure, où je mets en lumière l’essence même de l’art à travers des formes, des couleurs et des émotions. Je continue à enrichir mon expérience en collaborant sur des projets artistiques d’envergure.          </p>
        </div>
      </div>

      <div className="skills">
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
