import React, { forwardRef } from 'react';
import './FormInput.css';
import TextField from '@material-ui/core/TextField';

const FormInput = forwardRef((props, ref) => {
    return (
        <TextField 
        className="registration_input"
        id="stardard-basic" 
        label={props.label} 
        type={props.type}
        inputRef={ref}
        {...props}

        />
    );
})

export default FormInput;