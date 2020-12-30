import React from "react";
import {connect} from "react-redux";
import PressConference from "./PressConference";
import {getLastPressConferencesThunk} from "../../redux/PressConferenceReducer";

class PressConferencesContainer extends React.Component {

    componentDidMount() {
        this.props.getLastPressConferencesThunk();
    }

    render() {
        if (this.props.pressConferenceReducer) {
            let result = [];
            for (let key in this.props.pressConferenceReducer) {
                result.push(<PressConference key={this.props.pressConferenceReducer[key].id} {...this.props.pressConferenceReducer[key]} />)
            }
            return (
                <div>
                    {result.map(press => (press))}
                </div>
            )
        }

        return (
            <div></div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

export default connect(mapStateToProps, {getLastPressConferencesThunk})(PressConferencesContainer);