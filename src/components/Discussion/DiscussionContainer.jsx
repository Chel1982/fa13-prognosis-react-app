import React from "react";
import GameContainer from "../Game/GameContainer";
import CommentContainer from "../Comment/CommentContainer";
import {withRouter} from "react-router";

class DiscussionContainer extends React.Component{
    render() {
        return (
            <>
                <GameContainer game_id={this.props.match.params.id} />
                {/*<CommentContainer game_id={this.props.match.params.id} />*/}
            </>
        )
    }
}

export default withRouter(DiscussionContainer);