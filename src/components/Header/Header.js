import React from 'react';
import './Header.css';
import RapLogo from '../../images/Raplogo.png';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="main_header">

            <div className="header_left">
                <Link to='/lessons_selection'>
                    <img className="RapNasral_logo" src={RapLogo} alt="RapNasral"/>
                </Link>
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