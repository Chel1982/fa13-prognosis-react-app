import React from "react";
import PressConferencesCss from "./PressConference.module.css";
import Source from "../Source/Source";

const PressConference = (props) => {
    return (
        <div id={props.game.id}>
            <div className={PressConferencesCss.match}>
                <div className={PressConferencesCss.result}>
                    {props.game.tournament.name}, {props.game.tour} матч: {props.game.first_team.name}({props.game.first_team_score}) - {props.game.second_team.name}({props.game.second_team_score})
                </div>
                <Source source={props.game.video_source.source} type='video' />
                <Source source={props.game.text_source.source} type='text' />
            </div>
            <div dangerouslySetInnerHTML={{ __html: props.press_conference }} />
            <div>
                <button>
                    Комментировать / Смотреть комментарии
                </button>
            </div>
            <hr/>
        </div>
    );
}

export default PressConference;