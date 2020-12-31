import React from "react";
import {connect} from "react-redux";
import PressConference from "./PressConference";
import {getLastPressConferencesThunk} from "../../redux/PressConferenceReducer";

class PressConferencesContainer extends React.Component {

    componentDidMount() {
        this.props.getLastPressConferencesThunk();
    }

    render() {
        console.log(this.props.pressConferenceReducer.data)
        if (this.props.pressConferenceReducer.data) {
            let result = [];
            for (let key in this.props.pressConferenceReducer.data) {
                result.push(<PressConference key={this.props.pressConferenceReducer.data[key].id} {...this.props.pressConferenceReducer.data[key]} />)
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