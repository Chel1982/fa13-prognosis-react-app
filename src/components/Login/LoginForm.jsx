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

    let errorLogin = props.auth.authReducer.errors.auth ?? props.auth.authReducer.errors.auth;

    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                placeholder="E-Mail"
                name="email"
                type="email"
                label="E-Mail"
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
                { errorLogin }
            </div>
            <div>
                <button type="submit" className={LoginCss.button} >Вход</button>
            </div>
        </form>
    )
}

export default LoginForm;