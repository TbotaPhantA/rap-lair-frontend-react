import React from 'react';
import './Header.css';
import RapLogo from '../../images/Raplogo.png';

function Header() {
    return (
        <div className="main_header">

            <div className="header_left">
                <img src={RapLogo} alt="RapNasral"/>
            </div>

            <div className="header_center">
                {/** links to main pages */}
            </div>
            
            <div className="header_right">
                {/** languages changer */}
            </div>

        </div>
    );
}

export default Header;