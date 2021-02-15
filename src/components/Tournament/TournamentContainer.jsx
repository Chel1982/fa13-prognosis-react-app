import React from "react";
import {connect} from "react-redux";
import {getTournamentThunk} from "../../redux/TournamentReducer";
import Tournament from "./Tournament";

class TournamentContainer extends React.Component {
    componentDidMount() {
        this.props.getTournamentThunk(this.props.tournament_id);
    }

    render() {
        return (
            <>
                <Tournament {...this.props.tournament}/>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tournament: state.tournamentReducer.tournament,
        isFetched: state.tournamentReducer.tournamentFetched
    }
}

export default connect(mapStateToProps, {getTournamentThunk})(TournamentContainer);