import React from "react";
import PressConferencesCss from "./PressConference.module.css";
import Source from "../Source/Source";

const PressConference = (props) => {
    return (
        <div>
            <div className={PressConferencesCss.match}>
                <div>
                    <h4>
                        {props.game.tournament.name}, {props.game.tour} матч: {props.game.first_team.name}({props.game.first_team_score}) - {props.game.second_team.name}({props.game.second_team_score})
                    </h4>
                </div>
                <Source source={props.game.video_source.source} type='video' />
                <Source source={props.game.text_source.source} type='text' />
            </div>
            <div>
                <button>
                    Комментировать
                </button>
                <button>
                    Смотреть комментарии
                </button>
            </div>
            <div dangerouslySetInnerHTML={{ __html: props.press_conference }} />
            <div>
                <button>
                    Комментировать
                </button>
                <button>
                    Смотреть комментарии
                </button>
            </div>
            <hr/>
        </div>
    );
}

export default PressConference;