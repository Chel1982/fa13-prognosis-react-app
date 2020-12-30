import React from "react";
import PressConferencesCss from "./PressConference.module.css";
import Source from "../Source/Source";

const PressConference = (props) => {

    // let props = {
    //     videoSource: "http://old.fa13.info/video/match.php?video=8698",
    //     textSource: "http://repository.fa13.info/site/pub/html/rAs/1721/C02-V32.htm",
    //     videoType : "video",
    //     textType : "text"
    // };

    // let res = {...props[0]};
    console.log(props.game);

    // let pressConferences = props.map(props => )


    return (
        <div>
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
                <span>{props.press_conference}</span>
                <div>
                    <button>
                        Комментировать
                    </button>
                    <button>
                        Смотреть комментарии
                    </button>
                </div>
            </div>
            <hr/>

        </div>
    );
}

export default PressConference;