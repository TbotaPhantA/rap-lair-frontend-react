import React from 'react';
import './ProfileSideBar.css';
import ProfileImage from './ProfileImage/ProfileImage';
import PI from '../../../../images/rapPicture2.jpg';

function ProfileSideBar() {
    return (
        <div className="profile_sidebar">
            <ProfileImage image={PI} />
        </div>
    );
}

export default ProfileSideBar;