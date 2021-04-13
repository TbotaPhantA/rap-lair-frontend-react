import React from 'react';
import './CArticle.css';
import {useParams} from 'react-router-dom';

function CArticle() {
    const {CA_id} = useParams();

    return (
        <div classNmae="CArticle">
            I'm the Article number {CA_id}
        </div>
    );
}

export default CArticle;