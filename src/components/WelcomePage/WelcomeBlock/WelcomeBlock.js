import React from 'react';
import './WelcomeBlock.css';

function WelcomeBlock() {
    return (
        <div className="welcome_block">
            <h1 className="welcome_block_title">Welcome to True Rap lair</h1>
            <p className="welcome_block_text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo sit quas neque excepturi maiores molestias illo non labore commodi fugit!</p>
            <div className="welcome_block_sign_up_btn">Become The True Rapper</div>
            <div className="welcome_block_sign_in_btn">Enter your account</div>
            <div className="welcome_block_german_field">
                <div className="welcome_block_german"></div>
            </div>
        </div>
    );
}

export default WelcomeBlock;