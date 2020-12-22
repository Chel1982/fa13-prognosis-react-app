import React from "react";
import PressConferencesCss from "./PressConference.module.css";
import Source from "../Source/Source";

const PressConference = () => {

    let props = {
        videoSource: "http://old.fa13.info/video/match.php?video=8698",
        textSource: "http://repository.fa13.info/site/pub/html/rAs/1721/C02-V32.htm",
        videoType : "video",
        textType : "text"
    };

    return (
        <div>
            <div>
                <div className={PressConferencesCss.match}>
                    <div>
                        <h4>
                            Чемпионат Австралии, тур-4,
                            матч: Мельбурн Виктори(1) - Алтона Мэджик(0)
                        </h4>
                    </div>
                    <Source source={props.videoSource} type={props.videoType} />
                    <Source source={props.textSource} type={props.textType} />
                </div>
                <div>
                    <button>
                        Комментировать
                    </button>
                    <button>
                        Смотреть комментарии
                    </button>
                </div>
                <h4>
                    <b>Менеджер команды "Алтона Мэджик"</b>
                </h4>
                <p>
                    <time>23:19 23.09.2020</time>
                </p>
                <p>[23.09.2020 23:19:17] Команда провела отличный гостевой матч автосоставом с сильным
                    соперником, хотя для нас он и получился &quot;на толстенького&quot;. Моих решений не было,
                    потому комментировать больше нечего</p>
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
            <div>
                <div className={PressConferencesCss.match}>
                    <div>
                        <h4>
                            Чемпионат Австралии, тур-4,
                            матч: Мельбурн Виктори(1) - Алтона Мэджик(0)
                        </h4>
                    </div>
                    <Source source={props.videoSource} type={props.videoType} />
                    <Source source={props.textSource} type={props.textType} />
                </div>
                <div>
                    <button>
                        Комментировать
                    </button>
                    <button>
                        Смотреть комментарии
                    </button>
                </div>
                <h4>
                    <b>Менеджер команды "Мельбурн Виктори"</b>
                </h4>
                <p>
                    <time>23:06 16.09.2020</time>
                </p>
                <p>[16.09.2020 23:06:07] Очень &quot;на тоненького&quot; сегодня сыграли, даже преимущество в
                    физе
                    не помогло, все решил один момент во второй тайме, когда Купер убежал на рандеву с вратарем
                    гостей, чудом вырвав победу. Надеюсь и верю, что тот резерв, что нам удалось сегодня
                    сэкономить,
                    позволит победить манкунианцев на их поле.</p>
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
            <div>
                <div className={PressConferencesCss.match}>
                    <div>
                        <h4>
                            Чемпионат Австралии, тур-4,
                            матч: Мельбурн Виктори(1) - Алтона Мэджик(0)
                        </h4>
                    </div>
                    <Source source={props.videoSource} type={props.videoType} />
                    <Source source={props.textSource} type={props.textType} />
                </div>
                <div>
                    <button>
                        Комментировать
                    </button>
                    <button>
                        Смотреть комментарии
                    </button>
                </div>
                <h4>
                    <b>Менеджер команды "Мельбурн Виктори"</b>
                </h4>
                <p>
                    <time>23:06 16.09.2020</time>
                </p>
                <p>[16.09.2020 23:06:07] Очень &quot;на тоненького&quot; сегодня сыграли, даже преимущество в
                    физе
                    не помогло, все решил один момент во второй тайме, когда Купер убежал на рандеву с вратарем
                    гостей, чудом вырвав победу. Надеюсь и верю, что тот резерв, что нам удалось сегодня
                    сэкономить,
                    позволит победить манкунианцев на их поле.</p>
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
            <div>
                <div className={PressConferencesCss.match}>
                    <div>
                        <h4>
                            Чемпионат Австралии, тур-4,
                            матч: Мельбурн Виктори(1) - Алтона Мэджик(0)
                        </h4>
                    </div>
                    <Source source={props.videoSource} type={props.videoType} />
                    <Source source={props.textSource} type={props.textType} />
                </div>
                <div>
                    <button>
                        Комментировать
                    </button>
                    <button>
                        Смотреть комментарии
                    </button>
                </div>
                <h4>
                    <b>Менеджер команды "Мельбурн Виктори"</b>
                </h4>
                <p>
                    <time>23:06 16.09.2020</time>
                </p>
                <p>[16.09.2020 23:06:07] Очень &quot;на тоненького&quot; сегодня сыграли, даже преимущество в
                    физе
                    не помогло, все решил один момент во второй тайме, когда Купер убежал на рандеву с вратарем
                    гостей, чудом вырвав победу. Надеюсь и верю, что тот резерв, что нам удалось сегодня
                    сэкономить,
                    позволит победить манкунианцев на их поле.</p>
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
            <div>
                <div className={PressConferencesCss.match}>
                    <div>
                        <h4>
                            Чемпионат Австралии, тур-4,
                            матч: Мельбурн Виктори(1) - Алтона Мэджик(0)
                        </h4>
                    </div>
                    <Source source={props.videoSource} type={props.videoType} />
                    <Source source={props.textSource} type={props.textType} />
                </div>
                <div>
                    <button>
                        Комментировать
                    </button>
                    <button>
                        Смотреть комментарии
                    </button>
                </div>
                <h4>
                    <b>Менеджер команды "Мельбурн Виктори"</b>
                </h4>
                <p>
                    <time>23:06 16.09.2020</time>
                </p>
                <p>[16.09.2020 23:06:07] Очень &quot;на тоненького&quot; сегодня сыграли, даже преимущество в
                    физе
                    не помогло, все решил один момент во второй тайме, когда Купер убежал на рандеву с вратарем
                    гостей, чудом вырвав победу. Надеюсь и верю, что тот резерв, что нам удалось сегодня
                    сэкономить,
                    позволит победить манкунианцев на их поле.</p>
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
            <div>
                <div className={PressConferencesCss.match}>
                    <div>
                        <h4>
                            Чемпионат Австралии, тур-4,
                            матч: Мельбурн Виктори(1) - Алтона Мэджик(0)
                        </h4>
                    </div>
                    <Source source={props.videoSource} type={props.videoType} />
                    <Source source={props.textSource} type={props.textType} />
                </div>
                <div>
                    <button>
                        Комментировать
                    </button>
                    <button>
                        Смотреть комментарии
                    </button>
                </div>
                <h4>
                    <b>Менеджер команды "Мельбурн Виктори"</b>
                </h4>
                <p>
                    <time>23:06 16.09.2020</time>
                </p>
                <p>[16.09.2020 23:06:07] Очень &quot;на тоненького&quot; сегодня сыграли, даже преимущество в
                    физе
                    не помогло, все решил один момент во второй тайме, когда Купер убежал на рандеву с вратарем
                    гостей, чудом вырвав победу. Надеюсь и верю, что тот резерв, что нам удалось сегодня
                    сэкономить,
                    позволит победить манкунианцев на их поле.</p>
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
            <div>
                <div className={PressConferencesCss.match}>
                    <div>
                        <h4>
                            Чемпионат Австралии, тур-4,
                            матч: Мельбурн Виктори(1) - Алтона Мэджик(0)
                        </h4>
                    </div>
                    <Source source={props.videoSource} type={props.videoType} />
                    <Source source={props.textSource} type={props.textType} />
                </div>
                <div>
                    <button>
                        Комментировать
                    </button>
                    <button>
                        Смотреть комментарии
                    </button>
                </div>
                <h4>
                    <b>Менеджер команды "Мельбурн Виктори"</b>
                </h4>
                <p>
                    <time>23:06 16.09.2020</time>
                </p>
                <p>[16.09.2020 23:06:07] Очень &quot;на тоненького&quot; сегодня сыграли, даже преимущество в
                    физе
                    не помогло, все решил один момент во второй тайме, когда Купер убежал на рандеву с вратарем
                    гостей, чудом вырвав победу. Надеюсь и верю, что тот резерв, что нам удалось сегодня
                    сэкономить,
                    позволит победить манкунианцев на их поле.</p>
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