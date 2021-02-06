import React from "react";
import {connect} from "react-redux";
import LoginForm from "./LoginForm";
import LoginCss from "./Login.module.css";
import {reduxForm} from "redux-form";
import {getAuthDataThunk, loginThunk} from "../../redux/AuthReducer";

class LoginContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        this.props.loginThunk(event);
    }

    render() {
        return (
            <div className={LoginCss.main}>
                <h1>Вход в систему</h1>
                <LoginReduxForm auth={this.props.auth} onSubmit={this.handleSubmit} />
            </div>
        )
    }
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const mapStateToProps = (state) => {
    return {
        auth: state.authReducer
    }
}

export default connect(mapStateToProps, {
    getAuthDataThunk, loginThunk
})(LoginContainer);