import React from "react";
import {connect} from "react-redux";
import {getNotificationThunk} from "../../redux/NotificationReducer";
import Notification from "./Notification";

class NotificationContainer extends React.Component {
    componentDidMount() {
        this.props.getNotificationThunk();
        setInterval(this.props.getNotificationThunk(), 600000);
    }

    render() {
        return(
            <Notification
              auth={this.props.auth}
              notification={this.props.notification}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.authReducer,
    notification: state.notificationReducer
})

export default connect(mapStateToProps, {getNotificationThunk})(NotificationContainer);