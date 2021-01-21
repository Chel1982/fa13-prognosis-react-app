import React from "react";
import {connect} from "react-redux";
import {getTournamentListThunk} from "../../redux/TournamentListReducer";
import TournamentList from "./TournamentList";
import TournamentListCss from "./TournamentList.module.css"

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
                if(this.props.tournamentListReducer.regularList) {
                    let resultFirstIncrement = 0;
                    const resultFirstDivision = this.props.tournamentListReducer.regularList.map(
                        item => {
                            if(!item.name.includes('2')
                                && !item.name.includes('3')) {

                                    let addPropsTo = {...item,
                                        typeClass: resultFirstIncrement % 2 === 0 ? 'odd' : 'even'};
                                    resultFirstIncrement++;
                                    return <TournamentList
                                        key={addPropsTo.id}
                                        {...addPropsTo}
                                    />

                            }
                    })

                    let resultSecondIncrement = 0;
                    const resultSecondDivision = this.props.tournamentListReducer.regularList.map(
                        item => {
                            if(item.name.includes('2')) {
                                let addPropsTo = {...item, typeClass: resultSecondIncrement % 2 === 0 ? 'odd' : 'even'}
                                resultSecondIncrement++;
                                return <TournamentList
                                    key={addPropsTo.id}
                                    {...addPropsTo}
                                />
                            }
                        }
                    )

                    let thirdDivision = [];
                    let thirdStep = false;

                    for (let key in this.props.tournamentListReducer.regularList) {

                        if (this.props.tournamentListReducer.regularList[key].name.includes('2')) {
                            thirdStep = true;
                        }

                        //вырезаем последний элемент массива, потом что он добавляется в любом случае при Австрии-2
                        if (this.props.tournamentListReducer.regularList[key].name.includes('3')) {
                            thirdDivision.pop();
                            thirdDivision.push(
                                <TournamentList
                                    key={this.props.tournamentListReducer.regularList[key].id}
                                    {...this.props.tournamentListReducer.regularList[key]}
                                />
                            )
                            thirdStep = false;
                        }

                        if (thirdStep) {
                            thirdDivision.push(
                                <div></div>
                            );
                            thirdStep = false;
                        }
                    }

                    const resultThirdDivision = thirdDivision.map(function (item, index, array) {
                        let addPropsTo = {...item.props, typeClass: index % 2 === 0 ? 'odd' : 'even'}
                        return <TournamentList
                            key={index + 1000}
                            {...addPropsTo}
                        />
                    })

                    return (
                        <div className={TournamentListCss.main}>
                            <div className={TournamentListCss.tournamentColumn}>
                                <div className={TournamentListCss.division}>Первый дивизион</div>
                                {resultFirstDivision}
                            </div>

                            <div className={TournamentListCss.tournamentColumn}>
                                <div className={TournamentListCss.division}>Второй дивизион</div>
                                {resultSecondDivision}
                            </div>

                            <div className={TournamentListCss.tournamentColumn}>
                                <div className={TournamentListCss.division}>Третий дивизион</div>
                                {resultThirdDivision}
                            </div>

                        </div>
                    )
                }
                return (
                    <div></div>
                )
            case 'cup' :
                if (this.props.tournamentListReducer.cupList) {
                    let cupList = this.props.tournamentListReducer.cupList.map(function (item, index, array) {
                        if (index % 2 === 0) {
                            let addPropsTo = {...item, typeClass: 'odd'}
                            return <TournamentList
                                key={addPropsTo.id}
                                {...addPropsTo}
                            />
                        }

                        let addPropsTo = {...item, typeClass: 'even'}
                        return <TournamentList
                            key={addPropsTo.id}
                            {...addPropsTo}
                        />
                    })
                    return (
                        <div>
                            <div className={TournamentListCss.division}>Кубки стран</div>
                            {cupList}
                        </div>
                    )
                }
                return (
                    <div></div>
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
