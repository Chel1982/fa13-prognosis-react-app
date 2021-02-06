import React from "react";
import {connect} from "react-redux";
import {logoutThunk} from "../../redux/AuthReducer";
import Header from "./Header";

class HeaderContainer extends React.Component {
    render() {
        return(
            <Header {...this.props} />
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.authReducer
})

export default connect(mapStateToProps, {logoutThunk})(HeaderContainer);