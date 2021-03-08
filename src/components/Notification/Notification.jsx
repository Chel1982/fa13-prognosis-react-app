import React from "react";
import NotificationCss from "./Notification.module.css";
import {NavLink} from "react-router-dom";

const Notification = (props) => {
    if (props.notification.game && props.notification.game.length > 0) {
        let sourceToGame = props.notification.game.map(item => (
            <div key={item.id} className={NotificationCss.commentEach}>
                <NavLink to={"/discussion/game/id/" + item.game_id}>
                    {"Прокомментировал: " + item.user_from.name},
                    {item.game.tour},
                    {item.game.tournament.name}
                </NavLink>
            </div>
        ));
        return (
            <>
                <div onClick={props.handleClick} className={NotificationCss.icon}>
                    <img src="https://cdn.sstatic.net/Sites/stackoverflow/img/favicon.ico?v=4f32ecc8f43d" alt="none"
                         width="100%" height="100%"/>
                    <div className={NotificationCss.txt}>{props.notification.game.length}</div>
                </div>
                <div id="commentGame" className={NotificationCss.comment}>
                    {sourceToGame}
                </div>
            </>
        )
    }

    return (
        <>
            <div className={NotificationCss.icon}>
                <img src="https://cdn.sstatic.net/Sites/stackoverflow/img/favicon.ico?v=4f32ecc8f43d" alt="none"
                     width="100%" height="100%"/>
                <div className={NotificationCss.txt}>0</div>
            </div>
        </>
    )

}

export default Notification;