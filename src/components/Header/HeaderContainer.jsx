import React from "react";
import {connect} from "react-redux";
import {getAuthDataThunk} from "../../redux/AuthReducer";
import Header from "./Header";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthDataThunk();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (!this.props.auth.isAuth){

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

export default connect(mapStateToProps, {getAuthDataThunk})(HeaderContainer);