import React from 'react';
import './HoverInfoGaboBtn.css';
import hoverGaboInfoImage from '/src/assets/images/germanAndino2017-Ceremonia_Premiacion_GABO.jpg';

const HoverInfoGaboBtn = () => {

    return (
        <div className='hover-infoGabo-container'>
             <div
                style={{backgroundImage: `url(${hoverGaboInfoImage})`}} 
                className="hover-infoDesalambre-image"    
            />
            <span className='hover-infoGabo-title'>"El Hábito de la Mordaza" de German Andino proyecto ganador del GABO 2017</span>
            <span className='hover-infoGabo-subtitle'>Novela Gráfica. Diario El País, México</span>
            <p className='hover-infoGabo-description'>El Hábito de la Mordaza ofrece una visión renovada de las pandillas en Honduras al combinar las imágenes de un enorme comic con pequeños audios. Con este trabajo, el tema conocido de la violencia y de las drogas en Centroamérica cobra una nueva fuerza al utilizar un encuentro entre los dibujos de un artista  y los tatuajes de personajes que nunca desnudaron con tanta franqueza su sufrimiento.</p>
        </div>
    );

};

export default HoverInfoGaboBtn;