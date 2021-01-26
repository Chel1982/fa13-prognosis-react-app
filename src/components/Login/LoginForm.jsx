import React from "react";
import LoginCss from "./Login.module.css";
import {Field} from "redux-form";
import {email, maxLength, minLength, renderField, required} from "../utils/validations/Validators";
import {Redirect} from "react-router-dom";
const MIN_LENGTH = 3;
const MAX_LENGTH = 15;

let minLengthPass = minLength(MIN_LENGTH);
let maxLengthPass = maxLength(MAX_LENGTH);

const LoginForm = (props) => {
    if (props.auth.authReducer.isAuth) {
        return <Redirect to={"/"} />
    }
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                placeholder="Email"
                name="email"
                type="email"
                label="Email"
                component={renderField}
                validate={[required, email]}
            />
            <Field
                placeholder="Password"
                name="password"
                type="password"
                label="Пароль"
                component={renderField}
                validate={[required, minLengthPass, maxLengthPass]}
            />
            <div>
                <button type="submit" className={LoginCss.button} >Вход</button>
            </div>
        </form>
    )
}

export default LoginForm;