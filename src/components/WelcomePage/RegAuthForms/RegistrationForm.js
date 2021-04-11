import React from 'react';
import './RegistrationForm.css';
import ThirdPartyAuthorization from './ThridPartyAuthorization/ThirdPartyAuthorization';
import FormLeftImage from './FormLeftImage/FormLeftImage';
import UploadImg from './UploadImg/UploadImg';
import FormInput from './FormInput/FormInput';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import {useForm} from 'react-hook-form';

function RegistrationForm({openAuthorizationFunc, closeRegisterFunc}) {
    const {register, handleSubmit, errors} = useForm({
        mode: "onBlur"
    });
 
    function changeFromRegToAuth() {
        closeRegisterFunc();
        openAuthorizationFunc();
    }

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className="registration_form_div">
            <FormLeftImage />
            <div className="RF_form_wrapper">
                <div className="registration_form_header">
                    <CloseIcon className="close_register_icon"
                    onClick={closeRegisterFunc}
                    fontSize="large" />
                </div>
                <form className='registration_form' noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                    <ThirdPartyAuthorization />
                    <h1>Registration Info</h1>
                    
                    <FormInput 
                    {...register("name", {required: true, minLength: 4, maxLength: 25})}
                    label="Name"
                    type="text" 
                    />

                    <FormInput 
                    {...register("email", {required: true})}
                    label="email" 
                    type="text" />

                    <FormInput 
                    {...register("password", {required: true})}
                    label="password"
                    type="password" />

                    <FormInput 
                    {...register("confirm_password", {required: true})}
                    label="confirm password" 
                    type="password" />

                    <UploadImg />
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