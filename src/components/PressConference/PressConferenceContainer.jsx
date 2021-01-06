import React from "react";
import {connect} from "react-redux";
import PressConference from "./PressConference";
import {getLastAllPressConferencesPaginationThunk, getLastAllPressConferencesThunk} from "../../redux/PressConferenceReducer";
import {Pagination} from 'react-laravel-paginex';
import PaginationCss from "../Pagination/Pagination.module.css";

class PressConferencesContainer extends React.Component {

    componentDidMount() {
        this.props.getLastAllPressConferencesThunk();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    render() {
        if (this.props.pressConferenceReducer.lastAllPressConferences) {
            let result = [];
            for (let key in this.props.pressConferenceReducer.lastAllPressConferences.data) {
                result.push(<PressConference
                    key={this.props.pressConferenceReducer.lastAllPressConferences.data[key].id}
                    {...this.props.pressConferenceReducer.lastAllPressConferences.data[key]} />)
            }
            return (
                <div>
                    {result.map(press => (press))}
                    <Pagination
                        changePage={this.props.getLastAllPressConferencesPaginationThunk}
                        data={this.props.pressConferenceReducer.lastAllPressConferences}
                        options={this.options}
                        nextButtonText="Следующая"
                        prevButtonText="Предыдущая"
                        containerClass={PaginationCss.pagination}
                        activeClass={PaginationCss.active}
                    />
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

export default connect(mapStateToProps, {
    getLastAllPressConferencesThunk, getLastAllPressConferencesPaginationThunk
})(PressConferencesContainer);