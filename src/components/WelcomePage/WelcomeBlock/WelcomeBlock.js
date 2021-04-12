import React from 'react';
import './WelcomeBlock.css';

function WelcomeBlock({openRegisterFunc, openAuthorizationFunc}) {
    return (
        <div className="welcome_block">
            <h1 className="welcome_block_title unselectable_text">Welcome to <span>True Rap</span> lair</h1>
            <div className="welcome_block_sign_up_btn unselectable_text" onClick={openRegisterFunc}>Become The True Rapper</div>
            <div className="welcome_block_sign_in_btn unselectable_text" onClick={openAuthorizationFunc}>Enter your account</div>
            <div className="welcome_block_german_field">
                <div className="welcome_block_german"></div>
            </div>
        </div>
    );
}

export default WelcomeBlock;