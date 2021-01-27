import React from "react";
import {connect} from "react-redux";
import {getAuthDataThunk, logoutThunk} from "../../redux/AuthReducer";
import Header from "./Header";

class HeaderContainer extends React.Component {
    componentDidMount() {
        if (localStorage.getItem('token')) {
            this.props.getAuthDataThunk();
        }
    }

    render() {
        return(
            <Header {...this.props} />
        )
    }
}

const mapStateToProps = (state) => ({
    auth: {...state.authReducer}
})

export default connect(mapStateToProps, {getAuthDataThunk, logoutThunk})(HeaderContainer);