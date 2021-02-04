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
                    this.props.isFetched
                    ? <Game game={this.props.game}/>
                    : <img src={preloader} />
                }
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        game: state.gameReducer.game,
        isFetched: state.gameReducer.isFetched
    }
}

export default connect(mapStateToProps, {getGameThunk})(GameContainer);
