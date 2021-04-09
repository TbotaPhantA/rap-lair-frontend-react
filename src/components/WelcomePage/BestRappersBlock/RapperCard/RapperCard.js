import React from 'react';
import './RapperCard.css';
import rapperImage from '../../../../images/german.png';

function RapperCard() {
    return (
        <div className="rapper_card">
            <div className="rapper_card_name unselectable_text">Some Name</div>
            <div className="rapper_card_image_wrapper">
                <img className="rapper_card_image" src={rapperImage} alt="Rapper"/>
            </div>
            <div className="rapper_card_description_wrapper">
                <h3 className="rapper_card_qualities unselectable_text">quality 1, quiality2, quiality 3, quality 4</h3>
                <h4 className="rapper_card_achievements unselectable_text">achivment 1, achivment 2, achievemnt3</h4>
                <h4 className="rapper_card_one_phrase_description unselectable_text">bich my cock cock my bich</h4>
                <div className="repper_card_footer">
                    3 comments
                </div>
            </div>
        </div>
    );
}

export default RapperCard;