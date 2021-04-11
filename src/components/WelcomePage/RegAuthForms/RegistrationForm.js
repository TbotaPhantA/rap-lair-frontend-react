import React from 'react';
import './RegistrationForm.css';
import ThirdPartyAuthorization from './ThridPartyAuthorization/ThirdPartyAuthorization';
import FormLeftImage from './FormLeftImage/FormLeftImage';
import UploadImg from './UploadImg/UploadImg';
import FormInput from './FormInput/FormInput';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup
        .string()
        .required("This is the requied field")
        .min(2, "minimum length is 2")
        .max(100, "maximum length is 100")
        .matches(/^[a-zA-Z0-9_.]*$/, "please enter your name correctly"),

    email: yup
        .string()
        .email("please enter your emali correctly")
        .required("This is the requied field")
        .max(100, "max length is 100"),

    password: yup
        .string()
        .min(6, "minumum length is 6")
        .matches(/^[a-zA-Z0-9_.]*$/, "Enter your password correctly"),
    confirm_password: yup
        .string()
        .min(6, "minumum length is 6")
        .oneOf([yup.ref('password'), null], 'Passwords must match'),
})

function RegistrationForm({openAuthorizationFunc, closeRegisterFunc}) {
    const {register, handleSubmit, formState: {errors}} = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema),
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
                    {...register("name")}
                    required
                    label="Name"
                    type="text" 
                    error={!!errors?.name}
                    helperText={errors?.name?.message}
                    />

                    <FormInput 
                    {...register("email")}
                    required
                    label="email" 
                    type="text" 
                    error={!!errors?.email}
                    helperText={errors?.email?.message}
                    />

                    <FormInput 
                    {...register("password")}
                    required
                    label="password"
                    type="password" 
                    error={!!errors?.password}
                    helperText={errors?.password?.message}
                    />

                    <FormInput 
                    {...register("confirm_password")}
                    required
                    label="confirm password" 
                    type="password" 
                    error={!!errors?.confirm_password}
                    helperText={errors?.confirm_password?.message}
                    />

                    <UploadImg />

                    <Button type="submit" variant="contained" color="primary">Registrate</Button>

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