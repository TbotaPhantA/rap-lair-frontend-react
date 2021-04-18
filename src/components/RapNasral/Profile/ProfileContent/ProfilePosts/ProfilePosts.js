import React from 'react';
import './ProfilePosts.css';
import PostInputForm from './PostInputForm/PostInputForm';
import Posts from './Posts/Posts';

function ProfilePosts() {
    return (
        <div className="profile_posts_wrapper">
            <PostInputForm />
            <Posts />
        </div>
    );
}

export default ProfilePosts;