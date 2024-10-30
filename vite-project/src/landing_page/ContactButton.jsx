import React from 'react';
import './ContactButton.css';


const ContactButton = ({ icon, onClick }) => {


  return (
    <button 
      className={`contact-button`}
      onClick={onClick}
      aria-label="contact button"
    >
      
        <ion-icon name={icon}></ion-icon>
    </button>
  );
};

export default ContactButton;