import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {getGameThunk, setIsFetchingAction} from "../../redux/GameReducer";
import Comment from "./Comment";
import preloader from "../../images/preloader.gif"
import authReducer from "../../redux/AuthReducer";

class CommentContainer extends React.Component {

    componentDidMount() {
        this.props.getGameThunk(this.props.match.params.id);
    }

    render() {
        return (
            <>
                {this.props.isFetching ?
                    <img src={preloader} /> :
                    <Comment game={this.props.game} auth={this.props.auth}/>}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.authReducer,
        game: state.gameReducer.game,
        isFetching: state.gameReducer.isFetching
    }
}

export default connect(mapStateToProps, {
    getGameThunk, setIsFetchingAction
})(withRouter(CommentContainer));