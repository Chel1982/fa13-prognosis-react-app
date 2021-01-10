import React from "react";
import {connect} from "react-redux";
import {getTournamentListThunk} from "../../redux/TournamentListReducer";

class TournamentListContainer extends React.Component {
    componentDidMount() {

        this.props.getTournamentListThunk(this.props.status);

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.status !== prevProps.status) {
            this.props.getTournamentListThunk(this.props.status)
        }
    }

    render() {
        switch (this.props.status) {
            case 'regular' :
                let regular = [];
                for (let key in this.props.tournamentListReducer.regularList) {
                    regular.push(
                        <div key={this.props.tournamentListReducer.regularList[key].id}>
                            {this.props.tournamentListReducer.regularList[key].name}
                        </div>
                    )
                }
                return (
                    <div>
                        {regular}
                    </div>
                )
            case 'cup' :
                let cup = [];
                for (let key in this.props.tournamentListReducer.cupList) {
                    cup.push(
                        <div key={this.props.tournamentListReducer.cupList[key].id}>
                            {this.props.tournamentListReducer.cupList[key].name}
                        </div>
                    )
                }
                return (
                    <div>
                        {cup}
                    </div>
                )
            default:
                return (
                    <div></div>
                )
        }

    }
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

export default connect(mapStateToProps, {getTournamentListThunk})(TournamentListContainer);

