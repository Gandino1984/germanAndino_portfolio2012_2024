import React, { useState, useCallback, useMemo } from 'react';
import { useSpring, animated } from 'react-spring';
import HomeButton from './HomeButton';
import FluidButton from './FluidButton';
import ContactButton from './ContactButton';
import LinkedinButton from './LinkedinButton';
import DownloadCvButton from './DownloadCvButton';
import { ScreenSizeCheck } from './screenCheck';
import './TopBar.css';

const TopBar = React.memo(({ onHomeButtonClick, onFluidButtonClick, onContactButtonClick, onLinkedinButtonClick, activeButton, onDocumentButtonClick }) => {
    const [hoveredButton, setHoveredButton] = useState(null);
    const { isMobile } = ScreenSizeCheck();

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

    const renderButton = useCallback((ButtonComponent, name, icon, onClick) => (
        <div onMouseEnter={() => handleMouseEnter(name)} onMouseLeave={handleMouseLeave}>
            <ButtonComponent
                icon={icon}
                onClick={onClick}
            />
        </div>
    ), [handleMouseEnter, handleMouseLeave]);

    return (
        <>
            {!isMobile && (
                <div className="top-bar">
                    {renderButton(HomeButton, 'home', 'home-outline', onHomeButtonClick)}
                    {renderButton(FluidButton, 'fluid', 'code-working-outline', onFluidButtonClick)}
                    {renderButton(ContactButton, 'contact', 'mail-outline', onContactButtonClick)}
                    {renderButton(LinkedinButton, 'linkedin', 'logo-linkedin', onLinkedinButtonClick)}
                    {renderButton(DownloadCvButton, 'document', 'document-outline', onDocumentButtonClick)}
                    
                    <animated.span className='top-bar-button-tooltip' style={tooltipSpring}>
                        {tooltipText}
                    </animated.span>
                </div>
            )}
        </>
    );
});

export default TopBar;