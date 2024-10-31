import React from 'react';
import './ContactButton.css';

const ContactButton = ({ icon, onClick, isSelected }) => {
  return (
    <button 
      className={`contact-button ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
      aria-label="contact button"
      aria-pressed={isSelected}
    >
      <ion-icon name={icon}></ion-icon>
    </button>
  );
};

export default ContactButton;