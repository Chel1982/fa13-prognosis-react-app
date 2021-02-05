import React from "react";
import {Field} from "redux-form";
import {maxLength, minLength, renderTextArea} from "../utils/validations/Validators";
import PressConferencesCss from "../PressConference/PressConference.module.css";
import CommentCss from "./Comment.module.css"
import PaginationCss from "../Pagination/Pagination.module.css";
import {Pagination} from "react-laravel-paginex";

const MIN_LENGTH = 2;
const MAX_LENGTH = 1500;

let minLengthPass = minLength(MIN_LENGTH);
let maxLengthPass = maxLength(MAX_LENGTH);

const CommentForm = (props) => {
    // console.log(props)
    let buttonStyle = props.auth.isAuth
        ? PressConferencesCss.comment
        : PressConferencesCss.commentNoActive;
    let buttonStyleAnswer = props.auth.isAuth
        ? CommentCss.answerButton
        : CommentCss.answerButtonNoActive;
    let buttonTitle = props.auth.isAuth
        ? ''
        : 'Только зарегистрированные пользователи могут оставлять комментарии';
    let textStyle = props.auth.isAuth
        ? null
        : CommentCss.textareaNoAction;

    let comments =  props.comments.map(item => {
       return (
           <div key={item.id} className={CommentCss.answer}>
               <div className={CommentCss.divName}>
                   <span>{item.user.name}</span>:
                   <button onClick={props.onClickAnswer} className={buttonStyleAnswer} title={buttonTitle}>Ответить</button>
                   <button className={CommentCss.answerButtonNoActive} title="Кнопки находятся в процессе разработки">Редактировать</button>
                   <button className={CommentCss.answerButtonNoActive} title="Кнопки находятся в процессе разработки">Удалить</button>
               </div>
               <div dangerouslySetInnerHTML={{ __html: item.comment }} />
               <div className={CommentCss.answerCommentNoActive}>
                   <form id={item.id}>
                       <Field
                           placeholder="Ваш комментарий:"
                           name="text"
                           type="hidden"
                           label="Комментарий"
                           component={renderTextArea}
                           validate={[minLengthPass, maxLengthPass]}
                       />
                       <div>
                           <button type="submit" className={buttonStyle} title={buttonTitle}>Комментировать</button>
                       </div>
                   </form>
               </div>
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
                <Pagination
                    changePage={props.getCommentsThunk}
                    data={props.dataPagination}
                    nextButtonText="Следующая"
                    prevButtonText="Предыдущая"
                    containerClass={PaginationCss.pagination}
                    activeClass={PaginationCss.active}
                    requestParams={props.params()}
                />
            </div>
        </>
    )
}

export default CommentForm;