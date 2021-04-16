import React from 'react';
import './ProfileImage.css';

function ProfileImage({image}) {
    return (
        <img className="profile_image" src={image} alt=""/>
    );
}

export default ProfileImage;