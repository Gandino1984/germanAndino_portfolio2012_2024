import React, { useState, useCallback, useMemo } from 'react';
import { useSpring, animated } from 'react-spring';
import HomeButton from './HomeButton';
import FluidButton from './FluidButton';
import ContactButton from './ContactButton';
import LinkedinButton from './LinkedinButton';
import DownloadCvButton from './DownloadCvButton';
import './TopBar.css';

const TopBar = React.memo(({ onHomeButtonClick, onFluidButtonClick, onContactButtonClick, onLinkedinButtonClick, activeButton, onDocumentButtonClick }) => {
    const [hoveredButton, setHoveredButton] = useState(null);

    const handleMouseEnter = useCallback((buttonName) => {
        setHoveredButton(buttonName);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setHoveredButton(null);
    }, []);

    const tooltipText = useMemo(() => {
        switch (hoveredButton) {
            case 'home': return '';
            case 'fluid': return 'Proyectos en desarrollo';
            case 'contact': return 'Conecta';
            case 'linkedin': return 'LinkedIn';
            case 'document': return 'Curriculum Vitae';
            default: return '';
        }
    }, [hoveredButton]);

    const tooltipSpring = useSpring({
        opacity: 1,
        transform: 'translateY(0px)',
        from: { opacity: 0, transform: 'translateY(-10px)' },
        reset: true,
    });

    const renderButton = useCallback((ButtonComponent, name, icon, isActive, onClick) => (
        <div onMouseEnter={() => handleMouseEnter(name)} onMouseLeave={handleMouseLeave}>
            <ButtonComponent
                icon={icon}
                isActive={isActive}
                onClick={onClick}
            />
        </div>
    ), [handleMouseEnter, handleMouseLeave]);

    return (
        <div className="top-bar">
            {renderButton(HomeButton, 'home', 'home-outline', activeButton === 'home', onHomeButtonClick)}
            {renderButton(FluidButton, 'fluid', 'layers-outline', activeButton === 'fluid', onFluidButtonClick)}
            {renderButton(ContactButton, 'contact', 'mail-outline', activeButton === 'contact', onContactButtonClick)}
            {renderButton(LinkedinButton, 'linkedin', 'logo-linkedin', activeButton === 'linkedin', onLinkedinButtonClick)}
            {renderButton(DownloadCvButton, 'document', 'document-outline', activeButton === 'document', onDocumentButtonClick)}

            <animated.span className='top-bar-button-tooltip' style={tooltipSpring}>
                {tooltipText}
            </animated.span>
        </div>
    );
});

export default TopBar;