import React from "react";
import TournamentList from "./TournamentList";
import TournamentListCss from "./TournamentList.module.css";

const TournamentCupListContainer = (props) => {

    let cupList = props.cupListData.map(function (item, index, array) {
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

export default TournamentCupListContainer;