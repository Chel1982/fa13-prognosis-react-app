import React from "react";
import {connect} from "react-redux";

class NotificationContainer extends React.Component {
    componentDidMount() {

    }
}

const mapStateToProps = (state) => ({
    auth: state.authReducer
})

export default connect(mapStateToProps, null)(NotificationContainer);