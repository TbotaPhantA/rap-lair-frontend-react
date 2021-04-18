import React from 'react';
import './PostInputForm.css';
import Button from '@material-ui/core/Button';

function PostInputForm() {
    return (
        <form className="post_input_form">
            <textarea name="make_post" id="profile_post_form_input" cols="30" rows="5" placeholder="What's new?" required></textarea>
            <div className="profile_post_form_button">
                <Button variant="contained" color="primary">
                    Primary
                </Button>
            </div>
        </form>
    );
}

export default PostInputForm;