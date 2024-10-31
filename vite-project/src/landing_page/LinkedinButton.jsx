import React from 'react';
import './LinkedinButton.css';

const LinkedinButton = ({ icon, onClick, isSelected }) => {
  return (
    <button 
      className={`linkedin-button ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
      aria-label="linkedin button"
      aria-pressed={isSelected}
    > 
      <ion-icon name={icon}></ion-icon> 
    </button>
  );
};

export default LinkedinButton;