import React from 'react';
import './styles/DownloadCV.css';

function DownloadCV() {
  const handleDownload = () => {
    window.open('https://drive.google.com/file/d/1m_9GdhknQtgEcHavQc_vZz9TOc46AH_s/view?usp=sharing', '_blank');
  };

  return (
    <div className="cv-section">
      <h3>Intéressé par mon profil ?</h3>
      <p>Vous pouvez télécharger mon CV ici.</p>
      <div className="cv-buttons">
        <button onClick={handleDownload} className="cv-button">
          Télécharger le CV
        </button>
        
      </div>
    </div>
  );
}

export default DownloadCV;
