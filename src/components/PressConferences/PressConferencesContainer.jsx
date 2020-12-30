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

            // let pressConferences = this.props.pressConferenceReducer.count
            let result = [];
            for (let key in this.props.pressConferenceReducer) {
                result.push(<PressConference key={this.props.pressConferenceReducer[key].id} {...this.props.pressConferenceReducer[key]} />)
            }


            // let pressConferences = this.props.pressConferenceReducer.map(props => (
            //     <PressConference props={props} />
            // ));

            return (
                <div>
                    {result.map(press => (press))}
                </div>
            )
        }

        return (
            <div>
                {/*{pressConferences}*/}
                {/*<PressConference {...this.props.pressConferenceReducer}/>*/}
            </div>
        )

        // if(!this.props) {
        //     return (
        //         <div>
        //             Загрузка пресс - конференций
        //         </div>
        //     )
        // }

    }
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

export default connect(mapStateToProps, {getLastPressConferencesThunk})(PressConferencesContainer);