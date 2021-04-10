import React from 'react';
import './RegistrationForm.css';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import RegistrationFormImage from '../../../images/RegistrationFormImage.jpg';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import CloseIcon from '@material-ui/icons/Close';
import ThirdPartyAuthorization from './ThridPartyAuthorization/ThirdPartyAuthorization';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function RegistrationForm({openAuthorizationFunc, closeRegisterFunc}) {
    const classes = useStyles();

    function changeFromRegToAuth() {
        closeRegisterFunc();
        openAuthorizationFunc();
    }

    return (
        <div className="registration_form_div">
            <div className="RF_image_wrapper">
                <img src={RegistrationFormImage} alt=""/>
            </div>
            <div className="RF_form_wrapper">
                <div className="registration_form_header">
                    <CloseIcon className="close_register_icon"
                    onClick={closeRegisterFunc}
                    fontSize="large" />
                </div>
                <form className='registration_form' noValidate autoComplete="off" action="">
                    <ThirdPartyAuthorization />
                    <h1>Registration Info</h1>
                    <TextField className="registration_input" id="stardard-basic" label="Name" />
                    <TextField className="registration_input" id="stardard-basic" label="email" type="email" />
                    <TextField className="registration_input" id="stardard-basic" label="password" type="password" />
                    <TextField className="registration_input" id="stardard-basic" label="confirm passoword" type="password" />
                    <div className="registration_upload_image">
                        <label htmlFor="icon-button-file">
                            <IconButton color="primary" aria-label="upload picture" component="span">
                            <PhotoCamera />
                                Upload Image
                            </IconButton>
                        </label>
                    </div>
                    <Button variant="contained" color="primary">Registrate</Button>
                    <div className="already_have_an_account">
                        Already have an account? 
                        <Button onClick={changeFromRegToAuth} color="primary">
                            Sign IN
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RegistrationForm;