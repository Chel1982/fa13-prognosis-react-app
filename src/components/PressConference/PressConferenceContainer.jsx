import React from "react";
import {connect} from "react-redux";
import PressConference from "./PressConference";
import {getLastAllPressConferencesThunk} from "../../redux/PressConferenceReducer";
import {Pagination} from 'react-laravel-paginex';
import PaginationCss from "../Pagination/Pagination.module.css";

class PressConferencesContainer extends React.Component {

    componentDidMount() {
        console.log(this.props.type)
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
            let result = this.props.pressConferenceReducer.lastAllPressConferences.data.map(
                    item => (<PressConference key={item.id.toString()} {...item} />)
                );
            return (
                <div>
                    {result}
                    <Pagination
                        changePage={this.props.getLastAllPressConferencesThunk}
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
    getLastAllPressConferencesThunk
})(PressConferencesContainer);