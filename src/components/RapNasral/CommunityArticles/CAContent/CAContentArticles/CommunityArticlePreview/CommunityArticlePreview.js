import React from 'react';
import './CommunityArticlePreview.css';
import {Link} from 'react-router-dom';
import author_avatar from '../../../../../../images/numbers/one.png';

function CommunityArticlePreview() {
    return (
        <div className="community_article_preview_wrapper">
            <Link 
                to="/community_articles"
                className="community_article_preview"
                >
                    {/* spans here for sparks effects */}
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>

                    <img src={author_avatar} alt=""/>
                    <div className="CA_article_title">Some Title</div>
                    <div className="CA_article_description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, nobis!</div>
                    
            </Link>
        </div>
    );
}

export default CommunityArticlePreview;