import React from 'react';
import './ContactForm.css';

const ContactForm = ({ onClose }) => {
    const handleClickCloseForm = (event) => {
        event.preventDefault();
        onClose(true); // Pass true to indicate that featured projects should be shown
    }

    return (
        <div className='contact-form-container'>
            <form className='contact-form' action={`https://formspree.io/f/mrgnwjjo`} method="post">
                <div className='contact-form-header'>
                    <span>Ponte en contacto</span>
                    <button onClick={handleClickCloseForm}>
                        <ion-icon name="close"></ion-icon>
                    </button>
                </div>
                <input name="Email" id="email" type="email" required placeholder="Escribe tu dirección de correo..."/>
                <textarea className='message-textarea' placeholder="El mensaje para German aquí..." name="message" id="message" required rows="20"/>
                <button className='submit-btn' type="submit"><ion-icon name="send"></ion-icon></button>
            </form>    
        </div>
    );
};

export default ContactForm;