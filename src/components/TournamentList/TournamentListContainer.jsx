import React from "react";
import {connect} from "react-redux";
import {getRegularListThunk, getCupListThunk} from "../../redux/TournamentListReducer";
import preloader from "../../images/preloader.gif";
import TournamentCupListContainer from "./TournamentCupListContainer";
import TournamentRegularListContainer from "./TournamentRegularListContainer";

class TournamentListContainer extends React.Component {
    componentDidMount() {
        switch (this.props.status) {
            case "regular" :
                this.props.getRegularListThunk();
                break;
            case "cup" :
                this.props.getCupListThunk();
                break;
            default:
                return null;
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.status !== prevProps.status) {
            switch (this.props.status) {
                case "regular" :
                    this.props.getRegularListThunk();
                    break;
                case "cup" :
                    this.props.getCupListThunk();
                    break;
                default:
                    return null;
            }
        }
    }

    render() {
        if (this.props.status === "regular") {
            return (
                this.props.regularFetched
                ? <TournamentRegularListContainer
                        regularListData={this.props.regularListData}
                    />
                : <img src={preloader} />
            )
        }

        if (this.props.status === "cup") {
            return (
                this.props.cupFetched
                ? <TournamentCupListContainer
                        cupListData={this.props.cupListData}
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
        regularListData: state.tournamentListReducer.regularListData,
        cupListData: state.tournamentListReducer.cupListData,
        regularFetched: state.tournamentListReducer.regularFetched,
        cupFetched: state.tournamentListReducer.cupFetched
    }
}

export default connect(mapStateToProps, {
    getRegularListThunk, getCupListThunk
})(TournamentListContainer);
