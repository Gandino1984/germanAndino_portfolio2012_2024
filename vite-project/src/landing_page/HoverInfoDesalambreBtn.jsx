import React from 'react';
import './HoverInfoDesalambreBtn.css';
import hoverDesalambreInfoImage from '/src/assets/images/videoframe_5704.png';

const HoverInfoDesalambreBtn = () => {

    return (
        <div className='hover-infoDesalambre-container'>
            <div
                style={{backgroundImage: `url(${hoverDesalambreInfoImage})`}} 
                className="hover-infoDesalambre-image"    
            />
            <span className='hover-infoDesalambre-title'>"Tierra Sin Ellas" ganador del Premio Desalambre 2019</span>
            <span className='hover-infoDesalambre-subtitle'>Multimedia. Revista 5W, German Andino. Cataluña</span>
            <p className='hover-infoDesalambre-description'>El especial Tierra sin ellas ha obtenido el I Premio Desalambre en la categoría de trabajo multimedia.  El galardón ha sido creado por eldiario.es para “reconocer el trabajo de periodistas en el campo de los derechos humanos” así como “promocionar y aplaudir la calidad profesional y el compromiso en un ámbito trascendental”. El jurado ha destacado de Tierras sin ellas que es un “contenido excelente realizado por algunas de las autoras más potentes de esta generación” así como “el elegante e innovador uso periodístico del grafismo para representar la ausencia”.</p>
        </div>
    );
};

export default HoverInfoDesalambreBtn;