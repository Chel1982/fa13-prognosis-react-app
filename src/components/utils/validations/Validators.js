import React from "react";
import ValidatorsCss from "./Validators.module.css"

export const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Не правильный email адресс'
        : undefined

export const required = value => (value || typeof value === 'number' ? undefined : 'Обязательно к заполнению')

export const minLength = min => value =>
    value && value.length < min ? `Ко-во символов должно быть более, чем ${min}` : undefined

export const maxLength = max => value =>
    value && value.length > max ? `Ко-во символов должно быть менее, чем  ${max}` : undefined

export const matchPassword = (value, allValues) =>
    value !== allValues.password
        ? 'Пароль и подтвержедние пароля должны быть одинаковы'
        : undefined;

export const renderField = ({
                         input,
                         label,
                         type,
                         meta: { touched, error, warning }
                     }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} className={ValidatorsCss.main} />
            {touched &&
            ((error && <span>{error}</span>) ||
                (warning && <span>{warning}</span>))}
        </div>
    </div>
)