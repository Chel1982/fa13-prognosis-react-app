import React from "react";
import {Field} from "redux-form";
import {maxLength, minLength, renderTextArea} from "../utils/validations/Validators";
import PressConferencesCss from "../PressConference/PressConference.module.css";
import CommentCss from "./Comment.module.css"
import Source from "../Source/Source";

const MIN_LENGTH = 2;
const MAX_LENGTH = 1500;

let minLengthPass = minLength(MIN_LENGTH);
let maxLengthPass = maxLength(MAX_LENGTH);

const CommentForm = (props) => {

    let buttonStyle = props.auth.isAuth
        ? PressConferencesCss.comment
        : PressConferencesCss.commentNoActive;
    let buttonTitle = props.auth.isAuth
        ? ''
        : 'Только зарегистрированные пользователи могут оставлять комментарии';
    let textStyle = props.auth.isAuth
        ? null
        : CommentCss.textareaNoAction;

    let pressConferences = props.game.press_conferences.map(item => (item.press_conference));
    let comments =  props.game.comments.map(item => {
       return (
           <>
               <div dangerouslySetInnerHTML={{ __html: item.comment }} />
               {/*<div className={textStyle}>*/}
               {/*    <Field*/}
               {/*        placeholder="Ваш комментарий:"*/}
               {/*        name="text"*/}
               {/*        type="hidden"*/}
               {/*        label="Комментарий"*/}
               {/*        component={renderTextArea}*/}
               {/*        validate={[minLengthPass, maxLengthPass]}*/}
               {/*    />*/}
               {/*</div>*/}
               {/*<div>*/}
               {/*    <button type="submit" className={buttonStyle} title={buttonTitle}>Ответить</button>*/}
               {/*</div>*/}
            </>
           );
    });

    return (
        <>
            <div id={props.game.id} className={PressConferencesCss.match}>
                <div className={PressConferencesCss.result}>
                    {props.game.tournament.name}, {props.game.tour} матч: {props.game.first_team.name}({props.game.first_team_score}) - {props.game.second_team.name}({props.game.second_team_score})
                </div>
                <Source source={props.game.video_source.source} type='video' />
                <Source source={props.game.text_source.source} type='text' />
            </div>
            <div dangerouslySetInnerHTML={{ __html: pressConferences }} />
            <form id={props.game.id} onSubmit={props.onSubmit}>
                <div className={textStyle}>
                    <Field
                        name="comment"
                        label="Ваш комментарий"
                        component={renderTextArea}
                        validate={[minLengthPass, maxLengthPass]}
                    />
                </div>
                <div>
                    <button type="submit" className={buttonStyle} title={buttonTitle} >Комметировать</button>
                </div>
            </form>

            <div>
                {comments}
            </div>
        </>
    )

}

export default CommentForm;