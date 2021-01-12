import React from "react";
import {NavLink} from "react-router-dom";
import TournamentListCss from "./TournamentList.module.css"

const TournamentList = (props) => {
    return(
        <div className={props.typeClass === 'odd' ? TournamentListCss.odd : TournamentListCss.even} >
            <NavLink className={TournamentListCss.tournamentSource} to={'/press-conferences/tournament/' + props.id} >{props.name}</NavLink>
        </div>
    )
}

export default TournamentList;