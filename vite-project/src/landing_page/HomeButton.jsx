import React from 'react';
import './HomeButton.css';

const HomeButton = ({ icon, onClick, isSelected }) => {
  return (
    <button 
      className={`home-button ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
      aria-label="home button"
      aria-pressed={isSelected}
    >      
      <ion-icon name={icon}></ion-icon>
    </button>
  );
};

export default HomeButton;