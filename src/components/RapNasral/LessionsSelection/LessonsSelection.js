import React from 'react';
import './LessonsSelection.css';
import DN from '../../../images/dancing_niggers.gif';
import {Link} from 'react-router-dom';

function LessonsSelection() {
    return (
        <div className="lessons_selection">
            <img className="dancing_niggers" src={DN} alt=""/>
            <h1 className="unselectable_text">Which Articles do you want to read?</h1>
            <div className="LS_buttons_wrapper">
                <Link className="LS_button unselectable_text" to="/teachers_articles" >
                    <span></span>                
                    <span></span>                
                    <span></span>                
                    <span></span>                
                    Teachers Articles
                </Link>

                <Link className="LS_button unselectable_text" to="/community_articles" >
                    <span></span>                
                    <span></span>                
                    <span></span>                
                    <span></span>                
                    Community Articles
                </Link>
            </div>
        </div>
    );
}

export default LessonsSelection;