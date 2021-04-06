import React from 'react';
import './WelcomePage.css';
import WelcomeBlock from './WelcomeBlock/WelcomeBlock';
import TeachersBlock from './TeachersBlock/TeachersBlock';
import BestRappersBlock from './BestRappersBlock/BestRappersBlock';

function WelcomePage() {
    return (
        <div className="welcome_page">
            <WelcomeBlock />
            <TeachersBlock />
            <BestRappersBlock />
        </div>
    );
}

export default WelcomePage;