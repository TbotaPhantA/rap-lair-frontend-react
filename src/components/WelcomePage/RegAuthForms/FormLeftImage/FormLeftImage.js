import React from 'react';
import './FormLeftImage.css';
import RegistrationFormImage from '../../../../images/RegistrationFormImage.jpg';

function FormLeftImage() {
    return (
        <div className="RF_image_wrapper">
            <img className="RF_monkey" src={RegistrationFormImage} alt=""/>
        </div>
    );
}

export default FormLeftImage;