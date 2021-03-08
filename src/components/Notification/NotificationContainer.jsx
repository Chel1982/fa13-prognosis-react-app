import React from "react";
import {connect} from "react-redux";
import {getNotificationThunk} from "../../redux/NotificationReducer";
import Notification from "./Notification";

class NotificationContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.props.getNotificationThunk();
        setInterval(this.props.getNotificationThunk(), 3600000);
    }

    handleClick(event) {
        console.log(event.target);
        // console.log(event.target.getAttribute('id'))
    }

    render() {
        return(
            <Notification
              notification={this.props.notification}
              handleClick={this.handleClick}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    notification: state.notificationReducer
})

export default connect(mapStateToProps, {getNotificationThunk})(NotificationContainer);