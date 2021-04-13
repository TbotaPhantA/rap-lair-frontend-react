import React from 'react';
import './CommunityArticlePreview.css';
import {Link} from 'react-router-dom';
import author_avatar from '../../../../../../images/numbers/one.png';

function CommunityArticlePreview({userImage, title, CA_id}) {
    return (
        <div className="community_article_preview_wrapper">
            <Link 
                to={`/community_articles/${CA_id ? CA_id : '' }`}
                className="community_article_preview"
                >
                    {/* spans here for sparks effects */}
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>

                    <img src={userImage ? userImage : author_avatar} alt=""/>
                    <div className="CA_article_title">{title ? title: "some title"}</div>
                    
            </Link>
        </div>
    );
}

export default CommunityArticlePreview;