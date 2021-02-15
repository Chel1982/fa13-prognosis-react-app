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
        this.props.setCommentThunk(event.target.comment.value, event.target.getAttribute('name'), event.target.getAttribute('id'));
        event.target.comment.value = '';
        event.preventDefault();
    }

    onClickAnswer (event) {
        // console.log(event.target.getAttribute('id'))
    }

    componentDidMount() {
        this.props.type === 'game' && this.props.getCommentsThunk('', 'game', this.props.id);
        this.props.type === 'tournament' && this.props.getCommentsThunk('', 'tournament', this.props.id);
    }

    params = () => {
        return {
            type : this.props.type,
            id : this.props.id
        }
    }

    render() {
        return (
            <>
                {
                    this.props.isFetched
                    ? <CommentReduxForm
                            onSubmit={this.onSubmit}
                            onClickAnswer={this.onClickAnswer}
                            auth={this.props.auth}
                            comments={this.props.comments.data}
                            dataPagination={this.props.comments}
                            id={this.props.id}
                            type={this.props.type}
                            getCommentsThunk={this.props.getCommentsThunk}
                            params={this.params}
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
        comments: state.commentReducer,
        isFetched: state.commentReducer.isFetched
    }
}

const CommentReduxForm = reduxForm({form: 'comment'})(CommentForm)

export default connect(mapStateToProps, {
    setCommentThunk, getCommentsThunk
})(CommentContainer);
