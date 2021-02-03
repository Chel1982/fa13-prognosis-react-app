import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {getGameThunk, setIsFetchingAction} from "../../redux/GameReducer";
import preloader from "../../images/preloader.gif";
import {reduxForm} from "redux-form";
import CommentForm from "./CommentForm";
import {setCommentThunk} from "../../redux/CommentReducer";

class CommentContainer extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit (event) {
        this.props.setCommentThunk(event.target.getAttribute('id'), event.target.comment.value);
        // console.log(event.target.getAttribute('id'))
        // console.log(event.target.comment.value)
        event.preventDefault();
        // debugger
    //
    }

    componentDidMount() {
        this.props.getGameThunk(this.props.match.params.id);
    }

    render() {
        return (
            <>
                {this.props.isFetching
                ? <img src={preloader} />
                : <CommentReduxForm
                    key={this.props.game.id}
                    onSubmit={this.onSubmit}
                    game={this.props.game}
                    auth={this.props.auth}
                />}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.authReducer,
        game: state.gameReducer.game,
        isFetching: state.gameReducer.isFetching,
        comment: state.commentReducer
    }
}

const CommentReduxForm = reduxForm({form: 'comment'})(CommentForm)

export default connect(mapStateToProps, {
    getGameThunk, setIsFetchingAction, setCommentThunk
})(withRouter(CommentContainer));










