import React from "react";
import Game from "./Game";
import {connect} from "react-redux";
import {getGameThunk} from "../../redux/GameReducer";
import preloader from "../../images/preloader.gif";

class GameContainer extends React.Component {
    componentDidMount() {
        this.props.getGameThunk(this.props.game_id);
    }

    render() {
        return (
            <>
                {
                    this.props.isFetching
                    ? <img src={preloader} />
                    : <Game game={this.props.game}/>
                }

            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        game: state.gameReducer.game,
        isFetching: state.gameReducer.isFetching
    }
}

export default connect(mapStateToProps, {getGameThunk})(GameContainer);
