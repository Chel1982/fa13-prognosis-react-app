import React from "react";
import {connect} from "react-redux";
import {reduxForm} from "redux-form";
import CommentForm from "./CommentForm";
import {setCommentThunk, getCommentsThunk} from "../../redux/CommentReducer";
import preloader from "../../images/preloader.gif";

class CommentContainer extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit (event) {
        // this.props.setCommentThunk(event.target.getAttribute('id'), event.target.comment.value);
        event.preventDefault();
    }

    componentDidMount() {
        this.props.getCommentsThunk(this.props.game_id);
    }

    render() {
        return (
            <>
                {
                    this.props.isFetched
                    ? <CommentReduxForm
                            onSubmit={this.onSubmit}
                            auth={this.props.auth}
                            comments={this.props.comments}
                            game_id={this.props.game_id}
                        />
                    : <img src={preloader} />
                }

            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.authReducer,
        comments: state.commentReducer.comments,
        isFetched: state.commentReducer.isFetched
    }
}

const CommentReduxForm = reduxForm({form: 'comment'})(CommentForm)

export default connect(mapStateToProps, {
    setCommentThunk, getCommentsThunk
})(CommentContainer);
