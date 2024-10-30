import './FluidButton.css';

const FluidButton = ({ icon, onClick }) => {

  return (
    <button 
      className={`fluid-button`}
      onClick={onClick}
      aria-label="work in progress button"
    >
    
        <ion-icon name={icon}></ion-icon>
  
    </button>
  );
};

export default FluidButton;