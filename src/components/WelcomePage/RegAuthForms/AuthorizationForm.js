import React from 'react';
import './AuthorizationForm.css';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import RegistrationFormImage from '../../../images/RegistrationFormImage.jpg';

function AuthorizationForm({openRegisterFunc, closeAuthorizationFunc}) {

    function changeFromAuthToReg() {
        closeAuthorizationFunc();
        openRegisterFunc();
    }

    return (
        <div className="authorization_form_div">
            <div className="AF_image_wrapper">
                <img src={RegistrationFormImage} alt=""/>
            </div>
            <div className="AF_form_wrapper">
                <form className='authorization_form' noValidate autoComplete="off" action="">
                    <h1>Authorization Info</h1>
                    <TextField className="authorization_input" id="stardard-basic" label="email" type="email" />
                    <TextField className="authorization_input" id="stardard-basic" label="password" type="password" />
                    <Button variant="contained" color="primary">Enter</Button>
                    <div className="already_have_an_account">
                        Don't have an account? 
                        <Button onClick={changeFromAuthToReg} href="#text-buttons" color="primary">
                            Sign UP 
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AuthorizationForm;