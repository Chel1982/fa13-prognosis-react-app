import React from "react";
import PressConferencesCss from "../PressConference/PressConference.module.css";
import Source from "../Source/Source";
import login from "../Login/Login.module.css"

const Comment = (props) => {

    let pressConferences = props.game.press_conferences.map(item => (item.press_conference));

    let buttonStyle = props.auth.isAuth ? PressConferencesCss.comment : PressConferencesCss.commentNoActive;
    let buttonTitle = props.auth.isAuth ? '' : 'Только зарегистрированные пользователи могут оставлять комментарии';

    return (
        <div className={login.main}>
            <div className={PressConferencesCss.match}>
                <div className={PressConferencesCss.result}>
                    {props.game.tournament.name}, {props.game.tour} матч: {props.game.first_team.name}({props.game.first_team_score}) - {props.game.second_team.name}({props.game.second_team_score})
                </div>
                <Source source={props.game.video_source.source} type='video' />
                <Source source={props.game.text_source.source} type='text' />
            </div>
            <div dangerouslySetInnerHTML={{ __html: pressConferences }} />
            <div>
                <span className={buttonStyle} title={buttonTitle} >
                    Комментировать
                </span>
            </div>
        </div>
    )
}

export default Comment;