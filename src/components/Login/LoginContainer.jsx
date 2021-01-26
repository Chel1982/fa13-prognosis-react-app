import React from "react";
import {connect} from "react-redux";
import LoginForm from "./LoginForm";
import LoginCss from "./Login.module.css";
import {reduxForm} from "redux-form";
import {getAuthDataThunk, setLoginThunk} from "../../redux/AuthReducer";
import {Redirect} from "react-router-dom";

class LoginContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        this.props.setLoginThunk(event);
    }

    render() {
        return (
            <div className={LoginCss.main}>
                <h1>Вход в систему</h1>
                <LoginReduxForm auth={this.props} onSubmit={this.handleSubmit} />
            </div>
        )
    }
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

export default connect(mapStateToProps, {
    getAuthDataThunk, setLoginThunk
})(LoginContainer);