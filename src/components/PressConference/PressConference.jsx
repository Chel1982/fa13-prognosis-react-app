import React from "react";
import PressConferencesCss from "./PressConference.module.css";
import Source from "../Source/Source";
import {NavLink} from "react-router-dom";
import {Pagination} from "react-laravel-paginex";
import PaginationCss from "../Pagination/Pagination.module.css";

const PressConference = (props) => {

    let pressesConf = props.pressConf.data.map(item =>
                (
                    <div key={item.id} id={item.game.id}>
                        <div className={PressConferencesCss.match}>
                            <div className={PressConferencesCss.result}>
                                {item.game.tournament.name}, {item.game.tour} матч: {item.game.first_team.name}({item.game.first_team_score})
                                - {item.game.second_team.name}({item.game.second_team_score})
                            </div>
                            <Source source={item.game.video_source.source} type='video'/>
                            <Source source={item.game.text_source.source} type='text'/>
                        </div>
                        <div dangerouslySetInnerHTML={{__html: item.press_conference}}/>
                        <div>
                            <NavLink className={PressConferencesCss.comment} to={"/discussion/game/id/" + item.game.id}>
                                Комментировать / Смотреть комментарии
                            </NavLink>
                        </div>
                        <hr/>
                    </div>
                )
        );
    return (
        <>
            {pressesConf}
            <Pagination
                changePage={props.paginationThunk}
                data={props.pressConf}
                nextButtonText="Следующая"
                prevButtonText="Предыдущая"
                containerClass={PaginationCss.pagination}
                activeClass={PaginationCss.active}
                requestParams={props.paginationParams()}
            />
        </>

    );
}

export default PressConference;