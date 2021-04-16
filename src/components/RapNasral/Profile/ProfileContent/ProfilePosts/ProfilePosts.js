import React from 'react';
import './ProfilePosts.css';
import PostInputForm from './PostInputForm/PostInputForm';

function ProfilePosts() {
    return (
        <div className="profile_posts_wrapper">
            <PostInputForm />
        </div>
    );
}

export default ProfilePosts;