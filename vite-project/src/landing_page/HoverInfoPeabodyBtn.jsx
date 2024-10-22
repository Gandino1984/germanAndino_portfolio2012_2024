import React from 'react';
import './HoverInfoPeabodyBtn.css';
import hoverPeabodyInfoImage from '/src/assets/images/HONDURAS-COVER-PHOTO-peabody.jpg';

const HoverInfoPeabodyBtn = () => {

    return (
        <div className='hover-infoPeabody-container'>
            <div
                style={{backgroundImage: `url(${hoverPeabodyInfoImage})`}} 
                className="hover-infoPeabody-image"    
            />
            <span className='hover-infoPeabody-title'>"Peabody Award 2014: "Gangs, Murder, and Migration in Honduras"</span>
            <span className='hover-infoPeabody-subtitle'>Futuro Media Group, Round Earth Media, Radio Progreso, German Andino</span>
            <p className='hover-infoPeabody-description'>Este reportaje nos lleva a Honduras, donde la vida como conductor de autobús o taxi incluye la extorsión diaria. Las amenazas de ser reclutado por pandillas son parte de la experiencia adolescente y prácticamente todos los ciudadanos conocen a alguien que ha sido asesinado. La disparidad económica en la raíz de esta violencia está profundamente arraigada. Latino USA: Gangs, Murder, and Migration in Honduras recibe un Premio Peabody por esta investigación.</p>
        </div>  
    );

};

export default HoverInfoPeabodyBtn;