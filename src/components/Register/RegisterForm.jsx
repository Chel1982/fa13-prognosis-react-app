import React from "react";
import LoginCss from "../Login/Login.module.css";
import {Field} from "redux-form";
import {
    email,
    matchPassword,
    maxLength,
    minLength,
    renderField,
    required
} from "../utils/validations/Validators";
import {Redirect} from "react-router-dom";

const MIN_LENGTH = 3;
const MAX_LENGTH = 15;

let minLengthPass = minLength(MIN_LENGTH);
let maxLengthPass = maxLength(MAX_LENGTH);

const RegisterForm = (props) => {
    if (props.auth.authReducer.isAuth) {
        return <Redirect to={"/"} />
    }

    let nameError = props.auth.authReducer.errors.name ?? props.auth.authReducer.errors.name;
    let emailError = props.auth.authReducer.errors.email ?? props.auth.authReducer.errors.email;

     return (
        <form onSubmit={props.handleSubmit}>
            <Field
                placeholder="Имя"
                name="name"
                type="text"
                label="Имя"
                component={renderField}
                validate={[required, minLengthPass, maxLengthPass]}
            />
            <div>
                { nameError }
            </div>
            <Field
                placeholder="E-Mail"
                name="email"
                type="email"
                label="E-Mail"
                component={renderField}
                validate={[required, email]}
            />

            <div>
                { emailError }
            </div>

            <Field
                placeholder="Пароль"
                name="password"
                type="password"
                label="Пароль"
                component={renderField}
                validate={[required, minLengthPass, maxLengthPass]}
            />

            <Field
                placeholder="Подтверждение пароля"
                name="password_confirmation"
                type="password"
                label="Подтверждение пароля"
                component={renderField}
                validate={[required, minLengthPass, maxLengthPass, matchPassword]}
            />

            <div>
                <button type="submit" className={LoginCss.button} >Регистрация</button>
            </div>
        </form>
    )
}



export default RegisterForm;