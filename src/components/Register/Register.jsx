import React from "react";
import LoginCss from "../Login/Login.module.css";
import {Field, reduxForm} from "redux-form";
import {email, maxLength, minLength, renderField, required} from "../utils/validations/Validators";

const MIN_LENGTH = 3;
const MAX_LENGTH = 15;

const Register = () => {
    const onSubmit = (formData) => {
        // console.log(formData)
    }

    return (
        <div className={LoginCss.main}>
            <h1>Регистрация в системе</h1>
            <RegisterReduxForm onSubmit={onSubmit} />
        </div>
    )
}

let minLengthPass = minLength(MIN_LENGTH);
let maxLengthPass = maxLength(MAX_LENGTH);

const RegisterForm = (props) => {
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

            <Field
                placeholder="Email"
                name="email"
                type="email"
                label="Email"
                component={renderField}
                validate={[required, email]}
            />

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
                validate={[required, minLengthPass, maxLengthPass]}
            />

            <div>
                <button type="submit" className={LoginCss.button} >Регистрация</button>
            </div>
        </form>
    )
}

const RegisterReduxForm = reduxForm({form: 'register'})(RegisterForm)

export default Register;