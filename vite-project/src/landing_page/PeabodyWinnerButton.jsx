// PeabodyWinnerButton.js
import './PeabodyWinnerButton.css';
import peabodyButtonThumb from '/src/assets/images/latinoUsaPeabodyAward2014Banner.png';

const PeabodyWinnerButton = ({ onMouseEnter, onMouseLeave }) => {
  const handleClick = () => {
    window.open('https://peabodyawards.com/award-profile/nprs-latino-usa-gangs-murder-and-migration-in-honduras/', '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      style={{backgroundImage: `url(${peabodyButtonThumb})`}}
      onClick={handleClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="peabody-winner-button"
      aria-label="Peabody Winner"
    />
  );
};

export default PeabodyWinnerButton;



