import React, { useState } from 'react';
import './LinkedinLink.css';

const LinkedinLink = () => {
    const [copied, setCopied] = useState(false);
    const linkedInUrl = 'https://www.linkedin.com/in/germanandino/';

    const copyToClipboard = () => {
        navigator.clipboard.writeText(linkedInUrl).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <div className="linkedin-link">  
            <ion-icon name="logo-linkedin"></ion-icon>
            <span>{copied ? 'Link copiado al portapapeles' : 'www.linkedin.com/in/germanandino'}</span>
            <button className="copy-link-btn" onClick={copyToClipboard}>
                <ion-icon name="copy"></ion-icon>
            </button>
        </div>
    );
};

export default LinkedinLink;