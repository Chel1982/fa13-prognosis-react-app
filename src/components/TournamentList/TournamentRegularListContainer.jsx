import React from "react";
import TournamentList from "./TournamentList";
import TournamentListCss from "./TournamentList.module.css";

const TournamentRegularListContainer = (props) => {
    let resultFirstIncrement = 0;
    const resultFirstDivision = props.regularListData.map(
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
            return null;
    })

    let resultSecondIncrement = 0;
    const resultSecondDivision = props.regularListData.map(
        item => {
            if(item.name.includes('2')) {
                let addPropsTo = {...item, typeClass: resultSecondIncrement % 2 === 0 ? 'odd' : 'even'}
                resultSecondIncrement++;
                return <TournamentList
                    key={addPropsTo.id}
                    {...addPropsTo}
                />
            }
            return null;
        }
    )

    let thirdDivision = [];
    let thirdStep = false;

    for (let key in props.regularListData) {

        if (props.regularListData[key].name.includes('2')) {
            thirdStep = true;
        }

        //вырезаем последний элемент массива, потом что он добавляется в любом случае при Австрии-2
        if (props.regularListData[key].name.includes('3')) {
            thirdDivision.pop();
            thirdDivision.push(
                <TournamentList
                    key={props.regularListData[key].id}
                    {...props.regularListData[key]}
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

export default TournamentRegularListContainer;