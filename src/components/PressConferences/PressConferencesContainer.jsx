import React from "react";
import {connect} from "react-redux";
import PressConference from "./PressConference";
import {getLastPressConferencesPaginationThunk, getLastPressConferencesThunk} from "../../redux/PressConferenceReducer";
import {Pagination} from 'react-laravel-paginex';
import PaginationCss from "./Pagination.module.css";

class PressConferencesContainer extends React.Component {

    componentDidMount() {
        this.props.getLastPressConferencesThunk();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    render() {
        if (this.props.pressConferenceReducer.data) {
            let result = [];
            for (let key in this.props.pressConferenceReducer.data) {
                result.push(<PressConference
                    key={this.props.pressConferenceReducer.data[key].id} {...this.props.pressConferenceReducer.data[key]} />)
            }
            return (
                <div>
                    {result.map(press => (press))}
                    <Pagination
                        changePage={this.props.getLastPressConferencesPaginationThunk}
                        data={this.props.pressConferenceReducer}
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
    getLastPressConferencesThunk, getLastPressConferencesPaginationThunk
})(PressConferencesContainer);