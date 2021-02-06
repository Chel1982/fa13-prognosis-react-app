import React from "react";
import {connect} from "react-redux";
import PressConference from "./PressConference";
import {getLastAllPressConferencesThunk, getForIdLastPressConferencesThunk} from "../../redux/PressConferenceReducer";
import {withRouter} from "react-router";
import preloader from "../../images/preloader.gif";

class PressConferencesContainer extends React.Component {
    componentDidMount() {
        switch (this.props.type) {
            case 'all' : this.props.getLastAllPressConferencesThunk();
                break;
            case 'tournament' : this.props.getForIdLastPressConferencesThunk(
                null,
                this.props.match.params.id
                );
                break;
            default: {}
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.type !== prevProps.type) {
            switch (this.props.type) {
                case 'all' : this.props.getLastAllPressConferencesThunk();
                    break;
                case 'tournament' : this.props.getForIdLastPressConferencesThunk(
                    null,
                        this.props.match.params.id
                    );
                    break;
                default: {}
            }
        }
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    params = () => {
        return {
            tournament_id : this.props.match.params.id
        }
    }

    render() {
        if (this.props.type === 'all') {
            return (
                this.props.allFetched
                ? <PressConference
                    pressConf={this.props.lastAllPressConferences}
                    paginationThunk={this.props.getLastAllPressConferencesThunk}
                    paginationParams={this.params}
                />
                : <img src={preloader} />
            )
        }

        if (this.props.type === 'tournament') {
            return (
                this.props.tournamentFetched
                ? <PressConference
                    pressConf={this.props.lastForIdAllPressConferences}
                    paginationThunk={this.props.getForIdLastPressConferencesThunk}
                    paginationParams={this.params}
                />
                : <img src={preloader} />
            )
        }

        return (
            <></>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        lastAllPressConferences: state.pressConferenceReducer.lastAllPressConferences,
        lastForIdAllPressConferences: state.pressConferenceReducer.lastForIdAllPressConferences,
        allFetched: state.pressConferenceReducer.allFetched,
        tournamentFetched: state.pressConferenceReducer.tournamentFetched
    }
}

export default connect(mapStateToProps, {
    getLastAllPressConferencesThunk, getForIdLastPressConferencesThunk
})(withRouter(PressConferencesContainer));