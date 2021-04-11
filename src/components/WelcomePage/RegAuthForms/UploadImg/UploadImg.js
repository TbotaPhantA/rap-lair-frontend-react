import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

function UploadImg() {
    return (
        <div className="registration_upload_image">
            <label htmlFor="icon-button-file">
                <IconButton color="primary" aria-label="upload picture" component="span">
                <PhotoCamera />
                    Upload Image
                </IconButton>
            </label>
        </div>
    );
}

export default UploadImg;