import React from 'react';
import './Pdf.css'; // Import the CSS file

const DocumentSection = () => {
  return (
    <div className="document-section">
      <div className="section-header">Datenblätter</div>
      <div className="pdf-icons">
        <div className="pdf-icon"></div>
        <div className="pdf-icon"></div>
      </div>

      <div className="section-header">Montageanleitung</div>
      <div className="pdf-icons">
        <div className="pdf-icon"></div>
        <div className="pdf-icon"></div>
      </div>

      <div className="section-header">Prüfzertifikate</div>
      <div className="pdf-icons">
        <div className="pdf-icon"></div>
        <div className="pdf-icon"></div>
        <div className="pdf-icon"></div>
      </div>

      <div className="section-header">Sonstiges</div>
      <div className="pdf-icons">
        <div className="pdf-icon"></div>
      </div>
    </div>
  );
};

export default DocumentSection;