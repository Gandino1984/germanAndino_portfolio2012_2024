import React from 'react';
import './HomeButton.css';

const HomeButton = ({ icon, onClick }) => {

  return (
      <button 
        className={`home-button`}
        onClick={onClick}
        aria-label="home button"
      >      
            <ion-icon name={icon}></ion-icon>
      </button>
  );
};

export default HomeButton;