import React from "react";
import {connect} from "react-redux";
import RegisterForm from "./RegisterForm";
import {reduxForm} from "redux-form";
import LoginCss from "../Login/Login.module.css";
import {registerThunk} from "../../redux/AuthReducer";

class RegisterContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        this.props.registerThunk(event);
    }

    render() {
        return(
            <div className={LoginCss.main}>
                <h1>Регистрация в системе</h1>
                <RegisterReduxForm auth={this.props.auth} onSubmit={this.handleSubmit} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.authReducer
    }
}

const RegisterReduxForm = reduxForm({form: 'register'})(RegisterForm)

export default connect(mapStateToProps, {registerThunk})(RegisterContainer);