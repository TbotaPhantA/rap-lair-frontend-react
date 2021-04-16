import React from 'react';
import './Profile.css';
import ProfileSideBar from './ProfileSideBar/ProfileSideBar';
import ProfileContent from './ProfileContent/ProfileContent';

function profile() {
    return (
        <div className="profile_wrapper">
            <ProfileSideBar />
            <ProfileContent />
        </div>
    );
}

export default profile;