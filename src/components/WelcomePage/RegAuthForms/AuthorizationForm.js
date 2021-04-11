import React from 'react';
import './AuthorizationForm.css';
import ThirdPartyAuthorization from './ThridPartyAuthorization/ThirdPartyAuthorization';
import FormLeftImage from './FormLeftImage/FormLeftImage';
import FormInput from './FormInput/FormInput';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
    email: yup
        .string()
        .email("please enter your emali correctly")
        .required("This is the requied field")
        .max(100, "max length is 100"),

    password: yup
        .string()
        .min(6, "minumum length is 6")
        .matches(/^[a-zA-Z0-9_.]*$/, "Enter your password correctly"),
})

function AuthorizationForm({openRegisterFunc, closeAuthorizationFunc}) {
    const {register, handleSubmit, formState: {errors}} = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema),
    })

    function changeFromAuthToReg() {
        closeAuthorizationFunc();
        openRegisterFunc();
    }

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className="authorization_form_div">
            <FormLeftImage />
            <div className="AF_form_wrapper">
                <div className="authorization_form_header">
                    <CloseIcon className="close_authorization_icon" 
                    onClick={closeAuthorizationFunc}
                    fontSize="large"/>
                </div>
                <form className='authorization_form' noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                    <ThirdPartyAuthorization />
                    <h1>Authorization Info</h1>

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

                    <Button type="submit" variant="contained" color="primary">Enter</Button>

                    <div className="already_have_an_account">
                        Don't have an account? 
                        <Button onClick={changeFromAuthToReg} color="primary">
                            Sign UP 
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AuthorizationForm;