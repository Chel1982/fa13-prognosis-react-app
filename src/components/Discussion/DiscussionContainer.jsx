import React from "react";
import GameContainer from "../Game/GameContainer";
import CommentContainer from "../Comment/CommentContainer";
import {withRouter} from "react-router";
import TournamentContainer from "../Tournament/TournamentContainer";

class DiscussionContainer extends React.Component{
    render() {
        return (
            <>
                {this.props.type === 'game' && <GameContainer game_id={this.props.match.params.id} />}
                {this.props.type === 'tournament' && <TournamentContainer tournament_id={this.props.match.params.id} />}
                <CommentContainer id={this.props.match.params.id} type={this.props.type} />
            </>
        )
    }
}

export default withRouter(DiscussionContainer);