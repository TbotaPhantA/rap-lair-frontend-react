import React from 'react';
import './CommunityArticles.css';
import SideBar from './SideBar/SideBar';
import CAContent from './CAContent/CAContent';

function CommunityArticles() {
    return (
        <div className="community_articles_page">
            <CAContent />
            <SideBar />
        </div>
    );
}

export default CommunityArticles;