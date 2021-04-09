import React from 'react';
import './BestRappersBlock.css';
import RapperCard from './RapperCard/RapperCard';

function BestRappersBlock() {
    return (
        <div className="best_rappers">
            <h2 className="pink_rap_title unselectable_text">Top Rapers</h2>
            <h1 className="unselectable_text">How do you think is the best True rapper ever?</h1>
            <div className="rappers_cards">
                <RapperCard />
                <RapperCard />
                <RapperCard />
            </div>
        </div>
    );
}

export default BestRappersBlock;