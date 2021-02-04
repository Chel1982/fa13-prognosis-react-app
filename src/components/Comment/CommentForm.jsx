import React from "react";
import {Field} from "redux-form";
import {maxLength, minLength, renderTextArea} from "../utils/validations/Validators";
import PressConferencesCss from "../PressConference/PressConference.module.css";
import CommentCss from "./Comment.module.css"

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

    let comments =  props.comments.map(item => {
       return (
           <div key={item.id}>
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
            </div>
           );
    });

    return (
        <>
            <form id={props.game_id} onSubmit={props.onSubmit}>
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