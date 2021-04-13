import React from 'react';
import './CAContentArticles.css';
import CommunityArticlePreview from './CommunityArticlePreview/CommunityArticlePreview';

function CAContentArticles() {
    return (
        <div className="CA_content_articles">
            <CommunityArticlePreview CA_id="1" title="dibil" />
            <CommunityArticlePreview CA_id="2"/>
            <CommunityArticlePreview />
            <CommunityArticlePreview />
        </div>
    );
}

export default CAContentArticles;