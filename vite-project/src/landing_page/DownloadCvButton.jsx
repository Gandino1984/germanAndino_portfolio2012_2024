import React from 'react';
import { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';
import './DownloadCvButton.css';
import uploadedFileLink from '/CVGermanAndino2024.pdf';

const DownloadCvButton = ({ icon, onClick }) => {

  return (
    
    <a href={uploadedFileLink} target="_blank" rel="noopener noreferrer" download>
        <button 
            className="download-button"
            onClick={onClick}
            aria-label="download button"
            >

            <ion-icon name={icon}></ion-icon>
        </button>
    </a>

    
  );
};

export default DownloadCvButton;