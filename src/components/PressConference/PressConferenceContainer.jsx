import React from "react";
import {connect} from "react-redux";
import PressConference from "./PressConference";
import {getLastAllPressConferencesThunk, getForIdLastPressConferencesThunk} from "../../redux/PressConferenceReducer";
import {Pagination} from 'react-laravel-paginex';
import PaginationCss from "../Pagination/Pagination.module.css";
import {withRouter} from "react-router";

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
        if (this.props.pressConferenceReducer.lastAllPressConferences && this.props.type === 'all') {
            let lastAll = this.props.pressConferenceReducer.lastAllPressConferences.data.map(
                    item => (<PressConference key={item.id.toString()} {...item} />)
                );
            return (
                <div>
                    {lastAll}
                    <Pagination
                        changePage={this.props.getLastAllPressConferencesThunk}
                        data={this.props.pressConferenceReducer.lastAllPressConferences}
                        nextButtonText="Следующая"
                        prevButtonText="Предыдущая"
                        containerClass={PaginationCss.pagination}
                        activeClass={PaginationCss.active}
                    />
                </div>
            )
        }

        if (this.props.pressConferenceReducer.lastForIdAllPressConferences && this.props.type === 'tournament') {
            let lastForId = this.props.pressConferenceReducer.lastForIdAllPressConferences.data.map(
                item => (<PressConference key={item.id.toString()} {...item} />)
            );
            return (
                <div>
                    {lastForId}
                    <Pagination
                        changePage={this.props.getForIdLastPressConferencesThunk}
                        data={this.props.pressConferenceReducer.lastForIdAllPressConferences}
                        nextButtonText="Следующая"
                        prevButtonText="Предыдущая"
                        containerClass={PaginationCss.pagination}
                        activeClass={PaginationCss.active}
                        requestParams={this.params()}
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
    getLastAllPressConferencesThunk, getForIdLastPressConferencesThunk
})(withRouter(PressConferencesContainer));