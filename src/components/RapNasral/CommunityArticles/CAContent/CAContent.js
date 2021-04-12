import React from 'react';
import './CAContent.css';
import CAContentHeader from './CAContentHeader/CAContentHeader'; 
import CAContentArticles from './CAContentArticles/CAContentArticles';

function CAContent() {
    return (
        <div className="CA_content_wrapper">
            <div className="CA_content_header">
                <CAContentHeader />
            </div>
            <div className="CA_content">
                <CAContentArticles />
            </div>
        </div>
    );
}

export default CAContent;