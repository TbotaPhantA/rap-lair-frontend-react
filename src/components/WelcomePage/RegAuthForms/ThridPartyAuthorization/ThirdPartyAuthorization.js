import React from 'react';
import './ThirdPartyAuthorization.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';

function ThirdPartyAuthorization() {
    return (
        <div className="third_party_authorization">
            <FacebookIcon className="tpa_icon tpa_facebook" fontSize="large" />
            <GitHubIcon className="tpa_icon tpa_github" fontSize="large" />
            <div className="tpa_icon tpa_google">
                G
            </div>
        </div>
    );
}

export default ThirdPartyAuthorization;