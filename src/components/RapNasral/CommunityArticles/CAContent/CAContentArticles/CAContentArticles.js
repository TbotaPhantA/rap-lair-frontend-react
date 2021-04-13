import React from 'react';
import './CAContentArticles.css';
import CommunityArticlePreview from './CommunityArticlePreview/CommunityArticlePreview';

function CAContentArticles() {
    return (
        <div className="CA_content_articles">
            <CommunityArticlePreview title="dibil" />
            <CommunityArticlePreview />
            <CommunityArticlePreview />
            <CommunityArticlePreview />
        </div>
    );
}

export default CAContentArticles;