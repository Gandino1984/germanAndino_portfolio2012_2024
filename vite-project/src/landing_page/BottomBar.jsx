import React from 'react';
import './BottomBar.css';
import PeabodyWinnerButton from './PeabodyWinnerButton.jsx';
import GaboWinnerButton from './GaboWinnerButton.jsx';
import DesalambreWinnerButton from './DesalambreWinnerButton.jsx';

const BottomBar = ({
  onDesalambreEnter,
  onDesalambreLeave,
  onPeabodyEnter,
  onPeabodyLeave,
  onGaboEnter,
  onGaboLeave
}) => {
  return (
    <div className='bottom-buttons-wrapper'>
      <span className='bottom-buttons-title'>Reconocimientos</span>
      <div className='bottom-buttons-container'>
        <DesalambreWinnerButton 
          onMouseEnter={onDesalambreEnter}
          onMouseLeave={onDesalambreLeave}
        />
        <PeabodyWinnerButton 
          onMouseEnter={onPeabodyEnter}
          onMouseLeave={onPeabodyLeave}
        />
        <GaboWinnerButton 
          onMouseEnter={onGaboEnter}
          onMouseLeave={onGaboLeave}
        />
      </div>
      <span className='bottom-bar-coptright'>Desarrollado por German Andino © 2024</span>
    </div>
  );
};

export default BottomBar;