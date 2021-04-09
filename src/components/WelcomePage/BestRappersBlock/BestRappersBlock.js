import React, { useEffect } from 'react';
import './BestRappersBlock.css';
import RapperCard from './RapperCard/RapperCard';
import Aos from 'aos';
import "aos/dist/aos.css";

function BestRappersBlock() {

    // Animation on scroll initialization
    useEffect(() => {
        Aos.init({duration: 1000});
    }, [])

    return (
        <div className="best_rappers">
            <h2 className="pink_rap_title unselectable_text" data-aos="fade-right">Top Rapers</h2>
            <h1 className="unselectable_text" data-aos="fade-left">How do you think is the best True rapper ever?</h1>
            <div className="rappers_cards">
                <RapperCard data_aos="flip-left" data_aos_duration="1000"/>
                <RapperCard data_aos="flip-left" data_aos_duration="2000" />
                <RapperCard data_aos="flip-left" data_aos_duration="3000" />
            </div>
        </div>
    );
}

export default BestRappersBlock;