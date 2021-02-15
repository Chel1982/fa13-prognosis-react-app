import React from "react";
import PressConferencesCss from "../PressConference/PressConference.module.css";

const Tournament = (props) => {
    return (
        <>
            <div className={PressConferencesCss.titleDiv}>
                <b className={PressConferencesCss.titleAll}>Общий чат: {props.name}</b>
            </div>
            <hr/>
        </>
    )
}

export default Tournament;