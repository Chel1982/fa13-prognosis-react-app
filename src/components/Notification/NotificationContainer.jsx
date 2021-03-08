import React from "react";
import {connect} from "react-redux";
import {getNotificationThunk, updateNotificationThunk} from "../../redux/NotificationReducer";
import Notification from "./Notification";

class NotificationContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.props.getNotificationThunk();
        setInterval(this.props.getNotificationThunk, 3600000);
    }

    handleClick() {
        let commentGame = document.getElementById('commentGame');
        if (commentGame.style.display === "block") {
            commentGame.style = "display:none";
        } else {
            commentGame.style = "display:block";
            this.props.updateNotificationThunk();
        }
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

export default connect(mapStateToProps, {getNotificationThunk, updateNotificationThunk})(NotificationContainer);