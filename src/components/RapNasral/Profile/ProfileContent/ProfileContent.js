import React from 'react';
import './ProfileContent.css';
import ProfilePosts from './ProfilePosts/ProfilePosts';

function ProfileContent() {
    return (
        <div className="profile_content">
            <div className="profile_info_wrapper">
                <div className="profile_name">German Marchenko</div>
                <div className="profile_status">two wolf is one wolf is three wolf yeah!!!</div>
            </div>
            <div className="profile_graph">
                I'm the profile_graph
            </div>
            <ProfilePosts />
        </div>
    );
}

export default ProfileContent;