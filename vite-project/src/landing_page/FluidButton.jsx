import React from 'react';
import './FluidButton.css';

const FluidButton = ({ icon, onClick, isSelected }) => {
  return (
    <button 
      className={`fluid-button ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
      aria-label="work in progress button"
      aria-pressed={isSelected}
    >
      <ion-icon name={icon}></ion-icon>
    </button>
  );
};

export default FluidButton;